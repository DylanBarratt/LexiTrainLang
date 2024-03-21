
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function prevent_default(fn) {
        return function (event) {
            event.preventDefault();
            // @ts-ignore
            return fn.call(this, event);
        };
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function set_style(node, key, value, important) {
        if (value == null) {
            node.style.removeProperty(key);
        }
        else {
            node.style.setProperty(key, value, important ? 'important' : '');
        }
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    let render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = /* @__PURE__ */ Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        // Do not reenter flush while dirty components are updated, as this can
        // result in an infinite loop. Instead, let the inner flush handle it.
        // Reentrancy is ok afterwards for bindings etc.
        if (flushidx !== 0) {
            return;
        }
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            try {
                while (flushidx < dirty_components.length) {
                    const component = dirty_components[flushidx];
                    flushidx++;
                    set_current_component(component);
                    update(component.$$);
                }
            }
            catch (e) {
                // reset dirty state to not end up in a deadlocked state and then rethrow
                dirty_components.length = 0;
                flushidx = 0;
                throw e;
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    /**
     * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
     */
    function flush_render_callbacks(fns) {
        const filtered = [];
        const targets = [];
        render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
        targets.forEach((c) => c());
        render_callbacks = filtered;
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
        else if (callback) {
            callback();
        }
    }

    function destroy_block(block, lookup) {
        block.d(1);
        lookup.delete(block.key);
    }
    function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
        let o = old_blocks.length;
        let n = list.length;
        let i = o;
        const old_indexes = {};
        while (i--)
            old_indexes[old_blocks[i].key] = i;
        const new_blocks = [];
        const new_lookup = new Map();
        const deltas = new Map();
        const updates = [];
        i = n;
        while (i--) {
            const child_ctx = get_context(ctx, list, i);
            const key = get_key(child_ctx);
            let block = lookup.get(key);
            if (!block) {
                block = create_each_block(key, child_ctx);
                block.c();
            }
            else if (dynamic) {
                // defer updates until all the DOM shuffling is done
                updates.push(() => block.p(child_ctx, dirty));
            }
            new_lookup.set(key, new_blocks[i] = block);
            if (key in old_indexes)
                deltas.set(key, Math.abs(i - old_indexes[key]));
        }
        const will_move = new Set();
        const did_move = new Set();
        function insert(block) {
            transition_in(block, 1);
            block.m(node, next);
            lookup.set(block.key, block);
            next = block.first;
            n--;
        }
        while (o && n) {
            const new_block = new_blocks[n - 1];
            const old_block = old_blocks[o - 1];
            const new_key = new_block.key;
            const old_key = old_block.key;
            if (new_block === old_block) {
                // do nothing
                next = new_block.first;
                o--;
                n--;
            }
            else if (!new_lookup.has(old_key)) {
                // remove old block
                destroy(old_block, lookup);
                o--;
            }
            else if (!lookup.has(new_key) || will_move.has(new_key)) {
                insert(new_block);
            }
            else if (did_move.has(old_key)) {
                o--;
            }
            else if (deltas.get(new_key) > deltas.get(old_key)) {
                did_move.add(new_key);
                insert(new_block);
            }
            else {
                will_move.add(old_key);
                o--;
            }
        }
        while (o--) {
            const old_block = old_blocks[o];
            if (!new_lookup.has(old_block.key))
                destroy(old_block, lookup);
        }
        while (n)
            insert(new_blocks[n - 1]);
        run_all(updates);
        return new_blocks;
    }
    function validate_each_keys(ctx, list, get_context, get_key) {
        const keys = new Set();
        for (let i = 0; i < list.length; i++) {
            const key = get_key(get_context(ctx, list, i));
            if (keys.has(key)) {
                throw new Error('Cannot have duplicate keys in a keyed each');
            }
            keys.add(key);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
                // if the component was destroyed immediately
                // it will update the `$$.on_destroy` reference to `null`.
                // the destructured on_destroy may still reference to the old array
                if (component.$$.on_destroy) {
                    component.$$.on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            flush_render_callbacks($$.after_update);
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: [],
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.59.2' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation, has_stop_immediate_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        if (has_stop_immediate_propagation)
            modifiers.push('stopImmediatePropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.data === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    var t={92:()=>{}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]});},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var s={};(()=>{n.d(s,{dx:()=>$,q2:()=>Lt,FO:()=>Ce,xf:()=>Ie,Gy:()=>ve,s4:()=>Pt,c7:()=>be,_7:()=>le,tx:()=>Ae,gp:()=>me,cK:()=>Ot,zs:()=>Te,AV:()=>Ie,Xp:()=>m,VS:()=>E,ul:()=>W,hW:()=>Ut,x1:()=>Xt,z5:()=>ee,oN:()=>de,TB:()=>pe,u1:()=>ge,_b:()=>Fe,$F:()=>se,_T:()=>Be,db:()=>ie,Zx:()=>te,_x:()=>Ft,r8:()=>M,JI:()=>w,TP:()=>P,WU:()=>t,Nj:()=>c,ZP:()=>We});class t{constructor(){this.source=null,this.type=null,this.channel=null,this.start=null,this.stop=null,this.tokenIndex=null,this.line=null,this.column=null,this._text=null;}getTokenSource(){return this.source[0]}getInputStream(){return this.source[1]}get text(){return this._text}set text(t){this._text=t;}}function e(t,e){if(!Array.isArray(t)||!Array.isArray(e))return !1;if(t===e)return !0;if(t.length!==e.length)return !1;for(let n=0;n<t.length;n++)if(!(t[n]===e[n]||t[n].equals&&t[n].equals(e[n])))return !1;return !0}t.INVALID_TYPE=0,t.EPSILON=-2,t.MIN_USER_TOKEN_TYPE=1,t.EOF=-1,t.DEFAULT_CHANNEL=0,t.HIDDEN_CHANNEL=1;const i=Math.round(Math.random()*Math.pow(2,32));function r(t){if(!t)return 0;const e=typeof t,n="string"===e?t:!("object"!==e||!t.toString)&&t.toString();if(!n)return 0;let s,r;const o=3&n.length,a=n.length-o;let l=i;const h=3432918353,c=461845907;let u=0;for(;u<a;)r=255&n.charCodeAt(u)|(255&n.charCodeAt(++u))<<8|(255&n.charCodeAt(++u))<<16|(255&n.charCodeAt(++u))<<24,++u,r=(65535&r)*h+(((r>>>16)*h&65535)<<16)&4294967295,r=r<<15|r>>>17,r=(65535&r)*c+(((r>>>16)*c&65535)<<16)&4294967295,l^=r,l=l<<13|l>>>19,s=5*(65535&l)+((5*(l>>>16)&65535)<<16)&4294967295,l=27492+(65535&s)+((58964+(s>>>16)&65535)<<16);switch(r=0,o){case 3:r^=(255&n.charCodeAt(u+2))<<16;case 2:r^=(255&n.charCodeAt(u+1))<<8;case 1:r^=255&n.charCodeAt(u),r=(65535&r)*h+(((r>>>16)*h&65535)<<16)&4294967295,r=r<<15|r>>>17,r=(65535&r)*c+(((r>>>16)*c&65535)<<16)&4294967295,l^=r;}return l^=n.length,l^=l>>>16,l=2246822507*(65535&l)+((2246822507*(l>>>16)&65535)<<16)&4294967295,l^=l>>>13,l=3266489909*(65535&l)+((3266489909*(l>>>16)&65535)<<16)&4294967295,l^=l>>>16,l>>>0}class o{constructor(){this.count=0,this.hash=0;}update(){for(let t=0;t<arguments.length;t++){const e=arguments[t];if(null!=e)if(Array.isArray(e))this.update.apply(this,e);else {let t=0;switch(typeof e){case"undefined":case"function":continue;case"number":case"boolean":t=e;break;case"string":t=r(e);break;default:e.updateHashCode?e.updateHashCode(this):console.log("No updateHashCode for "+e.toString());continue}t*=3432918353,t=t<<15|t>>>17,t*=461845907,this.count=this.count+1;let n=this.hash^t;n=n<<13|n>>>19,n=5*n+3864292196,this.hash=n;}}}finish(){let t=this.hash^4*this.count;return t^=t>>>16,t*=2246822507,t^=t>>>13,t*=3266489909,t^=t>>>16,t}static hashStuff(){const t=new o;return t.update.apply(t,arguments),t.finish()}}function a(t){return t?"string"==typeof t?r(t):t.hashCode():-1}function l(t,e){return t?t.equals(e):t===e}function h(t){return null===t?"null":t}function c(t){return Array.isArray(t)?"["+t.map(h).join(", ")+"]":"null"}const u="h-";class d{constructor(t,e){this.data={},this.hashFunction=t||a,this.equalsFunction=e||l;}add(t){const e=u+this.hashFunction(t);if(e in this.data){const n=this.data[e];for(let e=0;e<n.length;e++)if(this.equalsFunction(t,n[e]))return n[e];return n.push(t),t}return this.data[e]=[t],t}has(t){return null!=this.get(t)}get(t){const e=u+this.hashFunction(t);if(e in this.data){const n=this.data[e];for(let e=0;e<n.length;e++)if(this.equalsFunction(t,n[e]))return n[e]}return null}values(){return Object.keys(this.data).filter((t=>t.startsWith(u))).flatMap((t=>this.data[t]),this)}toString(){return c(this.values())}get length(){return Object.keys(this.data).filter((t=>t.startsWith(u))).map((t=>this.data[t].length),this).reduce(((t,e)=>t+e),0)}}class p{hashCode(){const t=new o;return this.updateHashCode(t),t.finish()}evaluate(t,e){}evalPrecedence(t,e){return this}static andContext(t,e){if(null===t||t===p.NONE)return e;if(null===e||e===p.NONE)return t;const n=new g(t,e);return 1===n.opnds.length?n.opnds[0]:n}static orContext(t,e){if(null===t)return e;if(null===e)return t;if(t===p.NONE||e===p.NONE)return p.NONE;const n=new f(t,e);return 1===n.opnds.length?n.opnds[0]:n}}class g extends p{constructor(t,e){super();const n=new d;t instanceof g?t.opnds.map((function(t){n.add(t);})):n.add(t),e instanceof g?e.opnds.map((function(t){n.add(t);})):n.add(e);const s=x(n);if(s.length>0){let t=null;s.map((function(e){(null===t||e.precedence<t.precedence)&&(t=e);})),n.add(t);}this.opnds=Array.from(n.values());}equals(t){return this===t||t instanceof g&&e(this.opnds,t.opnds)}updateHashCode(t){t.update(this.opnds,"AND");}evaluate(t,e){for(let n=0;n<this.opnds.length;n++)if(!this.opnds[n].evaluate(t,e))return !1;return !0}evalPrecedence(t,e){let n=!1;const s=[];for(let i=0;i<this.opnds.length;i++){const r=this.opnds[i],o=r.evalPrecedence(t,e);if(n|=o!==r,null===o)return null;o!==p.NONE&&s.push(o);}if(!n)return this;if(0===s.length)return p.NONE;let i=null;return s.map((function(t){i=null===i?t:p.andContext(i,t);})),i}toString(){const t=this.opnds.map((t=>t.toString()));return (t.length>3?t.slice(3):t).join("&&")}}class f extends p{constructor(t,e){super();const n=new d;t instanceof f?t.opnds.map((function(t){n.add(t);})):n.add(t),e instanceof f?e.opnds.map((function(t){n.add(t);})):n.add(e);const s=x(n);if(s.length>0){const t=s.sort((function(t,e){return t.compareTo(e)})),e=t[t.length-1];n.add(e);}this.opnds=Array.from(n.values());}equals(t){return this===t||t instanceof f&&e(this.opnds,t.opnds)}updateHashCode(t){t.update(this.opnds,"OR");}evaluate(t,e){for(let n=0;n<this.opnds.length;n++)if(this.opnds[n].evaluate(t,e))return !0;return !1}evalPrecedence(t,e){let n=!1;const s=[];for(let i=0;i<this.opnds.length;i++){const r=this.opnds[i],o=r.evalPrecedence(t,e);if(n|=o!==r,o===p.NONE)return p.NONE;null!==o&&s.push(o);}if(!n)return this;if(0===s.length)return null;return null}toString(){const t=this.opnds.map((t=>t.toString()));return (t.length>3?t.slice(3):t).join("||")}}function x(t){const e=[];return t.values().map((function(t){t instanceof p.PrecedencePredicate&&e.push(t);})),e}function T(t,e){if(null===t){const t={state:null,alt:null,context:null,semanticContext:null};return e&&(t.reachesIntoOuterContext=0),t}{const n={};return n.state=t.state||null,n.alt=void 0===t.alt?null:t.alt,n.context=t.context||null,n.semanticContext=t.semanticContext||null,e&&(n.reachesIntoOuterContext=t.reachesIntoOuterContext||0,n.precedenceFilterSuppressed=t.precedenceFilterSuppressed||!1),n}}class S{constructor(t,e){this.checkContext(t,e),t=T(t),e=T(e,!0),this.state=null!==t.state?t.state:e.state,this.alt=null!==t.alt?t.alt:e.alt,this.context=null!==t.context?t.context:e.context,this.semanticContext=null!==t.semanticContext?t.semanticContext:null!==e.semanticContext?e.semanticContext:p.NONE,this.reachesIntoOuterContext=e.reachesIntoOuterContext,this.precedenceFilterSuppressed=e.precedenceFilterSuppressed;}checkContext(t,e){null!==t.context&&void 0!==t.context||null!==e&&null!==e.context&&void 0!==e.context||(this.context=null);}hashCode(){const t=new o;return this.updateHashCode(t),t.finish()}updateHashCode(t){t.update(this.state.stateNumber,this.alt,this.context,this.semanticContext);}equals(t){return this===t||t instanceof S&&this.state.stateNumber===t.state.stateNumber&&this.alt===t.alt&&(null===this.context?null===t.context:this.context.equals(t.context))&&this.semanticContext.equals(t.semanticContext)&&this.precedenceFilterSuppressed===t.precedenceFilterSuppressed}hashCodeForConfigSet(){const t=new o;return t.update(this.state.stateNumber,this.alt,this.semanticContext),t.finish()}equalsForConfigSet(t){return this===t||t instanceof S&&this.state.stateNumber===t.state.stateNumber&&this.alt===t.alt&&this.semanticContext.equals(t.semanticContext)}toString(){return "("+this.state+","+this.alt+(null!==this.context?",["+this.context.toString()+"]":"")+(this.semanticContext!==p.NONE?","+this.semanticContext.toString():"")+(this.reachesIntoOuterContext>0?",up="+this.reachesIntoOuterContext:"")+")"}}class m{constructor(t,e){this.start=t,this.stop=e;}clone(){return new m(this.start,this.stop)}contains(t){return t>=this.start&&t<this.stop}toString(){return this.start===this.stop-1?this.start.toString():this.start.toString()+".."+(this.stop-1).toString()}get length(){return this.stop-this.start}}m.INVALID_INTERVAL=new m(-1,-2);class E{constructor(){this.intervals=null,this.readOnly=!1;}first(e){return null===this.intervals||0===this.intervals.length?t.INVALID_TYPE:this.intervals[0].start}addOne(t){this.addInterval(new m(t,t+1));}addRange(t,e){this.addInterval(new m(t,e+1));}addInterval(t){if(null===this.intervals)this.intervals=[],this.intervals.push(t.clone());else {for(let e=0;e<this.intervals.length;e++){const n=this.intervals[e];if(t.stop<n.start)return void this.intervals.splice(e,0,t);if(t.stop===n.start)return void(this.intervals[e]=new m(t.start,n.stop));if(t.start<=n.stop)return this.intervals[e]=new m(Math.min(n.start,t.start),Math.max(n.stop,t.stop)),void this.reduce(e)}this.intervals.push(t.clone());}}addSet(t){return null!==t.intervals&&t.intervals.forEach((t=>this.addInterval(t)),this),this}reduce(t){if(t<this.intervals.length-1){const e=this.intervals[t],n=this.intervals[t+1];e.stop>=n.stop?(this.intervals.splice(t+1,1),this.reduce(t)):e.stop>=n.start&&(this.intervals[t]=new m(e.start,n.stop),this.intervals.splice(t+1,1));}}complement(t,e){const n=new E;return n.addInterval(new m(t,e+1)),null!==this.intervals&&this.intervals.forEach((t=>n.removeRange(t))),n}contains(t){if(null===this.intervals)return !1;for(let e=0;e<this.intervals.length;e++)if(this.intervals[e].contains(t))return !0;return !1}removeRange(t){if(t.start===t.stop-1)this.removeOne(t.start);else if(null!==this.intervals){let e=0;for(let n=0;n<this.intervals.length;n++){const n=this.intervals[e];if(t.stop<=n.start)return;if(t.start>n.start&&t.stop<n.stop){this.intervals[e]=new m(n.start,t.start);const s=new m(t.stop,n.stop);return void this.intervals.splice(e,0,s)}t.start<=n.start&&t.stop>=n.stop?(this.intervals.splice(e,1),e-=1):t.start<n.stop?this.intervals[e]=new m(n.start,t.start):t.stop<n.stop&&(this.intervals[e]=new m(t.stop,n.stop)),e+=1;}}}removeOne(t){if(null!==this.intervals)for(let e=0;e<this.intervals.length;e++){const n=this.intervals[e];if(t<n.start)return;if(t===n.start&&t===n.stop-1)return void this.intervals.splice(e,1);if(t===n.start)return void(this.intervals[e]=new m(n.start+1,n.stop));if(t===n.stop-1)return void(this.intervals[e]=new m(n.start,n.stop-1));if(t<n.stop-1){const s=new m(n.start,t);return n.start=t+1,void this.intervals.splice(e,0,s)}}}toString(t,e,n){return t=t||null,e=e||null,n=n||!1,null===this.intervals?"{}":null!==t||null!==e?this.toTokenString(t,e):n?this.toCharString():this.toIndexString()}toCharString(){const e=[];for(let n=0;n<this.intervals.length;n++){const s=this.intervals[n];s.stop===s.start+1?s.start===t.EOF?e.push("<EOF>"):e.push("'"+String.fromCharCode(s.start)+"'"):e.push("'"+String.fromCharCode(s.start)+"'..'"+String.fromCharCode(s.stop-1)+"'");}return e.length>1?"{"+e.join(", ")+"}":e[0]}toIndexString(){const e=[];for(let n=0;n<this.intervals.length;n++){const s=this.intervals[n];s.stop===s.start+1?s.start===t.EOF?e.push("<EOF>"):e.push(s.start.toString()):e.push(s.start.toString()+".."+(s.stop-1).toString());}return e.length>1?"{"+e.join(", ")+"}":e[0]}toTokenString(t,e){const n=[];for(let s=0;s<this.intervals.length;s++){const i=this.intervals[s];for(let s=i.start;s<i.stop;s++)n.push(this.elementName(t,e,s));}return n.length>1?"{"+n.join(", ")+"}":n[0]}elementName(e,n,s){return s===t.EOF?"<EOF>":s===t.EPSILON?"<EPSILON>":e[s]||n[s]}get length(){return this.intervals.map((t=>t.length)).reduce(((t,e)=>t+e))}}class _{constructor(){this.atn=null,this.stateNumber=_.INVALID_STATE_NUMBER,this.stateType=null,this.ruleIndex=0,this.epsilonOnlyTransitions=!1,this.transitions=[],this.nextTokenWithinRule=null;}toString(){return this.stateNumber}equals(t){return t instanceof _&&this.stateNumber===t.stateNumber}isNonGreedyExitState(){return !1}addTransition(t,e){void 0===e&&(e=-1),0===this.transitions.length?this.epsilonOnlyTransitions=t.isEpsilon:this.epsilonOnlyTransitions!==t.isEpsilon&&(this.epsilonOnlyTransitions=!1),-1===e?this.transitions.push(t):this.transitions.splice(e,1,t);}}_.INVALID_TYPE=0,_.BASIC=1,_.RULE_START=2,_.BLOCK_START=3,_.PLUS_BLOCK_START=4,_.STAR_BLOCK_START=5,_.TOKEN_START=6,_.RULE_STOP=7,_.BLOCK_END=8,_.STAR_LOOP_BACK=9,_.STAR_LOOP_ENTRY=10,_.PLUS_LOOP_BACK=11,_.LOOP_END=12,_.serializationNames=["INVALID","BASIC","RULE_START","BLOCK_START","PLUS_BLOCK_START","STAR_BLOCK_START","TOKEN_START","RULE_STOP","BLOCK_END","STAR_LOOP_BACK","STAR_LOOP_ENTRY","PLUS_LOOP_BACK","LOOP_END"],_.INVALID_STATE_NUMBER=-1;class A extends _{constructor(){return super(),this.stateType=_.RULE_STOP,this}}class C{constructor(t){if(null==t)throw "target cannot be null.";this.target=t,this.isEpsilon=!1,this.label=null;}}C.EPSILON=1,C.RANGE=2,C.RULE=3,C.PREDICATE=4,C.ATOM=5,C.ACTION=6,C.SET=7,C.NOT_SET=8,C.WILDCARD=9,C.PRECEDENCE=10,C.serializationNames=["INVALID","EPSILON","RANGE","RULE","PREDICATE","ATOM","ACTION","SET","NOT_SET","WILDCARD","PRECEDENCE"],C.serializationTypes={EpsilonTransition:C.EPSILON,RangeTransition:C.RANGE,RuleTransition:C.RULE,PredicateTransition:C.PREDICATE,AtomTransition:C.ATOM,ActionTransition:C.ACTION,SetTransition:C.SET,NotSetTransition:C.NOT_SET,WildcardTransition:C.WILDCARD,PrecedencePredicateTransition:C.PRECEDENCE};class N extends C{constructor(t,e,n,s){super(t),this.ruleIndex=e,this.precedence=n,this.followState=s,this.serializationType=C.RULE,this.isEpsilon=!0;}matches(t,e,n){return !1}}class y extends C{constructor(e,n){super(e),this.serializationType=C.SET,null!=n?this.label=n:(this.label=new E,this.label.addOne(t.INVALID_TYPE));}matches(t,e,n){return this.label.contains(t)}toString(){return this.label.toString()}}class I extends y{constructor(t,e){super(t,e),this.serializationType=C.NOT_SET;}matches(t,e,n){return t>=e&&t<=n&&!super.matches(t,e,n)}toString(){return "~"+super.toString()}}class k extends C{constructor(t){super(t),this.serializationType=C.WILDCARD;}matches(t,e,n){return t>=e&&t<=n}toString(){return "."}}class L extends C{constructor(t){super(t);}}class O{}class v extends O{}class R extends v{}class w extends R{get ruleContext(){throw new Error("missing interface implementation")}}class P extends R{}class b extends P{}const D={toStringTree:function(t,e,n){e=e||null,null!==(n=n||null)&&(e=n.ruleNames);let s=D.getNodeText(t,e);s=function(t,e){return t=t.replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r")}(s);const i=t.getChildCount();if(0===i)return s;let r="("+s+" ";i>0&&(s=D.toStringTree(t.getChild(0),e),r=r.concat(s));for(let n=1;n<i;n++)s=D.toStringTree(t.getChild(n),e),r=r.concat(" "+s);return r=r.concat(")"),r},getNodeText:function(e,n,s){if(n=n||null,null!==(s=s||null)&&(n=s.ruleNames),null!==n){if(e instanceof w){const t=e.ruleContext.getAltNumber();return 0!=t?n[e.ruleIndex]+":"+t:n[e.ruleIndex]}if(e instanceof b)return e.toString();if(e instanceof P&&null!==e.symbol)return e.symbol.text}const i=e.getPayload();return i instanceof t?i.text:e.getPayload().toString()},getChildren:function(t){const e=[];for(let n=0;n<t.getChildCount();n++)e.push(t.getChild(n));return e},getAncestors:function(t){let e=[];for(t=t.getParent();null!==t;)e=[t].concat(e),t=t.getParent();return e},findAllTokenNodes:function(t,e){return D.findAllNodes(t,e,!0)},findAllRuleNodes:function(t,e){return D.findAllNodes(t,e,!1)},findAllNodes:function(t,e,n){const s=[];return D._findAllNodes(t,e,n,s),s},_findAllNodes:function(t,e,n,s){n&&t instanceof P?t.symbol.type===e&&s.push(t):!n&&t instanceof w&&t.ruleIndex===e&&s.push(t);for(let i=0;i<t.getChildCount();i++)D._findAllNodes(t.getChild(i),e,n,s);},descendants:function(t){let e=[t];for(let n=0;n<t.getChildCount();n++)e=e.concat(D.descendants(t.getChild(n)));return e}},F=D;class M extends w{constructor(t,e){super(),this.parentCtx=t||null,this.invokingState=e||-1;}depth(){let t=0,e=this;for(;null!==e;)e=e.parentCtx,t+=1;return t}isEmpty(){return -1===this.invokingState}getSourceInterval(){return m.INVALID_INTERVAL}get ruleContext(){return this}getPayload(){return this}getText(){return 0===this.getChildCount()?"":this.children.map((function(t){return t.getText()})).join("")}getAltNumber(){return 0}setAltNumber(t){}getChild(t){return null}getChildCount(){return 0}accept(t){return t.visitChildren(this)}toStringTree(t,e){return F.toStringTree(this,t,e)}toString(t,e){t=t||null,e=e||null;let n=this,s="[";for(;null!==n&&n!==e;){if(null===t)n.isEmpty()||(s+=n.invokingState);else {const e=n.ruleIndex;s+=e>=0&&e<t.length?t[e]:""+e;}null===n.parentCtx||null===t&&n.parentCtx.isEmpty()||(s+=" "),n=n.parentCtx;}return s+="]",s}}class U{constructor(t){this.cachedHashCode=t;}isEmpty(){return this===U.EMPTY}hasEmptyPath(){return this.getReturnState(this.length-1)===U.EMPTY_RETURN_STATE}hashCode(){return this.cachedHashCode}updateHashCode(t){t.update(this.cachedHashCode);}}U.EMPTY=null,U.EMPTY_RETURN_STATE=2147483647,U.globalNodeCount=1,U.id=U.globalNodeCount,U.trace_atn_sim=!1;class B extends U{constructor(t,e){const n=new o;return n.update(t,e),super(n.finish()),this.parents=t,this.returnStates=e,this}isEmpty(){return this.returnStates[0]===U.EMPTY_RETURN_STATE}getParent(t){return this.parents[t]}getReturnState(t){return this.returnStates[t]}equals(t){return this===t||t instanceof B&&this.hashCode()===t.hashCode()&&e(this.returnStates,t.returnStates)&&e(this.parents,t.parents)}toString(){if(this.isEmpty())return "[]";{let t="[";for(let e=0;e<this.returnStates.length;e++)e>0&&(t+=", "),this.returnStates[e]!==U.EMPTY_RETURN_STATE?(t+=this.returnStates[e],null!==this.parents[e]?t=t+" "+this.parents[e]:t+="null"):t+="$";return t+"]"}}get length(){return this.returnStates.length}}class V extends U{constructor(t,e){let n=0;const s=new o;null!==t?s.update(t,e):s.update(1),n=s.finish(),super(n),this.parentCtx=t,this.returnState=e;}getParent(t){return this.parentCtx}getReturnState(t){return this.returnState}equals(t){return this===t||t instanceof V&&this.hashCode()===t.hashCode()&&this.returnState===t.returnState&&(null==this.parentCtx?null==t.parentCtx:this.parentCtx.equals(t.parentCtx))}toString(){const t=null===this.parentCtx?"":this.parentCtx.toString();return 0===t.length?this.returnState===U.EMPTY_RETURN_STATE?"$":""+this.returnState:this.returnState+" "+t}get length(){return 1}static create(t,e){return e===U.EMPTY_RETURN_STATE&&null===t?U.EMPTY:new V(t,e)}}class z extends V{constructor(){super(null,U.EMPTY_RETURN_STATE);}isEmpty(){return !0}getParent(t){return null}getReturnState(t){return this.returnState}equals(t){return this===t}toString(){return "$"}}U.EMPTY=new z;const q="h-";class H{constructor(t,e){this.data={},this.hashFunction=t||a,this.equalsFunction=e||l;}set(t,e){const n=q+this.hashFunction(t);if(n in this.data){const s=this.data[n];for(let n=0;n<s.length;n++){const i=s[n];if(this.equalsFunction(t,i.key)){const t=i.value;return i.value=e,t}}return s.push({key:t,value:e}),e}return this.data[n]=[{key:t,value:e}],e}containsKey(t){const e=q+this.hashFunction(t);if(e in this.data){const n=this.data[e];for(let e=0;e<n.length;e++){const s=n[e];if(this.equalsFunction(t,s.key))return !0}}return !1}get(t){const e=q+this.hashFunction(t);if(e in this.data){const n=this.data[e];for(let e=0;e<n.length;e++){const s=n[e];if(this.equalsFunction(t,s.key))return s.value}}return null}entries(){return Object.keys(this.data).filter((t=>t.startsWith(q))).flatMap((t=>this.data[t]),this)}getKeys(){return this.entries().map((t=>t.key))}getValues(){return this.entries().map((t=>t.value))}toString(){return "["+this.entries().map((t=>"{"+t.key+":"+t.value+"}")).join(", ")+"]"}get length(){return Object.keys(this.data).filter((t=>t.startsWith(q))).map((t=>this.data[t].length),this).reduce(((t,e)=>t+e),0)}}function K(t,e){if(null==e&&(e=M.EMPTY),null===e.parentCtx||e===M.EMPTY)return U.EMPTY;const n=K(t,e.parentCtx),s=t.states[e.invokingState].transitions[0];return V.create(n,s.followState.stateNumber)}function Y(t,e,n){if(t.isEmpty())return t;let s=n.get(t)||null;if(null!==s)return s;if(s=e.get(t),null!==s)return n.set(t,s),s;let i=!1,r=[];for(let s=0;s<r.length;s++){const o=Y(t.getParent(s),e,n);if(i||o!==t.getParent(s)){if(!i){r=[];for(let e=0;e<t.length;e++)r[e]=t.getParent(e);i=!0;}r[s]=o;}}if(!i)return e.add(t),n.set(t,t),t;let o=null;return o=0===r.length?U.EMPTY:1===r.length?V.create(r[0],t.getReturnState(0)):new B(r,t.returnStates),e.add(o),n.set(o,o),n.set(t,o),o}function G(t,e,n,s){if(t===e)return t;if(t instanceof V&&e instanceof V)return function(t,e,n,s){if(null!==s){let n=s.get(t,e);if(null!==n)return n;if(n=s.get(e,t),null!==n)return n}const i=function(t,e,n){if(n){if(t===U.EMPTY)return U.EMPTY;if(e===U.EMPTY)return U.EMPTY}else {if(t===U.EMPTY&&e===U.EMPTY)return U.EMPTY;if(t===U.EMPTY){const t=[e.returnState,U.EMPTY_RETURN_STATE],n=[e.parentCtx,null];return new B(n,t)}if(e===U.EMPTY){const e=[t.returnState,U.EMPTY_RETURN_STATE],n=[t.parentCtx,null];return new B(n,e)}}return null}(t,e,n);if(null!==i)return null!==s&&s.set(t,e,i),i;if(t.returnState===e.returnState){const i=G(t.parentCtx,e.parentCtx,n,s);if(i===t.parentCtx)return t;if(i===e.parentCtx)return e;const r=V.create(i,t.returnState);return null!==s&&s.set(t,e,r),r}{let n=null;if((t===e||null!==t.parentCtx&&t.parentCtx===e.parentCtx)&&(n=t.parentCtx),null!==n){const i=[t.returnState,e.returnState];t.returnState>e.returnState&&(i[0]=e.returnState,i[1]=t.returnState);const r=new B([n,n],i);return null!==s&&s.set(t,e,r),r}const i=[t.returnState,e.returnState];let r=[t.parentCtx,e.parentCtx];t.returnState>e.returnState&&(i[0]=e.returnState,i[1]=t.returnState,r=[e.parentCtx,t.parentCtx]);const o=new B(r,i);return null!==s&&s.set(t,e,o),o}}(t,e,n,s);if(n){if(t instanceof z)return t;if(e instanceof z)return e}return t instanceof V&&(t=new B([t.getParent()],[t.returnState])),e instanceof V&&(e=new B([e.getParent()],[e.returnState])),function(t,e,n,s){if(null!==s){let n=s.get(t,e);if(null!==n)return U.trace_atn_sim&&console.log("mergeArrays a="+t+",b="+e+" -> previous"),n;if(n=s.get(e,t),null!==n)return U.trace_atn_sim&&console.log("mergeArrays a="+t+",b="+e+" -> previous"),n}let i=0,r=0,o=0,a=new Array(t.returnStates.length+e.returnStates.length).fill(0),l=new Array(t.returnStates.length+e.returnStates.length).fill(null);for(;i<t.returnStates.length&&r<e.returnStates.length;){const h=t.parents[i],c=e.parents[r];if(t.returnStates[i]===e.returnStates[r]){const e=t.returnStates[i];e===U.EMPTY_RETURN_STATE&&null===h&&null===c||null!==h&&null!==c&&h===c?(l[o]=h,a[o]=e):(l[o]=G(h,c,n,s),a[o]=e),i+=1,r+=1;}else t.returnStates[i]<e.returnStates[r]?(l[o]=h,a[o]=t.returnStates[i],i+=1):(l[o]=c,a[o]=e.returnStates[r],r+=1);o+=1;}if(i<t.returnStates.length)for(let e=i;e<t.returnStates.length;e++)l[o]=t.parents[e],a[o]=t.returnStates[e],o+=1;else for(let t=r;t<e.returnStates.length;t++)l[o]=e.parents[t],a[o]=e.returnStates[t],o+=1;if(o<l.length){if(1===o){const n=V.create(l[0],a[0]);return null!==s&&s.set(t,e,n),n}l=l.slice(0,o),a=a.slice(0,o);}const h=new B(l,a);return h.equals(t)?(null!==s&&s.set(t,e,t),U.trace_atn_sim&&console.log("mergeArrays a="+t+",b="+e+" -> a"),t):h.equals(e)?(null!==s&&s.set(t,e,e),U.trace_atn_sim&&console.log("mergeArrays a="+t+",b="+e+" -> b"),e):(function(t){const e=new H;for(let n=0;n<t.length;n++){const s=t[n];e.containsKey(s)||e.set(s,s);}for(let n=0;n<t.length;n++)t[n]=e.get(t[n]);}(l),null!==s&&s.set(t,e,h),U.trace_atn_sim&&console.log("mergeArrays a="+t+",b="+e+" -> "+h),h)}(t,e,n,s)}class j{constructor(){this.data=[];}add(t){this.data[t]=!0;}or(t){Object.keys(t.data).map((t=>this.add(t)),this);}remove(t){delete this.data[t];}has(t){return !0===this.data[t]}values(){return Object.keys(this.data)}minValue(){return Math.min.apply(null,this.values())}hashCode(){return o.hashStuff(this.values())}equals(t){return t instanceof j&&e(this.data,t.data)}toString(){return "{"+this.values().join(", ")+"}"}get length(){return this.values().length}}class W{constructor(t){this.atn=t;}getDecisionLookahead(t){if(null===t)return null;const e=t.transitions.length,n=[];for(let s=0;s<e;s++){n[s]=new E;const e=new d,i=!1;this._LOOK(t.transition(s).target,null,U.EMPTY,n[s],e,new j,i,!1),(0===n[s].length||n[s].contains(W.HIT_PRED))&&(n[s]=null);}return n}LOOK(t,e,n){const s=new E,i=null!==(n=n||null)?K(t.atn,n):null;return this._LOOK(t,e,i,s,new d,new j,!0,!0),s}_LOOK(e,n,s,i,r,o,a,l){const h=new S({state:e,alt:0,context:s},null);if(!r.has(h)){if(r.add(h),e===n){if(null===s)return void i.addOne(t.EPSILON);if(s.isEmpty()&&l)return void i.addOne(t.EOF)}if(e instanceof A){if(null===s)return void i.addOne(t.EPSILON);if(s.isEmpty()&&l)return void i.addOne(t.EOF);if(s!==U.EMPTY){const t=o.has(e.ruleIndex);try{o.remove(e.ruleIndex);for(let t=0;t<s.length;t++){const e=this.atn.states[s.getReturnState(t)];this._LOOK(e,n,s.getParent(t),i,r,o,a,l);}}finally{t&&o.add(e.ruleIndex);}return}}for(let h=0;h<e.transitions.length;h++){const c=e.transitions[h];if(c.constructor===N){if(o.has(c.target.ruleIndex))continue;const t=V.create(s,c.followState.stateNumber);try{o.add(c.target.ruleIndex),this._LOOK(c.target,n,t,i,r,o,a,l);}finally{o.remove(c.target.ruleIndex);}}else if(c instanceof L)a?this._LOOK(c.target,n,s,i,r,o,a,l):i.addOne(W.HIT_PRED);else if(c.isEpsilon)this._LOOK(c.target,n,s,i,r,o,a,l);else if(c.constructor===k)i.addRange(t.MIN_USER_TOKEN_TYPE,this.atn.maxTokenType);else {let e=c.label;null!==e&&(c instanceof I&&(e=e.complement(t.MIN_USER_TOKEN_TYPE,this.atn.maxTokenType)),i.addSet(e));}}}}}W.HIT_PRED=t.INVALID_TYPE;class ${constructor(t,e){this.grammarType=t,this.maxTokenType=e,this.states=[],this.decisionToState=[],this.ruleToStartState=[],this.ruleToStopState=null,this.modeNameToStartState={},this.ruleToTokenType=null,this.lexerActions=null,this.modeToStartState=[];}nextTokensInContext(t,e){return new W(this).LOOK(t,null,e)}nextTokensNoContext(t){return null!==t.nextTokenWithinRule||(t.nextTokenWithinRule=this.nextTokensInContext(t,null),t.nextTokenWithinRule.readOnly=!0),t.nextTokenWithinRule}nextTokens(t,e){return void 0===e?this.nextTokensNoContext(t):this.nextTokensInContext(t,e)}addState(t){null!==t&&(t.atn=this,t.stateNumber=this.states.length),this.states.push(t);}removeState(t){this.states[t.stateNumber]=null;}defineDecisionState(t){return this.decisionToState.push(t),t.decision=this.decisionToState.length-1,t.decision}getDecisionState(t){return 0===this.decisionToState.length?null:this.decisionToState[t]}getExpectedTokens(e,n){if(e<0||e>=this.states.length)throw "Invalid state number.";const s=this.states[e];let i=this.nextTokens(s);if(!i.contains(t.EPSILON))return i;const r=new E;for(r.addSet(i),r.removeOne(t.EPSILON);null!==n&&n.invokingState>=0&&i.contains(t.EPSILON);){const e=this.states[n.invokingState].transitions[0];i=this.nextTokens(e.followState),r.addSet(i),r.removeOne(t.EPSILON),n=n.parentCtx;}return i.contains(t.EPSILON)&&r.addOne(t.EOF),r}}$.INVALID_ALT_NUMBER=0;class X extends _{constructor(){super(),this.stateType=_.BASIC;}}class J extends _{constructor(){return super(),this.decision=-1,this.nonGreedy=!1,this}}class Z extends J{constructor(){return super(),this.endState=null,this}}class Q extends _{constructor(){return super(),this.stateType=_.BLOCK_END,this.startState=null,this}}class tt extends _{constructor(){return super(),this.stateType=_.LOOP_END,this.loopBackState=null,this}}class et extends _{constructor(){return super(),this.stateType=_.RULE_START,this.stopState=null,this.isPrecedenceRule=!1,this}}class nt extends J{constructor(){return super(),this.stateType=_.TOKEN_START,this}}class st extends J{constructor(){return super(),this.stateType=_.PLUS_LOOP_BACK,this}}class it extends _{constructor(){return super(),this.stateType=_.STAR_LOOP_BACK,this}}class rt extends J{constructor(){return super(),this.stateType=_.STAR_LOOP_ENTRY,this.loopBackState=null,this.isPrecedenceDecision=null,this}}class ot extends Z{constructor(){return super(),this.stateType=_.PLUS_BLOCK_START,this.loopBackState=null,this}}class at extends Z{constructor(){return super(),this.stateType=_.STAR_BLOCK_START,this}}class lt extends Z{constructor(){return super(),this.stateType=_.BLOCK_START,this}}class ht extends C{constructor(t,e){super(t),this.label_=e,this.label=this.makeLabel(),this.serializationType=C.ATOM;}makeLabel(){const t=new E;return t.addOne(this.label_),t}matches(t,e,n){return this.label_===t}toString(){return this.label_}}class ct extends C{constructor(t,e,n){super(t),this.serializationType=C.RANGE,this.start=e,this.stop=n,this.label=this.makeLabel();}makeLabel(){const t=new E;return t.addRange(this.start,this.stop),t}matches(t,e,n){return t>=this.start&&t<=this.stop}toString(){return "'"+String.fromCharCode(this.start)+"'..'"+String.fromCharCode(this.stop)+"'"}}class ut extends C{constructor(t,e,n,s){super(t),this.serializationType=C.ACTION,this.ruleIndex=e,this.actionIndex=void 0===n?-1:n,this.isCtxDependent=void 0!==s&&s,this.isEpsilon=!0;}matches(t,e,n){return !1}toString(){return "action_"+this.ruleIndex+":"+this.actionIndex}}class dt extends C{constructor(t,e){super(t),this.serializationType=C.EPSILON,this.isEpsilon=!0,this.outermostPrecedenceReturn=e;}matches(t,e,n){return !1}toString(){return "epsilon"}}class pt extends p{constructor(t,e,n){super(),this.ruleIndex=void 0===t?-1:t,this.predIndex=void 0===e?-1:e,this.isCtxDependent=void 0!==n&&n;}evaluate(t,e){const n=this.isCtxDependent?e:null;return t.sempred(n,this.ruleIndex,this.predIndex)}updateHashCode(t){t.update(this.ruleIndex,this.predIndex,this.isCtxDependent);}equals(t){return this===t||t instanceof pt&&this.ruleIndex===t.ruleIndex&&this.predIndex===t.predIndex&&this.isCtxDependent===t.isCtxDependent}toString(){return "{"+this.ruleIndex+":"+this.predIndex+"}?"}}p.NONE=new pt;class gt extends L{constructor(t,e,n,s){super(t),this.serializationType=C.PREDICATE,this.ruleIndex=e,this.predIndex=n,this.isCtxDependent=s,this.isEpsilon=!0;}matches(t,e,n){return !1}getPredicate(){return new pt(this.ruleIndex,this.predIndex,this.isCtxDependent)}toString(){return "pred_"+this.ruleIndex+":"+this.predIndex}}class ft extends p{constructor(t){super(),this.precedence=void 0===t?0:t;}evaluate(t,e){return t.precpred(e,this.precedence)}evalPrecedence(t,e){return t.precpred(e,this.precedence)?p.NONE:null}compareTo(t){return this.precedence-t.precedence}updateHashCode(t){t.update(this.precedence);}equals(t){return this===t||t instanceof ft&&this.precedence===t.precedence}toString(){return "{"+this.precedence+">=prec}?"}}p.PrecedencePredicate=ft;class xt extends L{constructor(t,e){super(t),this.serializationType=C.PRECEDENCE,this.precedence=e,this.isEpsilon=!0;}matches(t,e,n){return !1}getPredicate(){return new ft(this.precedence)}toString(){return this.precedence+" >= _p"}}class Tt{constructor(t){void 0===t&&(t=null),this.readOnly=!1,this.verifyATN=null===t||t.verifyATN,this.generateRuleBypassTransitions=null!==t&&t.generateRuleBypassTransitions;}}Tt.defaultOptions=new Tt,Tt.defaultOptions.readOnly=!0;class St{constructor(t){this.actionType=t,this.isPositionDependent=!1;}hashCode(){const t=new o;return this.updateHashCode(t),t.finish()}updateHashCode(t){t.update(this.actionType);}equals(t){return this===t}}class mt extends St{constructor(){super(6);}execute(t){t.skip();}toString(){return "skip"}}mt.INSTANCE=new mt;class Et extends St{constructor(t){super(0),this.channel=t;}execute(t){t._channel=this.channel;}updateHashCode(t){t.update(this.actionType,this.channel);}equals(t){return this===t||t instanceof Et&&this.channel===t.channel}toString(){return "channel("+this.channel+")"}}class _t extends St{constructor(t,e){super(1),this.ruleIndex=t,this.actionIndex=e,this.isPositionDependent=!0;}execute(t){t.action(null,this.ruleIndex,this.actionIndex);}updateHashCode(t){t.update(this.actionType,this.ruleIndex,this.actionIndex);}equals(t){return this===t||t instanceof _t&&this.ruleIndex===t.ruleIndex&&this.actionIndex===t.actionIndex}}class At extends St{constructor(){super(3);}execute(t){t.more();}toString(){return "more"}}At.INSTANCE=new At;class Ct extends St{constructor(t){super(7),this.type=t;}execute(t){t.type=this.type;}updateHashCode(t){t.update(this.actionType,this.type);}equals(t){return this===t||t instanceof Ct&&this.type===t.type}toString(){return "type("+this.type+")"}}class Nt extends St{constructor(t){super(5),this.mode=t;}execute(t){t.pushMode(this.mode);}updateHashCode(t){t.update(this.actionType,this.mode);}equals(t){return this===t||t instanceof Nt&&this.mode===t.mode}toString(){return "pushMode("+this.mode+")"}}class yt extends St{constructor(){super(4);}execute(t){t.popMode();}toString(){return "popMode"}}yt.INSTANCE=new yt;class It extends St{constructor(t){super(2),this.mode=t;}execute(t){t.mode(this.mode);}updateHashCode(t){t.update(this.actionType,this.mode);}equals(t){return this===t||t instanceof It&&this.mode===t.mode}toString(){return "mode("+this.mode+")"}}function kt(t,e){const n=[];return n[t-1]=e,n.map((function(t){return e}))}class Lt{constructor(t){null==t&&(t=Tt.defaultOptions),this.deserializationOptions=t,this.stateFactories=null,this.actionFactories=null;}deserialize(t){const e=this.reset(t);this.checkVersion(e),e&&this.skipUUID();const n=this.readATN();this.readStates(n,e),this.readRules(n,e),this.readModes(n);const s=[];return this.readSets(n,s,this.readInt.bind(this)),e&&this.readSets(n,s,this.readInt32.bind(this)),this.readEdges(n,s),this.readDecisions(n),this.readLexerActions(n,e),this.markPrecedenceDecisions(n),this.verifyATN(n),this.deserializationOptions.generateRuleBypassTransitions&&1===n.grammarType&&(this.generateRuleBypassTransitions(n),this.verifyATN(n)),n}reset(t){if(3===(t.charCodeAt?t.charCodeAt(0):t[0])){const e=function(t){const e=t.charCodeAt(0);return e>1?e-2:e+65534},n=t.split("").map(e);return n[0]=t.charCodeAt(0),this.data=n,this.pos=0,!0}return this.data=t,this.pos=0,!1}skipUUID(){let t=0;for(;t++<8;)this.readInt();}checkVersion(t){const e=this.readInt();if(!t&&4!==e)throw "Could not deserialize ATN with version "+e+" (expected 4)."}readATN(){const t=this.readInt(),e=this.readInt();return new $(t,e)}readStates(t,e){let n,s,i;const r=[],o=[],a=this.readInt();for(let n=0;n<a;n++){const n=this.readInt();if(n===_.INVALID_TYPE){t.addState(null);continue}let s=this.readInt();e&&65535===s&&(s=-1);const i=this.stateFactory(n,s);if(n===_.LOOP_END){const t=this.readInt();r.push([i,t]);}else if(i instanceof Z){const t=this.readInt();o.push([i,t]);}t.addState(i);}for(n=0;n<r.length;n++)s=r[n],s[0].loopBackState=t.states[s[1]];for(n=0;n<o.length;n++)s=o[n],s[0].endState=t.states[s[1]];let l=this.readInt();for(n=0;n<l;n++)i=this.readInt(),t.states[i].nonGreedy=!0;let h=this.readInt();for(n=0;n<h;n++)i=this.readInt(),t.states[i].isPrecedenceRule=!0;}readRules(e,n){let s;const i=this.readInt();for(0===e.grammarType&&(e.ruleToTokenType=kt(i,0)),e.ruleToStartState=kt(i,0),s=0;s<i;s++){const i=this.readInt();if(e.ruleToStartState[s]=e.states[i],0===e.grammarType){let i=this.readInt();n&&65535===i&&(i=t.EOF),e.ruleToTokenType[s]=i;}}for(e.ruleToStopState=kt(i,0),s=0;s<e.states.length;s++){const t=e.states[s];t instanceof A&&(e.ruleToStopState[t.ruleIndex]=t,e.ruleToStartState[t.ruleIndex].stopState=t);}}readModes(t){const e=this.readInt();for(let n=0;n<e;n++){let e=this.readInt();t.modeToStartState.push(t.states[e]);}}readSets(t,e,n){const s=this.readInt();for(let t=0;t<s;t++){const t=new E;e.push(t);const s=this.readInt();0!==this.readInt()&&t.addOne(-1);for(let e=0;e<s;e++){const e=n(),s=n();t.addRange(e,s);}}}readEdges(t,e){let n,s,i,r,o;const a=this.readInt();for(n=0;n<a;n++){const n=this.readInt(),s=this.readInt(),i=this.readInt(),o=this.readInt(),a=this.readInt(),l=this.readInt();r=this.edgeFactory(t,i,n,s,o,a,l,e),t.states[n].addTransition(r);}for(n=0;n<t.states.length;n++)for(i=t.states[n],s=0;s<i.transitions.length;s++){const e=i.transitions[s];if(!(e instanceof N))continue;let n=-1;t.ruleToStartState[e.target.ruleIndex].isPrecedenceRule&&0===e.precedence&&(n=e.target.ruleIndex),r=new dt(e.followState,n),t.ruleToStopState[e.target.ruleIndex].addTransition(r);}for(n=0;n<t.states.length;n++){if(i=t.states[n],i instanceof Z){if(null===i.endState)throw "IllegalState";if(null!==i.endState.startState)throw "IllegalState";i.endState.startState=i;}if(i instanceof st)for(s=0;s<i.transitions.length;s++)o=i.transitions[s].target,o instanceof ot&&(o.loopBackState=i);else if(i instanceof it)for(s=0;s<i.transitions.length;s++)o=i.transitions[s].target,o instanceof rt&&(o.loopBackState=i);}}readDecisions(t){const e=this.readInt();for(let n=0;n<e;n++){const e=this.readInt(),s=t.states[e];t.decisionToState.push(s),s.decision=n;}}readLexerActions(t,e){if(0===t.grammarType){const n=this.readInt();t.lexerActions=kt(n,null);for(let s=0;s<n;s++){const n=this.readInt();let i=this.readInt();e&&65535===i&&(i=-1);let r=this.readInt();e&&65535===r&&(r=-1),t.lexerActions[s]=this.lexerActionFactory(n,i,r);}}}generateRuleBypassTransitions(t){let e;const n=t.ruleToStartState.length;for(e=0;e<n;e++)t.ruleToTokenType[e]=t.maxTokenType+e+1;for(e=0;e<n;e++)this.generateRuleBypassTransition(t,e);}generateRuleBypassTransition(t,e){let n,s;const i=new lt;i.ruleIndex=e,t.addState(i);const r=new Q;r.ruleIndex=e,t.addState(r),i.endState=r,t.defineDecisionState(i),r.startState=i;let o=null,a=null;if(t.ruleToStartState[e].isPrecedenceRule){for(a=null,n=0;n<t.states.length;n++)if(s=t.states[n],this.stateIsEndStateFor(s,e)){a=s,o=s.loopBackState.transitions[0];break}if(null===o)throw "Couldn't identify final state of the precedence rule prefix section."}else a=t.ruleToStopState[e];for(n=0;n<t.states.length;n++){s=t.states[n];for(let t=0;t<s.transitions.length;t++){const e=s.transitions[t];e!==o&&e.target===a&&(e.target=r);}}const l=t.ruleToStartState[e],h=l.transitions.length;for(;h>0;)i.addTransition(l.transitions[h-1]),l.transitions=l.transitions.slice(-1);t.ruleToStartState[e].addTransition(new dt(i)),r.addTransition(new dt(a));const c=new X;t.addState(c),c.addTransition(new ht(r,t.ruleToTokenType[e])),i.addTransition(new dt(c));}stateIsEndStateFor(t,e){if(t.ruleIndex!==e)return null;if(!(t instanceof rt))return null;const n=t.transitions[t.transitions.length-1].target;return n instanceof tt&&n.epsilonOnlyTransitions&&n.transitions[0].target instanceof A?t:null}markPrecedenceDecisions(t){for(let e=0;e<t.states.length;e++){const n=t.states[e];if(n instanceof rt&&t.ruleToStartState[n.ruleIndex].isPrecedenceRule){const t=n.transitions[n.transitions.length-1].target;t instanceof tt&&t.epsilonOnlyTransitions&&t.transitions[0].target instanceof A&&(n.isPrecedenceDecision=!0);}}}verifyATN(t){if(this.deserializationOptions.verifyATN)for(let e=0;e<t.states.length;e++){const n=t.states[e];if(null!==n)if(this.checkCondition(n.epsilonOnlyTransitions||n.transitions.length<=1),n instanceof ot)this.checkCondition(null!==n.loopBackState);else if(n instanceof rt)if(this.checkCondition(null!==n.loopBackState),this.checkCondition(2===n.transitions.length),n.transitions[0].target instanceof at)this.checkCondition(n.transitions[1].target instanceof tt),this.checkCondition(!n.nonGreedy);else {if(!(n.transitions[0].target instanceof tt))throw "IllegalState";this.checkCondition(n.transitions[1].target instanceof at),this.checkCondition(n.nonGreedy);}else n instanceof it?(this.checkCondition(1===n.transitions.length),this.checkCondition(n.transitions[0].target instanceof rt)):n instanceof tt?this.checkCondition(null!==n.loopBackState):n instanceof et?this.checkCondition(null!==n.stopState):n instanceof Z?this.checkCondition(null!==n.endState):n instanceof Q?this.checkCondition(null!==n.startState):n instanceof J?this.checkCondition(n.transitions.length<=1||n.decision>=0):this.checkCondition(n.transitions.length<=1||n instanceof A);}}checkCondition(t,e){if(!t)throw null==e&&(e="IllegalState"),e}readInt(){return this.data[this.pos++]}readInt32(){return this.readInt()|this.readInt()<<16}edgeFactory(e,n,s,i,r,o,a,l){const h=e.states[i];switch(n){case C.EPSILON:return new dt(h);case C.RANGE:return new ct(h,0!==a?t.EOF:r,o);case C.RULE:return new N(e.states[r],o,a,h);case C.PREDICATE:return new gt(h,r,o,0!==a);case C.PRECEDENCE:return new xt(h,r);case C.ATOM:return new ht(h,0!==a?t.EOF:r);case C.ACTION:return new ut(h,r,o,0!==a);case C.SET:return new y(h,l[r]);case C.NOT_SET:return new I(h,l[r]);case C.WILDCARD:return new k(h);default:throw "The specified transition type: "+n+" is not valid."}}stateFactory(t,e){if(null===this.stateFactories){const t=[];t[_.INVALID_TYPE]=null,t[_.BASIC]=()=>new X,t[_.RULE_START]=()=>new et,t[_.BLOCK_START]=()=>new lt,t[_.PLUS_BLOCK_START]=()=>new ot,t[_.STAR_BLOCK_START]=()=>new at,t[_.TOKEN_START]=()=>new nt,t[_.RULE_STOP]=()=>new A,t[_.BLOCK_END]=()=>new Q,t[_.STAR_LOOP_BACK]=()=>new it,t[_.STAR_LOOP_ENTRY]=()=>new rt,t[_.PLUS_LOOP_BACK]=()=>new st,t[_.LOOP_END]=()=>new tt,this.stateFactories=t;}if(t>this.stateFactories.length||null===this.stateFactories[t])throw "The specified state type "+t+" is not valid.";{const n=this.stateFactories[t]();if(null!==n)return n.ruleIndex=e,n}}lexerActionFactory(t,e,n){if(null===this.actionFactories){const t=[];t[0]=(t,e)=>new Et(t),t[1]=(t,e)=>new _t(t,e),t[2]=(t,e)=>new It(t),t[3]=(t,e)=>At.INSTANCE,t[4]=(t,e)=>yt.INSTANCE,t[5]=(t,e)=>new Nt(t),t[6]=(t,e)=>mt.INSTANCE,t[7]=(t,e)=>new Ct(t),this.actionFactories=t;}if(t>this.actionFactories.length||null===this.actionFactories[t])throw "The specified lexer action type "+t+" is not valid.";return this.actionFactories[t](e,n)}}class Ot{syntaxError(t,e,n,s,i,r){}reportAmbiguity(t,e,n,s,i,r,o){}reportAttemptingFullContext(t,e,n,s,i,r){}reportContextSensitivity(t,e,n,s,i,r){}}class vt extends Ot{constructor(){super();}syntaxError(t,e,n,s,i,r){console.error("line "+n+":"+s+" "+i);}}vt.INSTANCE=new vt;class Rt extends Ot{constructor(t){if(super(),null===t)throw "delegates";return this.delegates=t,this}syntaxError(t,e,n,s,i,r){this.delegates.map((o=>o.syntaxError(t,e,n,s,i,r)));}reportAmbiguity(t,e,n,s,i,r,o){this.delegates.map((a=>a.reportAmbiguity(t,e,n,s,i,r,o)));}reportAttemptingFullContext(t,e,n,s,i,r){this.delegates.map((o=>o.reportAttemptingFullContext(t,e,n,s,i,r)));}reportContextSensitivity(t,e,n,s,i,r){this.delegates.map((o=>o.reportContextSensitivity(t,e,n,s,i,r)));}}class wt{constructor(){this._listeners=[vt.INSTANCE],this._interp=null,this._stateNumber=-1;}checkVersion(t){const e="4.13.1";e!==t&&console.log("ANTLR runtime and generated code versions disagree: "+e+"!="+t);}addErrorListener(t){this._listeners.push(t);}removeErrorListeners(){this._listeners=[];}getLiteralNames(){return Object.getPrototypeOf(this).constructor.literalNames||[]}getSymbolicNames(){return Object.getPrototypeOf(this).constructor.symbolicNames||[]}getTokenNames(){if(!this.tokenNames){const t=this.getLiteralNames(),e=this.getSymbolicNames(),n=t.length>e.length?t.length:e.length;this.tokenNames=[];for(let s=0;s<n;s++)this.tokenNames[s]=t[s]||e[s]||"<INVALID";}return this.tokenNames}getTokenTypeMap(){const e=this.getTokenNames();if(null===e)throw "The current recognizer does not provide a list of token names.";let n=this.tokenTypeMapCache[e];return void 0===n&&(n=e.reduce((function(t,e,n){t[e]=n;})),n.EOF=t.EOF,this.tokenTypeMapCache[e]=n),n}getRuleIndexMap(){const t=this.ruleNames;if(null===t)throw "The current recognizer does not provide a list of rule names.";let e=this.ruleIndexMapCache[t];return void 0===e&&(e=t.reduce((function(t,e,n){t[e]=n;})),this.ruleIndexMapCache[t]=e),e}getTokenType(e){const n=this.getTokenTypeMap()[e];return void 0!==n?n:t.INVALID_TYPE}getErrorHeader(t){return "line "+t.getOffendingToken().line+":"+t.getOffendingToken().column}getTokenErrorDisplay(e){if(null===e)return "<no token>";let n=e.text;return null===n&&(n=e.type===t.EOF?"<EOF>":"<"+e.type+">"),n=n.replace("\n","\\n").replace("\r","\\r").replace("\t","\\t"),"'"+n+"'"}getErrorListenerDispatch(){return new Rt(this._listeners)}sempred(t,e,n){return !0}precpred(t,e){return !0}get atn(){return this._interp.atn}get state(){return this._stateNumber}set state(t){this._stateNumber=t;}}wt.tokenTypeMapCache={},wt.ruleIndexMapCache={};class Pt extends t{constructor(e,n,s,i,r){super(),this.source=void 0!==e?e:Pt.EMPTY_SOURCE,this.type=void 0!==n?n:null,this.channel=void 0!==s?s:t.DEFAULT_CHANNEL,this.start=void 0!==i?i:-1,this.stop=void 0!==r?r:-1,this.tokenIndex=-1,null!==this.source[0]?(this.line=e[0].line,this.column=e[0].column):this.column=-1;}clone(){const t=new Pt(this.source,this.type,this.channel,this.start,this.stop);return t.tokenIndex=this.tokenIndex,t.line=this.line,t.column=this.column,t.text=this.text,t}cloneWithType(e){const n=new Pt(this.source,e,this.channel,this.start,this.stop);return n.tokenIndex=this.tokenIndex,n.line=this.line,n.column=this.column,e===t.EOF&&(n.text=""),n}toString(){let t=this.text;return t=null!==t?t.replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t"):"<no text>","[@"+this.tokenIndex+","+this.start+":"+this.stop+"='"+t+"',<"+this.type+">"+(this.channel>0?",channel="+this.channel:"")+","+this.line+":"+this.column+"]"}get text(){if(null!==this._text)return this._text;const t=this.getInputStream();if(null===t)return null;const e=t.size;return this.start<e&&this.stop<e?t.getText(this.start,this.stop):"<EOF>"}set text(t){this._text=t;}}Pt.EMPTY_SOURCE=[null,null];class bt{}class Dt extends bt{constructor(t){super(),this.copyText=void 0!==t&&t;}create(t,e,n,s,i,r,o,a){const l=new Pt(t,e,s,i,r);return l.line=o,l.column=a,null!==n?l.text=n:this.copyText&&null!==t[1]&&(l.text=t[1].getText(i,r)),l}createThin(t,e){const n=new Pt(null,t);return n.text=e,n}}Dt.DEFAULT=new Dt;class Ft extends Error{constructor(t){super(t.message),Error.captureStackTrace&&Error.captureStackTrace(this,Ft),this.message=t.message,this.recognizer=t.recognizer,this.input=t.input,this.ctx=t.ctx,this.offendingToken=null,this.offendingState=-1,null!==this.recognizer&&(this.offendingState=this.recognizer.state);}getExpectedTokens(){return null!==this.recognizer?this.recognizer.atn.getExpectedTokens(this.offendingState,this.ctx):null}toString(){return this.message}}class Mt extends Ft{constructor(t,e,n,s){super({message:"",recognizer:t,input:e,ctx:null}),this.startIndex=n,this.deadEndConfigs=s;}toString(){let t="";return this.startIndex>=0&&this.startIndex<this.input.size&&(t=this.input.getText(new m(this.startIndex,this.startIndex))),"LexerNoViableAltException"+t}}class Ut extends wt{constructor(e){super(),this._input=e,this._factory=Dt.DEFAULT,this._tokenFactorySourcePair=[this,e],this._interp=null,this._token=null,this._tokenStartCharIndex=-1,this._tokenStartLine=-1,this._tokenStartColumn=-1,this._hitEOF=!1,this._channel=t.DEFAULT_CHANNEL,this._type=t.INVALID_TYPE,this._modeStack=[],this._mode=Ut.DEFAULT_MODE,this._text=null;}reset(){null!==this._input&&this._input.seek(0),this._token=null,this._type=t.INVALID_TYPE,this._channel=t.DEFAULT_CHANNEL,this._tokenStartCharIndex=-1,this._tokenStartColumn=-1,this._tokenStartLine=-1,this._text=null,this._hitEOF=!1,this._mode=Ut.DEFAULT_MODE,this._modeStack=[],this._interp.reset();}nextToken(){if(null===this._input)throw "nextToken requires a non-null input stream.";const e=this._input.mark();try{for(;;){if(this._hitEOF)return this.emitEOF(),this._token;this._token=null,this._channel=t.DEFAULT_CHANNEL,this._tokenStartCharIndex=this._input.index,this._tokenStartColumn=this._interp.column,this._tokenStartLine=this._interp.line,this._text=null;let e=!1;for(;;){this._type=t.INVALID_TYPE;let n=Ut.SKIP;try{n=this._interp.match(this._input,this._mode);}catch(t){if(!(t instanceof Ft))throw console.log(t.stack),t;this.notifyListeners(t),this.recover(t);}if(this._input.LA(1)===t.EOF&&(this._hitEOF=!0),this._type===t.INVALID_TYPE&&(this._type=n),this._type===Ut.SKIP){e=!0;break}if(this._type!==Ut.MORE)break}if(!e)return null===this._token&&this.emit(),this._token}}finally{this._input.release(e);}}skip(){this._type=Ut.SKIP;}more(){this._type=Ut.MORE;}mode(t){this._mode=t;}pushMode(t){this._interp.debug&&console.log("pushMode "+t),this._modeStack.push(this._mode),this.mode(t);}popMode(){if(0===this._modeStack.length)throw "Empty Stack";return this._interp.debug&&console.log("popMode back to "+this._modeStack.slice(0,-1)),this.mode(this._modeStack.pop()),this._mode}emitToken(t){this._token=t;}emit(){const t=this._factory.create(this._tokenFactorySourcePair,this._type,this._text,this._channel,this._tokenStartCharIndex,this.getCharIndex()-1,this._tokenStartLine,this._tokenStartColumn);return this.emitToken(t),t}emitEOF(){const e=this.column,n=this.line,s=this._factory.create(this._tokenFactorySourcePair,t.EOF,null,t.DEFAULT_CHANNEL,this._input.index,this._input.index-1,n,e);return this.emitToken(s),s}getCharIndex(){return this._input.index}getAllTokens(){const e=[];let n=this.nextToken();for(;n.type!==t.EOF;)e.push(n),n=this.nextToken();return e}notifyListeners(t){const e=this._tokenStartCharIndex,n=this._input.index,s=this._input.getText(e,n),i="token recognition error at: '"+this.getErrorDisplay(s)+"'";this.getErrorListenerDispatch().syntaxError(this,null,this._tokenStartLine,this._tokenStartColumn,i,t);}getErrorDisplay(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n]);return e.join("")}getErrorDisplayForChar(e){return e.charCodeAt(0)===t.EOF?"<EOF>":"\n"===e?"\\n":"\t"===e?"\\t":"\r"===e?"\\r":e}getCharErrorDisplay(t){return "'"+this.getErrorDisplayForChar(t)+"'"}recover(e){this._input.LA(1)!==t.EOF&&(e instanceof Mt?this._interp.consume(this._input):this._input.consume());}get inputStream(){return this._input}set inputStream(t){this._input=null,this._tokenFactorySourcePair=[this,this._input],this.reset(),this._input=t,this._tokenFactorySourcePair=[this,this._input];}get sourceName(){return this._input.sourceName}get type(){return this._type}set type(t){this._type=t;}get line(){return this._interp.line}set line(t){this._interp.line=t;}get column(){return this._interp.column}set column(t){this._interp.column=t;}get text(){return null!==this._text?this._text:this._interp.getText(this._input)}set text(t){this._text=t;}}function Bt(t){return t.hashCodeForConfigSet()}function Vt(t,e){return t===e||null!==t&&null!==e&&t.equalsForConfigSet(e)}Ut.DEFAULT_MODE=0,Ut.MORE=-2,Ut.SKIP=-3,Ut.DEFAULT_TOKEN_CHANNEL=t.DEFAULT_CHANNEL,Ut.HIDDEN=t.HIDDEN_CHANNEL,Ut.MIN_CHAR_VALUE=0,Ut.MAX_CHAR_VALUE=1114111;class zt{constructor(t){this.configLookup=new d(Bt,Vt),this.fullCtx=void 0===t||t,this.readOnly=!1,this.configs=[],this.uniqueAlt=0,this.conflictingAlts=null,this.hasSemanticContext=!1,this.dipsIntoOuterContext=!1,this.cachedHashCode=-1;}add(t,e){if(void 0===e&&(e=null),this.readOnly)throw "This set is readonly";t.semanticContext!==p.NONE&&(this.hasSemanticContext=!0),t.reachesIntoOuterContext>0&&(this.dipsIntoOuterContext=!0);const n=this.configLookup.add(t);if(n===t)return this.cachedHashCode=-1,this.configs.push(t),!0;const s=!this.fullCtx,i=G(n.context,t.context,s,e);return n.reachesIntoOuterContext=Math.max(n.reachesIntoOuterContext,t.reachesIntoOuterContext),t.precedenceFilterSuppressed&&(n.precedenceFilterSuppressed=!0),n.context=i,!0}getStates(){const t=new d;for(let e=0;e<this.configs.length;e++)t.add(this.configs[e].state);return t}getPredicates(){const t=[];for(let e=0;e<this.configs.length;e++){const n=this.configs[e].semanticContext;n!==p.NONE&&t.push(n.semanticContext);}return t}optimizeConfigs(t){if(this.readOnly)throw "This set is readonly";if(0!==this.configLookup.length)for(let e=0;e<this.configs.length;e++){const n=this.configs[e];n.context=t.getCachedContext(n.context);}}addAll(t){for(let e=0;e<t.length;e++)this.add(t[e]);return !1}equals(t){return this===t||t instanceof zt&&e(this.configs,t.configs)&&this.fullCtx===t.fullCtx&&this.uniqueAlt===t.uniqueAlt&&this.conflictingAlts===t.conflictingAlts&&this.hasSemanticContext===t.hasSemanticContext&&this.dipsIntoOuterContext===t.dipsIntoOuterContext}hashCode(){const t=new o;return t.update(this.configs),t.finish()}updateHashCode(t){this.readOnly?(-1===this.cachedHashCode&&(this.cachedHashCode=this.hashCode()),t.update(this.cachedHashCode)):t.update(this.hashCode());}isEmpty(){return 0===this.configs.length}contains(t){if(null===this.configLookup)throw "This method is not implemented for readonly sets.";return this.configLookup.contains(t)}containsFast(t){if(null===this.configLookup)throw "This method is not implemented for readonly sets.";return this.configLookup.containsFast(t)}clear(){if(this.readOnly)throw "This set is readonly";this.configs=[],this.cachedHashCode=-1,this.configLookup=new d;}setReadonly(t){this.readOnly=t,t&&(this.configLookup=null);}toString(){return c(this.configs)+(this.hasSemanticContext?",hasSemanticContext="+this.hasSemanticContext:"")+(this.uniqueAlt!==$.INVALID_ALT_NUMBER?",uniqueAlt="+this.uniqueAlt:"")+(null!==this.conflictingAlts?",conflictingAlts="+this.conflictingAlts:"")+(this.dipsIntoOuterContext?",dipsIntoOuterContext":"")}get items(){return this.configs}get length(){return this.configs.length}}class qt{constructor(t,e){return null===t&&(t=-1),null===e&&(e=new zt),this.stateNumber=t,this.configs=e,this.edges=null,this.isAcceptState=!1,this.prediction=0,this.lexerActionExecutor=null,this.requiresFullContext=!1,this.predicates=null,this}getAltSet(){const t=new d;if(null!==this.configs)for(let e=0;e<this.configs.length;e++){const n=this.configs[e];t.add(n.alt);}return 0===t.length?null:t}equals(t){return this===t||t instanceof qt&&this.configs.equals(t.configs)}toString(){let t=this.stateNumber+":"+this.configs;return this.isAcceptState&&(t+="=>",null!==this.predicates?t+=this.predicates:t+=this.prediction),t}hashCode(){const t=new o;return t.update(this.configs),t.finish()}}class Ht{constructor(t,e){return this.atn=t,this.sharedContextCache=e,this}getCachedContext(t){if(null===this.sharedContextCache)return t;const e=new H;return Y(t,this.sharedContextCache,e)}}Ht.ERROR=new qt(2147483647,new zt);class Kt extends zt{constructor(){super(),this.configLookup=new d;}}class Yt extends S{constructor(t,e){super(t,e);const n=t.lexerActionExecutor||null;return this.lexerActionExecutor=n||(null!==e?e.lexerActionExecutor:null),this.passedThroughNonGreedyDecision=null!==e&&this.checkNonGreedyDecision(e,this.state),this.hashCodeForConfigSet=Yt.prototype.hashCode,this.equalsForConfigSet=Yt.prototype.equals,this}updateHashCode(t){t.update(this.state.stateNumber,this.alt,this.context,this.semanticContext,this.passedThroughNonGreedyDecision,this.lexerActionExecutor);}equals(t){return this===t||t instanceof Yt&&this.passedThroughNonGreedyDecision===t.passedThroughNonGreedyDecision&&(this.lexerActionExecutor?this.lexerActionExecutor.equals(t.lexerActionExecutor):!t.lexerActionExecutor)&&super.equals(t)}checkNonGreedyDecision(t,e){return t.passedThroughNonGreedyDecision||e instanceof J&&e.nonGreedy}}class Gt extends St{constructor(t,e){super(e.actionType),this.offset=t,this.action=e,this.isPositionDependent=!0;}execute(t){this.action.execute(t);}updateHashCode(t){t.update(this.actionType,this.offset,this.action);}equals(t){return this===t||t instanceof Gt&&this.offset===t.offset&&this.action===t.action}}class jt{constructor(t){return this.lexerActions=null===t?[]:t,this.cachedHashCode=o.hashStuff(t),this}fixOffsetBeforeMatch(t){let e=null;for(let n=0;n<this.lexerActions.length;n++)!this.lexerActions[n].isPositionDependent||this.lexerActions[n]instanceof Gt||(null===e&&(e=this.lexerActions.concat([])),e[n]=new Gt(t,this.lexerActions[n]));return null===e?this:new jt(e)}execute(t,e,n){let s=!1;const i=e.index;try{for(let r=0;r<this.lexerActions.length;r++){let o=this.lexerActions[r];if(o instanceof Gt){const t=o.offset;e.seek(n+t),o=o.action,s=n+t!==i;}else o.isPositionDependent&&(e.seek(i),s=!1);o.execute(t);}}finally{s&&e.seek(i);}}hashCode(){return this.cachedHashCode}updateHashCode(t){t.update(this.cachedHashCode);}equals(t){if(this===t)return !0;if(t instanceof jt){if(this.cachedHashCode!=t.cachedHashCode)return !1;if(this.lexerActions.length!=t.lexerActions.length)return !1;{const e=this.lexerActions.length;for(let n=0;n<e;++n)if(!this.lexerActions[n].equals(t.lexerActions[n]))return !1;return !0}}return !1}static append(t,e){if(null===t)return new jt([e]);const n=t.lexerActions.concat([e]);return new jt(n)}}function Wt(t){t.index=-1,t.line=0,t.column=-1,t.dfaState=null;}class $t{constructor(){Wt(this);}reset(){Wt(this);}}class Xt extends Ht{constructor(t,e,n,s){super(e,s),this.decisionToDFA=n,this.recog=t,this.startIndex=-1,this.line=1,this.column=0,this.mode=Ut.DEFAULT_MODE,this.prevAccept=new $t;}copyState(t){this.column=t.column,this.line=t.line,this.mode=t.mode,this.startIndex=t.startIndex;}match(t,e){this.mode=e;const n=t.mark();try{this.startIndex=t.index,this.prevAccept.reset();const n=this.decisionToDFA[e];return null===n.s0?this.matchATN(t):this.execATN(t,n.s0)}finally{t.release(n);}}reset(){this.prevAccept.reset(),this.startIndex=-1,this.line=1,this.column=0,this.mode=Ut.DEFAULT_MODE;}matchATN(t){const e=this.atn.modeToStartState[this.mode];Xt.debug&&console.log("matchATN mode "+this.mode+" start: "+e);const n=this.mode,s=this.computeStartState(t,e),i=s.hasSemanticContext;s.hasSemanticContext=!1;const r=this.addDFAState(s);i||(this.decisionToDFA[this.mode].s0=r);const o=this.execATN(t,r);return Xt.debug&&console.log("DFA after matchATN: "+this.decisionToDFA[n].toLexerString()),o}execATN(e,n){Xt.debug&&console.log("start state closure="+n.configs),n.isAcceptState&&this.captureSimState(this.prevAccept,e,n);let s=e.LA(1),i=n;for(;;){Xt.debug&&console.log("execATN loop starting closure: "+i.configs);let n=this.getExistingTargetState(i,s);if(null===n&&(n=this.computeTargetState(e,i,s)),n===Ht.ERROR)break;if(s!==t.EOF&&this.consume(e),n.isAcceptState&&(this.captureSimState(this.prevAccept,e,n),s===t.EOF))break;s=e.LA(1),i=n;}return this.failOrAccept(this.prevAccept,e,i.configs,s)}getExistingTargetState(t,e){if(null===t.edges||e<Xt.MIN_DFA_EDGE||e>Xt.MAX_DFA_EDGE)return null;let n=t.edges[e-Xt.MIN_DFA_EDGE];return void 0===n&&(n=null),Xt.debug&&null!==n&&console.log("reuse state "+t.stateNumber+" edge to "+n.stateNumber),n}computeTargetState(t,e,n){const s=new Kt;return this.getReachableConfigSet(t,e.configs,s,n),0===s.items.length?(s.hasSemanticContext||this.addDFAEdge(e,n,Ht.ERROR),Ht.ERROR):this.addDFAEdge(e,n,null,s)}failOrAccept(e,n,s,i){if(null!==this.prevAccept.dfaState){const t=e.dfaState.lexerActionExecutor;return this.accept(n,t,this.startIndex,e.index,e.line,e.column),e.dfaState.prediction}if(i===t.EOF&&n.index===this.startIndex)return t.EOF;throw new Mt(this.recog,n,this.startIndex,s)}getReachableConfigSet(e,n,s,i){let r=$.INVALID_ALT_NUMBER;for(let o=0;o<n.items.length;o++){const a=n.items[o],l=a.alt===r;if(!l||!a.passedThroughNonGreedyDecision){Xt.debug&&console.log("testing %s at %s\n",this.getTokenName(i),a.toString(this.recog,!0));for(let n=0;n<a.state.transitions.length;n++){const o=a.state.transitions[n],h=this.getReachableTarget(o,i);if(null!==h){let n=a.lexerActionExecutor;null!==n&&(n=n.fixOffsetBeforeMatch(e.index-this.startIndex));const o=i===t.EOF,c=new Yt({state:h,lexerActionExecutor:n},a);this.closure(e,c,s,l,!0,o)&&(r=a.alt);}}}}}accept(t,e,n,s,i,r){Xt.debug&&console.log("ACTION %s\n",e),t.seek(s),this.line=i,this.column=r,null!==e&&null!==this.recog&&e.execute(this.recog,t,n);}getReachableTarget(t,e){return t.matches(e,0,Ut.MAX_CHAR_VALUE)?t.target:null}computeStartState(t,e){const n=U.EMPTY,s=new Kt;for(let i=0;i<e.transitions.length;i++){const r=e.transitions[i].target,o=new Yt({state:r,alt:i+1,context:n},null);this.closure(t,o,s,!1,!1,!1);}return s}closure(t,e,n,s,i,r){let o=null;if(Xt.debug&&console.log("closure("+e.toString(this.recog,!0)+")"),e.state instanceof A){if(Xt.debug&&(null!==this.recog?console.log("closure at %s rule stop %s\n",this.recog.ruleNames[e.state.ruleIndex],e):console.log("closure at rule stop %s\n",e)),null===e.context||e.context.hasEmptyPath()){if(null===e.context||e.context.isEmpty())return n.add(e),!0;n.add(new Yt({state:e.state,context:U.EMPTY},e)),s=!0;}if(null!==e.context&&!e.context.isEmpty())for(let a=0;a<e.context.length;a++)if(e.context.getReturnState(a)!==U.EMPTY_RETURN_STATE){const l=e.context.getParent(a),h=this.atn.states[e.context.getReturnState(a)];o=new Yt({state:h,context:l},e),s=this.closure(t,o,n,s,i,r);}return s}e.state.epsilonOnlyTransitions||s&&e.passedThroughNonGreedyDecision||n.add(e);for(let a=0;a<e.state.transitions.length;a++){const l=e.state.transitions[a];o=this.getEpsilonTarget(t,e,l,n,i,r),null!==o&&(s=this.closure(t,o,n,s,i,r));}return s}getEpsilonTarget(e,n,s,i,r,o){let a=null;if(s.serializationType===C.RULE){const t=V.create(n.context,s.followState.stateNumber);a=new Yt({state:s.target,context:t},n);}else {if(s.serializationType===C.PRECEDENCE)throw "Precedence predicates are not supported in lexers.";if(s.serializationType===C.PREDICATE)Xt.debug&&console.log("EVAL rule "+s.ruleIndex+":"+s.predIndex),i.hasSemanticContext=!0,this.evaluatePredicate(e,s.ruleIndex,s.predIndex,r)&&(a=new Yt({state:s.target},n));else if(s.serializationType===C.ACTION)if(null===n.context||n.context.hasEmptyPath()){const t=jt.append(n.lexerActionExecutor,this.atn.lexerActions[s.actionIndex]);a=new Yt({state:s.target,lexerActionExecutor:t},n);}else a=new Yt({state:s.target},n);else s.serializationType===C.EPSILON?a=new Yt({state:s.target},n):s.serializationType!==C.ATOM&&s.serializationType!==C.RANGE&&s.serializationType!==C.SET||o&&s.matches(t.EOF,0,Ut.MAX_CHAR_VALUE)&&(a=new Yt({state:s.target},n));}return a}evaluatePredicate(t,e,n,s){if(null===this.recog)return !0;if(!s)return this.recog.sempred(null,e,n);const i=this.column,r=this.line,o=t.index,a=t.mark();try{return this.consume(t),this.recog.sempred(null,e,n)}finally{this.column=i,this.line=r,t.seek(o),t.release(a);}}captureSimState(t,e,n){t.index=e.index,t.line=this.line,t.column=this.column,t.dfaState=n;}addDFAEdge(t,e,n,s){if(void 0===n&&(n=null),void 0===s&&(s=null),null===n&&null!==s){const t=s.hasSemanticContext;if(s.hasSemanticContext=!1,n=this.addDFAState(s),t)return n}return e<Xt.MIN_DFA_EDGE||e>Xt.MAX_DFA_EDGE||(Xt.debug&&console.log("EDGE "+t+" -> "+n+" upon "+e),null===t.edges&&(t.edges=[]),t.edges[e-Xt.MIN_DFA_EDGE]=n),n}addDFAState(t){const e=new qt(null,t);let n=null;for(let e=0;e<t.items.length;e++){const s=t.items[e];if(s.state instanceof A){n=s;break}}null!==n&&(e.isAcceptState=!0,e.lexerActionExecutor=n.lexerActionExecutor,e.prediction=this.atn.ruleToTokenType[n.state.ruleIndex]);const s=this.decisionToDFA[this.mode],i=s.states.get(e);if(null!==i)return i;const r=e;return r.stateNumber=s.states.length,t.setReadonly(!0),r.configs=t,s.states.add(r),r}getDFA(t){return this.decisionToDFA[t]}getText(t){return t.getText(this.startIndex,t.index-1)}consume(t){t.LA(1)==="\n".charCodeAt(0)?(this.line+=1,this.column=0):this.column+=1,t.consume();}getTokenName(t){return -1===t?"EOF":"'"+String.fromCharCode(t)+"'"}}Xt.debug=!1,Xt.dfa_debug=!1,Xt.MIN_DFA_EDGE=0,Xt.MAX_DFA_EDGE=127;class Jt{constructor(t,e){this.alt=e,this.pred=t;}toString(){return "("+this.pred+", "+this.alt+")"}}class Zt{constructor(){this.data={};}get(t){return this.data["k-"+t]||null}set(t,e){this.data["k-"+t]=e;}values(){return Object.keys(this.data).filter((t=>t.startsWith("k-"))).map((t=>this.data[t]),this)}}const Qt={SLL:0,LL:1,LL_EXACT_AMBIG_DETECTION:2,hasSLLConflictTerminatingPrediction:function(t,e){if(Qt.allConfigsInRuleStopStates(e))return !0;if(t===Qt.SLL&&e.hasSemanticContext){const t=new zt;for(let n=0;n<e.items.length;n++){let s=e.items[n];s=new S({semanticContext:p.NONE},s),t.add(s);}e=t;}const n=Qt.getConflictingAltSubsets(e);return Qt.hasConflictingAltSet(n)&&!Qt.hasStateAssociatedWithOneAlt(e)},hasConfigInRuleStopState:function(t){for(let e=0;e<t.items.length;e++)if(t.items[e].state instanceof A)return !0;return !1},allConfigsInRuleStopStates:function(t){for(let e=0;e<t.items.length;e++)if(!(t.items[e].state instanceof A))return !1;return !0},resolvesToJustOneViableAlt:function(t){return Qt.getSingleViableAlt(t)},allSubsetsConflict:function(t){return !Qt.hasNonConflictingAltSet(t)},hasNonConflictingAltSet:function(t){for(let e=0;e<t.length;e++)if(1===t[e].length)return !0;return !1},hasConflictingAltSet:function(t){for(let e=0;e<t.length;e++)if(t[e].length>1)return !0;return !1},allSubsetsEqual:function(t){let e=null;for(let n=0;n<t.length;n++){const s=t[n];if(null===e)e=s;else if(s!==e)return !1}return !0},getUniqueAlt:function(t){const e=Qt.getAlts(t);return 1===e.length?e.minValue():$.INVALID_ALT_NUMBER},getAlts:function(t){const e=new j;return t.map((function(t){e.or(t);})),e},getConflictingAltSubsets:function(t){const e=new H;return e.hashFunction=function(t){o.hashStuff(t.state.stateNumber,t.context);},e.equalsFunction=function(t,e){return t.state.stateNumber===e.state.stateNumber&&t.context.equals(e.context)},t.items.map((function(t){let n=e.get(t);null===n&&(n=new j,e.set(t,n)),n.add(t.alt);})),e.getValues()},getStateToAltMap:function(t){const e=new Zt;return t.items.map((function(t){let n=e.get(t.state);null===n&&(n=new j,e.set(t.state,n)),n.add(t.alt);})),e},hasStateAssociatedWithOneAlt:function(t){const e=Qt.getStateToAltMap(t).values();for(let t=0;t<e.length;t++)if(1===e[t].length)return !0;return !1},getSingleViableAlt:function(t){let e=null;for(let n=0;n<t.length;n++){const s=t[n].minValue();if(null===e)e=s;else if(e!==s)return $.INVALID_ALT_NUMBER}return e}},te=Qt;class ee extends Ft{constructor(t,e,n,s,i,r){r=r||t._ctx,s=s||t.getCurrentToken(),n=n||t.getCurrentToken(),e=e||t.getInputStream(),super({message:"",recognizer:t,input:e,ctx:r}),this.deadEndConfigs=i,this.startToken=n,this.offendingToken=s;}}class ne{constructor(t){this.defaultMapCtor=t||H,this.cacheMap=new this.defaultMapCtor;}get(t,e){const n=this.cacheMap.get(t)||null;return null===n?null:n.get(e)||null}set(t,e,n){let s=this.cacheMap.get(t)||null;null===s&&(s=new this.defaultMapCtor,this.cacheMap.set(t,s)),s.set(e,n);}}class se extends Ht{constructor(t,e,n,s){super(e,s),this.parser=t,this.decisionToDFA=n,this.predictionMode=te.LL,this._input=null,this._startIndex=0,this._outerContext=null,this._dfa=null,this.mergeCache=null,this.debug=!1,this.debug_closure=!1,this.debug_add=!1,this.trace_atn_sim=!1,this.dfa_debug=!1,this.retry_debug=!1;}reset(){}adaptivePredict(t,e,n){(this.debug||this.trace_atn_sim)&&console.log("adaptivePredict decision "+e+" exec LA(1)=="+this.getLookaheadName(t)+" line "+t.LT(1).line+":"+t.LT(1).column),this._input=t,this._startIndex=t.index,this._outerContext=n;const s=this.decisionToDFA[e];this._dfa=s;const i=t.mark(),r=t.index;try{let e;if(e=s.precedenceDfa?s.getPrecedenceStartState(this.parser.getPrecedence()):s.s0,null===e){null===n&&(n=M.EMPTY),this.debug&&console.log("predictATN decision "+s.decision+" exec LA(1)=="+this.getLookaheadName(t)+", outerContext="+n.toString(this.parser.ruleNames));const i=!1;let r=this.computeStartState(s.atnStartState,M.EMPTY,i);s.precedenceDfa?(s.s0.configs=r,r=this.applyPrecedenceFilter(r),e=this.addDFAState(s,new qt(null,r)),s.setPrecedenceStartState(this.parser.getPrecedence(),e)):(e=this.addDFAState(s,new qt(null,r)),s.s0=e);}const i=this.execATN(s,e,t,r,n);return this.debug&&console.log("DFA after predictATN: "+s.toString(this.parser.literalNames,this.parser.symbolicNames)),i}finally{this._dfa=null,this.mergeCache=null,t.seek(r),t.release(i);}}execATN(e,n,s,i,r){let o;(this.debug||this.trace_atn_sim)&&console.log("execATN decision "+e.decision+", DFA state "+n+", LA(1)=="+this.getLookaheadName(s)+" line "+s.LT(1).line+":"+s.LT(1).column);let a=n;this.debug&&console.log("s0 = "+n);let l=s.LA(1);for(;;){let n=this.getExistingTargetState(a,l);if(null===n&&(n=this.computeTargetState(e,a,l)),n===Ht.ERROR){const t=this.noViableAlt(s,r,a.configs,i);if(s.seek(i),o=this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(a.configs,r),o!==$.INVALID_ALT_NUMBER)return o;throw t}if(n.requiresFullContext&&this.predictionMode!==te.SLL){let t=null;if(null!==n.predicates){this.debug&&console.log("DFA state has preds in DFA sim LL failover");const e=s.index;if(e!==i&&s.seek(i),t=this.evalSemanticContext(n.predicates,r,!0),1===t.length)return this.debug&&console.log("Full LL avoided"),t.minValue();e!==i&&s.seek(e);}this.dfa_debug&&console.log("ctx sensitive state "+r+" in "+n);const a=!0,l=this.computeStartState(e.atnStartState,r,a);return this.reportAttemptingFullContext(e,t,n.configs,i,s.index),o=this.execATNWithFullContext(e,n,l,s,i,r),o}if(n.isAcceptState){if(null===n.predicates)return n.prediction;const t=s.index;s.seek(i);const o=this.evalSemanticContext(n.predicates,r,!0);if(0===o.length)throw this.noViableAlt(s,r,n.configs,i);return 1===o.length||this.reportAmbiguity(e,n,i,t,!1,o,n.configs),o.minValue()}a=n,l!==t.EOF&&(s.consume(),l=s.LA(1));}}getExistingTargetState(t,e){const n=t.edges;return null===n?null:n[e+1]||null}computeTargetState(t,e,n){const s=this.computeReachSet(e.configs,n,!1);if(null===s)return this.addDFAEdge(t,e,n,Ht.ERROR),Ht.ERROR;let i=new qt(null,s);const r=this.getUniqueAlt(s);if(this.debug){const t=te.getConflictingAltSubsets(s);console.log("SLL altSubSets="+c(t)+", configs="+s+", predict="+r+", allSubsetsConflict="+te.allSubsetsConflict(t)+", conflictingAlts="+this.getConflictingAlts(s));}return r!==$.INVALID_ALT_NUMBER?(i.isAcceptState=!0,i.configs.uniqueAlt=r,i.prediction=r):te.hasSLLConflictTerminatingPrediction(this.predictionMode,s)&&(i.configs.conflictingAlts=this.getConflictingAlts(s),i.requiresFullContext=!0,i.isAcceptState=!0,i.prediction=i.configs.conflictingAlts.minValue()),i.isAcceptState&&i.configs.hasSemanticContext&&(this.predicateDFAState(i,this.atn.getDecisionState(t.decision)),null!==i.predicates&&(i.prediction=$.INVALID_ALT_NUMBER)),i=this.addDFAEdge(t,e,n,i),i}predicateDFAState(t,e){const n=e.transitions.length,s=this.getConflictingAltsOrUniqueAlt(t.configs),i=this.getPredsForAmbigAlts(s,t.configs,n);null!==i?(t.predicates=this.getPredicatePredictions(s,i),t.prediction=$.INVALID_ALT_NUMBER):t.prediction=s.minValue();}execATNWithFullContext(e,n,s,i,r,o){(this.debug||this.trace_atn_sim)&&console.log("execATNWithFullContext "+s);let a,l=!1,h=s;i.seek(r);let c=i.LA(1),u=-1;for(;;){if(a=this.computeReachSet(h,c,!0),null===a){const t=this.noViableAlt(i,o,h,r);i.seek(r);const e=this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(h,o);if(e!==$.INVALID_ALT_NUMBER)return e;throw t}const e=te.getConflictingAltSubsets(a);if(this.debug&&console.log("LL altSubSets="+e+", predict="+te.getUniqueAlt(e)+", resolvesToJustOneViableAlt="+te.resolvesToJustOneViableAlt(e)),a.uniqueAlt=this.getUniqueAlt(a),a.uniqueAlt!==$.INVALID_ALT_NUMBER){u=a.uniqueAlt;break}if(this.predictionMode!==te.LL_EXACT_AMBIG_DETECTION){if(u=te.resolvesToJustOneViableAlt(e),u!==$.INVALID_ALT_NUMBER)break}else if(te.allSubsetsConflict(e)&&te.allSubsetsEqual(e)){l=!0,u=te.getSingleViableAlt(e);break}h=a,c!==t.EOF&&(i.consume(),c=i.LA(1));}return a.uniqueAlt!==$.INVALID_ALT_NUMBER?(this.reportContextSensitivity(e,u,a,r,i.index),u):(this.reportAmbiguity(e,n,r,i.index,l,null,a),u)}computeReachSet(e,n,s){this.debug&&console.log("in computeReachSet, starting closure: "+e),null===this.mergeCache&&(this.mergeCache=new ne);const i=new zt(s);let r=null;for(let o=0;o<e.items.length;o++){const a=e.items[o];if(this.debug&&console.log("testing "+this.getTokenName(n)+" at "+a),a.state instanceof A)(s||n===t.EOF)&&(null===r&&(r=[]),r.push(a),this.debug_add&&console.log("added "+a+" to skippedStopStates"));else for(let t=0;t<a.state.transitions.length;t++){const e=a.state.transitions[t],s=this.getReachableTarget(e,n);if(null!==s){const t=new S({state:s},a);i.add(t,this.mergeCache),this.debug_add&&console.log("added "+t+" to intermediate");}}}let o=null;if(null===r&&n!==t.EOF&&(1===i.items.length||this.getUniqueAlt(i)!==$.INVALID_ALT_NUMBER)&&(o=i),null===o){o=new zt(s);const e=new d,r=n===t.EOF;for(let t=0;t<i.items.length;t++)this.closure(i.items[t],o,e,!1,s,r);}if(n===t.EOF&&(o=this.removeAllConfigsNotInRuleStopState(o,o===i)),!(null===r||s&&te.hasConfigInRuleStopState(o)))for(let t=0;t<r.length;t++)o.add(r[t],this.mergeCache);return this.trace_atn_sim&&console.log("computeReachSet "+e+" -> "+o),0===o.items.length?null:o}removeAllConfigsNotInRuleStopState(e,n){if(te.allConfigsInRuleStopStates(e))return e;const s=new zt(e.fullCtx);for(let i=0;i<e.items.length;i++){const r=e.items[i];if(r.state instanceof A)s.add(r,this.mergeCache);else if(n&&r.state.epsilonOnlyTransitions&&this.atn.nextTokens(r.state).contains(t.EPSILON)){const t=this.atn.ruleToStopState[r.state.ruleIndex];s.add(new S({state:t},r),this.mergeCache);}}return s}computeStartState(t,e,n){const s=K(this.atn,e),i=new zt(n);this.trace_atn_sim&&console.log("computeStartState from ATN state "+t+" initialContext="+s.toString(this.parser));for(let e=0;e<t.transitions.length;e++){const r=t.transitions[e].target,o=new S({state:r,alt:e+1,context:s},null),a=new d;this.closure(o,i,a,!0,n,!1);}return i}applyPrecedenceFilter(t){let e;const n=[],s=new zt(t.fullCtx);for(let i=0;i<t.items.length;i++){if(e=t.items[i],1!==e.alt)continue;const r=e.semanticContext.evalPrecedence(this.parser,this._outerContext);null!==r&&(n[e.state.stateNumber]=e.context,r!==e.semanticContext?s.add(new S({semanticContext:r},e),this.mergeCache):s.add(e,this.mergeCache));}for(let i=0;i<t.items.length;i++)if(e=t.items[i],1!==e.alt){if(!e.precedenceFilterSuppressed){const t=n[e.state.stateNumber]||null;if(null!==t&&t.equals(e.context))continue}s.add(e,this.mergeCache);}return s}getReachableTarget(t,e){return t.matches(e,0,this.atn.maxTokenType)?t.target:null}getPredsForAmbigAlts(t,e,n){let s=[];for(let n=0;n<e.items.length;n++){const i=e.items[n];t.has(i.alt)&&(s[i.alt]=p.orContext(s[i.alt]||null,i.semanticContext));}let i=0;for(let t=1;t<n+1;t++){const e=s[t]||null;null===e?s[t]=p.NONE:e!==p.NONE&&(i+=1);}return 0===i&&(s=null),this.debug&&console.log("getPredsForAmbigAlts result "+c(s)),s}getPredicatePredictions(t,e){const n=[];let s=!1;for(let i=1;i<e.length;i++){const r=e[i];null!==t&&t.has(i)&&n.push(new Jt(r,i)),r!==p.NONE&&(s=!0);}return s?n:null}getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(t,e){const n=this.splitAccordingToSemanticValidity(t,e),s=n[0],i=n[1];let r=this.getAltThatFinishedDecisionEntryRule(s);return r!==$.INVALID_ALT_NUMBER||i.items.length>0&&(r=this.getAltThatFinishedDecisionEntryRule(i),r!==$.INVALID_ALT_NUMBER)?r:$.INVALID_ALT_NUMBER}getAltThatFinishedDecisionEntryRule(t){const e=[];for(let n=0;n<t.items.length;n++){const s=t.items[n];(s.reachesIntoOuterContext>0||s.state instanceof A&&s.context.hasEmptyPath())&&e.indexOf(s.alt)<0&&e.push(s.alt);}return 0===e.length?$.INVALID_ALT_NUMBER:Math.min.apply(null,e)}splitAccordingToSemanticValidity(t,e){const n=new zt(t.fullCtx),s=new zt(t.fullCtx);for(let i=0;i<t.items.length;i++){const r=t.items[i];r.semanticContext!==p.NONE?r.semanticContext.evaluate(this.parser,e)?n.add(r):s.add(r):n.add(r);}return [n,s]}evalSemanticContext(t,e,n){const s=new j;for(let i=0;i<t.length;i++){const r=t[i];if(r.pred===p.NONE){if(s.add(r.alt),!n)break;continue}const o=r.pred.evaluate(this.parser,e);if((this.debug||this.dfa_debug)&&console.log("eval pred "+r+"="+o),o&&((this.debug||this.dfa_debug)&&console.log("PREDICT "+r.alt),s.add(r.alt),!n))break}return s}closure(t,e,n,s,i,r){this.closureCheckingStopState(t,e,n,s,i,0,r);}closureCheckingStopState(t,e,n,s,i,r,o){if((this.trace_atn_sim||this.debug_closure)&&console.log("closure("+t.toString(this.parser,!0)+")"),t.state instanceof A){if(!t.context.isEmpty()){for(let a=0;a<t.context.length;a++){if(t.context.getReturnState(a)===U.EMPTY_RETURN_STATE){if(i){e.add(new S({state:t.state,context:U.EMPTY},t),this.mergeCache);continue}this.debug&&console.log("FALLING off rule "+this.getRuleName(t.state.ruleIndex)),this.closure_(t,e,n,s,i,r,o);continue}const l=this.atn.states[t.context.getReturnState(a)],h=t.context.getParent(a),c={state:l,alt:t.alt,context:h,semanticContext:t.semanticContext},u=new S(c,null);u.reachesIntoOuterContext=t.reachesIntoOuterContext,this.closureCheckingStopState(u,e,n,s,i,r-1,o);}return}if(i)return void e.add(t,this.mergeCache);this.debug&&console.log("FALLING off rule "+this.getRuleName(t.state.ruleIndex));}this.closure_(t,e,n,s,i,r,o);}closure_(t,e,n,s,i,r,o){const a=t.state;a.epsilonOnlyTransitions||e.add(t,this.mergeCache);for(let l=0;l<a.transitions.length;l++){if(0===l&&this.canDropLoopEntryEdgeInLeftRecursiveRule(t))continue;const h=a.transitions[l],c=s&&!(h instanceof ut),u=this.getEpsilonTarget(t,h,c,0===r,i,o);if(null!==u){let s=r;if(t.state instanceof A){if(null!==this._dfa&&this._dfa.precedenceDfa&&h.outermostPrecedenceReturn===this._dfa.atnStartState.ruleIndex&&(u.precedenceFilterSuppressed=!0),u.reachesIntoOuterContext+=1,n.add(u)!==u)continue;e.dipsIntoOuterContext=!0,s-=1,this.debug&&console.log("dips into outer ctx: "+u);}else {if(!h.isEpsilon&&n.add(u)!==u)continue;h instanceof N&&s>=0&&(s+=1);}this.closureCheckingStopState(u,e,n,c,i,s,o);}}}canDropLoopEntryEdgeInLeftRecursiveRule(t){const e=t.state;if(e.stateType!==_.STAR_LOOP_ENTRY)return !1;if(e.stateType!==_.STAR_LOOP_ENTRY||!e.isPrecedenceDecision||t.context.isEmpty()||t.context.hasEmptyPath())return !1;const n=t.context.length;for(let s=0;s<n;s++)if(this.atn.states[t.context.getReturnState(s)].ruleIndex!==e.ruleIndex)return !1;const s=e.transitions[0].target.endState.stateNumber,i=this.atn.states[s];for(let s=0;s<n;s++){const n=t.context.getReturnState(s),r=this.atn.states[n];if(1!==r.transitions.length||!r.transitions[0].isEpsilon)return !1;const o=r.transitions[0].target;if(!(r.stateType===_.BLOCK_END&&o===e||r===i||o===i||o.stateType===_.BLOCK_END&&1===o.transitions.length&&o.transitions[0].isEpsilon&&o.transitions[0].target===e))return !1}return !0}getRuleName(t){return null!==this.parser&&t>=0?this.parser.ruleNames[t]:"<rule "+t+">"}getEpsilonTarget(e,n,s,i,r,o){switch(n.serializationType){case C.RULE:return this.ruleTransition(e,n);case C.PRECEDENCE:return this.precedenceTransition(e,n,s,i,r);case C.PREDICATE:return this.predTransition(e,n,s,i,r);case C.ACTION:return this.actionTransition(e,n);case C.EPSILON:return new S({state:n.target},e);case C.ATOM:case C.RANGE:case C.SET:return o&&n.matches(t.EOF,0,1)?new S({state:n.target},e):null;default:return null}}actionTransition(t,e){if(this.debug){const t=-1===e.actionIndex?65535:e.actionIndex;console.log("ACTION edge "+e.ruleIndex+":"+t);}return new S({state:e.target},t)}precedenceTransition(t,e,n,s,i){this.debug&&(console.log("PRED (collectPredicates="+n+") "+e.precedence+">=_p, ctx dependent=true"),null!==this.parser&&console.log("context surrounding pred is "+c(this.parser.getRuleInvocationStack())));let r=null;if(n&&s)if(i){const n=this._input.index;this._input.seek(this._startIndex);const s=e.getPredicate().evaluate(this.parser,this._outerContext);this._input.seek(n),s&&(r=new S({state:e.target},t));}else {const n=p.andContext(t.semanticContext,e.getPredicate());r=new S({state:e.target,semanticContext:n},t);}else r=new S({state:e.target},t);return this.debug&&console.log("config from pred transition="+r),r}predTransition(t,e,n,s,i){this.debug&&(console.log("PRED (collectPredicates="+n+") "+e.ruleIndex+":"+e.predIndex+", ctx dependent="+e.isCtxDependent),null!==this.parser&&console.log("context surrounding pred is "+c(this.parser.getRuleInvocationStack())));let r=null;if(n&&(e.isCtxDependent&&s||!e.isCtxDependent))if(i){const n=this._input.index;this._input.seek(this._startIndex);const s=e.getPredicate().evaluate(this.parser,this._outerContext);this._input.seek(n),s&&(r=new S({state:e.target},t));}else {const n=p.andContext(t.semanticContext,e.getPredicate());r=new S({state:e.target,semanticContext:n},t);}else r=new S({state:e.target},t);return this.debug&&console.log("config from pred transition="+r),r}ruleTransition(t,e){this.debug&&console.log("CALL rule "+this.getRuleName(e.target.ruleIndex)+", ctx="+t.context);const n=e.followState,s=V.create(t.context,n.stateNumber);return new S({state:e.target,context:s},t)}getConflictingAlts(t){const e=te.getConflictingAltSubsets(t);return te.getAlts(e)}getConflictingAltsOrUniqueAlt(t){let e=null;return t.uniqueAlt!==$.INVALID_ALT_NUMBER?(e=new j,e.add(t.uniqueAlt)):e=t.conflictingAlts,e}getTokenName(e){if(e===t.EOF)return "EOF";if(null!==this.parser&&null!==this.parser.literalNames){if(!(e>=this.parser.literalNames.length&&e>=this.parser.symbolicNames.length))return (this.parser.literalNames[e]||this.parser.symbolicNames[e])+"<"+e+">";console.log(e+" ttype out of range: "+this.parser.literalNames),console.log(""+this.parser.getInputStream().getTokens());}return ""+e}getLookaheadName(t){return this.getTokenName(t.LA(1))}dumpDeadEndConfigs(t){console.log("dead end configs: ");const e=t.getDeadEndConfigs();for(let t=0;t<e.length;t++){const n=e[t];let s="no edges";if(n.state.transitions.length>0){const t=n.state.transitions[0];t instanceof ht?s="Atom "+this.getTokenName(t.label):t instanceof y&&(s=(t instanceof I?"~":"")+"Set "+t.set);}console.error(n.toString(this.parser,!0)+":"+s);}}noViableAlt(t,e,n,s){return new ee(this.parser,t,t.get(s),t.LT(1),n,e)}getUniqueAlt(t){let e=$.INVALID_ALT_NUMBER;for(let n=0;n<t.items.length;n++){const s=t.items[n];if(e===$.INVALID_ALT_NUMBER)e=s.alt;else if(s.alt!==e)return $.INVALID_ALT_NUMBER}return e}addDFAEdge(t,e,n,s){if(this.debug&&console.log("EDGE "+e+" -> "+s+" upon "+this.getTokenName(n)),null===s)return null;if(s=this.addDFAState(t,s),null===e||n<-1||n>this.atn.maxTokenType)return s;if(null===e.edges&&(e.edges=[]),e.edges[n+1]=s,this.debug){const e=null===this.parser?null:this.parser.literalNames,n=null===this.parser?null:this.parser.symbolicNames;console.log("DFA=\n"+t.toString(e,n));}return s}addDFAState(t,e){if(e===Ht.ERROR)return e;const n=t.states.get(e);return null!==n?(this.trace_atn_sim&&console.log("addDFAState "+e+" exists"),n):(e.stateNumber=t.states.length,e.configs.readOnly||(e.configs.optimizeConfigs(this),e.configs.setReadonly(!0)),this.trace_atn_sim&&console.log("addDFAState new "+e),t.states.add(e),this.debug&&console.log("adding new DFA state: "+e),e)}reportAttemptingFullContext(t,e,n,s,i){if(this.debug||this.retry_debug){const e=new m(s,i+1);console.log("reportAttemptingFullContext decision="+t.decision+":"+n+", input="+this.parser.getTokenStream().getText(e));}null!==this.parser&&this.parser.getErrorListenerDispatch().reportAttemptingFullContext(this.parser,t,s,i,e,n);}reportContextSensitivity(t,e,n,s,i){if(this.debug||this.retry_debug){const e=new m(s,i+1);console.log("reportContextSensitivity decision="+t.decision+":"+n+", input="+this.parser.getTokenStream().getText(e));}null!==this.parser&&this.parser.getErrorListenerDispatch().reportContextSensitivity(this.parser,t,s,i,e,n);}reportAmbiguity(t,e,n,s,i,r,o){if(this.debug||this.retry_debug){const t=new m(n,s+1);console.log("reportAmbiguity "+r+":"+o+", input="+this.parser.getTokenStream().getText(t));}null!==this.parser&&this.parser.getErrorListenerDispatch().reportAmbiguity(this.parser,t,n,s,i,r,o);}}class ie{constructor(){this.cache=new H;}add(t){if(t===U.EMPTY)return U.EMPTY;const e=this.cache.get(t)||null;return null!==e?e:(this.cache.set(t,t),t)}get(t){return this.cache.get(t)||null}get length(){return this.cache.length}}const re={ATN:$,ATNDeserializer:Lt,LexerATNSimulator:Xt,ParserATNSimulator:se,PredictionMode:te,PredictionContextCache:ie};class oe{constructor(t,e,n){this.dfa=t,this.literalNames=e||[],this.symbolicNames=n||[];}toString(){if(null===this.dfa.s0)return null;let t="";const e=this.dfa.sortedStates();for(let n=0;n<e.length;n++){const s=e[n];if(null!==s.edges){const e=s.edges.length;for(let n=0;n<e;n++){const e=s.edges[n]||null;null!==e&&2147483647!==e.stateNumber&&(t=t.concat(this.getStateString(s)),t=t.concat("-"),t=t.concat(this.getEdgeLabel(n)),t=t.concat("->"),t=t.concat(this.getStateString(e)),t=t.concat("\n"));}}}return 0===t.length?null:t}getEdgeLabel(t){return 0===t?"EOF":null!==this.literalNames||null!==this.symbolicNames?this.literalNames[t-1]||this.symbolicNames[t-1]:String.fromCharCode(t-1)}getStateString(t){const e=(t.isAcceptState?":":"")+"s"+t.stateNumber+(t.requiresFullContext?"^":"");return t.isAcceptState?null!==t.predicates?e+"=>"+c(t.predicates):e+"=>"+t.prediction.toString():e}}class ae extends oe{constructor(t){super(t,null);}getEdgeLabel(t){return "'"+String.fromCharCode(t)+"'"}}class le{constructor(t,e){if(void 0===e&&(e=0),this.atnStartState=t,this.decision=e,this._states=new d,this.s0=null,this.precedenceDfa=!1,t instanceof rt&&t.isPrecedenceDecision){this.precedenceDfa=!0;const t=new qt(null,new zt);t.edges=[],t.isAcceptState=!1,t.requiresFullContext=!1,this.s0=t;}}getPrecedenceStartState(t){if(!this.precedenceDfa)throw "Only precedence DFAs may contain a precedence start state.";return t<0||t>=this.s0.edges.length?null:this.s0.edges[t]||null}setPrecedenceStartState(t,e){if(!this.precedenceDfa)throw "Only precedence DFAs may contain a precedence start state.";t<0||(this.s0.edges[t]=e);}setPrecedenceDfa(t){if(this.precedenceDfa!==t){if(this._states=new d,t){const t=new qt(null,new zt);t.edges=[],t.isAcceptState=!1,t.requiresFullContext=!1,this.s0=t;}else this.s0=null;this.precedenceDfa=t;}}sortedStates(){return this._states.values().sort((function(t,e){return t.stateNumber-e.stateNumber}))}toString(t,e){return t=t||null,e=e||null,null===this.s0?"":new oe(this,t,e).toString()}toLexerString(){return null===this.s0?"":new ae(this).toString()}get states(){return this._states}}const he={DFA:le,DFASerializer:oe,LexerDFASerializer:ae,PredPrediction:Jt},ce={PredictionContext:U},ue={Interval:m,IntervalSet:E};class de{visitTerminal(t){}visitErrorNode(t){}enterEveryRule(t){}exitEveryRule(t){}}class pe{visit(t){return Array.isArray(t)?t.map((function(t){return t.accept(this)}),this):t.accept(this)}visitChildren(t){return t.children?this.visit(t.children):null}visitTerminal(t){}visitErrorNode(t){}}class ge{walk(t,e){if(e instanceof b||void 0!==e.isErrorNode&&e.isErrorNode())t.visitErrorNode(e);else if(e instanceof P)t.visitTerminal(e);else {this.enterRule(t,e);for(let n=0;n<e.getChildCount();n++){const s=e.getChild(n);this.walk(t,s);}this.exitRule(t,e);}}enterRule(t,e){const n=e.ruleContext;t.enterEveryRule(n),n.enterRule(t);}exitRule(t,e){const n=e.ruleContext;n.exitRule(t),t.exitEveryRule(n);}}ge.DEFAULT=new ge;const fe={Trees:F,RuleNode:w,ErrorNode:b,TerminalNode:P,ParseTreeListener:de,ParseTreeVisitor:pe,ParseTreeWalker:ge};class xe extends Ft{constructor(t){super({message:"",recognizer:t,input:t.getInputStream(),ctx:t._ctx}),this.offendingToken=t.getCurrentToken();}}class Te extends Ft{constructor(t,e,n){super({message:Se(e,n||null),recognizer:t,input:t.getInputStream(),ctx:t._ctx});const s=t._interp.atn.states[t.state].transitions[0];s instanceof gt?(this.ruleIndex=s.ruleIndex,this.predicateIndex=s.predIndex):(this.ruleIndex=0,this.predicateIndex=0),this.predicate=e,this.offendingToken=t.getCurrentToken();}}function Se(t,e){return null!==e?e:"failed predicate: {"+t+"}?"}class me extends Ot{constructor(t){super(),t=t||!0,this.exactOnly=t;}reportAmbiguity(t,e,n,s,i,r,o){if(this.exactOnly&&!i)return;const a="reportAmbiguity d="+this.getDecisionDescription(t,e)+": ambigAlts="+this.getConflictingAlts(r,o)+", input='"+t.getTokenStream().getText(new m(n,s))+"'";t.notifyErrorListeners(a);}reportAttemptingFullContext(t,e,n,s,i,r){const o="reportAttemptingFullContext d="+this.getDecisionDescription(t,e)+", input='"+t.getTokenStream().getText(new m(n,s))+"'";t.notifyErrorListeners(o);}reportContextSensitivity(t,e,n,s,i,r){const o="reportContextSensitivity d="+this.getDecisionDescription(t,e)+", input='"+t.getTokenStream().getText(new m(n,s))+"'";t.notifyErrorListeners(o);}getDecisionDescription(t,e){const n=e.decision,s=e.atnStartState.ruleIndex,i=t.ruleNames;if(s<0||s>=i.length)return ""+n;const r=i[s]||null;return null===r||0===r.length?""+n:`${n} (${r})`}getConflictingAlts(t,e){if(null!==t)return t;const n=new j;for(let t=0;t<e.items.length;t++)n.add(e.items[t].alt);return `{${n.values().join(", ")}}`}}class Ee extends Error{constructor(){super(),Error.captureStackTrace(this,Ee);}}class _e{reset(t){}recoverInline(t){}recover(t,e){}sync(t){}inErrorRecoveryMode(t){}reportError(t){}}class Ae extends _e{constructor(){super(),this.errorRecoveryMode=!1,this.lastErrorIndex=-1,this.lastErrorStates=null,this.nextTokensContext=null,this.nextTokenState=0;}reset(t){this.endErrorCondition(t);}beginErrorCondition(t){this.errorRecoveryMode=!0;}inErrorRecoveryMode(t){return this.errorRecoveryMode}endErrorCondition(t){this.errorRecoveryMode=!1,this.lastErrorStates=null,this.lastErrorIndex=-1;}reportMatch(t){this.endErrorCondition(t);}reportError(t,e){this.inErrorRecoveryMode(t)||(this.beginErrorCondition(t),e instanceof ee?this.reportNoViableAlternative(t,e):e instanceof xe?this.reportInputMismatch(t,e):e instanceof Te?this.reportFailedPredicate(t,e):(console.log("unknown recognition error type: "+e.constructor.name),console.log(e.stack),t.notifyErrorListeners(e.getOffendingToken(),e.getMessage(),e)));}recover(t,e){this.lastErrorIndex===t.getInputStream().index&&null!==this.lastErrorStates&&this.lastErrorStates.indexOf(t.state)>=0&&t.consume(),this.lastErrorIndex=t._input.index,null===this.lastErrorStates&&(this.lastErrorStates=[]),this.lastErrorStates.push(t.state);const n=this.getErrorRecoverySet(t);this.consumeUntil(t,n);}sync(e){if(this.inErrorRecoveryMode(e))return;const n=e._interp.atn.states[e.state],s=e.getTokenStream().LA(1),i=e.atn.nextTokens(n);if(i.contains(s))return this.nextTokensContext=null,void(this.nextTokenState=_.INVALID_STATE_NUMBER);if(i.contains(t.EPSILON))null===this.nextTokensContext&&(this.nextTokensContext=e._ctx,this.nextTokensState=e._stateNumber);else switch(n.stateType){case _.BLOCK_START:case _.STAR_BLOCK_START:case _.PLUS_BLOCK_START:case _.STAR_LOOP_ENTRY:if(null!==this.singleTokenDeletion(e))return;throw new xe(e);case _.PLUS_LOOP_BACK:case _.STAR_LOOP_BACK:{this.reportUnwantedToken(e);const t=new E;t.addSet(e.getExpectedTokens());const n=t.addSet(this.getErrorRecoverySet(e));this.consumeUntil(e,n);}}}reportNoViableAlternative(e,n){const s=e.getTokenStream();let i;i=null!==s?n.startToken.type===t.EOF?"<EOF>":s.getText(new m(n.startToken.tokenIndex,n.offendingToken.tokenIndex)):"<unknown input>";const r="no viable alternative at input "+this.escapeWSAndQuote(i);e.notifyErrorListeners(r,n.offendingToken,n);}reportInputMismatch(t,e){const n="mismatched input "+this.getTokenErrorDisplay(e.offendingToken)+" expecting "+e.getExpectedTokens().toString(t.literalNames,t.symbolicNames);t.notifyErrorListeners(n,e.offendingToken,e);}reportFailedPredicate(t,e){const n="rule "+t.ruleNames[t._ctx.ruleIndex]+" "+e.message;t.notifyErrorListeners(n,e.offendingToken,e);}reportUnwantedToken(t){if(this.inErrorRecoveryMode(t))return;this.beginErrorCondition(t);const e=t.getCurrentToken(),n="extraneous input "+this.getTokenErrorDisplay(e)+" expecting "+this.getExpectedTokens(t).toString(t.literalNames,t.symbolicNames);t.notifyErrorListeners(n,e,null);}reportMissingToken(t){if(this.inErrorRecoveryMode(t))return;this.beginErrorCondition(t);const e=t.getCurrentToken(),n="missing "+this.getExpectedTokens(t).toString(t.literalNames,t.symbolicNames)+" at "+this.getTokenErrorDisplay(e);t.notifyErrorListeners(n,e,null);}recoverInline(t){const e=this.singleTokenDeletion(t);if(null!==e)return t.consume(),e;if(this.singleTokenInsertion(t))return this.getMissingSymbol(t);throw new xe(t)}singleTokenInsertion(t){const e=t.getTokenStream().LA(1),n=t._interp.atn,s=n.states[t.state].transitions[0].target;return !!n.nextTokens(s,t._ctx).contains(e)&&(this.reportMissingToken(t),!0)}singleTokenDeletion(t){const e=t.getTokenStream().LA(2);if(this.getExpectedTokens(t).contains(e)){this.reportUnwantedToken(t),t.consume();const e=t.getCurrentToken();return this.reportMatch(t),e}return null}getMissingSymbol(e){const n=e.getCurrentToken(),s=this.getExpectedTokens(e).first();let i;i=s===t.EOF?"<missing EOF>":"<missing "+e.literalNames[s]+">";let r=n;const o=e.getTokenStream().LT(-1);return r.type===t.EOF&&null!==o&&(r=o),e.getTokenFactory().create(r.source,s,i,t.DEFAULT_CHANNEL,-1,-1,r.line,r.column)}getExpectedTokens(t){return t.getExpectedTokens()}getTokenErrorDisplay(e){if(null===e)return "<no token>";let n=e.text;return null===n&&(n=e.type===t.EOF?"<EOF>":"<"+e.type+">"),this.escapeWSAndQuote(n)}escapeWSAndQuote(t){return "'"+(t=(t=(t=t.replace(/\n/g,"\\n")).replace(/\r/g,"\\r")).replace(/\t/g,"\\t"))+"'"}getErrorRecoverySet(e){const n=e._interp.atn;let s=e._ctx;const i=new E;for(;null!==s&&s.invokingState>=0;){const t=n.states[s.invokingState].transitions[0],e=n.nextTokens(t.followState);i.addSet(e),s=s.parentCtx;}return i.removeOne(t.EPSILON),i}consumeUntil(e,n){let s=e.getTokenStream().LA(1);for(;s!==t.EOF&&!n.contains(s);)e.consume(),s=e.getTokenStream().LA(1);}}class Ce extends Ae{constructor(){super();}recover(t,e){let n=t._ctx;for(;null!==n;)n.exception=e,n=n.parentCtx;throw new Ee(e)}recoverInline(t){this.recover(t,new xe(t));}sync(t){}}const Ne={RecognitionException:Ft,NoViableAltException:ee,LexerNoViableAltException:Mt,InputMismatchException:xe,FailedPredicateException:Te,DiagnosticErrorListener:me,BailErrorStrategy:Ce,DefaultErrorStrategy:Ae,ErrorListener:Ot};class ye{constructor(t,e){if(this.name="<empty>",this.strdata=t,this.decodeToUnicodeCodePoints=e||!1,this._index=0,this.data=[],this.decodeToUnicodeCodePoints)for(let t=0;t<this.strdata.length;){const e=this.strdata.codePointAt(t);this.data.push(e),t+=e<=65535?1:2;}else {this.data=new Array(this.strdata.length);for(let t=0;t<this.strdata.length;t++)this.data[t]=this.strdata.charCodeAt(t);}this._size=this.data.length;}reset(){this._index=0;}consume(){if(this._index>=this._size)throw "cannot consume EOF";this._index+=1;}LA(e){if(0===e)return 0;e<0&&(e+=1);const n=this._index+e-1;return n<0||n>=this._size?t.EOF:this.data[n]}LT(t){return this.LA(t)}mark(){return -1}release(t){}seek(t){t<=this._index?this._index=t:this._index=Math.min(t,this._size);}getText(t,e){if(e>=this._size&&(e=this._size-1),t>=this._size)return "";if(this.decodeToUnicodeCodePoints){let n="";for(let s=t;s<=e;s++)n+=String.fromCodePoint(this.data[s]);return n}return this.strdata.slice(t,e+1)}toString(){return this.strdata}get index(){return this._index}get size(){return this._size}}class Ie extends ye{constructor(t,e){super(t,e);}}var ke=n(92);const Le="undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node;class Oe extends Ie{static fromPath(t,e,n){if(!Le)throw new Error("FileStream is only available when running in Node!");ke.readFile(t,e,(function(t,e){let s=null;null!==e&&(s=new ye(e,!0)),n(t,s);}));}constructor(t,e,n){if(!Le)throw new Error("FileStream is only available when running in Node!");super(ke.readFileSync(t,e||"utf-8"),n),this.fileName=t;}}const ve={fromString:function(t){return new ye(t,!0)},fromBlob:function(t,e,n,s){const i=new window.FileReader;i.onload=function(t){const e=new ye(t.target.result,!0);n(e);},i.onerror=s,i.readAsText(t,e);},fromBuffer:function(t,e){return new ye(t.toString(e),!0)},fromPath:function(t,e,n){Oe.fromPath(t,e,n);},fromPathSync:function(t,e){return new Oe(t,e)}},Re={arrayToString:c,stringToCharArray:function(t){let e=new Uint16Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}};class we{}class Pe extends we{constructor(t){super(),this.tokenSource=t,this.tokens=[],this.index=-1,this.fetchedEOF=!1;}mark(){return 0}release(t){}reset(){this.seek(0);}seek(t){this.lazyInit(),this.index=this.adjustSeekIndex(t);}get size(){return this.tokens.length}get(t){return this.lazyInit(),this.tokens[t]}consume(){let e=!1;if(e=this.index>=0&&(this.fetchedEOF?this.index<this.tokens.length-1:this.index<this.tokens.length),!e&&this.LA(1)===t.EOF)throw "cannot consume EOF";this.sync(this.index+1)&&(this.index=this.adjustSeekIndex(this.index+1));}sync(t){const e=t-this.tokens.length+1;return !(e>0)||this.fetch(e)>=e}fetch(e){if(this.fetchedEOF)return 0;for(let n=0;n<e;n++){const e=this.tokenSource.nextToken();if(e.tokenIndex=this.tokens.length,this.tokens.push(e),e.type===t.EOF)return this.fetchedEOF=!0,n+1}return e}getTokens(e,n,s){if(void 0===s&&(s=null),e<0||n<0)return null;this.lazyInit();const i=[];n>=this.tokens.length&&(n=this.tokens.length-1);for(let r=e;r<n;r++){const e=this.tokens[r];if(e.type===t.EOF)break;(null===s||s.contains(e.type))&&i.push(e);}return i}LA(t){return this.LT(t).type}LB(t){return this.index-t<0?null:this.tokens[this.index-t]}LT(t){if(this.lazyInit(),0===t)return null;if(t<0)return this.LB(-t);const e=this.index+t-1;return this.sync(e),e>=this.tokens.length?this.tokens[this.tokens.length-1]:this.tokens[e]}adjustSeekIndex(t){return t}lazyInit(){-1===this.index&&this.setup();}setup(){this.sync(0),this.index=this.adjustSeekIndex(0);}setTokenSource(t){this.tokenSource=t,this.tokens=[],this.index=-1,this.fetchedEOF=!1;}nextTokenOnChannel(e,n){if(this.sync(e),e>=this.tokens.length)return -1;let s=this.tokens[e];for(;s.channel!==this.channel;){if(s.type===t.EOF)return -1;e+=1,this.sync(e),s=this.tokens[e];}return e}previousTokenOnChannel(t,e){for(;t>=0&&this.tokens[t].channel!==e;)t-=1;return t}getHiddenTokensToRight(t,e){if(void 0===e&&(e=-1),this.lazyInit(),t<0||t>=this.tokens.length)throw t+" not in 0.."+this.tokens.length-1;const n=this.nextTokenOnChannel(t+1,Ut.DEFAULT_TOKEN_CHANNEL),s=t+1,i=-1===n?this.tokens.length-1:n;return this.filterForChannel(s,i,e)}getHiddenTokensToLeft(t,e){if(void 0===e&&(e=-1),this.lazyInit(),t<0||t>=this.tokens.length)throw t+" not in 0.."+this.tokens.length-1;const n=this.previousTokenOnChannel(t-1,Ut.DEFAULT_TOKEN_CHANNEL);if(n===t-1)return null;const s=n+1,i=t-1;return this.filterForChannel(s,i,e)}filterForChannel(t,e,n){const s=[];for(let i=t;i<e+1;i++){const t=this.tokens[i];-1===n?t.channel!==Ut.DEFAULT_TOKEN_CHANNEL&&s.push(t):t.channel===n&&s.push(t);}return 0===s.length?null:s}getSourceName(){return this.tokenSource.getSourceName()}getText(e){this.lazyInit(),this.fill(),e||(e=new m(0,this.tokens.length-1));let n=e.start;n instanceof t&&(n=n.tokenIndex);let s=e.stop;if(s instanceof t&&(s=s.tokenIndex),null===n||null===s||n<0||s<0)return "";s>=this.tokens.length&&(s=this.tokens.length-1);let i="";for(let e=n;e<s+1;e++){const n=this.tokens[e];if(n.type===t.EOF)break;i+=n.text;}return i}fill(){for(this.lazyInit();1e3===this.fetch(1e3););}}Object.defineProperty(Pe,"size",{get:function(){return this.tokens.length}});class be extends Pe{constructor(e,n){super(e),this.channel=void 0===n?t.DEFAULT_CHANNEL:n;}adjustSeekIndex(t){return this.nextTokenOnChannel(t,this.channel)}LB(t){if(0===t||this.index-t<0)return null;let e=this.index,n=1;for(;n<=t;)e=this.previousTokenOnChannel(e-1,this.channel),n+=1;return e<0?null:this.tokens[e]}LT(t){if(this.lazyInit(),0===t)return null;if(t<0)return this.LB(-t);let e=this.index,n=1;for(;n<t;)this.sync(e+1)&&(e=this.nextTokenOnChannel(e+1,this.channel)),n+=1;return this.tokens[e]}getNumberOfOnChannelTokens(){let e=0;this.fill();for(let n=0;n<this.tokens.length;n++){const s=this.tokens[n];if(s.channel===this.channel&&(e+=1),s.type===t.EOF)break}return e}}class De extends de{constructor(t){super(),this.parser=t;}enterEveryRule(t){console.log("enter   "+this.parser.ruleNames[t.ruleIndex]+", LT(1)="+this.parser._input.LT(1).text);}visitTerminal(t){console.log("consume "+t.symbol+" rule "+this.parser.ruleNames[this.parser._ctx.ruleIndex]);}exitEveryRule(t){console.log("exit    "+this.parser.ruleNames[t.ruleIndex]+", LT(1)="+this.parser._input.LT(1).text);}}class Fe extends wt{constructor(t){super(),this._input=null,this._errHandler=new Ae,this._precedenceStack=[],this._precedenceStack.push(0),this._ctx=null,this.buildParseTrees=!0,this._tracer=null,this._parseListeners=null,this._syntaxErrors=0,this.setInputStream(t);}reset(){null!==this._input&&this._input.seek(0),this._errHandler.reset(this),this._ctx=null,this._syntaxErrors=0,this.setTrace(!1),this._precedenceStack=[],this._precedenceStack.push(0),null!==this._interp&&this._interp.reset();}match(t){let e=this.getCurrentToken();return e.type===t?(this._errHandler.reportMatch(this),this.consume()):(e=this._errHandler.recoverInline(this),this.buildParseTrees&&-1===e.tokenIndex&&this._ctx.addErrorNode(e)),e}matchWildcard(){let t=this.getCurrentToken();return t.type>0?(this._errHandler.reportMatch(this),this.consume()):(t=this._errHandler.recoverInline(this),this.buildParseTrees&&-1===t.tokenIndex&&this._ctx.addErrorNode(t)),t}getParseListeners(){return this._parseListeners||[]}addParseListener(t){if(null===t)throw "listener";null===this._parseListeners&&(this._parseListeners=[]),this._parseListeners.push(t);}removeParseListener(t){if(null!==this._parseListeners){const e=this._parseListeners.indexOf(t);e>=0&&this._parseListeners.splice(e,1),0===this._parseListeners.length&&(this._parseListeners=null);}}removeParseListeners(){this._parseListeners=null;}triggerEnterRuleEvent(){if(null!==this._parseListeners){const t=this._ctx;this._parseListeners.forEach((function(e){e.enterEveryRule(t),t.enterRule(e);}));}}triggerExitRuleEvent(){if(null!==this._parseListeners){const t=this._ctx;this._parseListeners.slice(0).reverse().forEach((function(e){t.exitRule(e),e.exitEveryRule(t);}));}}getTokenFactory(){return this._input.tokenSource._factory}setTokenFactory(t){this._input.tokenSource._factory=t;}getATNWithBypassAlts(){const t=this.getSerializedATN();if(null===t)throw "The current parser does not support an ATN with bypass alternatives.";let e=this.bypassAltsAtnCache[t];if(null===e){const n=new Tt;n.generateRuleBypassTransitions=!0,e=new Lt(n).deserialize(t),this.bypassAltsAtnCache[t]=e;}return e}getInputStream(){return this.getTokenStream()}setInputStream(t){this.setTokenStream(t);}getTokenStream(){return this._input}setTokenStream(t){this._input=null,this.reset(),this._input=t;}get syntaxErrorsCount(){return this._syntaxErrors}getCurrentToken(){return this._input.LT(1)}notifyErrorListeners(t,e,n){n=n||null,null===(e=e||null)&&(e=this.getCurrentToken()),this._syntaxErrors+=1;const s=e.line,i=e.column;this.getErrorListenerDispatch().syntaxError(this,e,s,i,t,n);}consume(){const e=this.getCurrentToken();e.type!==t.EOF&&this.getInputStream().consume();const n=null!==this._parseListeners&&this._parseListeners.length>0;if(this.buildParseTrees||n){let t;t=this._errHandler.inErrorRecoveryMode(this)?this._ctx.addErrorNode(e):this._ctx.addTokenNode(e),t.invokingState=this.state,n&&this._parseListeners.forEach((function(e){t instanceof b||void 0!==t.isErrorNode&&t.isErrorNode()?e.visitErrorNode(t):t instanceof P&&e.visitTerminal(t);}));}return e}addContextToParseTree(){null!==this._ctx.parentCtx&&this._ctx.parentCtx.addChild(this._ctx);}enterRule(t,e,n){this.state=e,this._ctx=t,this._ctx.start=this._input.LT(1),this.buildParseTrees&&this.addContextToParseTree(),this.triggerEnterRuleEvent();}exitRule(){this._ctx.stop=this._input.LT(-1),this.triggerExitRuleEvent(),this.state=this._ctx.invokingState,this._ctx=this._ctx.parentCtx;}enterOuterAlt(t,e){t.setAltNumber(e),this.buildParseTrees&&this._ctx!==t&&null!==this._ctx.parentCtx&&(this._ctx.parentCtx.removeLastChild(),this._ctx.parentCtx.addChild(t)),this._ctx=t;}getPrecedence(){return 0===this._precedenceStack.length?-1:this._precedenceStack[this._precedenceStack.length-1]}enterRecursionRule(t,e,n,s){this.state=e,this._precedenceStack.push(s),this._ctx=t,this._ctx.start=this._input.LT(1),this.triggerEnterRuleEvent();}pushNewRecursionContext(t,e,n){const s=this._ctx;s.parentCtx=t,s.invokingState=e,s.stop=this._input.LT(-1),this._ctx=t,this._ctx.start=s.start,this.buildParseTrees&&this._ctx.addChild(s),this.triggerEnterRuleEvent();}unrollRecursionContexts(t){this._precedenceStack.pop(),this._ctx.stop=this._input.LT(-1);const e=this._ctx,n=this.getParseListeners();if(null!==n&&n.length>0)for(;this._ctx!==t;)this.triggerExitRuleEvent(),this._ctx=this._ctx.parentCtx;else this._ctx=t;e.parentCtx=t,this.buildParseTrees&&null!==t&&t.addChild(e);}getInvokingContext(t){let e=this._ctx;for(;null!==e;){if(e.ruleIndex===t)return e;e=e.parentCtx;}return null}precpred(t,e){return e>=this._precedenceStack[this._precedenceStack.length-1]}inContext(t){return !1}isExpectedToken(e){const n=this._interp.atn;let s=this._ctx;const i=n.states[this.state];let r=n.nextTokens(i);if(r.contains(e))return !0;if(!r.contains(t.EPSILON))return !1;for(;null!==s&&s.invokingState>=0&&r.contains(t.EPSILON);){const t=n.states[s.invokingState].transitions[0];if(r=n.nextTokens(t.followState),r.contains(e))return !0;s=s.parentCtx;}return !(!r.contains(t.EPSILON)||e!==t.EOF)}getExpectedTokens(){return this._interp.atn.getExpectedTokens(this.state,this._ctx)}getExpectedTokensWithinCurrentRule(){const t=this._interp.atn,e=t.states[this.state];return t.nextTokens(e)}getRuleIndex(t){const e=this.getRuleIndexMap()[t];return null!==e?e:-1}getRuleInvocationStack(t){null===(t=t||null)&&(t=this._ctx);const e=[];for(;null!==t;){const n=t.ruleIndex;n<0?e.push("n/a"):e.push(this.ruleNames[n]),t=t.parentCtx;}return e}getDFAStrings(){return this._interp.decisionToDFA.toString()}dumpDFA(){let t=!1;for(let e=0;e<this._interp.decisionToDFA.length;e++){const n=this._interp.decisionToDFA[e];n.states.length>0&&(t&&console.log(),this.printer.println("Decision "+n.decision+":"),this.printer.print(n.toString(this.literalNames,this.symbolicNames)),t=!0);}}getSourceName(){return this._input.sourceName}setTrace(t){t?(null!==this._tracer&&this.removeParseListener(this._tracer),this._tracer=new De(this),this.addParseListener(this._tracer)):(this.removeParseListener(this._tracer),this._tracer=null);}}Fe.bypassAltsAtnCache={};class Me extends P{constructor(t){super(),this.parentCtx=null,this.symbol=t;}getChild(t){return null}getSymbol(){return this.symbol}getParent(){return this.parentCtx}getPayload(){return this.symbol}getSourceInterval(){if(null===this.symbol)return m.INVALID_INTERVAL;const t=this.symbol.tokenIndex;return new m(t,t)}getChildCount(){return 0}accept(t){return t.visitTerminal(this)}getText(){return this.symbol.text}toString(){return this.symbol.type===t.EOF?"<EOF>":this.symbol.text}}class Ue extends Me{constructor(t){super(t);}isErrorNode(){return !0}accept(t){return t.visitErrorNode(this)}}class Be extends M{constructor(t,e){super(t,e),this.children=null,this.start=null,this.stop=null,this.exception=null;}copyFrom(t){this.parentCtx=t.parentCtx,this.invokingState=t.invokingState,this.children=null,this.start=t.start,this.stop=t.stop,t.children&&(this.children=[],t.children.map((function(t){t instanceof Ue&&(this.children.push(t),t.parentCtx=this);}),this));}enterRule(t){}exitRule(t){}addChild(t){return null===this.children&&(this.children=[]),this.children.push(t),t}removeLastChild(){null!==this.children&&this.children.pop();}addTokenNode(t){const e=new Me(t);return this.addChild(e),e.parentCtx=this,e}addErrorNode(t){const e=new Ue(t);return this.addChild(e),e.parentCtx=this,e}getChild(t,e){if(e=e||null,null===this.children||t<0||t>=this.children.length)return null;if(null===e)return this.children[t];for(let n=0;n<this.children.length;n++){const s=this.children[n];if(s instanceof e){if(0===t)return s;t-=1;}}return null}getToken(t,e){if(null===this.children||e<0||e>=this.children.length)return null;for(let n=0;n<this.children.length;n++){const s=this.children[n];if(s instanceof P&&s.symbol.type===t){if(0===e)return s;e-=1;}}return null}getTokens(t){if(null===this.children)return [];{const e=[];for(let n=0;n<this.children.length;n++){const s=this.children[n];s instanceof P&&s.symbol.type===t&&e.push(s);}return e}}getTypedRuleContext(t,e){return this.getChild(e,t)}getTypedRuleContexts(t){if(null===this.children)return [];{const e=[];for(let n=0;n<this.children.length;n++){const s=this.children[n];s instanceof t&&e.push(s);}return e}}getChildCount(){return null===this.children?0:this.children.length}getSourceInterval(){return null===this.start||null===this.stop?m.INVALID_INTERVAL:new m(this.start.tokenIndex,this.stop.tokenIndex)}}M.EMPTY=new Be;class Ve{constructor(t){this.tokens=t,this.programs=new Map;}getTokenStream(){return this.tokens}insertAfter(t,e){let n,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ve.DEFAULT_PROGRAM_NAME;n="number"==typeof t?t:t.tokenIndex;let i=this.getProgram(s),r=new Ge(this.tokens,n,i.length,e);i.push(r);}insertBefore(t,e){let n,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ve.DEFAULT_PROGRAM_NAME;n="number"==typeof t?t:t.tokenIndex;const i=this.getProgram(s),r=new Ye(this.tokens,n,i.length,e);i.push(r);}replaceSingle(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ve.DEFAULT_PROGRAM_NAME;this.replace(t,t,e,n);}replace(t,e,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Ve.DEFAULT_PROGRAM_NAME;if("number"!=typeof t&&(t=t.tokenIndex),"number"!=typeof e&&(e=e.tokenIndex),t>e||t<0||e<0||e>=this.tokens.size)throw new RangeError(`replace: range invalid: ${t}..${e}(size=${this.tokens.size})`);let i=this.getProgram(s),r=new je(this.tokens,t,e,i.length,n);i.push(r);}delete(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ve.DEFAULT_PROGRAM_NAME;void 0===e&&(e=t),this.replace(t,e,null,n);}getProgram(t){let e=this.programs.get(t);return null==e&&(e=this.initializeProgram(t)),e}initializeProgram(t){const e=[];return this.programs.set(t,e),e}getText(e){let n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ve.DEFAULT_PROGRAM_NAME;n=e instanceof m?e:new m(0,this.tokens.size-1),"string"==typeof e&&(s=e);const i=this.programs.get(s);let r=n.start,o=n.stop;if(o>this.tokens.size-1&&(o=this.tokens.size-1),r<0&&(r=0),null==i||0===i.length)return this.tokens.getText(new m(r,o));let a=[],l=this.reduceToSingleOperationPerIndex(i),h=r;for(;h<=o&&h<this.tokens.size;){let e=l.get(h);l.delete(h);let n=this.tokens.get(h);null==e?(n.type!==t.EOF&&a.push(String(n.text)),h++):h=e.execute(a);}if(o===this.tokens.size-1)for(const t of l.values())t.index>=this.tokens.size-1&&a.push(t.text.toString());return a.join("")}reduceToSingleOperationPerIndex(t){for(let e=0;e<t.length;e++){let n=t[e];if(null==n)continue;if(!(n instanceof je))continue;let s=n,i=this.getKindOfOps(t,Ye,e);for(let e of i)e.index===s.index?(t[e.instructionIndex]=void 0,s.text=e.text.toString()+(null!=s.text?s.text.toString():"")):e.index>s.index&&e.index<=s.lastIndex&&(t[e.instructionIndex]=void 0);let r=this.getKindOfOps(t,je,e);for(let e of r){if(e.index>=s.index&&e.lastIndex<=s.lastIndex){t[e.instructionIndex]=void 0;continue}let n=e.lastIndex<s.index||e.index>s.lastIndex;if(null!=e.text||null!=s.text||n){if(!n)throw new Error(`replace op boundaries of ${s} overlap with previous ${e}`)}else t[e.instructionIndex]=void 0,s.index=Math.min(e.index,s.index),s.lastIndex=Math.max(e.lastIndex,s.lastIndex);}}for(let e=0;e<t.length;e++){let n=t[e];if(null==n)continue;if(!(n instanceof Ye))continue;let s=n,i=this.getKindOfOps(t,Ye,e);for(let e of i)e.index===s.index&&(e instanceof Ge?(s.text=this.catOpText(e.text,s.text),t[e.instructionIndex]=void 0):e instanceof Ye&&(s.text=this.catOpText(s.text,e.text),t[e.instructionIndex]=void 0));let r=this.getKindOfOps(t,je,e);for(let n of r)if(s.index!==n.index){if(s.index>=n.index&&s.index<=n.lastIndex)throw new Error(`insert op ${s} within boundaries of previous ${n}`)}else n.text=this.catOpText(s.text,n.text),t[e]=void 0;}let e=new Map;for(let n of t)if(null!=n){if(null!=e.get(n.index))throw new Error("should only be one op per index");e.set(n.index,n);}return e}catOpText(t,e){let n="",s="";return null!=t&&(n=t.toString()),null!=e&&(s=e.toString()),n+s}getKindOfOps(t,e,n){return t.slice(0,n).filter((t=>t&&t instanceof e))}}var ze,qe,He;ze=Ve,He="default",(qe=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var s=n.call(t,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return "symbol"==typeof e?e:String(e)}(qe="DEFAULT_PROGRAM_NAME"))in ze?Object.defineProperty(ze,qe,{value:He,enumerable:!0,configurable:!0,writable:!0}):ze[qe]=He;class Ke{constructor(t,e,n,s){this.tokens=t,this.instructionIndex=n,this.index=e,this.text=void 0===s?"":s;}toString(){let t=this.constructor.name;const e=t.indexOf("$");return t=t.substring(e+1,t.length),"<"+t+"@"+this.tokens.get(this.index)+':"'+this.text+'">'}}class Ye extends Ke{constructor(t,e,n,s){super(t,e,n,s);}execute(e){return this.text&&e.push(this.text.toString()),this.tokens.get(this.index).type!==t.EOF&&e.push(String(this.tokens.get(this.index).text)),this.index+1}}class Ge extends Ye{constructor(t,e,n,s){super(t,e+1,n,s);}}class je extends Ke{constructor(t,e,n,s,i){super(t,e,s,i),this.lastIndex=n;}execute(t){return this.text&&t.push(this.text.toString()),this.lastIndex+1}toString(){return null==this.text?"<DeleteOp@"+this.tokens.get(this.index)+".."+this.tokens.get(this.lastIndex)+">":"<ReplaceOp@"+this.tokens.get(this.index)+".."+this.tokens.get(this.lastIndex)+':"'+this.text+'">'}}const We={atn:re,dfa:he,context:ce,misc:ue,tree:fe,error:Ne,Token:t,CommonToken:Pt,CharStreams:ve,CharStream:Ie,InputStream:Ie,CommonTokenStream:be,Lexer:Ut,Parser:Fe,ParserRuleContext:Be,Interval:m,IntervalSet:E,LL1Analyzer:W,Utils:Re,TokenStreamRewriter:Ve};})();s.dx;s.q2;s.FO;s.xf;s.Gy;s.s4;s.c7;s._7;s.tx;s.gp;s.cK;s.zs;s.AV;s.Xp;s.VS;s.ul;s.hW;s.x1;s.z5;s.oN;s.TB;s.u1;s._b;s.$F;s._T;s.db;s.Zx;s._x;s.r8;s.JI;s.TP;s.WU;s.Nj;var M=s.ZP;

    // Generated from ./PeriodFile.g4 by ANTLR 4.13.1
    // jshint ignore: start


    const serializedATN$1 = [4,0,17,118,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
    4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
    12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,1,1,1,1,2,
    1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,
    1,11,4,11,62,8,11,11,11,12,11,63,1,12,4,12,67,8,12,11,12,12,12,68,1,12,1,
    12,1,12,5,12,74,8,12,10,12,12,12,77,9,12,1,12,3,12,80,8,12,1,13,1,13,1,13,
    1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,5,15,94,8,15,10,15,12,15,97,
    9,15,1,15,3,15,100,8,15,1,15,1,15,1,15,1,15,1,16,4,16,107,8,16,11,16,12,
    16,108,1,16,1,16,1,17,1,17,1,17,1,17,3,17,117,8,17,2,75,95,0,18,1,1,3,2,
    5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,
    33,17,35,0,1,0,3,1,0,48,57,4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,32,
    32,125,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
    1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,
    0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,
    0,0,0,1,37,1,0,0,0,3,39,1,0,0,0,5,41,1,0,0,0,7,43,1,0,0,0,9,45,1,0,0,0,11,
    47,1,0,0,0,13,49,1,0,0,0,15,51,1,0,0,0,17,54,1,0,0,0,19,56,1,0,0,0,21,58,
    1,0,0,0,23,61,1,0,0,0,25,79,1,0,0,0,27,81,1,0,0,0,29,85,1,0,0,0,31,89,1,
    0,0,0,33,106,1,0,0,0,35,116,1,0,0,0,37,38,5,58,0,0,38,2,1,0,0,0,39,40,5,
    46,0,0,40,4,1,0,0,0,41,42,5,61,0,0,42,6,1,0,0,0,43,44,5,123,0,0,44,8,1,0,
    0,0,45,46,5,44,0,0,46,10,1,0,0,0,47,48,5,125,0,0,48,12,1,0,0,0,49,50,5,42,
    0,0,50,14,1,0,0,0,51,52,5,38,0,0,52,53,5,38,0,0,53,16,1,0,0,0,54,55,5,45,
    0,0,55,18,1,0,0,0,56,57,5,60,0,0,57,20,1,0,0,0,58,59,5,62,0,0,59,22,1,0,
    0,0,60,62,7,0,0,0,61,60,1,0,0,0,62,63,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,
    0,64,24,1,0,0,0,65,67,7,1,0,0,66,65,1,0,0,0,67,68,1,0,0,0,68,66,1,0,0,0,
    68,69,1,0,0,0,69,80,1,0,0,0,70,75,5,34,0,0,71,74,3,35,17,0,72,74,9,0,0,0,
    73,71,1,0,0,0,73,72,1,0,0,0,74,77,1,0,0,0,75,76,1,0,0,0,75,73,1,0,0,0,76,
    78,1,0,0,0,77,75,1,0,0,0,78,80,5,34,0,0,79,66,1,0,0,0,79,70,1,0,0,0,80,26,
    1,0,0,0,81,82,3,25,12,0,82,83,5,61,0,0,83,84,3,23,11,0,84,28,1,0,0,0,85,
    86,5,40,0,0,86,87,3,25,12,0,87,88,5,41,0,0,88,30,1,0,0,0,89,90,5,47,0,0,
    90,91,5,47,0,0,91,95,1,0,0,0,92,94,9,0,0,0,93,92,1,0,0,0,94,97,1,0,0,0,95,
    96,1,0,0,0,95,93,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,0,98,100,5,13,0,0,99,
    98,1,0,0,0,99,100,1,0,0,0,100,101,1,0,0,0,101,102,5,10,0,0,102,103,1,0,0,
    0,103,104,6,15,0,0,104,32,1,0,0,0,105,107,7,2,0,0,106,105,1,0,0,0,107,108,
    1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,110,1,0,0,0,110,111,6,16,0,0,
    111,34,1,0,0,0,112,113,5,92,0,0,113,117,5,34,0,0,114,115,5,92,0,0,115,117,
    5,92,0,0,116,112,1,0,0,0,116,114,1,0,0,0,117,36,1,0,0,0,10,0,63,68,73,75,
    79,95,99,108,116,1,6,0,0];


    const atn$1 = new M.atn.ATNDeserializer().deserialize(serializedATN$1);

    const decisionsToDFA$1 = atn$1.decisionToState.map( (ds, index) => new M.dfa.DFA(ds, index) );

    class PeriodFileLexer extends M.Lexer {

        static grammarFileName = "PeriodFile.g4";
        static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
    	static modeNames = [ "DEFAULT_MODE" ];
    	static literalNames = [ null, "':'", "'.'", "'='", "'{'", "','", "'}'", 
                             "'*'", "'&&'", "'-'", "'<'", "'>'" ];
    	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                              null, null, "LT", "GT", "NUM", "WORD", "LOAD", 
                              "SPORT", "LINE_COMMENT", "WS" ];
    	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                          "T__7", "T__8", "LT", "GT", "NUM", "WORD", "LOAD", 
                          "SPORT", "LINE_COMMENT", "WS", "ESC" ];

        constructor(input) {
            super(input);
            this._interp = new M.atn.LexerATNSimulator(this, atn$1, decisionsToDFA$1, new M.atn.PredictionContextCache());
        }
    }

    PeriodFileLexer.EOF = M.Token.EOF;
    PeriodFileLexer.T__0 = 1;
    PeriodFileLexer.T__1 = 2;
    PeriodFileLexer.T__2 = 3;
    PeriodFileLexer.T__3 = 4;
    PeriodFileLexer.T__4 = 5;
    PeriodFileLexer.T__5 = 6;
    PeriodFileLexer.T__6 = 7;
    PeriodFileLexer.T__7 = 8;
    PeriodFileLexer.T__8 = 9;
    PeriodFileLexer.LT = 10;
    PeriodFileLexer.GT = 11;
    PeriodFileLexer.NUM = 12;
    PeriodFileLexer.WORD = 13;
    PeriodFileLexer.LOAD = 14;
    PeriodFileLexer.SPORT = 15;
    PeriodFileLexer.LINE_COMMENT = 16;
    PeriodFileLexer.WS = 17;

    // Generated from ./PeriodFile.g4 by ANTLR 4.13.1
    // jshint ignore: start

    // This class defines a complete listener for a parse tree produced by PeriodFileParser.
    class PeriodFileListener extends M.tree.ParseTreeListener {

    	// Enter a parse tree produced by PeriodFileParser#file.
    	enterFile(ctx) {
    	}

    	// Exit a parse tree produced by PeriodFileParser#file.
    	exitFile(ctx) {
    	}


    	// Enter a parse tree produced by PeriodFileParser#metaData.
    	enterMetaData(ctx) {
    	}

    	// Exit a parse tree produced by PeriodFileParser#metaData.
    	exitMetaData(ctx) {
    	}


    	// Enter a parse tree produced by PeriodFileParser#sessionImport.
    	enterSessionImport(ctx) {
    	}

    	// Exit a parse tree produced by PeriodFileParser#sessionImport.
    	exitSessionImport(ctx) {
    	}


    	// Enter a parse tree produced by PeriodFileParser#periods.
    	enterPeriods(ctx) {
    	}

    	// Exit a parse tree produced by PeriodFileParser#periods.
    	exitPeriods(ctx) {
    	}


    	// Enter a parse tree produced by PeriodFileParser#period.
    	enterPeriod(ctx) {
    	}

    	// Exit a parse tree produced by PeriodFileParser#period.
    	exitPeriod(ctx) {
    	}


    	// Enter a parse tree produced by PeriodFileParser#periodPair.
    	enterPeriodPair(ctx) {
    	}

    	// Exit a parse tree produced by PeriodFileParser#periodPair.
    	exitPeriodPair(ctx) {
    	}


    	// Enter a parse tree produced by PeriodFileParser#data.
    	enterData(ctx) {
    	}

    	// Exit a parse tree produced by PeriodFileParser#data.
    	exitData(ctx) {
    	}


    	// Enter a parse tree produced by PeriodFileParser#workouts.
    	enterWorkouts(ctx) {
    	}

    	// Exit a parse tree produced by PeriodFileParser#workouts.
    	exitWorkouts(ctx) {
    	}


    	// Enter a parse tree produced by PeriodFileParser#workout.
    	enterWorkout(ctx) {
    	}

    	// Exit a parse tree produced by PeriodFileParser#workout.
    	exitWorkout(ctx) {
    	}


    	// Enter a parse tree produced by PeriodFileParser#session.
    	enterSession(ctx) {
    	}

    	// Exit a parse tree produced by PeriodFileParser#session.
    	exitSession(ctx) {
    	}


    	// Enter a parse tree produced by PeriodFileParser#sessionSection.
    	enterSessionSection(ctx) {
    	}

    	// Exit a parse tree produced by PeriodFileParser#sessionSection.
    	exitSessionSection(ctx) {
    	}


    	// Enter a parse tree produced by PeriodFileParser#workloads.
    	enterWorkloads(ctx) {
    	}

    	// Exit a parse tree produced by PeriodFileParser#workloads.
    	exitWorkloads(ctx) {
    	}


    	// Enter a parse tree produced by PeriodFileParser#workload.
    	enterWorkload(ctx) {
    	}

    	// Exit a parse tree produced by PeriodFileParser#workload.
    	exitWorkload(ctx) {
    	}



    }

    // Generated from ./PeriodFile.g4 by ANTLR 4.13.1
    // jshint ignore: start
    const serializedATN = [4,1,17,144,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
    4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
    1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,1,0,
    1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,4,3,53,8,3,11,3,12,3,54,
    1,4,1,4,1,4,1,4,1,4,5,4,62,8,4,10,4,12,4,65,9,4,1,4,1,4,1,5,1,5,1,5,1,5,
    1,5,1,5,1,5,1,5,1,5,1,5,3,5,79,8,5,1,6,1,6,3,6,83,8,6,1,7,1,7,1,7,5,7,88,
    8,7,10,7,12,7,91,9,7,1,8,1,8,5,8,95,8,8,10,8,12,8,98,9,8,1,8,3,8,101,8,8,
    1,9,1,9,1,9,4,9,106,8,9,11,9,12,9,107,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,
    10,1,10,1,10,1,10,3,10,121,8,10,1,10,1,10,1,11,1,11,1,11,5,11,128,8,11,10,
    11,12,11,131,9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,142,
    8,12,1,12,0,0,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,1,1,0,10,11,145,0,29,
    1,0,0,0,2,41,1,0,0,0,4,46,1,0,0,0,6,52,1,0,0,0,8,56,1,0,0,0,10,78,1,0,0,
    0,12,82,1,0,0,0,14,84,1,0,0,0,16,92,1,0,0,0,18,102,1,0,0,0,20,111,1,0,0,
    0,22,124,1,0,0,0,24,141,1,0,0,0,26,28,3,2,1,0,27,26,1,0,0,0,28,31,1,0,0,
    0,29,27,1,0,0,0,29,30,1,0,0,0,30,35,1,0,0,0,31,29,1,0,0,0,32,34,3,4,2,0,
    33,32,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,
    35,1,0,0,0,38,39,3,6,3,0,39,40,5,0,0,1,40,1,1,0,0,0,41,42,5,13,0,0,42,43,
    5,1,0,0,43,44,5,13,0,0,44,45,5,2,0,0,45,3,1,0,0,0,46,47,5,13,0,0,47,48,5,
    3,0,0,48,49,5,13,0,0,49,50,5,2,0,0,50,5,1,0,0,0,51,53,3,8,4,0,52,51,1,0,
    0,0,53,54,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,7,1,0,0,0,56,57,5,13,0,
    0,57,58,5,4,0,0,58,63,3,10,5,0,59,60,5,5,0,0,60,62,3,10,5,0,61,59,1,0,0,
    0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,63,1,0,0,0,
    66,67,5,6,0,0,67,9,1,0,0,0,68,69,5,13,0,0,69,70,5,1,0,0,70,79,3,12,6,0,71,
    72,5,12,0,0,72,73,5,7,0,0,73,74,5,4,0,0,74,75,3,12,6,0,75,76,5,6,0,0,76,
    79,1,0,0,0,77,79,3,12,6,0,78,68,1,0,0,0,78,71,1,0,0,0,78,77,1,0,0,0,79,11,
    1,0,0,0,80,83,3,14,7,0,81,83,3,18,9,0,82,80,1,0,0,0,82,81,1,0,0,0,83,13,
    1,0,0,0,84,89,3,16,8,0,85,86,5,8,0,0,86,88,3,16,8,0,87,85,1,0,0,0,88,91,
    1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,15,1,0,0,0,91,89,1,0,0,0,92,96,5,
    15,0,0,93,95,5,13,0,0,94,93,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,
    0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,99,101,5,14,0,0,100,99,1,0,0,0,100,101,
    1,0,0,0,101,17,1,0,0,0,102,103,5,4,0,0,103,105,5,15,0,0,104,106,3,20,10,
    0,105,104,1,0,0,0,106,107,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,109,
    1,0,0,0,109,110,5,6,0,0,110,19,1,0,0,0,111,112,5,13,0,0,112,120,5,4,0,0,
    113,121,3,22,11,0,114,115,5,12,0,0,115,116,5,7,0,0,116,117,5,4,0,0,117,118,
    3,22,11,0,118,119,5,6,0,0,119,121,1,0,0,0,120,113,1,0,0,0,120,114,1,0,0,
    0,121,122,1,0,0,0,122,123,5,6,0,0,123,21,1,0,0,0,124,129,3,24,12,0,125,126,
    5,8,0,0,126,128,3,24,12,0,127,125,1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,
    0,129,130,1,0,0,0,130,23,1,0,0,0,131,129,1,0,0,0,132,133,5,13,0,0,133,134,
    7,0,0,0,134,142,5,13,0,0,135,136,5,13,0,0,136,137,5,13,0,0,137,138,5,9,0,
    0,138,142,5,13,0,0,139,140,5,13,0,0,140,142,5,13,0,0,141,132,1,0,0,0,141,
    135,1,0,0,0,141,139,1,0,0,0,142,25,1,0,0,0,13,29,35,54,63,78,82,89,96,100,
    107,120,129,141];


    const atn = new M.atn.ATNDeserializer().deserialize(serializedATN);

    const decisionsToDFA = atn.decisionToState.map( (ds, index) => new M.dfa.DFA(ds, index) );

    const sharedContextCache = new M.atn.PredictionContextCache();

    class PeriodFileParser extends M.Parser {

        static grammarFileName = "PeriodFile.g4";
        static literalNames = [ null, "':'", "'.'", "'='", "'{'", "','", "'}'", 
                                "'*'", "'&&'", "'-'", "'<'", "'>'" ];
        static symbolicNames = [ null, null, null, null, null, null, null, null, 
                                 null, null, "LT", "GT", "NUM", "WORD", "LOAD", 
                                 "SPORT", "LINE_COMMENT", "WS" ];
        static ruleNames = [ "file", "metaData", "sessionImport", "periods", 
                             "period", "periodPair", "data", "workouts", "workout", 
                             "session", "sessionSection", "workloads", "workload" ];

        constructor(input) {
            super(input);
            this._interp = new M.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
            this.ruleNames = PeriodFileParser.ruleNames;
            this.literalNames = PeriodFileParser.literalNames;
            this.symbolicNames = PeriodFileParser.symbolicNames;
        }



    	file() {
    	    let localctx = new FileContext(this, this._ctx, this.state);
    	    this.enterRule(localctx, 0, PeriodFileParser.RULE_file);
    	    try {
    	        this.enterOuterAlt(localctx, 1);
    	        this.state = 29;
    	        this._errHandler.sync(this);
    	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
    	        while(_alt!=2 && _alt!=M.atn.ATN.INVALID_ALT_NUMBER) {
    	            if(_alt===1) {
    	                this.state = 26;
    	                this.metaData(); 
    	            }
    	            this.state = 31;
    	            this._errHandler.sync(this);
    	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
    	        }

    	        this.state = 35;
    	        this._errHandler.sync(this);
    	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
    	        while(_alt!=2 && _alt!=M.atn.ATN.INVALID_ALT_NUMBER) {
    	            if(_alt===1) {
    	                this.state = 32;
    	                this.sessionImport(); 
    	            }
    	            this.state = 37;
    	            this._errHandler.sync(this);
    	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
    	        }

    	        this.state = 38;
    	        this.periods();
    	        this.state = 39;
    	        this.match(PeriodFileParser.EOF);
    	    } catch (re) {
    	    	if(re instanceof M.error.RecognitionException) {
    		        localctx.exception = re;
    		        this._errHandler.reportError(this, re);
    		        this._errHandler.recover(this, re);
    		    } else {
    		    	throw re;
    		    }
    	    } finally {
    	        this.exitRule();
    	    }
    	    return localctx;
    	}



    	metaData() {
    	    let localctx = new MetaDataContext(this, this._ctx, this.state);
    	    this.enterRule(localctx, 2, PeriodFileParser.RULE_metaData);
    	    try {
    	        this.enterOuterAlt(localctx, 1);
    	        this.state = 41;
    	        this.match(PeriodFileParser.WORD);
    	        this.state = 42;
    	        this.match(PeriodFileParser.T__0);
    	        this.state = 43;
    	        this.match(PeriodFileParser.WORD);
    	        this.state = 44;
    	        this.match(PeriodFileParser.T__1);
    	    } catch (re) {
    	    	if(re instanceof M.error.RecognitionException) {
    		        localctx.exception = re;
    		        this._errHandler.reportError(this, re);
    		        this._errHandler.recover(this, re);
    		    } else {
    		    	throw re;
    		    }
    	    } finally {
    	        this.exitRule();
    	    }
    	    return localctx;
    	}



    	sessionImport() {
    	    let localctx = new SessionImportContext(this, this._ctx, this.state);
    	    this.enterRule(localctx, 4, PeriodFileParser.RULE_sessionImport);
    	    try {
    	        this.enterOuterAlt(localctx, 1);
    	        this.state = 46;
    	        this.match(PeriodFileParser.WORD);
    	        this.state = 47;
    	        this.match(PeriodFileParser.T__2);
    	        this.state = 48;
    	        this.match(PeriodFileParser.WORD);
    	        this.state = 49;
    	        this.match(PeriodFileParser.T__1);
    	    } catch (re) {
    	    	if(re instanceof M.error.RecognitionException) {
    		        localctx.exception = re;
    		        this._errHandler.reportError(this, re);
    		        this._errHandler.recover(this, re);
    		    } else {
    		    	throw re;
    		    }
    	    } finally {
    	        this.exitRule();
    	    }
    	    return localctx;
    	}



    	periods() {
    	    let localctx = new PeriodsContext(this, this._ctx, this.state);
    	    this.enterRule(localctx, 6, PeriodFileParser.RULE_periods);
    	    var _la = 0;
    	    try {
    	        this.enterOuterAlt(localctx, 1);
    	        this.state = 52; 
    	        this._errHandler.sync(this);
    	        _la = this._input.LA(1);
    	        do {
    	            this.state = 51;
    	            this.period();
    	            this.state = 54; 
    	            this._errHandler.sync(this);
    	            _la = this._input.LA(1);
    	        } while(_la===13);
    	    } catch (re) {
    	    	if(re instanceof M.error.RecognitionException) {
    		        localctx.exception = re;
    		        this._errHandler.reportError(this, re);
    		        this._errHandler.recover(this, re);
    		    } else {
    		    	throw re;
    		    }
    	    } finally {
    	        this.exitRule();
    	    }
    	    return localctx;
    	}



    	period() {
    	    let localctx = new PeriodContext(this, this._ctx, this.state);
    	    this.enterRule(localctx, 8, PeriodFileParser.RULE_period);
    	    var _la = 0;
    	    try {
    	        this.enterOuterAlt(localctx, 1);
    	        this.state = 56;
    	        this.match(PeriodFileParser.WORD);
    	        this.state = 57;
    	        this.match(PeriodFileParser.T__3);
    	        this.state = 58;
    	        this.periodPair();
    	        this.state = 63;
    	        this._errHandler.sync(this);
    	        _la = this._input.LA(1);
    	        while(_la===5) {
    	            this.state = 59;
    	            this.match(PeriodFileParser.T__4);
    	            this.state = 60;
    	            this.periodPair();
    	            this.state = 65;
    	            this._errHandler.sync(this);
    	            _la = this._input.LA(1);
    	        }
    	        this.state = 66;
    	        this.match(PeriodFileParser.T__5);
    	    } catch (re) {
    	    	if(re instanceof M.error.RecognitionException) {
    		        localctx.exception = re;
    		        this._errHandler.reportError(this, re);
    		        this._errHandler.recover(this, re);
    		    } else {
    		    	throw re;
    		    }
    	    } finally {
    	        this.exitRule();
    	    }
    	    return localctx;
    	}



    	periodPair() {
    	    let localctx = new PeriodPairContext(this, this._ctx, this.state);
    	    this.enterRule(localctx, 10, PeriodFileParser.RULE_periodPair);
    	    try {
    	        this.state = 78;
    	        this._errHandler.sync(this);
    	        switch(this._input.LA(1)) {
    	        case 13:
    	            this.enterOuterAlt(localctx, 1);
    	            this.state = 68;
    	            this.match(PeriodFileParser.WORD);
    	            this.state = 69;
    	            this.match(PeriodFileParser.T__0);
    	            this.state = 70;
    	            this.data();
    	            break;
    	        case 12:
    	            this.enterOuterAlt(localctx, 2);
    	            this.state = 71;
    	            this.match(PeriodFileParser.NUM);
    	            this.state = 72;
    	            this.match(PeriodFileParser.T__6);
    	            this.state = 73;
    	            this.match(PeriodFileParser.T__3);
    	            this.state = 74;
    	            this.data();
    	            this.state = 75;
    	            this.match(PeriodFileParser.T__5);
    	            break;
    	        case 4:
    	        case 15:
    	            this.enterOuterAlt(localctx, 3);
    	            this.state = 77;
    	            this.data();
    	            break;
    	        default:
    	            throw new M.error.NoViableAltException(this);
    	        }
    	    } catch (re) {
    	    	if(re instanceof M.error.RecognitionException) {
    		        localctx.exception = re;
    		        this._errHandler.reportError(this, re);
    		        this._errHandler.recover(this, re);
    		    } else {
    		    	throw re;
    		    }
    	    } finally {
    	        this.exitRule();
    	    }
    	    return localctx;
    	}



    	data() {
    	    let localctx = new DataContext(this, this._ctx, this.state);
    	    this.enterRule(localctx, 12, PeriodFileParser.RULE_data);
    	    try {
    	        this.state = 82;
    	        this._errHandler.sync(this);
    	        switch(this._input.LA(1)) {
    	        case 15:
    	            this.enterOuterAlt(localctx, 1);
    	            this.state = 80;
    	            this.workouts();
    	            break;
    	        case 4:
    	            this.enterOuterAlt(localctx, 2);
    	            this.state = 81;
    	            this.session();
    	            break;
    	        default:
    	            throw new M.error.NoViableAltException(this);
    	        }
    	    } catch (re) {
    	    	if(re instanceof M.error.RecognitionException) {
    		        localctx.exception = re;
    		        this._errHandler.reportError(this, re);
    		        this._errHandler.recover(this, re);
    		    } else {
    		    	throw re;
    		    }
    	    } finally {
    	        this.exitRule();
    	    }
    	    return localctx;
    	}



    	workouts() {
    	    let localctx = new WorkoutsContext(this, this._ctx, this.state);
    	    this.enterRule(localctx, 14, PeriodFileParser.RULE_workouts);
    	    var _la = 0;
    	    try {
    	        this.enterOuterAlt(localctx, 1);
    	        this.state = 84;
    	        this.workout();
    	        this.state = 89;
    	        this._errHandler.sync(this);
    	        _la = this._input.LA(1);
    	        while(_la===8) {
    	            this.state = 85;
    	            this.match(PeriodFileParser.T__7);
    	            this.state = 86;
    	            this.workout();
    	            this.state = 91;
    	            this._errHandler.sync(this);
    	            _la = this._input.LA(1);
    	        }
    	    } catch (re) {
    	    	if(re instanceof M.error.RecognitionException) {
    		        localctx.exception = re;
    		        this._errHandler.reportError(this, re);
    		        this._errHandler.recover(this, re);
    		    } else {
    		    	throw re;
    		    }
    	    } finally {
    	        this.exitRule();
    	    }
    	    return localctx;
    	}



    	workout() {
    	    let localctx = new WorkoutContext(this, this._ctx, this.state);
    	    this.enterRule(localctx, 16, PeriodFileParser.RULE_workout);
    	    var _la = 0;
    	    try {
    	        this.enterOuterAlt(localctx, 1);
    	        this.state = 92;
    	        this.match(PeriodFileParser.SPORT);
    	        this.state = 96;
    	        this._errHandler.sync(this);
    	        _la = this._input.LA(1);
    	        while(_la===13) {
    	            this.state = 93;
    	            this.match(PeriodFileParser.WORD);
    	            this.state = 98;
    	            this._errHandler.sync(this);
    	            _la = this._input.LA(1);
    	        }
    	        this.state = 100;
    	        this._errHandler.sync(this);
    	        _la = this._input.LA(1);
    	        if(_la===14) {
    	            this.state = 99;
    	            this.match(PeriodFileParser.LOAD);
    	        }

    	    } catch (re) {
    	    	if(re instanceof M.error.RecognitionException) {
    		        localctx.exception = re;
    		        this._errHandler.reportError(this, re);
    		        this._errHandler.recover(this, re);
    		    } else {
    		    	throw re;
    		    }
    	    } finally {
    	        this.exitRule();
    	    }
    	    return localctx;
    	}



    	session() {
    	    let localctx = new SessionContext(this, this._ctx, this.state);
    	    this.enterRule(localctx, 18, PeriodFileParser.RULE_session);
    	    var _la = 0;
    	    try {
    	        this.enterOuterAlt(localctx, 1);
    	        this.state = 102;
    	        this.match(PeriodFileParser.T__3);
    	        this.state = 103;
    	        this.match(PeriodFileParser.SPORT);
    	        this.state = 105; 
    	        this._errHandler.sync(this);
    	        _la = this._input.LA(1);
    	        do {
    	            this.state = 104;
    	            this.sessionSection();
    	            this.state = 107; 
    	            this._errHandler.sync(this);
    	            _la = this._input.LA(1);
    	        } while(_la===13);
    	        this.state = 109;
    	        this.match(PeriodFileParser.T__5);
    	    } catch (re) {
    	    	if(re instanceof M.error.RecognitionException) {
    		        localctx.exception = re;
    		        this._errHandler.reportError(this, re);
    		        this._errHandler.recover(this, re);
    		    } else {
    		    	throw re;
    		    }
    	    } finally {
    	        this.exitRule();
    	    }
    	    return localctx;
    	}



    	sessionSection() {
    	    let localctx = new SessionSectionContext(this, this._ctx, this.state);
    	    this.enterRule(localctx, 20, PeriodFileParser.RULE_sessionSection);
    	    try {
    	        this.enterOuterAlt(localctx, 1);
    	        this.state = 111;
    	        this.match(PeriodFileParser.WORD);
    	        this.state = 112;
    	        this.match(PeriodFileParser.T__3);
    	        this.state = 120;
    	        this._errHandler.sync(this);
    	        switch(this._input.LA(1)) {
    	        case 13:
    	            this.state = 113;
    	            this.workloads();
    	            break;
    	        case 12:
    	            this.state = 114;
    	            this.match(PeriodFileParser.NUM);
    	            this.state = 115;
    	            this.match(PeriodFileParser.T__6);
    	            this.state = 116;
    	            this.match(PeriodFileParser.T__3);
    	            this.state = 117;
    	            this.workloads();
    	            this.state = 118;
    	            this.match(PeriodFileParser.T__5);
    	            break;
    	        default:
    	            throw new M.error.NoViableAltException(this);
    	        }
    	        this.state = 122;
    	        this.match(PeriodFileParser.T__5);
    	    } catch (re) {
    	    	if(re instanceof M.error.RecognitionException) {
    		        localctx.exception = re;
    		        this._errHandler.reportError(this, re);
    		        this._errHandler.recover(this, re);
    		    } else {
    		    	throw re;
    		    }
    	    } finally {
    	        this.exitRule();
    	    }
    	    return localctx;
    	}



    	workloads() {
    	    let localctx = new WorkloadsContext(this, this._ctx, this.state);
    	    this.enterRule(localctx, 22, PeriodFileParser.RULE_workloads);
    	    var _la = 0;
    	    try {
    	        this.enterOuterAlt(localctx, 1);
    	        this.state = 124;
    	        this.workload();
    	        this.state = 129;
    	        this._errHandler.sync(this);
    	        _la = this._input.LA(1);
    	        while(_la===8) {
    	            this.state = 125;
    	            this.match(PeriodFileParser.T__7);
    	            this.state = 126;
    	            this.workload();
    	            this.state = 131;
    	            this._errHandler.sync(this);
    	            _la = this._input.LA(1);
    	        }
    	    } catch (re) {
    	    	if(re instanceof M.error.RecognitionException) {
    		        localctx.exception = re;
    		        this._errHandler.reportError(this, re);
    		        this._errHandler.recover(this, re);
    		    } else {
    		    	throw re;
    		    }
    	    } finally {
    	        this.exitRule();
    	    }
    	    return localctx;
    	}



    	workload() {
    	    let localctx = new WorkloadContext(this, this._ctx, this.state);
    	    this.enterRule(localctx, 24, PeriodFileParser.RULE_workload);
    	    var _la = 0;
    	    try {
    	        this.state = 141;
    	        this._errHandler.sync(this);
    	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
    	        switch(la_) {
    	        case 1:
    	            this.enterOuterAlt(localctx, 1);
    	            this.state = 132;
    	            this.match(PeriodFileParser.WORD);
    	            this.state = 133;
    	            _la = this._input.LA(1);
    	            if(!(_la===10 || _la===11)) {
    	            this._errHandler.recoverInline(this);
    	            }
    	            else {
    	            	this._errHandler.reportMatch(this);
    	                this.consume();
    	            }
    	            this.state = 134;
    	            this.match(PeriodFileParser.WORD);
    	            break;

    	        case 2:
    	            this.enterOuterAlt(localctx, 2);
    	            this.state = 135;
    	            this.match(PeriodFileParser.WORD);
    	            this.state = 136;
    	            this.match(PeriodFileParser.WORD);
    	            this.state = 137;
    	            this.match(PeriodFileParser.T__8);
    	            this.state = 138;
    	            this.match(PeriodFileParser.WORD);
    	            break;

    	        case 3:
    	            this.enterOuterAlt(localctx, 3);
    	            this.state = 139;
    	            this.match(PeriodFileParser.WORD);
    	            this.state = 140;
    	            this.match(PeriodFileParser.WORD);
    	            break;

    	        }
    	    } catch (re) {
    	    	if(re instanceof M.error.RecognitionException) {
    		        localctx.exception = re;
    		        this._errHandler.reportError(this, re);
    		        this._errHandler.recover(this, re);
    		    } else {
    		    	throw re;
    		    }
    	    } finally {
    	        this.exitRule();
    	    }
    	    return localctx;
    	}


    }

    PeriodFileParser.EOF = M.Token.EOF;
    PeriodFileParser.T__0 = 1;
    PeriodFileParser.T__1 = 2;
    PeriodFileParser.T__2 = 3;
    PeriodFileParser.T__3 = 4;
    PeriodFileParser.T__4 = 5;
    PeriodFileParser.T__5 = 6;
    PeriodFileParser.T__6 = 7;
    PeriodFileParser.T__7 = 8;
    PeriodFileParser.T__8 = 9;
    PeriodFileParser.LT = 10;
    PeriodFileParser.GT = 11;
    PeriodFileParser.NUM = 12;
    PeriodFileParser.WORD = 13;
    PeriodFileParser.LOAD = 14;
    PeriodFileParser.SPORT = 15;
    PeriodFileParser.LINE_COMMENT = 16;
    PeriodFileParser.WS = 17;

    PeriodFileParser.RULE_file = 0;
    PeriodFileParser.RULE_metaData = 1;
    PeriodFileParser.RULE_sessionImport = 2;
    PeriodFileParser.RULE_periods = 3;
    PeriodFileParser.RULE_period = 4;
    PeriodFileParser.RULE_periodPair = 5;
    PeriodFileParser.RULE_data = 6;
    PeriodFileParser.RULE_workouts = 7;
    PeriodFileParser.RULE_workout = 8;
    PeriodFileParser.RULE_session = 9;
    PeriodFileParser.RULE_sessionSection = 10;
    PeriodFileParser.RULE_workloads = 11;
    PeriodFileParser.RULE_workload = 12;

    class FileContext extends M.ParserRuleContext {

        constructor(parser, parent, invokingState) {
            if(parent===undefined) {
                parent = null;
            }
            if(invokingState===undefined || invokingState===null) {
                invokingState = -1;
            }
            super(parent, invokingState);
            this.parser = parser;
            this.ruleIndex = PeriodFileParser.RULE_file;
        }

    	periods() {
    	    return this.getTypedRuleContext(PeriodsContext,0);
    	};

    	EOF() {
    	    return this.getToken(PeriodFileParser.EOF, 0);
    	};

    	metaData = function(i) {
    	    if(i===undefined) {
    	        i = null;
    	    }
    	    if(i===null) {
    	        return this.getTypedRuleContexts(MetaDataContext);
    	    } else {
    	        return this.getTypedRuleContext(MetaDataContext,i);
    	    }
    	};

    	sessionImport = function(i) {
    	    if(i===undefined) {
    	        i = null;
    	    }
    	    if(i===null) {
    	        return this.getTypedRuleContexts(SessionImportContext);
    	    } else {
    	        return this.getTypedRuleContext(SessionImportContext,i);
    	    }
    	};

    	enterRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.enterFile(this);
    		}
    	}

    	exitRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.exitFile(this);
    		}
    	}


    }



    class MetaDataContext extends M.ParserRuleContext {

        constructor(parser, parent, invokingState) {
            if(parent===undefined) {
                parent = null;
            }
            if(invokingState===undefined || invokingState===null) {
                invokingState = -1;
            }
            super(parent, invokingState);
            this.parser = parser;
            this.ruleIndex = PeriodFileParser.RULE_metaData;
        }

    	WORD = function(i) {
    		if(i===undefined) {
    			i = null;
    		}
    	    if(i===null) {
    	        return this.getTokens(PeriodFileParser.WORD);
    	    } else {
    	        return this.getToken(PeriodFileParser.WORD, i);
    	    }
    	};


    	enterRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.enterMetaData(this);
    		}
    	}

    	exitRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.exitMetaData(this);
    		}
    	}


    }



    class SessionImportContext extends M.ParserRuleContext {

        constructor(parser, parent, invokingState) {
            if(parent===undefined) {
                parent = null;
            }
            if(invokingState===undefined || invokingState===null) {
                invokingState = -1;
            }
            super(parent, invokingState);
            this.parser = parser;
            this.ruleIndex = PeriodFileParser.RULE_sessionImport;
        }

    	WORD = function(i) {
    		if(i===undefined) {
    			i = null;
    		}
    	    if(i===null) {
    	        return this.getTokens(PeriodFileParser.WORD);
    	    } else {
    	        return this.getToken(PeriodFileParser.WORD, i);
    	    }
    	};


    	enterRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.enterSessionImport(this);
    		}
    	}

    	exitRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.exitSessionImport(this);
    		}
    	}


    }



    class PeriodsContext extends M.ParserRuleContext {

        constructor(parser, parent, invokingState) {
            if(parent===undefined) {
                parent = null;
            }
            if(invokingState===undefined || invokingState===null) {
                invokingState = -1;
            }
            super(parent, invokingState);
            this.parser = parser;
            this.ruleIndex = PeriodFileParser.RULE_periods;
        }

    	period = function(i) {
    	    if(i===undefined) {
    	        i = null;
    	    }
    	    if(i===null) {
    	        return this.getTypedRuleContexts(PeriodContext);
    	    } else {
    	        return this.getTypedRuleContext(PeriodContext,i);
    	    }
    	};

    	enterRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.enterPeriods(this);
    		}
    	}

    	exitRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.exitPeriods(this);
    		}
    	}


    }



    class PeriodContext extends M.ParserRuleContext {

        constructor(parser, parent, invokingState) {
            if(parent===undefined) {
                parent = null;
            }
            if(invokingState===undefined || invokingState===null) {
                invokingState = -1;
            }
            super(parent, invokingState);
            this.parser = parser;
            this.ruleIndex = PeriodFileParser.RULE_period;
        }

    	WORD() {
    	    return this.getToken(PeriodFileParser.WORD, 0);
    	};

    	periodPair = function(i) {
    	    if(i===undefined) {
    	        i = null;
    	    }
    	    if(i===null) {
    	        return this.getTypedRuleContexts(PeriodPairContext);
    	    } else {
    	        return this.getTypedRuleContext(PeriodPairContext,i);
    	    }
    	};

    	enterRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.enterPeriod(this);
    		}
    	}

    	exitRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.exitPeriod(this);
    		}
    	}


    }



    class PeriodPairContext extends M.ParserRuleContext {

        constructor(parser, parent, invokingState) {
            if(parent===undefined) {
                parent = null;
            }
            if(invokingState===undefined || invokingState===null) {
                invokingState = -1;
            }
            super(parent, invokingState);
            this.parser = parser;
            this.ruleIndex = PeriodFileParser.RULE_periodPair;
        }

    	WORD() {
    	    return this.getToken(PeriodFileParser.WORD, 0);
    	};

    	data() {
    	    return this.getTypedRuleContext(DataContext,0);
    	};

    	NUM() {
    	    return this.getToken(PeriodFileParser.NUM, 0);
    	};

    	enterRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.enterPeriodPair(this);
    		}
    	}

    	exitRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.exitPeriodPair(this);
    		}
    	}


    }



    class DataContext extends M.ParserRuleContext {

        constructor(parser, parent, invokingState) {
            if(parent===undefined) {
                parent = null;
            }
            if(invokingState===undefined || invokingState===null) {
                invokingState = -1;
            }
            super(parent, invokingState);
            this.parser = parser;
            this.ruleIndex = PeriodFileParser.RULE_data;
        }

    	workouts() {
    	    return this.getTypedRuleContext(WorkoutsContext,0);
    	};

    	session() {
    	    return this.getTypedRuleContext(SessionContext,0);
    	};

    	enterRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.enterData(this);
    		}
    	}

    	exitRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.exitData(this);
    		}
    	}


    }



    class WorkoutsContext extends M.ParserRuleContext {

        constructor(parser, parent, invokingState) {
            if(parent===undefined) {
                parent = null;
            }
            if(invokingState===undefined || invokingState===null) {
                invokingState = -1;
            }
            super(parent, invokingState);
            this.parser = parser;
            this.ruleIndex = PeriodFileParser.RULE_workouts;
        }

    	workout = function(i) {
    	    if(i===undefined) {
    	        i = null;
    	    }
    	    if(i===null) {
    	        return this.getTypedRuleContexts(WorkoutContext);
    	    } else {
    	        return this.getTypedRuleContext(WorkoutContext,i);
    	    }
    	};

    	enterRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.enterWorkouts(this);
    		}
    	}

    	exitRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.exitWorkouts(this);
    		}
    	}


    }



    class WorkoutContext extends M.ParserRuleContext {

        constructor(parser, parent, invokingState) {
            if(parent===undefined) {
                parent = null;
            }
            if(invokingState===undefined || invokingState===null) {
                invokingState = -1;
            }
            super(parent, invokingState);
            this.parser = parser;
            this.ruleIndex = PeriodFileParser.RULE_workout;
        }

    	SPORT() {
    	    return this.getToken(PeriodFileParser.SPORT, 0);
    	};

    	WORD = function(i) {
    		if(i===undefined) {
    			i = null;
    		}
    	    if(i===null) {
    	        return this.getTokens(PeriodFileParser.WORD);
    	    } else {
    	        return this.getToken(PeriodFileParser.WORD, i);
    	    }
    	};


    	LOAD() {
    	    return this.getToken(PeriodFileParser.LOAD, 0);
    	};

    	enterRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.enterWorkout(this);
    		}
    	}

    	exitRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.exitWorkout(this);
    		}
    	}


    }



    class SessionContext extends M.ParserRuleContext {

        constructor(parser, parent, invokingState) {
            if(parent===undefined) {
                parent = null;
            }
            if(invokingState===undefined || invokingState===null) {
                invokingState = -1;
            }
            super(parent, invokingState);
            this.parser = parser;
            this.ruleIndex = PeriodFileParser.RULE_session;
        }

    	SPORT() {
    	    return this.getToken(PeriodFileParser.SPORT, 0);
    	};

    	sessionSection = function(i) {
    	    if(i===undefined) {
    	        i = null;
    	    }
    	    if(i===null) {
    	        return this.getTypedRuleContexts(SessionSectionContext);
    	    } else {
    	        return this.getTypedRuleContext(SessionSectionContext,i);
    	    }
    	};

    	enterRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.enterSession(this);
    		}
    	}

    	exitRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.exitSession(this);
    		}
    	}


    }



    class SessionSectionContext extends M.ParserRuleContext {

        constructor(parser, parent, invokingState) {
            if(parent===undefined) {
                parent = null;
            }
            if(invokingState===undefined || invokingState===null) {
                invokingState = -1;
            }
            super(parent, invokingState);
            this.parser = parser;
            this.ruleIndex = PeriodFileParser.RULE_sessionSection;
        }

    	WORD() {
    	    return this.getToken(PeriodFileParser.WORD, 0);
    	};

    	workloads() {
    	    return this.getTypedRuleContext(WorkloadsContext,0);
    	};

    	NUM() {
    	    return this.getToken(PeriodFileParser.NUM, 0);
    	};

    	enterRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.enterSessionSection(this);
    		}
    	}

    	exitRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.exitSessionSection(this);
    		}
    	}


    }



    class WorkloadsContext extends M.ParserRuleContext {

        constructor(parser, parent, invokingState) {
            if(parent===undefined) {
                parent = null;
            }
            if(invokingState===undefined || invokingState===null) {
                invokingState = -1;
            }
            super(parent, invokingState);
            this.parser = parser;
            this.ruleIndex = PeriodFileParser.RULE_workloads;
        }

    	workload = function(i) {
    	    if(i===undefined) {
    	        i = null;
    	    }
    	    if(i===null) {
    	        return this.getTypedRuleContexts(WorkloadContext);
    	    } else {
    	        return this.getTypedRuleContext(WorkloadContext,i);
    	    }
    	};

    	enterRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.enterWorkloads(this);
    		}
    	}

    	exitRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.exitWorkloads(this);
    		}
    	}


    }



    class WorkloadContext extends M.ParserRuleContext {

        constructor(parser, parent, invokingState) {
            if(parent===undefined) {
                parent = null;
            }
            if(invokingState===undefined || invokingState===null) {
                invokingState = -1;
            }
            super(parent, invokingState);
            this.parser = parser;
            this.ruleIndex = PeriodFileParser.RULE_workload;
        }

    	WORD = function(i) {
    		if(i===undefined) {
    			i = null;
    		}
    	    if(i===null) {
    	        return this.getTokens(PeriodFileParser.WORD);
    	    } else {
    	        return this.getToken(PeriodFileParser.WORD, i);
    	    }
    	};


    	LT() {
    	    return this.getToken(PeriodFileParser.LT, 0);
    	};

    	GT() {
    	    return this.getToken(PeriodFileParser.GT, 0);
    	};

    	enterRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.enterWorkload(this);
    		}
    	}

    	exitRule(listener) {
    	    if(listener instanceof PeriodFileListener ) {
    	        listener.exitWorkload(this);
    		}
    	}


    }




    PeriodFileParser.FileContext = FileContext; 
    PeriodFileParser.MetaDataContext = MetaDataContext; 
    PeriodFileParser.SessionImportContext = SessionImportContext; 
    PeriodFileParser.PeriodsContext = PeriodsContext; 
    PeriodFileParser.PeriodContext = PeriodContext; 
    PeriodFileParser.PeriodPairContext = PeriodPairContext; 
    PeriodFileParser.DataContext = DataContext; 
    PeriodFileParser.WorkoutsContext = WorkoutsContext; 
    PeriodFileParser.WorkoutContext = WorkoutContext; 
    PeriodFileParser.SessionContext = SessionContext; 
    PeriodFileParser.SessionSectionContext = SessionSectionContext; 
    PeriodFileParser.WorkloadsContext = WorkloadsContext; 
    PeriodFileParser.WorkloadContext = WorkloadContext;

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }   

    function removeSpeechMarks(str) {
        return str.replace(/"/g, '');
    }

    class PeriodListener extends PeriodFileListener { 
        metadatas = {};
        sessionImports = {};

        periods = [];
        currentPeriod = 0;
        currentDay = 0; 

        visit(ctx) {
            if (ctx.children) {
                const childResults = ctx.children.map(child => this.visit(child));
                return childResults;
            } else {
                return ctx.getText().replace(/"/g, '');
            }
        }

        //TODO: speech marks need to be removed
        exitMetaData(ctx) {
            this.metadatas[capitalizeFirstLetter(ctx.children[0].getText())] = ctx.children[2].getText().replace(/"/g, '');
        }

        exitSessionImport(ctx) {
            this.sessionImports[ctx.children[0].getText()] = ctx.children[2].getText().replace(/"/g, '');
        }

        enterPeriod(ctx) {
            var newPeriod = {
                'title': removeSpeechMarks(ctx.WORD().getText()),
            };
            
            this.periods.push(newPeriod);
            this.currentPeriod = this.periods.length - 1;
        }

        enterPeriodPair(ctx) {
            var day;

            if (ctx.WORD()) {
                day = ctx.WORD().getText();
            } else if (ctx.NUM()){
                day = parseInt(ctx.NUM().getText()); //num of loops
            } else {
                day = null;
            }

            this.periods[this.currentPeriod][this.currentDay] = {Day: day, Data: null} ;
        }

        exitPeriodPair(ctx) {
            this.currentDay++;
        }

        exitWorkouts(ctx) {
            const workouts = ctx.workout()
                .map(workoutCtx => this.visit(workoutCtx));

            var finalWorkouts = [];
            workouts.forEach(workout => {
                finalWorkouts.push({Sport: workout[0].replace(/[()]/g, ''), Data: workout[1]});
            });

            this.periods[this.currentPeriod][this.currentDay].Data = finalWorkouts;
        }

        exitSession(ctx) {
            const sport = ctx.SPORT().getText().replace(/[()]/g, '');
            const sessionSections = ctx.sessionSection()
                .map(sessionSectionCtx => this.visit(sessionSectionCtx));

            var finalSections = [];
            sessionSections.forEach(section => {

                var workloads = [];
                section[2].forEach(workload => {
                    if (workload != '&&') {
                        if (workload.length == 3) {
                            workloads.push({Type: "lg", Data: workload});
                        } else if (workload.length == 4) {
                            workloads.push({Type: "between", Data: workload});
                        } else {
                            workloads.push({Type: "ar", Data: workload});
                        }
                    }
                });

                finalSections.push({Title: section[0], Workloads: workloads});
            });

            this.periods[this.currentPeriod][this.currentDay].Data = [{Sport: sport, Sections: finalSections}];
        }

        result() {
            return {Metadata: this.metadatas, SessionImports: this.sessionImports, Periods: this.periods};
        }
    }

    // place files you want to import through the `$lib` alias in this folder.

    const { CommonTokenStream, InputStream } = M;

    class CustomErrorListener extends M.error.ErrorListener {
        constructor() {
            super();
        }

        // Override the syntaxError method to handle custom errors
        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            const error = new CustomError(`Syntax Error at line ${line}:${column} - ${msg}`);
            throw error;
        }
    }

    class CustomError extends Error {
        constructor(message) {
            super(message);
            this.name = 'ParserError';
        }
    }

    function Parse(input) {
    	var chars = new InputStream(input, true);
    	var lexer = new PeriodFileLexer(chars);
    	var tokens = new CommonTokenStream(lexer);
    	var parser = new PeriodFileParser(tokens);

    	parser.buildParseTrees = true;

    	parser.removeErrorListeners;
    	var customErrorListener = new CustomErrorListener();
    	parser.addErrorListener(customErrorListener);

    	var tree = parser.file();

    	var listener = new PeriodListener();
    	M.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

    	return listener.result();
    }

    /* src/Components/Calendar.svelte generated by Svelte v3.59.2 */

    const file$1 = "src/Components/Calendar.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[8] = list[i];
    	return child_ctx;
    }

    // (102:6) {#each Array.from({ length: getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()) }, (_, i) => i + 1) as day}
    function create_each_block$1(ctx) {
    	let div1;
    	let div0;
    	let t0_value = /*day*/ ctx[8] + "";
    	let t0;
    	let t1;
    	let div1_class_value;
    	let mounted;
    	let dispose;

    	function click_handler() {
    		return /*click_handler*/ ctx[6](/*day*/ ctx[8]);
    	}

    	function keypress_handler() {
    		return /*keypress_handler*/ ctx[7](/*day*/ ctx[8]);
    	}

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			t0 = text(t0_value);
    			t1 = space();
    			add_location(div0, file$1, 106, 12, 2481);

    			attr_dev(div1, "class", div1_class_value = "day " + (/*selectedDate*/ ctx[1] && /*selectedDate*/ ctx[1].getDate() === /*day*/ ctx[8]
    			? 'selected'
    			: '') + " " + (new Date().getDate() === /*day*/ ctx[8] && new Date().getMonth() === /*currentDate*/ ctx[0].getMonth()
    			? 'current-day'
    			: '') + " svelte-14ahsgu");

    			add_location(div1, file$1, 102, 8, 2174);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div0, t0);
    			append_dev(div1, t1);

    			if (!mounted) {
    				dispose = [
    					listen_dev(div1, "click", click_handler, false, false, false, false),
    					listen_dev(div1, "keypress", keypress_handler, false, false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;
    			if (dirty & /*currentDate*/ 1 && t0_value !== (t0_value = /*day*/ ctx[8] + "")) set_data_dev(t0, t0_value);

    			if (dirty & /*selectedDate, currentDate*/ 3 && div1_class_value !== (div1_class_value = "day " + (/*selectedDate*/ ctx[1] && /*selectedDate*/ ctx[1].getDate() === /*day*/ ctx[8]
    			? 'selected'
    			: '') + " " + (new Date().getDate() === /*day*/ ctx[8] && new Date().getMonth() === /*currentDate*/ ctx[0].getMonth()
    			? 'current-day'
    			: '') + " svelte-14ahsgu")) {
    				attr_dev(div1, "class", div1_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(102:6) {#each Array.from({ length: getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()) }, (_, i) => i + 1) as day}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let div11;
    	let div1;
    	let div0;
    	let t0_value = /*currentDate*/ ctx[0].toLocaleString('default', { month: 'long' }) + "";
    	let t0;
    	let t1;
    	let t2_value = /*currentDate*/ ctx[0].getFullYear() + "";
    	let t2;
    	let t3;
    	let button0;
    	let t5;
    	let button1;
    	let t7;
    	let div9;
    	let div2;
    	let t9;
    	let div3;
    	let t11;
    	let div4;
    	let t13;
    	let div5;
    	let t15;
    	let div6;
    	let t17;
    	let div7;
    	let t19;
    	let div8;
    	let t21;
    	let div10;
    	let t22;
    	let p;
    	let t23;

    	let t24_value = (/*selectedDate*/ ctx[1]
    	? /*selectedDate*/ ctx[1].toLocaleDateString()
    	: 'None') + "";

    	let t24;
    	let mounted;
    	let dispose;

    	let each_value = Array.from(
    		{
    			length: getDaysInMonth(/*currentDate*/ ctx[0].getFullYear(), /*currentDate*/ ctx[0].getMonth())
    		},
    		func
    	);

    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			div11 = element("div");
    			div1 = element("div");
    			div0 = element("div");
    			t0 = text(t0_value);
    			t1 = space();
    			t2 = text(t2_value);
    			t3 = space();
    			button0 = element("button");
    			button0.textContent = "<";
    			t5 = space();
    			button1 = element("button");
    			button1.textContent = ">";
    			t7 = space();
    			div9 = element("div");
    			div2 = element("div");
    			div2.textContent = "Monday";
    			t9 = space();
    			div3 = element("div");
    			div3.textContent = "Tuesday";
    			t11 = space();
    			div4 = element("div");
    			div4.textContent = "Wednesday";
    			t13 = space();
    			div5 = element("div");
    			div5.textContent = "Thursday";
    			t15 = space();
    			div6 = element("div");
    			div6.textContent = "Friday";
    			t17 = space();
    			div7 = element("div");
    			div7.textContent = "Saturday";
    			t19 = space();
    			div8 = element("div");
    			div8.textContent = "Sunday";
    			t21 = space();
    			div10 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t22 = space();
    			p = element("p");
    			t23 = text("Selected Date: ");
    			t24 = text(t24_value);
    			attr_dev(div0, "class", "month-year svelte-14ahsgu");
    			add_location(div0, file$1, 85, 6, 1554);
    			add_location(button0, file$1, 86, 6, 1677);
    			add_location(button1, file$1, 87, 6, 1726);
    			attr_dev(div1, "class", "header svelte-14ahsgu");
    			add_location(div1, file$1, 84, 4, 1527);
    			attr_dev(div2, "class", "svelte-14ahsgu");
    			add_location(div2, file$1, 91, 8, 1819);
    			attr_dev(div3, "class", "svelte-14ahsgu");
    			add_location(div3, file$1, 92, 8, 1845);
    			attr_dev(div4, "class", "svelte-14ahsgu");
    			add_location(div4, file$1, 93, 8, 1872);
    			attr_dev(div5, "class", "svelte-14ahsgu");
    			add_location(div5, file$1, 94, 8, 1901);
    			attr_dev(div6, "class", "svelte-14ahsgu");
    			add_location(div6, file$1, 95, 8, 1929);
    			attr_dev(div7, "class", "svelte-14ahsgu");
    			add_location(div7, file$1, 96, 8, 1955);
    			attr_dev(div8, "class", "svelte-14ahsgu");
    			add_location(div8, file$1, 97, 8, 1983);
    			attr_dev(div9, "class", "day-names svelte-14ahsgu");
    			add_location(div9, file$1, 90, 4, 1787);
    			attr_dev(div10, "class", "days svelte-14ahsgu");
    			add_location(div10, file$1, 100, 4, 2019);
    			add_location(p, file$1, 112, 4, 2558);
    			attr_dev(div11, "class", "calendar svelte-14ahsgu");
    			add_location(div11, file$1, 83, 0, 1500);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div11, anchor);
    			append_dev(div11, div1);
    			append_dev(div1, div0);
    			append_dev(div0, t0);
    			append_dev(div0, t1);
    			append_dev(div0, t2);
    			append_dev(div1, t3);
    			append_dev(div1, button0);
    			append_dev(div1, t5);
    			append_dev(div1, button1);
    			append_dev(div11, t7);
    			append_dev(div11, div9);
    			append_dev(div9, div2);
    			append_dev(div9, t9);
    			append_dev(div9, div3);
    			append_dev(div9, t11);
    			append_dev(div9, div4);
    			append_dev(div9, t13);
    			append_dev(div9, div5);
    			append_dev(div9, t15);
    			append_dev(div9, div6);
    			append_dev(div9, t17);
    			append_dev(div9, div7);
    			append_dev(div9, t19);
    			append_dev(div9, div8);
    			append_dev(div11, t21);
    			append_dev(div11, div10);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(div10, null);
    				}
    			}

    			append_dev(div11, t22);
    			append_dev(div11, p);
    			append_dev(p, t23);
    			append_dev(p, t24);

    			if (!mounted) {
    				dispose = [
    					listen_dev(button0, "click", /*prevMonth*/ ctx[3], false, false, false, false),
    					listen_dev(button1, "click", /*nextMonth*/ ctx[4], false, false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*currentDate*/ 1 && t0_value !== (t0_value = /*currentDate*/ ctx[0].toLocaleString('default', { month: 'long' }) + "")) set_data_dev(t0, t0_value);
    			if (dirty & /*currentDate*/ 1 && t2_value !== (t2_value = /*currentDate*/ ctx[0].getFullYear() + "")) set_data_dev(t2, t2_value);

    			if (dirty & /*selectedDate, Array, getDaysInMonth, currentDate, Date, setSelectedDate*/ 7) {
    				each_value = Array.from(
    					{
    						length: getDaysInMonth(/*currentDate*/ ctx[0].getFullYear(), /*currentDate*/ ctx[0].getMonth())
    					},
    					func
    				);

    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div10, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}

    			if (dirty & /*selectedDate*/ 2 && t24_value !== (t24_value = (/*selectedDate*/ ctx[1]
    			? /*selectedDate*/ ctx[1].toLocaleDateString()
    			: 'None') + "")) set_data_dev(t24, t24_value);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div11);
    			destroy_each(each_blocks, detaching);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function getDaysInMonth(year, month) {
    	return new Date(year, month + 1, 0).getDate();
    }

    const func = (_, i) => i + 1;

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Calendar', slots, []);
    	let currentDate = new Date();
    	let selectedDate = null;
    	let { calendarData } = $$props;

    	function setSelectedDate(day) {
    		$$invalidate(1, selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    	}

    	function prevMonth() {
    		currentDate.setMonth(currentDate.getMonth() - 1);
    		$$invalidate(0, currentDate = new Date(currentDate));
    		$$invalidate(1, selectedDate = null);
    	}

    	function nextMonth() {
    		currentDate.setMonth(currentDate.getMonth() + 1);
    		$$invalidate(0, currentDate = new Date(currentDate));
    		$$invalidate(1, selectedDate = null);
    	}

    	$$self.$$.on_mount.push(function () {
    		if (calendarData === undefined && !('calendarData' in $$props || $$self.$$.bound[$$self.$$.props['calendarData']])) {
    			console.warn("<Calendar> was created without expected prop 'calendarData'");
    		}
    	});

    	const writable_props = ['calendarData'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Calendar> was created with unknown prop '${key}'`);
    	});

    	const click_handler = day => setSelectedDate(day);
    	const keypress_handler = day => setSelectedDate(day);

    	$$self.$$set = $$props => {
    		if ('calendarData' in $$props) $$invalidate(5, calendarData = $$props.calendarData);
    	};

    	$$self.$capture_state = () => ({
    		currentDate,
    		selectedDate,
    		calendarData,
    		setSelectedDate,
    		prevMonth,
    		nextMonth,
    		getDaysInMonth
    	});

    	$$self.$inject_state = $$props => {
    		if ('currentDate' in $$props) $$invalidate(0, currentDate = $$props.currentDate);
    		if ('selectedDate' in $$props) $$invalidate(1, selectedDate = $$props.selectedDate);
    		if ('calendarData' in $$props) $$invalidate(5, calendarData = $$props.calendarData);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		currentDate,
    		selectedDate,
    		setSelectedDate,
    		prevMonth,
    		nextMonth,
    		calendarData,
    		click_handler,
    		keypress_handler
    	];
    }

    class Calendar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { calendarData: 5 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Calendar",
    			options,
    			id: create_fragment$1.name
    		});
    	}

    	get calendarData() {
    		throw new Error("<Calendar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set calendarData(value) {
    		throw new Error("<Calendar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/App.svelte generated by Svelte v3.59.2 */

    const { console: console_1 } = globals;
    const file = "src/App.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	child_ctx[7] = i;
    	return child_ctx;
    }

    // (89:8) {#each textareaData.split('\n') as line, i (i)}
    function create_each_block(key_1, ctx) {
    	let div;
    	let t_value = /*i*/ ctx[7] + 1 + "";
    	let t;

    	const block = {
    		key: key_1,
    		first: null,
    		c: function create() {
    			div = element("div");
    			t = text(t_value);
    			add_location(div, file, 89, 10, 1728);
    			this.first = div;
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, t);
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;
    			if (dirty & /*textareaData*/ 1 && t_value !== (t_value = /*i*/ ctx[7] + 1 + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(89:8) {#each textareaData.split('\\n') as line, i (i)}",
    		ctx
    	});

    	return block;
    }

    // (101:2) {#if antlrError}
    function create_if_block_1(ctx) {
    	let br;
    	let t0;
    	let p;
    	let t1;
    	let t2;

    	const block = {
    		c: function create() {
    			br = element("br");
    			t0 = space();
    			p = element("p");
    			t1 = text("ANTLR Error: ");
    			t2 = text(/*antlrError*/ ctx[1]);
    			add_location(br, file, 101, 4, 1982);
    			set_style(p, "color", "red");
    			add_location(p, file, 102, 4, 1992);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, p, anchor);
    			append_dev(p, t1);
    			append_dev(p, t2);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*antlrError*/ 2) set_data_dev(t2, /*antlrError*/ ctx[1]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(br);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(101:2) {#if antlrError}",
    		ctx
    	});

    	return block;
    }

    // (106:2) {#if calendarData}
    function create_if_block(ctx) {
    	let br;
    	let t;
    	let calendar;
    	let current;

    	calendar = new Calendar({
    			props: { calendarData: /*calendarData*/ ctx[2] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			br = element("br");
    			t = space();
    			create_component(calendar.$$.fragment);
    			add_location(br, file, 106, 4, 2079);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(calendar, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const calendar_changes = {};
    			if (dirty & /*calendarData*/ 4) calendar_changes.calendarData = /*calendarData*/ ctx[2];
    			calendar.$set(calendar_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(calendar.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(calendar.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(br);
    			if (detaching) detach_dev(t);
    			destroy_component(calendar, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(106:2) {#if calendarData}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let main;
    	let h1;
    	let t1;
    	let form;
    	let div2;
    	let div0;
    	let each_blocks = [];
    	let each_1_lookup = new Map();
    	let t2;
    	let div1;
    	let textarea;
    	let t3;
    	let br;
    	let t4;
    	let button;
    	let t6;
    	let t7;
    	let current;
    	let mounted;
    	let dispose;
    	let each_value = /*textareaData*/ ctx[0].split('\n');
    	validate_each_argument(each_value);
    	const get_key = ctx => /*i*/ ctx[7];
    	validate_each_keys(ctx, each_value, get_each_context, get_key);

    	for (let i = 0; i < each_value.length; i += 1) {
    		let child_ctx = get_each_context(ctx, each_value, i);
    		let key = get_key(child_ctx);
    		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
    	}

    	let if_block0 = /*antlrError*/ ctx[1] && create_if_block_1(ctx);
    	let if_block1 = /*calendarData*/ ctx[2] && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			main = element("main");
    			h1 = element("h1");
    			h1.textContent = "Please enter ur training yo";
    			t1 = space();
    			form = element("form");
    			div2 = element("div");
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t2 = space();
    			div1 = element("div");
    			textarea = element("textarea");
    			t3 = space();
    			br = element("br");
    			t4 = space();
    			button = element("button");
    			button.textContent = "Submit";
    			t6 = space();
    			if (if_block0) if_block0.c();
    			t7 = space();
    			if (if_block1) if_block1.c();
    			add_location(h1, file, 83, 2, 1518);
    			attr_dev(div0, "class", "line-numbers svelte-zqls6p");
    			add_location(div0, file, 87, 6, 1635);
    			attr_dev(textarea, "class", "svelte-zqls6p");
    			add_location(textarea, file, 93, 8, 1823);
    			attr_dev(div1, "class", "textarea-container svelte-zqls6p");
    			add_location(div1, file, 92, 6, 1782);
    			attr_dev(div2, "class", "container svelte-zqls6p");
    			add_location(div2, file, 86, 4, 1605);
    			add_location(br, file, 96, 4, 1899);
    			attr_dev(button, "type", "submit");
    			add_location(button, file, 97, 4, 1910);
    			add_location(form, file, 85, 2, 1559);
    			add_location(main, file, 82, 0, 1509);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			append_dev(main, h1);
    			append_dev(main, t1);
    			append_dev(main, form);
    			append_dev(form, div2);
    			append_dev(div2, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(div0, null);
    				}
    			}

    			append_dev(div2, t2);
    			append_dev(div2, div1);
    			append_dev(div1, textarea);
    			set_input_value(textarea, /*textareaData*/ ctx[0]);
    			append_dev(form, t3);
    			append_dev(form, br);
    			append_dev(form, t4);
    			append_dev(form, button);
    			append_dev(main, t6);
    			if (if_block0) if_block0.m(main, null);
    			append_dev(main, t7);
    			if (if_block1) if_block1.m(main, null);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[4]),
    					listen_dev(form, "submit", prevent_default(/*ParseTA*/ ctx[3]), false, true, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*textareaData*/ 1) {
    				each_value = /*textareaData*/ ctx[0].split('\n');
    				validate_each_argument(each_value);
    				validate_each_keys(ctx, each_value, get_each_context, get_key);
    				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div0, destroy_block, create_each_block, null, get_each_context);
    			}

    			if (dirty & /*textareaData*/ 1) {
    				set_input_value(textarea, /*textareaData*/ ctx[0]);
    			}

    			if (/*antlrError*/ ctx[1]) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_1(ctx);
    					if_block0.c();
    					if_block0.m(main, t7);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (/*calendarData*/ ctx[2]) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);

    					if (dirty & /*calendarData*/ 4) {
    						transition_in(if_block1, 1);
    					}
    				} else {
    					if_block1 = create_if_block(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(main, null);
    				}
    			} else if (if_block1) {
    				group_outros();

    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block1);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block1);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].d();
    			}

    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);

    	let textareaData = `Name: "123".
author: "Dylan".
date: "19/01/2003".

"week 1" {
  Mon: {
        (run)
        "warmup" {60min HRZ1 - HRZ2}

        "main set" {
            2hours HRZ2 - HRZ3 &&
            1hours < HRZ2
        }

        "cool down" {
            60min HRZ1 - HRZ2
        }
  },
  Tue: (bike) 1hr30min HRZ2 && (run) 1hr HRZ2,
  Wed: (bike) 2hr HRZ2,
  Thu: (bike) 1hr HRZ2&&(run) 1hr HRZ2,
  Fri: (bike) 2hr HRZ2,
  Sat: (bike) 2hr HRZ2 && (run) 1hr30min HRZ2
}

"week 2" {
  Mon: (bike) 1hr HRZ1 "cool bike yo",
  Tue: (bike) 1hr30min HRZ2 && (run) 1hr HRZ2,
  Wed: (bike) 2hr HRZ2,
  Thu: (bike) 1hr HRZ2&&(run) 1hr HRZ2,
  Fri: (bike) 2hr HRZ2,
  Sat: (bike) 2hr HRZ2 && (run) 1hr30min HRZ2,
  2*{
    (run) base 
  }
}`;

    	let antlrError = null;
    	let calendarData = null;

    	function ParseTA() {
    		$$invalidate(2, calendarData = null);

    		try {
    			$$invalidate(2, calendarData = Parse(textareaData));
    			console.log(calendarData);
    			$$invalidate(1, antlrError = null); //no error yay!
    		} catch(error) {
    			$$invalidate(1, antlrError = error.message);
    			console.log(antlrError);
    		}
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	function textarea_input_handler() {
    		textareaData = this.value;
    		$$invalidate(0, textareaData);
    	}

    	$$self.$capture_state = () => ({
    		Parse,
    		Calendar,
    		textareaData,
    		antlrError,
    		calendarData,
    		ParseTA
    	});

    	$$self.$inject_state = $$props => {
    		if ('textareaData' in $$props) $$invalidate(0, textareaData = $$props.textareaData);
    		if ('antlrError' in $$props) $$invalidate(1, antlrError = $$props.antlrError);
    		if ('calendarData' in $$props) $$invalidate(2, calendarData = $$props.calendarData);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [textareaData, antlrError, calendarData, ParseTA, textarea_input_handler];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    var app = new App({
    	target: document.body
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map

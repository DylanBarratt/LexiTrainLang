<script>
import { Router, Route } from 'svelte-routing';
import Ide from './routes/IdeRoute.svelte';
import Pdf from './routes/Pdf.svelte';
</script>

<Router>
  <Route path="/" component={Ide} />
  <Route path="/pdf" component={Pdf} />
</Router>
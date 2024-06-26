#!/bin/bash

# Running the docs as a website on an ubuntu machiene with Apache2 installed
# If doesn't work, run as sudo 

SITE_NAME=LexiTrain_docs
IP=127.0.0.1 # May need to change to your ip 

# Closes server on exit
cleanup() {
    echo -e "\nstopping apache server"
    sudo systemctl stop apache2
}
trap cleanup EXIT

# Check in correct dir
if [ "$(basename "$PWD")" != "DOCS" ]; then
    cd "DOCS" || exit 1
fi

# Build if specified
if [[ "$@" == *"--build"* ]]; then
    echo "Building site:"
    python3 -m mkdocs build
fi

sudo mkdir -p /var/www/html/$SITE_NAME
sudo cp -r ./site/* /var/www/html/$SITE_NAME/

sudo chown -R www-data:www-data /var/www/html/$SITE_NAME
sudo chmod -R 755 /var/www/html/$SITE_NAME

sudo systemctl restart apache2

echo http://$IP/$SITE_NAME
echo "Press ctrl+c to exit"

while :
do
    sleep 1
done



#!/bin/bash

# Running the docs as a website on an ubuntu machiene with Apache2 installed
# If doesn't work, run as sudo 

SITE_NAME=LexiTrain_docs
IP=127.0.0.1 # May need to change to your ip 

cleanup() {
    echo "stopping apache server"
    sudo systemctl stop apache2
}

trap cleanup EXIT

sudo mkdir -p /var/www/html/$SITE_NAME
sudo cp -r ./site/* /var/www/html/$SITE_NAME/

sudo chown -R www-data:www-data /var/www/html/$SITE_NAME
sudo chmod -R 755 /var/www/html/$SITE_NAME

sudo systemctl restart apache2

echo http://$IP/$SITE_NAME

while :
do
    sleep 1
done



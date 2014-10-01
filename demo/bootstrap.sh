#!/usr/bin/env bash

echo "Install Node and npm"
apt-get update
apt-get install -y software-properties-common python-software-properties
apt-get install -y python g++ make
add-apt-repository -y ppa:chris-lea/node.js
apt-get update
apt-get install -y nodejs

echo "Installing gulp globally"
npm install gulp -g

echo "Installing Local Packages"
cd /vagrant
npm install

echo "Installing Ruby"
apt-get install -y ruby-full build-essential
apt-get install -y rubygems

echo "Installing Bundler"
gem install bundler

echo "Installing Sass and other Sass-related things via Bundler"
cd /vagrant # Let's just make doubly sure we're in the correct directory
sudo -u vagrant bundle install

echo "Installing apache2..."
apt-get update
apt-get install -y apache2 >/dev/null 2>&1
rm -rf /var/www
ln -fs /vagrant /var/www
a2enmod rewrite
sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/sites-enabled/000-default
sed -i 's/www-data/vagrant/' /etc/apache2/envvars

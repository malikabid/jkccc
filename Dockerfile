# Use the official PHP 8.2.20 image with Apache as the base image
FROM php:8.2.20-apache

# Set the working directory
WORKDIR /var/www/html

# Copy the application files
COPY . .

# Expose the port
EXPOSE 80

# Start the Apache server
CMD ["apache2-foreground"]
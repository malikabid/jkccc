# Use the latest stable PHP image
FROM php:latest

# Install necessary PHP extensions
RUN apt-get update && apt-get install -y \
    libssl-dev \
    libcurl4-openssl-dev \
    pkg-config \
    libmcrypt-dev \
    && docker-php-ext-install -j$(nproc) curl

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set the working directory
WORKDIR /var/www/html

# Copy the current directory contents into the container
COPY . .

# Install PHP dependencies
RUN composer install

# Expose port 25 for SMTP
EXPOSE 25

# Command to run the PHP script
CMD ["php", "./info.php"]
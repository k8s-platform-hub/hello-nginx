FROM nginx:latest

#Copy the configuration
COPY conf/nginx.conf /etc/nginx

#Copy the static files to be served
COPY src/ /usr/share/nginx/html

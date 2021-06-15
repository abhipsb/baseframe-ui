FROM nginx:1.17-alpine
#COPY ./dist/main-app /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]
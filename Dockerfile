FROM nginx
EXPOSE 80
COPY ./deploy/ /usr/share/nginx/html
COPY ./site/ /usr/share/nginx/html/documentation
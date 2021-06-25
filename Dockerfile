FROM nginx
EXPOSE 80
COPY ./content/ /usr/share/nginx/html
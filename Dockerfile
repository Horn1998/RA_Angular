FROM nginx:1.11-1.11-alpine
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 6666
CMD ["nginx", "-g", "daemon off;"]
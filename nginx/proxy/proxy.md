# Reverse-Proxy

In order to create proxy in nginx, we need to edit nginx configuration. 

Let's copy the nginx conf into current working directory. 

```js
cp /etc/nginx/sites-enabled/default .
```

Make changes into the configuration and update 
```js
sudo cp default /etc/nginx/sites-enabled/
sudo systemctl reload nginx
```

## Multiple proxy
```js
location /users/ {
    proxy_pass http://localhost:4001/;
}

location /products/ {
    proxy_pass http://localhost:4000/;
}
```

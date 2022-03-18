# Nginx
Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache. 

## Install Nginx

Update system
```js
sudo apt-get update
sudo apt-get upgrade
```
#### 1. Install Nginx
```js
sudo apt install nginx
```

#### 2. Adjusting the Firewall
```js
sudo ufw app list

// output
Output
Available applications:
  Nginx Full
  Nginx HTTP
  Nginx HTTPS
  OpenSSH
```
- Nginx Full - opens port 80(HTTP) and 443(HTTPs)
- Nginx HTTP - opens port 80
- Nginx HTTPS - opens port 443

#### 3. Verify the status
```js
sudo ufw status

// output
Output
Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere                  
Nginx HTTP                 ALLOW       Anywhere                  
OpenSSH (v6)               ALLOW       Anywhere (v6)             
Nginx HTTP (v6)            ALLOW       Anywhere (v6)
```

#### 4. Checking your Web Server
```js
systemctl status nginx

// output
Output
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Fri 2020-04-20 16:08:19 UTC; 3 days ago
     Docs: man:nginx(8)
 Main PID: 2369 (nginx)
    Tasks: 2 (limit: 1153)
   Memory: 3.5M
   CGroup: /system.slice/nginx.service
           ├─2369 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
           └─2380 nginx: worker process
```

#### 5. Open default nginx page
http://localhost:80

### Managing the Nginx Process
```js
// To stop your web server, type:
sudo systemctl stop nginx

// To start the web server when it is stopped, type:
sudo systemctl start nginx

// To stop and then start the service again, type:
sudo systemctl restart nginx

// If you are only making configuration changes, Nginx can often reload without dropping connections. To do this, type:
sudo systemctl reload nginx

// By default, Nginx is configured to start automatically when the server boots. If this is not what you want, you can disable this behavior by typing:
sudo systemctl disable nginx

// To re-enable the service to start up at boot, you can type:
sudo systemctl enable nginx
```


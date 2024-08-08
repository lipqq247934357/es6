# history模式下，nginx配置文件(vue，react同理)

server {
    listen 80;
    server_name yourdomain.com;

    root /path/to/your/react/app/build;  # 指向 React 应用的构建目录

    index index.html;

    location / {
        try_files $uri /index.html;
    }

    location /api/ {
        # 如果你有 API 路由，请在此处处理
        proxy_pass http://your-api-server;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    error_page 404 /index.html;  # 可选的，处理404页面
}

主要是：
    location / {
        try_files $uri /index.html;
    }
    找不到的页面会返回index.html，让前端处理

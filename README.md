## Express Generator
### [Express 应用程序生成器](http://www.expressjs.com.cn/starter/generator.html)：快速创建一个Express应用框架

* 全局安装express-genrator

  ```bash
  npm install express-generator -g
  ```

* 创建项目`express-generator-demo`,并启动

  ```bash
  # use express-generator to create project
  express express-generator-demo --view=pug

  # enter project
  cd express-generator-demo

  # install dependencies
  npm install

  # Run the myapp on Windows
  DEBUG=express-generator-demo:* npm start

  ```

* 使用nodemon：修改文件后自动重启express服务

  ```bash
  
  npm install --save-dev nodemon

  ```

  修改`package.json`文件的`scripts`

  ```javascript

  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },

  ```

  启动express服务

  ```bash

  SET DEBUG=myapp:* & npm run devstart

  ```

### 目录结构解析
```
/express-generator-demo
  # /bin/www是应用的主入口，www文件把app.js文件引进来，并创建一个node HTTP server
  /bin
    www 
  # 存放 package.json 中安装的模块
  /node_moudles
  # 使用中间件express.static来存放js、css、image等资源,相当于静态资源库
  /public
    /images
    /javascripts
    /stylesheets
  # 存放路由文件
  /routes
    /index.js
    /users.js
  # 存放html界面对应的模板文件(jade/pug/ejs等)
  /views
    /error.pug
    /index.pug
    /layout.pug
  # git的忽略配置文件
  .gitignore
  # 入口文件
  app.js
  # 存储着工程的信息及模块依赖
  package.json
  README.md
```

### app.js 分析传送门

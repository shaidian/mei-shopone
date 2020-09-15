# mei-shopone

# 前言

此项目是基于nuxt+egg+mysql开发的在线商城系统全栈模板，目前前端部分已适配移动端。面向开发人员友好，快速，轻巧，干净，并包含W3有效源代码。后台管理系统基于vuetify实现。项目正在逐步完善中，如果您在使用购买后发现问题，欢迎您随时提出。目前开源出首页部分进行体验，如果您有需求，请移步[（猪八戒平台）](https://shop.zbj.com/9259639/sid-1632713.html)进行购买。此源码仅作为学习使用，不得商用。有任何问题都可以咨询下方的QQ，基本都在线。

<a href="http://shop1.meixiansen.com" target="_blank">商城风格预览（前端地址）</a>

[商城风格预览（后台管理地址）](http:shop1admin.meixiansen.com)

[完整源码购买地址（猪八戒平台）](https://shop.zbj.com/9259639/sid-1632713.html)

联系QQ：87362873

## 前端项目特点

- 一套完善的电商系统模板（前端，后端，API部分）
- 简约风格，多重组件，架构清晰
- 架构简单，入门快速，简单可依赖

## 后端项目特点

## 前端系统说明
### 采用nuxt.js构建，极速的服务端渲染，流畅体验



## 后端管理系统项目说明
### 功能
用于管理用户账号，商品分类，商品信息，订单，数据统计等业务

### 采用 Vuetify 开发
Vuetify is developed exactly according to Material Design spec. Every component is hand crafted to bring you the best possible UI tools to your next great app. The development doesn't stop at the core components outlined in Google's spec. Through the support of community members and sponsors, additional components will be designed and made available for everyone to enjoy.

### 整体文档简单说明
```
admin
├── README.md
├── CHANGELOG.md
├── babel.config.js
├── cypress.json
├── jest.config.js
├── now.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.png  图标
│   └── index.html
├── layouts 布局
│   ├── frontend
│   │   └── index.vue
│   │   └── view.vue
├── src
│   ├── App.vue 
│   ├── assets
│   │   └── vuetify.svg 等 静态资源
│   ├── components
│   │   └── base
│   │       ├── Btn.vue  按钮
│   │       ├── Card.vue 卡片
│   │       ├── Item.vue 菜单项
│   │       ├── ItemGroup.vue 菜单项
│   │       ├── MaterialCard.vue 卡片
│   │       ├── MaterialStatsCard.vue 卡片状态
│   ├── main.js
│   ├── plugins
│   │   ├── base.js 基础
│   │   ├── chartist.js chart
│   │   ├── vee-validate.js 验证
│   │   ├── vue-world-map.js map地图
│   │   └── vuetify.js vuetify核心
│   │   └── element.js element核心
│   ├── router.js 路由
│   ├── sass sass样式
│   │   ├── main.scss
│   │   ├── overrides.sass
│   │   └── vuetify-material
│   │       └── _sidebar.sass
│   ├── store.js vuex状态
│   └── views
│       ├── dashboard
│       │   ├── Dashboard.vue
│       │   ├── Index.vue
│       │   ├── components
│       │   │   └── core
│       │   │       ├── AppBar.vue
│       │   │       ├── Drawer.vue
│       │   │       ├── Settings.vue
│       │   │       └── View.vue
│       │   ├── goods
│       │   │   ├── Add.vue
│       │   │   ├── Cate.vue
│       │   │   ├── List.vue
│       │   │   └── Params.vue
│       │   ├── order
│       │   │   ├── citydata.js
│       │   │   └── Order.vue
│       │   ├── power
│       │   │   ├── Rights.vue
│       │   │   ├── Roles.vue
│       │   ├── report
│       │   │   ├── Report.vue
│       │   └── user
│       │       ├── User.vue
│       │       ├── UserProfile.vue
│       └── pages
│           ├── Error.vue
│           ├── Index.vue
│           ├── Login.vue
│           └── components
│               └── core
│                   ├── Footer.vue
│                   └── View.vue
├── tests
│   ├── e2e
│   │   ├── plugins
│   │   │   └── index.js
│   │   ├── specs
│   │   │   └── test.js
│   │   └── support
│   │       ├── commands.js
│   │       └── index.js
│   └── unit
│       └── example.spec.js
├── vue.config.js
```

## 后端apiserver说明（API文档联系QQ获取）
### 项目整体文件简单说明
+ config 配置文件目录
    + default.json 默认配置文件（其中包含数据库配置，jwt配置）
+ dao 数据访问层，存放对数据库的增删改查操作
    + DAO.js 提供的公共访问数据库的方法
+ models 存放具体数据库 ORM 模型文件
+ modules 当前项目模块
    + authorization.js API权限验证模块
    + database.js 数据库模块（数据库加载基于 nodejs-orm2 库加载）
    + passport.js 基于 passport 模块的登录搭建
    + resextra.js API 统一返回结果接口
+ node_modules 项目依赖的第三方模块
+ routes 统一路由
    + api 提供 api 接口
    + mapp 提供移动APP界面
    + mweb 提供移动web站点
+ services 服务层，业务逻辑代码在这一层编写，通过不同的接口获取的数据转换成统一的前端所需要的数据
+ app.js 主项目入口文件
+ package.json 项目配置文件

categoriesweb ，goodsweb 等 后缀 为web的为 提供前端调取的api接口


#### 本地环境
​ Node.js + MySQL

#### 创建数据库
​ 数据库文件在：db -> mysdb.sql

​ 创建数据库mydb，可通过新建查询执行mysdb.sql下的SQL语句建立数据库，数据库表

​ 数据库连接名：root 密码： 123456

​ 可在config -> default.json 修改




## 技术选型
#### 前端
- nuxt 
- vue
- router
- vuex
- axios
#### 管理后台
- vue
- vuetify
- vuex
- axios

## 项目预览


![markdown](https://shai.oss-cn-beijing.aliyuncs.com/b1.jpg "markdown")

![markdown](https://shai.oss-cn-beijing.aliyuncs.com/b5.jpg "markdown")

![markdown](
https://shai.oss-cn-beijing.aliyuncs.com/b4.jpg "markdown")

## 使用说明

### 安装依赖
```javascript
# 预渲染需要安装PrerenderSPAPlugin库，npm install会无法安装Chromuim，建议使用cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
```
所有项目必须先 npm install  (前端+后端管理系统+apiserver)

### 前端部分
#### 启动服务（服务端渲染）
```javascript
npm run dev
```
#### 构建生产环境
```javascript
npm run build
```
### 后端部分
#### 构建生产环境
```javascript
npm run serve
```
#### 构建生产环境
```javascript
npm run build
```

### apiserver
#### 启动服务
```javascript
1. npm install supervisor -g
2. supervisor node app.js
```

#### 使用pm2管理应用
```javascript
1. npm i pm2 -g //全局安装
2. pm2 start 脚本(如./app.js) --name 自定义名称 // 启动项目
3. pm2 ls //查看服务器运行的项目
4. pm2 restart 自定义名称 //重启项目
5. pm2 stop 自定义名称 //停止项目
6. pm2 delete 自定义名称 //删除项目
```




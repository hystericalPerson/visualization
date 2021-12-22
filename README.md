---
title: 【笔记】项目换肤
date: 2021-12-22 14：10
categories: 
    - [笔记]
---

## 前言
最近项目需要一个一键换肤的功能

## 实现

#### UI框架部分
<https://blog.csdn.net/weixin_43225598/article/details/108392687>
采用以上链接的方式。  
大体上为安装ui框架的换肤组件进行处理，如antd-theme-generator

#### 自定义样式
1. 在public文件夹中新建less文件并在html中link引入该文件
2. 在文件中定义样式类，在需要的地方使用该类
3. 使用<code>less.modifyVars</code>方法调用

**Tip**: 
1. 可将默认定义主题的各个样式放入js中来进行配置，在app中初始化主题
2. 如果发现项目运行报错，修改<code>vue.config.js</code>中的<code>javascriptEnabled：true</code>
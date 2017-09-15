# glow

> hexo theme width pug and SCSS

## menu

- [Usage](#Usage)
  - [Download](#Download)
  - [Configure](#Configure)
  - [Update theme](#Update-theme)
- [General](#General)
- [running and deploying](#running-and-deploying)
- [TODO](#TODO)

## Usage
### Download

Enter your hexo blog directory:
```bash
git clone https://github.com/Lamborshea/glow.git themes/glow
npm install --save hexo-render-pug
npm install --save hexo-renderer-scss
npm install --save hexo-tag-cloud
```
If you need the `tags`,`categories`,`about`,`projects` page, you need type these command:
```bash
hexo new page tags
hexo new page categories
hexo new page projects
hexo new page about
```
### Configure

Modify the theme field in `Blog/_config.yml` by changing `theme` variable to `glow`: `theme: glow`  
Close the highlight in `Blog/_config.yml` by changing `highlight` variable to `false`:
```
highlight:
  enable: false
```

Add or modify the archive field in `Hexo/_config.yml`
```
archive_generator:
  per_page: disable
  yearly: true
  monthly: true
```
### Update theme

```
cd themes/glow
git pull
```

## General

Author : [Lambor_shea](https://github.com/Lamborshea)  
language: pug scss   
Version : 1.0.0  
Compatibility : Node v4 or later, Hexo v3.0.0 or later  

## running and deploying
If you changed root `_config.yml` or `glow/_config.yml`, you should type `hexo clean` and do other work.
```bash
hexo clean
hexo g
hexo s
```

## TODO

- [ ] 导航栏菜单响应式设计
- [ ] 部分 js 文件延迟加载
- [ ] fancybox 支持
- [ ] 添加阅读人数
- [ ] SEO优化
- [ ] toc 栏浏览文章时固定并且实现阅读位置高亮
- [ ] 添加一些动画
- [ ] 归档页按年份归档
- [ ] 添加一个展示个人信息（头像，描述，网站浏览次数，个人社交账号的 logo）的 widget

# glow

> hexo theme

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
Version : 1.0.0  
Compatibility : Node v4 or later, Hexo v3.0.0 or later  

## running and deploying

```bash
hexo clean
hexo g
hexo s
```

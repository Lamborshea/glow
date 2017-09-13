# glow

> hexo theme

## Usage
### Download

Enter your hexo blog directory:
```bash
git clone https://github.com/Lamborshea/glow.git themes/glow
npm install --save hexo-render-pug
npm install --save hexo-renderer-scss
```

### Configure
Modify the theme field in `Blog/_config.yml` by changing `theme` variable to `glow`: `theme: glow`

Close the highlight in `Blog/_config.yml` by changing `highlight` variable to `false`:
```
highlight:
  enable: false
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

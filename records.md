# 本项目知识点

## 项目搭建

浏览器左上角小图标(favicon.ico) , 可以在比特虫网站转换图片

```html

<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
```

按序引入js和css的初始化

## 知识点

### 1-1边框背景图片border-images

```css
.panel {
  width: 300px;
  height: 150px;
  /* 设置边框背景图片的前提是 盒子有边框 */
  border: 20px solid red;
  background-color: pink;
  box-sizing: border-box;
  /*图片来源*/
  border-image-source: url('./images/border.png');
  /*图片的偏移量(用四个偏移量 上右下左)将图片剪成九宫格*/
  border-image-slice: 50 38 20 126;
  /*边界宽度*/
  border-image-width: 50px 38px 20px 126px;
  /*图片平铺方式 repeat重复,拉伸stretch,铺满round*/
  border-image-repeat: stretch;
  /* 边框背景图片连写.注意/ */
  border-image: url('./images/border.png') 50 38 20 126/50px 38px 20px 126px stretch;
}
```

### 1-2字体图标

使用阿里的图标素材库

* 新建项目
* 选择择对应的图标
* 生成font-class (看对应的帮助完成)
* 然后引入(下载或者link引入)
```html
<link rel="stylesheet" href="//at.alicdn.com/t/font_2670396_78bfzmpk4zt.css">
<div>
  <i class="iconfont icon-fenxiang" style="color: red;font-size: 20px;"></i>
</div>
```

### 1-3背景图片大小 background-size

```css
.div {
  /* 按等比例缩放 有一边到了就停止缩放 */
  background-size: contain;
  /* 按等比例缩放 必须占满盒子才停止缩放 */
  background-size: cover;
}
```

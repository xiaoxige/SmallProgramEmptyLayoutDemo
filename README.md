# SmallProgramEmptyLayoutDemo
程序必用的空布局（包含加载中、加载为空、加载错误、自己的布局）。完全不影响其他逻辑
git地址：https://github.com/xiaoxige/SmallProgramEmptyLayoutDemo

# 介绍
  空布局， 包含记载中、加载为空、加载错误。 自己还是和原来那样开发小程序那样， 只是在你要使用空布局的根布局使用empty-layout标签替换view标签即可。该空布局不会影响到你开发自己功能的逻辑。（你要说是非侵入的也行，好像这样说更高大上哈）
  详情及用法可查看Demo
# 注意
  空布局中的各个界面状态的图片、界面或者图片，用户可以根据自己的去empty中去改
  有什么问题可直接联系我QQ:74575921
  
# 效果
## 1.加载中
  ![image](https://github.com/xiaoxige/SmallProgramEmptyLayoutDemo/raw/master/Screenshots/loading.png)
## 2.加载失败
  ![image](https://github.com/xiaoxige/SmallProgramEmptyLayoutDemo/raw/master/Screenshots/error.png)
## 2.加载数据为空
  ![image](https://github.com/xiaoxige/SmallProgramEmptyLayoutDemo/raw/master/Screenshots/empty.png)
  
# 使用方法
## 1.引入
  把Demo中的empty文件夹复制到自己项目里
## 2.使用
  在要使用的界面的json文件中引入空布局
  
```javascript
  "usingComponents": {
    "empty-layout": "../../empty/empty"
  }
```
  在要使用的界面的js文件中引入空布局的js文件
  
```javascript
  var Empty = require("../../empty/constant/EmptyConstant.js");
```
  在要使用的界面中那一块要使用空布局直接使用空布局提供的标签即可
  
```javascript
  <empty-layout bindemptyevent="emptyCallback" emptyType="{{emptyType}}" loadingTransparent="{{false}}">
  <!--自己的布局-->
    <view>
	</view>
  </empty-layout>
```
## 3.展示不同的界面
### 3.1. 布局中三个值的意义
    bindemptyevent="emptyCallback"中emptyCallback为空布局中点击重新加载的回调（emptyType: 表示是哪个布局的重新加载。 Empty.error: 点击了错误布局中的重新加载、 Empty.empty: 点击了数据为空布局中的重新加载）
	emptyType="{{emptyType}}"中emptyType指定展示哪个布局（Empty.content: 展示自己的布局、Empty.empty: 展示数据为空的布局、 Empty.error: 展示错误的布局、 Empty.loading: 展示加载中的布局）
	loadingTransparent="{{false}}"中的值是指定在加载中是是否显示后面自己的布局
### 3.2.改变布局
  在自己代码中js逻辑中去根据自己的逻辑去设置emptyType的值即可，eg: 要展示加载中的布局
	
```javascript
    this.setData({
      emptyType: Empty.loading
    });
```



  
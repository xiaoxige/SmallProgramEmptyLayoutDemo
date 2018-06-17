# SmallProgramEmptyLayoutDemo
程序必用的空布局（包含加载中、加载为空、加载错误、自己的布局）。完全不影响其他逻辑
git地址：https://github.com/xiaoxige/SmallProgramEmptyLayoutDemo

# 介绍
  空布局， 包含记载中、加载为空、加载错误。 自己还是和原来那样开发小程序那样， 只是在你要使用空布局的根布局使用empty-layout标签替换view标签即可。该空布局不会影响到你开发自己功能的逻辑。（你要说是非侵入的也行，好像这样说更高大上哈）
  详情及用法可查看Demo
  
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
  	<--自己的布局!-->
    <view>
	</view>
  </empty-layout>
```

  
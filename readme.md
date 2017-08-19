# es6-promise-always

##  简介

ES6添加了Promise对象，成功在then中处理，失败在catch中处理，但有时候，我们需要在无论成功或失败时都要做一些事，比如隐藏loading, 记录日志等等，下面我们以浏览器端ajax请求为例，我们使用axios（它是基于Promise的）:

```javascript
axios.get("/").then(()=>{
  //处理逻辑
  ...
  console.log("请求结束")
  hideLoading();
}).catch(()=>{
  console.log("请求结束")
  hideLoading();
})
```

不知你是怎么想的，这样的代码， 令我很不舒服，之前很多时候，在调ajax时都有点怀念jQuery：

```javascript
$.get("/").done(()=>{
  //处理逻辑
}).always(()=>{
  console.log("请求结束")
  hideLoading();
})
```

是时候该解决这个问题了！es6-promise-always正是对ES6的功能做了一个扩充，使其支持always，并同时node和browser.

## 使用

1.安装

```javascript
npm install es6-promise-always  --save
```

2.引入使用

```javascript
require("es6-promise-always")
axios.get("/").done(()=>{
  //处理逻辑
}).always(()=>{
  console.log("请求结束")
  hideLoading();
})
```



### always(data, error)

- data: resolve的数据。
- error: reject的数据。

## Tips

不要担心这个会让你的程序变胖！es6-promise-always会让你非常惊喜。在看源码之前，你可以自己尝试实现一下哦。if you like it , please star,  thanks.
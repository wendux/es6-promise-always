/**
 * Created by du on 2017/8/19.
 */
require("./index")
var p=new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve("hello world!")
    },1000)
})
p.then(function (data) {
    console.log(data)
    return data;
}).always(function (data,error) {
    console.log("always:",data,error)
})

p=new Promise(function (resolve,reject) {
    setTimeout(function () {
        reject("error! error!")
    },2000)
})
p.then(function (data) {
    console.log("then",data)
}).always(function (data,error) {
    console.log("always:",data,error)
})
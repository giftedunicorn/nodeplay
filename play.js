
// create a promise
class MyPromise {
  constructor(fn) {
    
    const resolve = function(data) {

    }
    const reject = function(data) {

    }
    fn(resolve, reject)
  }

  then(resolveCallback, rejectCallback) {

  }
}
let promise1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 2000);
});
promise1.then(res => {
  console.log(res); //过两秒输出123
})

// 写一个事件代理函数，需要判断child是parent的子节点
// EventEmitter
// 实现一个继承 寄生组合继承
// 版本号排序的方法
// 分片思想解决大数据量渲染问题

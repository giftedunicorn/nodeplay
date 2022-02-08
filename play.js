
// 版本号排序的方法
// 题目描述:有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。现在需要对其进行排序，排序的结果为 [ '4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1' ]
// const sortByVersion = function(versions) {
//   versions.sort((a, b) => {
//     let alist = a.split('.')
//     let blist = b.split('.')
//     let index = 0

//     while (alist[index] && blist[index] && alist[index] === blist[index]) {
//       index++
//     }

//     if (alist[index] && !blist[index]) return -1
//     else if (!alist[index] && blist[index]) return 1
//     else if (alist[index] !== blist[index]) return blist[index] - alist[index]

//     return 0
//   })

//   return versions
// }
// console.log(sortByVersion(['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5', '4.3.5.1']))
// [ '4.3.5.1', '4.3.5', '4.3.4.5', '4.2', '2.3.3',   '0.302.1', '0.1.1']

// create a promise
// class MyPromise {
//   constructor(fn) {
//     // Only allow to call resolve or reject once. If resolve or reject is executed, 
//     // the promise is done and not allow to call resolve or reject again
//     this.state = 'pending'
//     // save for later, execute cb in stack when resolving or rejecting
//     this.successfullStack = []
//     this.failureStack = []

//     // we should use arrow function here, using normal function will make this undeinfed
//     const resolve = (res) => {
//       // if promise is finished (not pending state), not continue and return
//       if (this.state === 'pending') this.state = 'success'
//       else return

//       // execute callback one by one
//       this.successfullStack.forEach((next) => {
//         const nextRes = next[0].apply(this, [res])
//         next[1](nextRes)
//       })
//     }

//     const reject = (res) => {
//       // if promise is finished (not pending state), not continue and return
//       if (this.state === 'pending') this.state = 'fail'
//       else return

//       this.failureStack.forEach((cb) => {
//         cb.apply(this, [res])
//       })
//     }

//     fn(resolve, reject)
//   }

//   then(cb) {
//     // chaining promise
//     // create a new promise and return this promise
//     // push callback, resolve and reject to the stack
//     return new MyPromise((resolve, reject) => {
//       this.successfullStack.push([cb, resolve, reject])
//     })
//   }

//   catch(cb) {
//     this.failureStack.push(cb)
//     return this
//   }
// }
// const promise1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(123);
//   }, 2000);
// });
// promise1.then(res => {
//   console.log('DONE 1', res); // 过两秒输出123
//   return 111
// }).then((res) => {
//   console.log('DONE 2', res); // 过两秒输出111
//   return 222
// }).then((res) => {
//   console.log('DONE 3', res); // 过两秒输出222
//   return 333
// }).then((res) => {
//   console.log('DONE 4', res); // 过两秒输出333
// }).catch(err => {
//   console.log('ERROR', err);
// })

// EventEmitter
// 题目描述:实现一个发布订阅模式拥有 on emit once off 方法
// 使用如下
// const event = new EventEmitter();

// const handle = (...rest) => {
//   console.log(rest);
// };

// event.on("click", handle);

// event.emit("click", 1, 2, 3, 4);

// event.off("click", handle);

// event.emit("click", 1, 2);

// event.once("dbClick", () => {
//   console.log(123456);
// });
// event.emit("dbClick");
// event.emit("dbClick");
class EventEmitter {
  constructor() {
    this.events = {};
  }

  // 添加订阅
  // 事件是队列的形式
  on(type, handler) {
    let handlers = this.events[type] || []
    handlers.push(handler)
    this.events[type] = handlers
  }

  // 删除订阅
  // 删除事件队列中的其中一个
  off(type, handler) {
    let handlers = this.events[type] || []
    handlers = handlers.filter((item) => {
      return item !== handler
    })
    this.events[type] = handlers
  }

  // 触发事件
  emit(type, ...args) {
    const handlers = this.events[type]
    if (!handlers) return

    handlers.forEach((handler) => {
      handler.apply(this, args)
    })
  }

  // 只执行一次订阅事件
  // 需要使用到on and off
  once(type, callback) {
    let wrapper = function() {
      callback()
      this.off(type, wrapper)
    }
    this.on(type, wrapper)
  }
}
const event = new EventEmitter();
const handler = (...res) => {
  console.log(res);
};
event.on("click", handler);
event.emit("click", 1, 2, 3, 4);
event.off("click", handler);
event.emit("click", 1, 2);
event.once("dbClick", () => {
  console.log(123456);
});
event.emit("dbClick");
event.emit("dbClick");

// 写一个事件代理函数，需要判断child是parent的子节点
function proxy(event, callback, parent, child) {

}

// 实现一个继承 寄生组合继承
// 分片思想解决大数据量渲染问题
// 题目描述:渲染百万条结构简单的大数据时 怎么使用分片思想优化渲染

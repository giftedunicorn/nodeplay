// let input = [7,15 ,6,10, 13, 9]
// var demo = function(n) {
//     let memo = Array(input.length).fill(0)
//     return helper(n, 0)
// }
// var helper = function(n, index) {
//     if (input.length <= index) {
//         return 0
//     }
//     if (n < input[index]) {
//         return -1
//     }
    
//     // find the next gas station
//     let next = index
//     let gas = n
//     while (gas > 0) {
//         gas -= input[next]
//         next++
//     }
//     let res = helper(n, next)
//     if (res !== -1) return res + 1
    
//     return res
// }
// console.log(demo(20))

// function test () {
//    console.log('start')
//     setTimeout(() => {
//         console.log('children2')
//         Promise.resolve().then(() => {console.log('children2-1')})
//     }, 0)
//     setTimeout(() => {
//         console.log('children3')
//         Promise.resolve().then(() => {console.log('children3-1')})
//     }, 0)
//     Promise.resolve().then(() => {console.log('children1')})
//     console.log('end') 
// }

// test()

// function Scheduler(concurrency) {
//     let _concurrency = concurrency || 2
//     let _current = 0;
//     let queue = [];

//     // start is recursion
//     function start() {
//     	// if queue is empty, reutrn
//     	// if hit the limit, return
//         if (queue.length === 0 || _concurrency === _current) return;

//         _current++;
//         // get fn and fn's resolve and reject for correct callback
//         const [fn, resolve, reject] = queue.shift();
//         // call fn and wait for promise
//         fn().then((res) => {
//             _current--;
//             start();
//         	// this helps fn get its res in requestHelper
//         	resolve(res)
//         }).catch((err) => {
//             _current--;
//             start();
//         	reject(err)
//         });
//     }

//     // return a helper, take fn as the first argument
//     return function(fn) {
//     	// wrap fn in promise and return, and push fn, resolve and reject of this fn to queue 
//     	// IMPORTANT, this helps the application to call the correct callback when fn is done
// 		return new Promise((resolve, reject) => {
//             queue.push([fn, resolve, reject]);
//             start()
//         })
//     }
// }

// // demo function
// const request = function() {
// 	return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve();
//        }, 1000);
// 	})
// }

// // call async function 100 times
// const requestHelper = Scheduler(6);
// for (let i = 0; i < 25; i++) {
// 	requestHelper(request)
// 	.then((res) => {
// 		console.log(i)
// 	})
// }

// function sleep(index, time) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(index)
// 		}, time)
// 	})
// }

// // native async/await
// // (async function test() {
// // 	for (let i = 0; i < 10; i++) {
// // 		let result = await sleep(i, 1000)
// // 		console.log(result)
// // 	}
// // })()

// // implement async/await with generator
// _asyncToGenerator(function* test() {
// 	for (let i = 0; i < 10; i++) {
// 		let result = yield sleep(i, 1000)
// 		console.log(result)
// 	}
// })

// function _asyncToGenerator(genFn) {
// 	return new Promise((resolve, reject) => {
// 		let gen = genFn()

// 		function step(key, arg) {
// 			let info = {}
// 			try {
// 				info = gen[key](arg)
// 			} catch (error) {
// 				reject(error)
// 				return
// 			}

// 			if (info.done) {
// 				resolve(info.value)
// 			} else {
// 				return Promise.resolve(info.value).then((v) => {
// 					return step('next', v)
// 				}, (error) => {
// 					return step('throw', error)
// 				})
// 			}
// 		}

// 		step('next')
// 	})
// }

// function* test() {
// 	let nums = [1,2,3,4,5] 
// 	for (let n of nums) {
// 		yield n
// 	}
// }

// const gen = test()
// for (let item of gen) {
// 	console.log(item)
// }

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// console.log(exports === module.exports)

// var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// function flat(originArr) {
//     let newArr = []
//     for (let item of originArr) {
//     	if (typeof item === 'number') newArr.push(item)
//     	else {
//     		let res = flat(item)
//     		newArr = [...newArr, ...res]
//     	}
//     }
//     return newArr;
// }

// console.log(flat(arr))

// const express = require('express')
// const app = express()
// const port = 3000

// app.set('trust proxy', true)

// app.use((req, res, next) => {
//   res.setTimeout(30000)
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,POST");
//   res.header('Access-Control-Allow-Headers', "*");
//   next();
// });

// app.get('/', (req, res) => {
//   // console.log(req.ip)
//   // console.log(req.headers['x-forwarded-for'])
//   // console.log(req.socket.remoteAddress)
//   console.log(req.headers)
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// function deepClone(obj) {
// 	// 需要建立一个 array 还是 object
// 	let newObj = Array.isArray(obj) ? [] : {}

// 	// if obj is not object, invalid
// 	if (obj && typeof obj === "object") {
// 		// 遍历每个key
// 		for (let key in obj) {
// 			let val = obj[key]
// 			// 是否是对象自己的属性，而不是原型链上的
// 			if (obj.hasOwnProperty(key)) {
// 				// null is object too
// 				if (val === null) newObj[key] = null
// 				// 属性是否是object，如果是则继续递归，如果不是泽复制属性
// 				else newObj[key] = (obj && typeof val === 'object') ? deepClone(val) : val
// 			}
// 		}
// 	}

// 	return newObj
// }

// const target = {
//   name: 'ABC',
//   key: null,
//   age: 28,
//   bool: false,
//   address: {
//     street: 'Station Road',
//     city: 'Pune',
//     number: 123,
//   }
// }

// console.log(deepClone(target))

// Array.prototype.myReduce = function(fn, initialVal) {
//   let nums = this
//   let hasInitial = arguments.length > 1;
//   let res = hasInitial ? initialVal : nums[0];

//   for (let i = hasInitial ? 0 : 1; i < nums.length; i++) {
//     res = fn(res, nums[i])
//   }

//   return res
// }

// let arr = [1,2,3,4]
// let myReduceRes = arr.myReduce((a, b) => {
// 	return a + b
// }, 11)
// let reduceRes = arr.reduce((a, b) => {
// 	return a + b
// }, 11)

// console.log('myReduce', myReduceRes)
// console.log('reduce', reduceRes)

// function debounce(fn, timeout = 100) {
// 	let timer = null

// 	return (...args) => {
// 		clearTimeout(timer)
// 		timer = setTimeout(() => {
// 			fn.apply(this, args)
// 		}, timeout)
// 	}
// }

// function saveButton() {
// 	console.log('save on click')
// }

// let a = debounce(() => {
// 	saveButton()
// }, 1000)

// a(123, 12)

// function throttle (fn, limit = 300) {
//     let waiting = false;                      // Initially, we're not waiting
//     return (...args) => {                     // We return a throttled function
//         if (!waiting) {                       // If we're not waiting
//             fn.apply(this, args);             // Execute users function
//             waiting = true;                   // Prevent future invocations
//             setTimeout(function () {          // After a period of time
//                 waiting = false;              // And allow future invocations
//             }, limit);
//         }
//     }
// }
// // 定义一个目标函数
// function saveInput(){
//   console.log('Saving data');
// }
// // 通过throttle把saveInput包起来，返回一个函数
// const processChange = throttle(() => saveInput());
// processChange(123,123)

// Function.prototype.myBind = function(context) {
// 	// arguments is not array
// 	// get myBind arguments except context
// 	let myBindArgs = [...arguments].slice(1)
// 	return (...args) => {
// 		return this.apply(context, [...myBindArgs, ...args])
// 	}
// }

// function a(...args) {
// 	return `${this.name} ${args}` 
// }
// var b = {name: "kong"}
// let c = a.myBind(b,1,2,3)
// console.log(c(4))

// Function.prototype.myBind = function(context){
//   // 首先判断第一个参数是否是function类型，如果不是则报错
//   if (typeof this !== 'function') {
//     throw new TypeError('Error')
//   }
  
//   // 保存 this 指向
//   let _this = this;
//   // 将第一个参数之外的参数放入第一个列表中
//   let args = [...arguments].slice(1) // 保存bind函数调用时传递的参数，除了第一个

//   // 返回一个原函数
//   return function F() {
//     // 因为返回了一个函数，我们可以 new F()，所以需要判断
//     // 这个 this是新创建的函数的this
//     if (this instanceof F) {
//       return new _this(...args, ...arguments)
//     }
//     // 返回一个原函数的拷贝，并拥有指定的this值和初始参数
//     // 这个arguments是新创建的函数的arguments
//     return _this.apply(context, args.concat(...arguments))
//   }
// }

// function a(m,n,o) {
//    return `${this.name} ${m} ${n} ${o}` 
// }
// var b = {name: "kong"}
// var c = a.myBind(b,7,8)
// console.log(c(9)) // kong 7 8 9
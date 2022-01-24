
// // deep clone
// const deepClone = function(obj) {
// 	if (!obj) return obj

// 	let newObj = Array.isArray ? [] : {}
// 	for (let key in obj) {
// 		let val = obj[key]
// 		if (typeof val === 'object') {
// 			newObj[key] = deepClone(val)
// 		} else {
// 			newObj[key] = val
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
//   },
//   keys: [1,2,3,4]
// }
// console.log(deepClone(target))

// // debounce
// const debounce = function(fn, timeout = 300) {
// 	let timer = null

// 	return function(...args) {
// 		clearTimeout(timer)
// 		timer = setTimeout(() => {
// 			fn.apply(this, args)
// 		}, timeout)
// 	}
// }
// function saveInput(id){
//   console.log('Saving data', id);
// }
// const testDebounce = debounce((id) => saveInput(id));
// // setInterval(() => {
// 	testDebounce(12)
// // }, 250)

// const throttle = function(fn, timeout = 500) {
// 	let waiting = false

// 	return function(...args) {
// 		if (waiting) return
// 		waiting = true
// 		fn.apply(this, args)
// 		setTimeout(() => {
// 			waiting = false
// 		}, timeout)
// 	}
// }
// function saveInput(id){
//   console.log('Saving data', id);
// }
// const testThrottle = throttle((id) => saveInput(id));
// // setInterval(() => {
// 	testThrottle(15)
// // }, 250)

// // promise all
// const promiseAll = function(inputs) {
// 	return new Promise((resolve, reject) => {
// 		let length = inputs.length
// 		let count = 0
// 		let data = []
// 		for (let fn of inputs) {
// 			fn.apply(this)
// 			.then((res) => {
// 				count++
// 				data.push(res)
// 				if (count === length) resolve(data)
// 			}).catch((err) => {
// 				reject(err)
// 			})
// 		}
// 	})
// }
// const request = function(id) {
// 	return new Promise((resolve, reject) => {
// 	   let timeout = Math.floor(Math.random() * 1000) + 500
//        setTimeout(() => {
//            resolve(`${id}: ${timeout}ms`);
//        }, timeout);
// 	})	
// }
// let inputs = []
// for (let i = 0; i < 22; i++) {
// 	inputs.push(() => request(i))
// }
// promiseAll(inputs)
// .then((res) => {
// 	console.log('promiseAll', res)
// })

// // promise race
// const promiseRace = function(inputs) {
// 	return new Promise((resolve, reject) => {
// 		for (let fn of inputs) {
// 			fn.apply(this)
// 			.then((res) => {
// 				resolve(res)
// 			}).catch((err) => {
// 				reject(err)
// 			})
// 		}
// 	})
// }
// promiseRace(inputs)
// .then((res) => {
// 	console.log('promiseRace', res)
// })

// // promise controll
// const scheduler = function(max = 3) {
// 	let current = 0
// 	let queue = []

// 	function start() {
// 		if (queue.length === 0 || current >= max) return

// 		current++
// 		let [fn, resolve, reject] = queue.shift()
// 		fn.apply(this).then((res) => {
// 			current--
// 			start()
// 			resolve(res)
// 		}).catch((err) => {
// 			reject(err)
// 		})
// 	}

// 	return function(fn) {
// 		return new Promise((resolve, reject) => {
// 			queue.push([fn, resolve, reject])
// 			start()
// 		})
// 	}
// }
// let helper = scheduler(6)
// for (let i = 0; i < 25; i++) {
// 	helper(() => request(i))
//     .then((res) => {
// 		console.log('scheduler', res)
// 	})
// }

// // reduce
// Array.prototype.myReduce = function(fn, num) {
// 	let nums = this
// 	let res = 0
// 	if (num) res = num

// 	for (let i = 0; i < nums.length; i++) {
// 		res = fn(res, nums[i])
// 	}

// 	return res
// }
// let arr = [1,2,3,4,3,1]
// let myReduceRes = arr.myReduce((a, b) => {
//   return a + b
// })
// let reduceRes = arr.reduce((a, b) => {
//   return a + b
// })
// console.log('myReduce', myReduceRes)
// console.log('reduce', reduceRes)

// // AJAX 
// // function ajax(method, url, body = {}) {
// // 	return new Promise((resolve, reject) => {
// // 		let xhr = new XMLHttpRequest()
// // 		// 1. define request
// // 		xhr.open(method, url, true)
// // .     xhr.setRequestHeader("Content-Type", "application/json");
// // 		// 2. define response
// // 		xhr.onload = () => {
// // 			if (xhr.status >= 200 && xhr.status < 300) {
// // 				let res = xhr.response
// // 				resolve(res)
// // 			} else {
// // 				reject()
// // 			}
// // 		}
// // 		// 3. define error
// // 		xhr.onerror = () => {
// // 			reject()
// // 		}
// // 		// 4. send request
// // 		xhr.send() // get
// // 		// xhr.send(body) // post
// // 	})
// // }
// // ajax('GET', 'https://ipv4.icanhazip.com/')
// // .then((res) => {
// // 	console.log(res)
// // })

// // myInstanceof
// const myInstanceof = function(original, target) {
// 	let proto = original.__proto__
// 	while (proto) {
// 		if (proto === target.prototype) {
// 			return true
// 		}
// 		proto = proto.__proto__
// 	}

// 	return false
// }
// const myInstanceofTest = [1,2,3]
// console.log(myInstanceof(myInstanceofTest, Array));  // true
// console.log(myInstanceof(myInstanceofTest, Object));  // true
// console.log(myInstanceof(myInstanceofTest, Function));  // false

// // new
// const myNew = function(fn, ...args) {
// 	let obj = Object.create(fn.prototype)
// 	let res = fn.apply(obj, args)
// 	if (res instanceof Object) {
// 		return res
// 	} else {
// 		return obj
// 	}
// }
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const person = myNew(Person, 'fl', 32)
// console.log(person)

// // call
// Function.prototype.myCall = function(context, ...args) {
// 	let obj = context || window
// 	obj.fn = this
// 	let res = obj.fn(...args)
// 	delete obj.fn
// 	return res
// }

// // apply
// Function.prototype.myApply = function(context, arr) {
// 	// 定义 this，上下文
// 	let obj = context || window
// 	// 函数放进上下文的fn中
// 	obj.fn = this
// 	// 执行 fn，这样做fn就可以看到context了，闭包
// 	let res = obj.fn(...arr)
// 	// 要删除 fn
// 	delete obj.fn
// 	return res
// }
// const obj = {
// 	name: 'alex'
// }
// const myApplyTestFn = function(a, b) {
// 	console.log(a,b)
// 	console.log(this.name)
// }
// console.log('myCall', myApplyTestFn.myCall(obj, 1,2))
// console.log('myApply', myApplyTestFn.myApply(obj, [1,2]))

// // bind
// Function.prototype.myBind = function(context) {
// 	const fn = this
// 	const arr = [...arguments].slice(1)

// 	return function(...args) {
// 		return fn.apply(context, [...arr, ...args])
// 	}
// }
// const context = {
// 	name: 'alex'
// }
// const myBindTestFn = function(name, age, school){
// 	console.log(name) // 'An'
// 	console.log(age) // 22
// 	console.log(school) // '家里蹲大学'
// }
// let result = myBindTestFn.myBind(context, 'Ann')
// result(32, '126')

// // json to string
// const jsonToString = function(obj) {
// 	let str = `{`

// 	let keys = Object.keys(obj)
// 	for (let i = 0; i < keys.length; i++) {
// 		let key = keys[i]
// 		let val = obj[key]
// 		if (Array.isArray(val)) {
// 			let arr = `[`
// 			for (let j = 0; j < val.length; j++) {
// 				let item = val[j]
// 				arr = `${arr}${item}`
// 				if (j !== val.length - 1) arr = `${arr},`
// 			}
// 			str = `${str}"${key}":${arr}]`
// 		} else if (typeof val === 'object') {
// 			let res = jsonToString(val)
// 			str = `${str}"${key}":${res}`
// 		} else {
// 			str = `${str}"${key}":${val}`
// 		}
// 		if (i !== keys.length - 1) str = `${str},`
// 	}

// 	str = `${str}}`
// 	return str
// }
// let jsonToStringTest = {
//     a: 11,
//     b: {
//         b: 22,
//         c: {
//             D: 33,
//             e: [44,55,66]
//         }
//     }
// };
// console.log(JSON.stringify(jsonToStringTest))
// console.log(jsonToString(jsonToStringTest))

// trim
// String.prototype.myTrim = function() {
// 	let str = this
// 	const trimLeft = function(string) {
// 		for (let i = 0; i < string.length; i++) {
// 			if (string.charAt(i) !== ' ') {
// 				return string.substring(i, string.length)
// 			}
// 		}

// 		return string
// 	}

// 	const trimRight = function(string) {
// 		for (let i = string.length - 1; i >= 0; i--) {
// 			if (string.charAt(i) !== ' ') {
// 				return string.substring(0, i + 1)
// 			}

// 		}

// 		return string
// 	}

// 	return trimRight(trimLeft(str))
// }
// console.log('        123123123    '.myTrim())

// DOM2JSON
/*
<div>
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
把上诉dom结构转成下面的JSON格式
{
  tag: 'DIV',
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
*/
const dom2json = function(domTree) {
	// create an obj
	let obj = {}
	// get the tag name
	obj.tag = domTree.tagName
	// setup array for children
	obj.children = []
	// iterate each child node
	domTree.childNodes.forEach((child) => {
		// dfs, it will return json of this child
		obj.children.push(dom2json(child))
	})
	// return obj
	return obj
}

// curry
const myCurry = function(fn) {
	// fn.length gives the length of arguments of fn
	let length = fn.length
	// get arguments from myCurry
	let args = [...arguments].slice(1)

	return function(...innerArgs) {
		// concat myCurry and currying arguments
		let finalArgs = [...args, ...innerArgs]
		// if current length === fn.length, we can return the result
		if (length <= finalArgs.length) return fn.apply(this, finalArgs)
		// if not yet finished, recursion and call myCurry.apply with the correct arguments
		else return myCurry.apply(this, [fn, ...finalArgs])
	}
}
function sum(a, b, c) {
  return a + b + c;
}
let currying = myCurry(sum)
console.log(currying(1)(2)(3))
console.log(currying(1,2,3))

// EventEmitter

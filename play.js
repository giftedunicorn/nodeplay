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
// 	let currentJobs = 0
// 	let queue = []

// 	function start() {
// 		if (queue.length === 0 || currentJobs >= max) return

// 		currentJobs++
// 		let [fn, resolve, reject] = queue.shift()
// 		fn.apply(this).then((res) => {
// 			currentJobs--
// 			start()
// 			resolve(res)
// 		}).catch((err) => {
// 			currentJobs--
// 			start()
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
// Array.prototype.myReduce = function(fn, initialValue) {
// 	let nums = this
// 	let res = 0
// 	if (initialValue) res = initialValue

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
// 	let context = Object.create(fn.prototype)
// 	let res = fn.apply(context, args)
// 	// if res is undefined and nothing to return, return context
// 	if (res instanceof Object) {
// 		return res
// 	} else {
// 		return context
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
// 	const args = [...arguments].slice(1)

// 	return function(...innerArgs) {
// 		let moreArgs = [...args, ...innerArgs]
// 		return fn.apply(context, moreArgs)
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
// const dom2json = function(domTree) {
// 	// create an obj
// 	let obj = {}
// 	// get the tag name
// 	obj.tag = domTree.tagName
// 	// setup array for children
// 	obj.children = []
// 	// iterate each child node
// 	domTree.childNodes.forEach((child) => {
// 		// dfs, it will return json of this child
// 		obj.children.push(dom2json(child))
// 	})
// 	// return obj
// 	return obj
// }

// curry
// const myCurry = function(fn) {
// 	// fn.length gives the length of arguments of fn
// 	let length = fn.length
// 	// get arguments from myCurry
// 	let args = [...arguments].slice(1)

// 	return function(...innerArgs) {
// 		// concat myCurry and currying arguments
// 		let moreArgs = [...args, ...innerArgs]
// 		// if current length === fn.length, we can return the result
// 		if (length <= moreArgs.length) return fn.apply(this, moreArgs)
// 		// if not yet finished, recursion and call myCurry.apply with the correct arguments
// 		else return myCurry.apply(this, [fn, ...moreArgs])
// 	}
// }
// function sum(a, b, c) {
//   return a + b + c;
// }
// let currying = myCurry(sum)
// console.log(currying(1)(2)(3))
// console.log(currying(1,2,3))

// // tree to list
// const treeToList = function(tree) {
//   let list = []
//   treeToListHelper(tree, list)
//   list.sort((a,b) =>a.id-b.id)
//   return list
// }
// const treeToListHelper = function(tree, list) {
//   if (!tree) return

//   for (let item of tree) {
//     let id = item.id
//     let name = item.name
//     let parentId = item.parentId
//     list.push({ id, name, parentId })
//     treeToListHelper(item.children, list)
//   }
// }
// let tree = [
//   {
//     id: 1,
//     name: '部门A',
//     parentId: 0,
//     children: [
//       {
//         id: 3,
//         name: '部门C',
//         parentId: 1,
//         children: [
//           {
//             id: 6,
//             name: '部门F',
//             parentId: 3
//           }
//         ]
//       },
//       {
//         id: 4,
//         name: '部门D',
//         parentId: 1,
//         children: [
//           {
//             id: 8,
//             name: '部门H',
//             parentId: 4
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 2,
//     name: '部门B',
//     parentId: 0,
//     children: [
//       {
//         id: 5,
//         name: '部门E',
//         parentId: 2
//       },
//       {
//         id: 7,
//         name: '部门G',
//         parentId: 2
//       }
//     ]
//   }  
// ];
// console.log(treeToList(tree))

// // list to tree
// const listToTree = function(list) {
//   let map = new Map()
//   for (let item of list) {
//     let name = item.name
//     let id = item.id
//     let parentId = item.parentId
//     let children = map.get(parentId) || []
//     children.push({id, name, parentId})
//     map.set(parentId, children)
//   }

//   return appendChildren(0, map)
// }
// const appendChildren = function(parentId, map) {
//    let children = map.get(parentId)
//    if (!children) return null
//    for (let child of children) {
//      let res = appendChildren(child.id, map)
//      if (res) child.children = res
//    }

//    return children
// }
// let list = [
//   {id:1, name:'部门A', parentId:0},
//   {id:2, name:'部门B', parentId:0},
//   {id:3, name:'部门C', parentId:1},
//   {id:4, name:'部门D', parentId:1},
//   {id:5, name:'部门E', parentId:2},
//   {id:6, name:'部门F', parentId:3},
//   {id:7, name:'部门G', parentId:2},
//   {id:8, name:'部门H', parentId:4}
// ];
// console.log(listToTree(list))

// flatten array
// const flattenArray = function(array) {
//   return flattenArrayHelper(array)
// }
// const flattenArrayHelper = function(array) {
//   let res = []

//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       res = res.concat(flattenArrayHelper(array[i]))
//     } else {
//       res.push(array[i])
//     }
//   }

//   return res
// }
// console.log(flattenArray([12,[1,2,3],3,[2,4,[4,[3,4],2]]]));

// // dedup array
// const dedupArray = function(array) {
//   new Set(array)
//   return [...new Set(array)]
// }
// console.log(dedupArray([12, 1, 2, 3, 3, 2, 4, 4, 3, 4, 2]))

// // 大数相加
// function add(a ,b){
//   let indexa = a.length - 1
//   let indexb = b.length - 1
//   let carry = 0
//   let res = ``

//   while (indexa >= 0 || indexb >= 0) {
//     let numa = indexa >= 0 ? a.charAt(indexa) : 0
//     let numb = indexb >= 0 ? b.charAt(indexb) : 0

//     let sum = parseInt(numa) + parseInt(numb) + carry
//     carry = sum >= 10 ? 1 : 0
//     sum = sum >= 10 ? sum - 10 : sum
//     res = `${sum}${res}`

//     indexa--
//     indexb--
//   }

//   if (carry !== 0) {
//     res = `1${res}`
//   }

//   return res
// }
// let a = "9007199254740991";
// let b = "1234567899999999999";
// console.log(add(a, b))

// path to obj
const pathToObjData = {
  'a.b': 1,
  'a.c': 2,
  'a.d.e': 5,
  'b[0]': 1,
  'b[1]': 3,
  'b[2].a': 2,
  'b[2].b': 3,
  'c': 3
}
const pathToObj = function(pathList) {
  let res = {}
  for (let path in pathList) {
    let pathArr = path.split('.')
    pathToObjHelper(pathArr, pathList[path], res)
  }
  return res
}
const pathToObjHelper = function(pathArr, val, res) {
  if (pathArr.length === 0) {
    return val
  }

  let key = pathArr.shift()
  let obj = res[key] ? res[key] : {}
  res[key] = pathToObjHelper(pathArr, val, obj)

  return res
}
console.log(pathToObj(pathToObjData))

// obj to path
const objToPathData = {
 a: {
        b: 1,
        c: 2,
        d: {e: 5}
    },
 b: [1, 3, {a: 2, b: 3}],
 c: 3
} 
const objToPath = function(obj) {
  let res = {} 
  objToPathHelper(obj, '', res)
  return res
}
const objToPathHelper = function(obj, path, res) {
  if (!obj) return

  if (Array.isArray(obj)) {
    for (let key in obj) {
      const pathKey = path ? `${path}[${key}]` : `${path}${key}`
      objToPathHelper(obj[key], pathKey, res)
    }
  } else if (typeof obj === 'object') {
    for (let key in obj) {
      const pathKey = path ? `${path}.${key}` : `${path}${key}`
      objToPathHelper(obj[key], pathKey, res)
    }
  } else {
    res[path] = obj
  }
}
console.log(objToPath(objToPathData))

// string to json
const jsonString = '{ "age": 20, "name": "jack" }'
const stringToJson = function(jsonString) {
  return (new Function('return ' + jsonString))();
}
console.log(stringToJson(jsonString))

// 分红包
const redenvelope = function(people, amount) {
  let randSum = 0
  let randList = []
  let res = []

  for (let i = 0; i < people; i++) {
    let rand = Math.random()
    randList.push(rand)
    randSum += rand
  }

  randList.forEach((rand) => {
    res.push(amount * rand / randSum)
  })

  return res
}
const redenvelopeRes = redenvelope(13, 200)
console.log('redenvelopeRes', { redenvelopeRes, sum: redenvelopeRes.reduce((acc,val) => {
    return acc + val 
  })
})

// vdom to rdom
// const vdom = {
//   tag: 'DIV',
//   attrs:{
//   id:'app'
//   },
//   children: [
//     {
//       tag: 'SPAN',
//       children: [
//         { tag: 'A', children: [] }
//       ]
//     },
//     {
//       tag: 'SPAN',
//       children: [
//         { tag: 'A', children: [] },
//         { tag: 'A', children: [] }
//       ]
//     }
//   ]
// }
/*
把上诉虚拟Dom转化成下方真实Dom
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
*/
// const vdomToRdom = function(vdom) {
//   let tag = vdom.tag.toLowerCase()
//   let dom = document.createElement(tag)

//   if (vdom.attrs) {
//     for (let key in vdom.attrs) {
//       let val = vdom.attrs[key]
//       dom.setAttribute(key, val)
//     }
//   }

//   for (let child of vdom.children) {
//     let childNode = vdomToRdom(child)
//     dom.appendChild(childNode)
//   }

//   return dom
// }
// console.log(vdomToRdom(vdom))

// LazyMan
// create a promise
// EventEmitter
// 实现一个继承 寄生组合继承
// 版本号排序的方法
// 分片思想解决大数据量渲染问题

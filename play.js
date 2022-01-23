
// deep clone
const deepClone = function(obj) {
	if (!obj) return obj

	let newObj = Array.isArray ? [] : {}
	for (let key in obj) {
		let val = obj[key]
		if (typeof val === 'object') {
			newObj[key] = deepClone(val)
		} else {
			newObj[key] = val
		}
	}

	return newObj
}
const target = {
  name: 'ABC',
  key: null,
  age: 28,
  bool: false,
  address: {
    street: 'Station Road',
    city: 'Pune',
    number: 123,
  },
  keys: [1,2,3,4]
}
console.log(deepClone(target))

// debounce
const debounce = function(fn, timeout = 300) {
	let timer = null

	return function(...args) {
		clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(this, args)
		}, timeout)
	}
}
function saveInput(id){
  console.log('Saving data', id);
}
const testDebounce = debounce((id) => saveInput(id));
setInterval(() => {
	testDebounce(12)
}, 250)

const throttle = function(fn, timeout = 500) {
	let waiting = false

	return function(...args) {
		if (waiting) return
		waiting = true
		fn.apply(this, args)
		setTimeout(() => {
			waiting = false
		}, timeout)
	}
}
function saveInput(id){
  console.log('Saving data', id);
}
const testThrottle = throttle((id) => saveInput(id));
setInterval(() => {
	testThrottle(15)
}, 250)

// promise all
const promiseAll = function(inputs) {
	return new Promise((resolve, reject) => {
		let length = inputs.length
		let count = 0
		let data = []
		for (let fn of inputs) {
			fn.apply(this)
			.then((res) => {
				count++
				data.push(res)
				if (count === length) resolve(data)
			}).catch((err) => {
				reject(err)
			})
		}
	})
}
const request = function(id) {
	return new Promise((resolve, reject) => {
	   let timeout = Math.floor(Math.random() * 1000) + 500
       setTimeout(() => {
           resolve(`${id}: ${timeout}ms`);
       }, timeout);
	})	
}
let inputs = []
for (let i = 0; i < 22; i++) {
	inputs.push(() => request(i))
}
promiseAll(inputs)
.then((res) => {
	console.log('promiseAll', res)
})

// promise race
const promiseRace = function(inputs) {
	return new Promise((resolve, reject) => {
		for (let fn of inputs) {
			fn.apply(this)
			.then((res) => {
				resolve(res)
			}).catch((err) => {
				reject(err)
			})
		}
	})
}
promiseRace(inputs)
.then((res) => {
	console.log('promiseRace', res)
})

// promise controll
const scheduler = function(max = 3) {
	let current = 0
	let queue = []

	function start() {
		if (queue.length === 0 || current >= max) return

		current++
		let [fn, resolve, reject] = queue.shift()
		fn.apply(this).then((res) => {
			current--
			start()
			resolve(res)
		}).catch((err) => {
			reject(err)
		})
	}

	return function(fn) {
		return new Promise((resolve, reject) => {
			queue.push([fn, resolve, reject])
			start()
		})
	}
}
let helper = scheduler(6)
for (let i = 0; i < 25; i++) {
	helper(() => request(i))
    .then((res) => {
		console.log('scheduler', res)
	})
}

// reduce
Array.prototype.myReduce = function(fn, num) {
	let nums = this
	let res = 0
	if (num) res = num

	for (let i = 0; i < nums.length; i++) {
		res = fn(res, nums[i])
	}

	return res
}
let arr = [1,2,3,4,3,1]
let myReduceRes = arr.myReduce((a, b) => {
  return a + b
})
let reduceRes = arr.reduce((a, b) => {
  return a + b
})
console.log('myReduce', myReduceRes)
console.log('reduce', reduceRes)

// new
// bind
// AJAX
// myInstanceof
// json to string


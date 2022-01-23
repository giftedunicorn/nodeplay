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
// setInterval(() => {
// 	testDebounce(12)
// }, 250)

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

// promise race

// promise controll

// reduce




// bind
// new
// AJAX
// myInstanceof
// json to string

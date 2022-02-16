// deep clone (for fn, date type and circle object)
// debounce
// throttle
// promise all
// promise race
// promise scheduler
// my reduce
// my AJAX 
// my instanceof
// my typeof
// my new
// my call
// my apply
// my bind
// my trim
// my curry
// my promise
// json to string
// string to json
// dom to json
// json to dom
// tree to list
// list to tree
// path to obj
// obj to path
// flatten array
// dedup array
// 大数相加
// 分红包
// LazyMan
// 每个一秒打印一个数字，用setTimeout来实现
// this的指向问题，看题目说答案
// 排列 [['a', 'b'], ['n', 'm'], ['0', '1']] => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']
// 版本号排序的方法，题目描述: 有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。现在需要对其进行排序，排序的结果为 [ '4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1' ]
// EventEmitter，题目描述: 实现一个发布订阅模式拥有 on emit once off 方法
// 实现一个继承，寄生组合继承
// 题目描述: 渲染百万条结构简单的大数据时 怎么使用分片思想优化渲染
// 写一个事件代理函数，需要判断child是parent的子节点
// 给定一个不含重复数字的数组arr,指定个数n,目标和sum,判断是否含有由n个不同数字相加得到sum的情况，leetcode 40 变种， 数字不得重复使用
// function request(urls, maxNumber, callback) 要求编写函数实现，根据urls数组内的url地址进行并发网络请求，最大并发数maxNumber，当所有请求完毕后调用callback函数(已知请求网络的方法可以使用fetch api)
// 手写代码：写个单例模式
// 请实现抽奖函数rand，保证随机性，输入为表示对象数组，对象有属性n表示人名，w表示权重，随机返回一个中奖人名，中奖概率和w成正比
// 实现这个u, u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')
// getPathValue({a:{b:[1,2,3]}}, 'a.b[0]') => 1
// 实现千分位格式化函数
// 给数组中的字符串编号，f(['ab', 'c', 'd', 'ab', 'c']) => ['ab1', 'c1', 'd', 'ab2', 'c2']，写完后问了一下时间和空间复杂度。


// deep clone
const deepClone = function(obj) {

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
  keys: [1,2,3,4],
  fn1: () => {
    let a = 1
    console.log('fn1', a)
  }
}
console.log(deepClone(target))
console.log(deepClone(1)) // 1
console.log(deepClone(null)) // null
console.log(deepClone(undefined)) // undefined
console.log(deepClone([1, 2, 3]))
console.log(deepClone({ a: new Date(), b: null, c: 123, d: [1,2,3] }))
const a = {
  b: {
    c: null,
  },
};
a.b.c = a;
console.log(deepClone(a))

// debounce
const debounce = function(fn, timeout = 300) {

}
function saveInput(id){
  console.log('Saving data', id);
}
const testDebounce = debounce((id) => saveInput(id));
setInterval(() => {
  testDebounce(12)
}, 250)

// throttle
const throttle = function(fn, timeout = 500) {

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

}
promiseRace(inputs)
.then((res) => {
  console.log('promiseRace', res)
})

// promise shceduler
const scheduler = function(max = 3) {

}
let helper = scheduler(6)
for (let i = 0; i < 25; i++) {
  helper(() => request(i))
    .then((res) => {
    console.log('scheduler', res)
  })
}

// my reduce
Array.prototype.myReduce = function(fn, initialValue) {

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

// my AJAX 
function ajax(method, url, body = {}) {

}
ajax('GET', 'https://ipv4.icanhazip.com/')
.then((res) => {
  console.log(res)
})

// my instanceof
const myInstanceof = function(original, target) {

}
const myInstanceofTest = [1,2,3]
console.log(myInstanceof(myInstanceofTest, Array));  // true
console.log(myInstanceof(myInstanceofTest, Object));  // true
console.log(myInstanceof(myInstanceofTest, Function));  // false

// my typeof
const myTypeof = function(target) {

}
console.log(myTypeof({}))
console.log(myTypeof([]))
console.log(myTypeof(Function))
console.log(myTypeof(123))
console.log(myTypeof(null))
console.log(myTypeof(''))

// my new
const myNew = function(fn, ...args) {

}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = myNew(Person, 'fl', 32)
console.log(person)

// my call
Function.prototype.myCall = function(context, ...args) {

}

// my apply
Function.prototype.myApply = function(context, arr) {

}
const obj = {
  name: 'alex'
}
const myApplyTestFn = function(a, b) {
  console.log(a,b)
  console.log(this.name)
}
console.log('myCall', myApplyTestFn.myCall(obj, 1,2))
console.log('myApply', myApplyTestFn.myApply(obj, [1,2]))

// my bind
Function.prototype.myBind = function(context) {

}
const context = {
  name: 'alex'
}
const myBindTestFn = function(name, age, school){
  console.log(name) // 'An'
  console.log(age) // 22
  console.log(school) // '家里蹲大学'
}
let result = myBindTestFn.myBind(context, 'Ann')
result(32, '126')

// json to string
const jsonToString = function(obj) {

}
let jsonToStringTest = {
    a: 11,
    b: {
        b: 22,
        c: {
            D: 33,
            e: [44,55,66]
        }
    }
};
console.log(JSON.stringify(jsonToStringTest))
console.log(jsonToString(jsonToStringTest))

// my trim
String.prototype.myTrim = function() {

}
console.log('        123123123    '.myTrim())

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

}

// my curry
const myCurry = function(fn) {

}
function sum(a, b, c) {
  return a + b + c;
}
let currying = myCurry(sum)
console.log(currying(1)(2)(3))
console.log(currying(1,2,3))

// tree to list
const treeToList = function(tree) {

}
let tree = [
  {
    id: 1,
    name: '部门A',
    parentId: 0,
    children: [
      {
        id: 3,
        name: '部门C',
        parentId: 1,
        children: [
          {
            id: 6,
            name: '部门F',
            parentId: 3
          }
        ]
      },
      {
        id: 4,
        name: '部门D',
        parentId: 1,
        children: [
          {
            id: 8,
            name: '部门H',
            parentId: 4
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: '部门B',
    parentId: 0,
    children: [
      {
        id: 5,
        name: '部门E',
        parentId: 2
      },
      {
        id: 7,
        name: '部门G',
        parentId: 2
      }
    ]
  }  
];
console.log(treeToList(tree))

// list to tree
const listToTree = function(list) {

}
let list = [
  {id:1, name:'部门A', parentId:0},
  {id:2, name:'部门B', parentId:0},
  {id:3, name:'部门C', parentId:1},
  {id:4, name:'部门D', parentId:1},
  {id:5, name:'部门E', parentId:2},
  {id:6, name:'部门F', parentId:3},
  {id:7, name:'部门G', parentId:2},
  {id:8, name:'部门H', parentId:4}
];
console.log(listToTree(list))

// flatten array
const flattenArray = function(array) {

}
console.log(flattenArray([12,[1,2,3],3,[2,4,[4,[3,4],2]]]));

// dedup array
const dedupArray = function(array) {

}
console.log(dedupArray([12, 1, 2, 3, 3, 2, 4, 4, 3, 4, 2]))

// 大数相加
function add(a ,b){

}
let a = "9007199254740991";
let b = "1234567899999999999";
console.log(add(a, b))

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

// string to json
const jsonString = '{ "age": 20, "name": "jack" }'

// 分红包
const redenvelope = function(people, amount) {

}

// vdom to rdom
// 把虚拟Dom转化成下方真实Dom
// <div id="app">
//   <span>
//     <a></a>
//   </span>
//   <span>
//     <a></a>
//     <a></a>
//   </span>
// </div>
const vdom = {
  tag: 'DIV',
  attrs:{
  id:'app'
  },
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
const vdomToRdom = function(vdom) {
}
console.log(vdomToRdom(vdom))

// LazyMan
/*
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
*/
class LazyMan {

}
new LazyMan("Hank")
new LazyMan("Hank").sleep(10).eat("dinner")
new LazyMan("Hank").eat("dinner").eat("supper")
new LazyMan("Hank").eat("supper").sleepFirst(5)

// 每个一秒打印一个数字，用setTimeout来实现
const printNumber = function(n) {

}

// this的指向问题，看题目说答案
var length = 10;
function fn() {
 return this.length + 1;
}
var obj1 = {
  length: 5,
  test1: function() {
    return fn()
  }
}

obj1.test2 = fn;
console.log(obj1.test1.call())
console.log(obj1.test1())
console.log(obj1.test2.call())
console.log(obj1.test2())

var name = "window";
var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};
function sayName() {
  var sss = person.sayName;
  sss();
  person.sayName();
  (person.sayName)();
  (b = person.sayName)();
}
sayName();

var name = 'window'
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person2 = { name: 'person2' }
person1.foo1();
person1.foo1.call(person2);
person1.foo2()
person1.foo2.call(person2)
person1.foo3()()
person1.foo3.call(person2)()
person1.foo3().call(person2)
person1.foo4()()
person1.foo4.call(person2)()
person1.foo4().call(person2)

var name = 'window'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')
person1.foo1()
person1.foo1.call(person2)
person1.foo2()
person1.foo2.call(person2)
person1.foo3()()
person1.foo3.call(person2)()
person1.foo3().call(person2) 
person1.foo4()()
person1.foo4.call(person2)()
person1.foo4().call(person2)

var name = 'window'
function Person (name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')
person1.obj.foo1()()
person1.obj.foo1.call(person2)()
person1.obj.foo1().call(person2)
person1.obj.foo2()()
person1.obj.foo2.call(person2)()
person1.obj.foo2().call(person2)

// [['a', 'b'], ['n', 'm'], ['0', '1']]
// ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']
const permutation = function(array) {

}

// 版本号排序的方法
// 题目描述:有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。现在需要对其进行排序，排序的结果为 [ '4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1' ]
const sortByVersion = function(versions) {

}

// create a promise
class MyPromise {

}

// EventEmitter
// 题目描述:实现一个发布订阅模式拥有 on emit once off 方法
class EventEmitter {

}

// 实现一个继承，寄生组合继承
function Parent(name) {
  this.name = name
  this.say = () => {
     console.log("111")
  }
}

// 分片思想解决大数据量渲染问题
// 题目描述:渲染百万条结构简单的大数据时 怎么使用分片思想优化渲染
const perform = function() {
}

// 写一个事件代理函数，需要判断child是parent的子节点
function proxyEvent(event, callback, parent, child) {

}
proxyEvent('click', (e) => {
  console.log(e.target.innerText)
}, '#proxy', 'li')

// 给定一个不含重复数字的数组arr,指定个数n,目标和sum,判断是否含有由n个不同数字相加得到sum的情况，leetcode 40 变种， 数字不得重复使用s
function combinationSum(nums, n, sum) {
}
console.log(combinationSum([10,1,2,7,6,1,5], 3, 8))


// function request(urls, maxNumber, callback) 要求编写函数实现，
// 根据urls数组内的url地址进行并发网络请求，最大并发数maxNumber,
// 当所有请求完毕后调用callback函数(已知请求网络的方法可以使用fetch api)
function request(urls, maxNumber, callback) {

}
const urls = [
  "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam",
  "https://www.timeapi.io/api/Time/current/coordinate?latitude=38.9&longitude=-77.03",
  "https://www.timeapi.io/api/Time/current/ip?ipAddress=237.71.232.203",
  "https://www.timeapi.io/api/TimeZone/zone?timeZone=Europe/Amsterdam",
  "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam",
  "https://www.timeapi.io/api/Time/current/coordinate?latitude=38.9&longitude=-77.03",
  "https://www.timeapi.io/api/Time/current/ip?ipAddress=237.71.232.203",
  "https://www.timeapi.io/api/TimeZone/zone?timeZone=Europe/Amsterdam",
  "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam",
  "https://www.timeapi.io/api/Time/current/coordinate?latitude=38.9&longitude=-77.03",
  "https://www.timeapi.io/api/Time/current/ip?ipAddress=237.71.232.203",
  "https://www.timeapi.io/api/TimeZone/zone?timeZone=Europe/Amsterdam",
]
console.log(request(urls, 3, (res) => {
  console.log(res)
}))
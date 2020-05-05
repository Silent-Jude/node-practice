// node 里面是require
let a = require('./global.js')
let system = require('./system.js')

// 没有export，所以导出的是一个空对象。
console.log('a', typeof(a))

console.log('main end ==================')
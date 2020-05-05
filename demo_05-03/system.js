// 系统模块，系统自带的模块，需要引入才能用。
// path，用于处理文件路径和目录路径的很实用的系统模块工具。
let path = require('path')

// console.log('path', path)
let imgUrl = './imgs/eg01.jpg'

console.log(path.dirname(imgUrl))
console.log(path.basename(imgUrl))
console.log(path.extname(imgUrl))

console.log(path.resolve(imgUrl))

let a = path.resolve('/foo/bar', './baz')   // returns '/foo/bar/baz'
let b = path.resolve('/foo/bar', 'baz')   // returns '/foo/bar/baz'
let c = path.resolve('boo','/foo/bar', '/baz')   // returns '/baz'
let d = path.resolve('/foo/bar', '../baz')   // returns '/foo/baz'
let e = path.resolve('home','/foo/bar', '../baz')   // returns '/foo/baz'
let f = path.resolve('home','./foo/bar', '../baz')   // returns '/home/foo/baz'
let g = path.resolve('home','foo/bar', '../baz')   // returns '/home/foo/baz'

// 1、从后向前拼，拼接完的结果作为新路径，继续往前拼。
// 2、若后面的字符（或者计算完之后的字符）以 / 开头，则丢弃前面的字符。
// 2、若以 ../ 开头，则向上跳过对应层数，../为1层，../../为2层，然后拼接后面的路径。
// 3、若以 ./ 开头 或者没有符号 则直接拼接前面路径。
// 在处理完所有给定的 path 片段之后还未生成绝对路径，则再加上当前工作目录

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)


console.log('path end =========================')


let fs = require('fs')

// fs的回调是异步的。
console.log('fs.readFile start')
fs.readFile('./test.txt','utf8', (err, data) =>{
    if(err) console.log(err)
    else console.log(data)
})

let buf = fs.readFileSync('./test.txt')
let data = fs.readFileSync('./test.txt', 'utf8')

console.log('readFileSync ',buf)
console.log('readFileSync ',data)



fs.writeFile('a.txt', '测试写入文件api',{flag: 'a'}, err =>{
    if(err) console.log(err)
})

// flag 的 a表示append追加形式。
fs.writeFileSync('a.txt', '同步写入',{flag: 'a'})


console.log('fs end =========================')

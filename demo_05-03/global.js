
// 全局模块。 不需要require即可随处引入。
let environment = process.env.dev
// process.env 取环境变量里面的东西。
console.log(environment)

let argv = process.argv
// 一个数组，0为node启动路径。1当前执行文件启动路径。
console.log('argv', argv)

let dirName = __dirname
// 输出当前目录。
console.log('dirName', dirName)

console.log('global end ==========================')
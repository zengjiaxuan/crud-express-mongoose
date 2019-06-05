var mongoose = require('mongoose')
var Schema = mongoose.Schema
// 连接数据库
// 指定连接的数据库不需要存在，插入第一条数据之后就会自动创建  
mongoose.connect('mongodb://localhost/demo',{ useNewUrlParser: true })
mongoose.set('useFindAndModify', false);

// 设计文档结构（表结构）
// 字段名称就是表结中的属性名称
// 保证数据的完整性， 不要有脏数据
var userSchema = new Schema({
    // title: String,
    // author: String,
    // body: String,
    // comments: [{body: String, data: Date}],
    // data: { type: Date, default: Date.now},
    // hidden: Boolean,
    // meta: {
    //     votes: Number,
    //     favs: Number
    // },
    username: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    }
})


// 将文档结构发布为模型
// mongoose.model 方法就是用来将一个架构发布为 model
// 第一个参数： 传入一个大写名字单数字符串用来表示你的数据库名称
//第二个参数 ：架构Schema
//  返回值： 模型构造函数
var User = mongoose.model('User', userSchema)

//添加数据
// var Admin = new User({
//     username: 'zs',
//     password: 123456
// })
// Admin.save(function (err, ret) {
//     if (err) return console.log(err)
//     console.log('保存成功')
//     console.log(ret)
// })

// 查询数据
// User.find({
//     username: 'z1s',
//     password: 123345
// }, function(err, ret) {
//     if (err) return console.log('没有当前记录')
//     console.log(ret)
// })
// User.find({
//     username: 'z1s'
// }, function(err, ret) {
//     if (err) return console.log('查询失败')
//     console.log(ret)
// })

// 删除数据
// User.remove({
//     username: 'zs'
// }, function(err, ret) {
//     if (err) console.log('删除失败')
//     console.log('删除成功')
// })

//更新数据
// User.findByIdAndUpdate('5cf731c5d899a043682207de', {
//     password: 123
// }, function (err, ret) {
//     if (err) return console.log('更新失败')
//     console.log('更新成功')
// })
User.findOneAndUpdate('5cf731c5d899a043682207de', {
    password: 1234
}, function (err, ret) {
    if (err) return console.log('更新失败')
    console.log('更新成功')
}) 
const mongoose = require('mongoose')

// 连接数据库
// 指定连接的数据库不需要存在，插入第一条数据之后就会自动创建  
mongoose.connect('mongodb://localhost/Students',{ useNewUrlParser: true })
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema
const studentSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	hobbies: {
		type: String,
		required: false
	}
})
module.exports = mongoose.model('Students', studentSchema)

const express = require('express')
const router = express.Router()
const Students = require('./public/js/student')
router.get('/', function (req, res) {
	Students.find(function (err, students) {
		if (err) return res.status(500).send('Server error')
		res.render('index.html', {
			fruits: [
				'苹果',
				'香蕉',
				'橘子'
			],
			students: students
		})
	})

})
router.post('/', function (req, res) {
	new Students(req.body).save(function (err) {
		if (err) return res.status(500).send('Server error')
		res.redirect('/')
	})
	// Students.create(req.body, function (err) {
	// 	if (err) return res.status(500).send('Server error')
	// 	res.redirect('/')
	// })
})
router.get('/edit', function (req, res) {
	const stu = req.query
	console.log(stu)
	res.render('edit.html', {
		stu: stu
	})
})
router.post('/edit/post', function (req, res) {
	console.log('req.body', req.body.id)
	console.log(req.body)
	const id = req.body.id
	Students.findByIdAndUpdate(id, req.body, function (err) {
		if (err) return res.status(500).send('Server error')
		res.redirect('/')
	})

})
router.get('/delete', function (req, res) {
	console.log(req.query)
	Students.findByIdAndRemove(req.query.id, function (err) {
		if (err) return res.status(500).send('Server err')
		res.redirect('/')
	})
})

module.exports = router
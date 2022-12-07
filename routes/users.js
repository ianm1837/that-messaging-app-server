const express = require('express')
const router = express.Router()

//get all users
router.get('/', (req, res) => {
	res.send('hello world')
})

//get one user
router.get('/:id', (req, res) => {
	req.params.id
})

//create one user
router.post('/', (req, res) => {
	req.params.id
})

//updating one user
router.patch('/:id', (req, res) => {
	req.params.id
})

//Deleting one user
router.delete('/:id', (req, res) => {
	req.params.id
})

module.exports = router
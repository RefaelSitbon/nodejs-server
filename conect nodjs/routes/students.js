const express = require('express')
const router = express.Router()
const Student = require('../models/students')

//Getting all
router.get('/', async(req, res) => {
    try{
        const students = await Student.find()
        res.json(students)
    }catch (err){
        res.status(500).json({message: err.message})
    }
    // res.send('Hello World')
})

// send html
router.get('/bla', (req, res) => {
    res.sendFile('/home/refael/infinity/test/nodejs-server/conect nodjs/index.html')
})

// send css that require from html header by <link>
router.get('/style.css', (req, res) => {
    res.sendFile('/home/refael/infinity/test/nodejs-server/conect nodjs/style.css')
})

//Getting one
router.get('/:id', getStudent,(req, res) => {
    res.json(res.student)
})


//Creating one
router.post('/', async(req, res) => {
    const student = new Student({
        name: req.body.name,
        age: req.body.age
    })

    try{
        const newStudent = await student.save()
        res.status(201).json(newStudent)
    }catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Updating One
router.patch('/:id', getStudent, async(req, res) => {
    if(null != req.body.name){
        res.student.name = req.body.name
    }if(null != req.body.age){
        res.status.age = req.body.age
    }
    try{
        const updateStudent = await res.student.save()
        res.json(updateStudent)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Deleting One
router.delete('/:id', getStudent, async(req, res) => {
    let student
    try{
         student = await res.student.deleteOne()
        res.json({message: 'Deleted Student ' + student.name})
    }catch (err){
        res.status(500).json({message: err.message})
    }
})

async function getStudent(req, res, next){
    let student
    try{
        student = await Student.findById(req.params.id)
        if(null == student){
            return res.status(404).json({message: 'Cannot find student'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.student = student
    next()
}

module.exports = router
//import express
const express = require('express');


//Create router for express
const router = new express.Router();

//import userController
const userController = require('../controllers/userController')
//import multer

const upload = require('../multerConfig/storageConfig')
//Define routes for each http request
router.post('/employee/register',upload.single('user_profile'),userController.register)

//define routes for get all employees
router.get('/employee/getEmployees',userController.getEmployees)

//define route to view profile
router.get('/employee/viewProfile/:id',userController.viewProfile)
module.exports = router;

//delete employee
router.delete('/employee/deleteEmployee/:id',userController.deleteEmployee)

//update
router.put('/employee/updateEmployee/:id',userController.updateEmployee)
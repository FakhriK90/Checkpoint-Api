const express = require('express')
const router = express.Router();
const oneuser = require('../Persons/users')

router.get('/', oneuser.getAllUsers)

router.post('/', oneuser.addUser)

router.put('/:id', oneuser.updateUser)

router.delete('/:id', oneuser.deleteUser)

module.exports = router;
const user = require('../Models/user')

//Get all users with method .find()
const getAllUsers = async(req,res)=>{
    try {
        const response = await user.find()
        res.status(200).send({res:response , msg: 'succed'})
    } catch (error) {
        res.status(400).send('Fail')
    }
}

//Add new user

const addUser = async (res,req)=>{
    try {
        const newUser = new user(req.body);
        const response =  await newUser.save()
        res.status(200).send({res: response, msg: 'User added successfuly'})
    } catch (error) {
        res.status(400).send('OOPS!!! This user cannot be add. My bad :( ')
    }
}

//Update database

const updateUser = async (req,res)=>{
    try {
        const response = await user.updateOne({"_id" : req.params.id},{$set: {...req.body}})
        response.nModified?
        res.send({ msg: 'Data is updated'}): res.send({msg: 'The user does already exist'})
    } catch (error) {
        res.status(400).send("OOPS!!! There's no update :(")
    }
}

//Delete user by id

const deleteUser = async (req,res) => {
    try {
        const result = await user.deleteOne({"_id": req.params.id})
        result.deletedCount?
        res.send({msg: 'Deleted successfully'}): res.send({msg: 'User is already deleted'})
    } catch (error) {
        res.status(400).send('Sorry!! User is not deleted')
    }
}

module.exports = {getAllUsers, addUser, updateUser,deleteUser}
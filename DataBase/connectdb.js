const mongoose=require('mongoose')

const connectdb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Houra!!! Connected to database')
    } catch (error) {
        console.log('could not connect to database' +error)
        
    }
}

module.exports=connectdb
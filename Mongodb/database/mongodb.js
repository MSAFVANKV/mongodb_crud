const mongoose = require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:"config.env"});
// mongoose.connect(process.env.MONGO_DB_CONNECTION)
// .then(()=>{
//     console.log("mongodb connected");
// })
// .catch(()=> {
//     console.log("Connection failed!!");
// })

// mongodb atles
mongoose.connect(process.env.MONGODB_ATLES)
.then(()=>{
    console.log("mongodb atles connected");
})
.catch(()=> {
    console.log("Connection failed!!");
})


const LoginSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },

})


const collection = new mongoose.model("collection1", LoginSchema)

module.exports = collection

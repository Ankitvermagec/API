const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/SendDataToBackend')
  .then(() => console.log('Connected!'))

.catch(()=>{
    console.log("Failed!")
})


const schema=new mongoose.Schema(
    {
        name:{
            type:String,
            match: /[a-zA-Z ]+/,
            required:true
        },
        email:{ 
            type: String,
            required: true,
            match: /.+\@.+\..+/,
            unique: true
          },
        num:{
            type:Number
            // type:Array
            // type:String,
            // trim:true
        }
    }
)

const collection=new mongoose.model("newCollection",schema)


module.exports=collection





// client validation and server validation
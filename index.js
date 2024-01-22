const express = require("express")
const app = express()
const path = require("path")

const collection = require("./mongo")

const fs=require("fs")
const users=require("./api.json")
const templatePath = path.join(__dirname, "./tempelates")

console.log(templatePath)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set("view engine", "hbs")
app.set("views", templatePath)



app.get("/", (req, res) => {
    res.render('home')
})


app.post("/sendMsg", async (req, res) => {

    const name = req.body.name
    const email = req.body.email
    var num = req.body.num

  
  
  
  
  
    console.log(typeof num)
    var result = num.replace(/(\s\s\s*)/g, ' ')
    // let result = num.trim()


    //removing the whitespace from both side
    // let result = num.replace(/^\s+|\s+$/gm,' ');
    console.log(result)

//    var  tr=num.trim()
//    console.log(tr)
    let array1 =result.split(' ');
    console.log(array1)
     
    array1.forEach((value,index) => {
        
        var num=array1[index]
        users.push({ name, email,num})
        fs.writeFileSync("./api.json",JSON.stringify(users),(err,data)=>{
            console.log(data)
            console.log(users)
            // res.json()
        });

         collection.insertMany([{ name, email, num }])   //.save() await it will return the promise
    
        // console.log("array"+element)
    });








//writeFile asyncronous it wont wait for complete the work
    //while using the writeFile  (async) its not push the data into api.json but using Sync version it wont be overwite it.
    
    
/*     for(let i=0;i<5;i++){
        users.push({ name, email, num })
        fs.writeFileSync("./api.json",JSON.stringify(users),(err,data)=>{
            console.log(data)
            console.log(users)
            // res.json()
        })

        await collection.insertMany([{ name, email, num }])   //.save() await it will return the promise
    
    } */



    // const result=JSON.stringify({ name, email, num })
    
    // console.log(JSON.stringify({name ,email,num}))
   
    //    res.send(JSON.stringify({name ,email,num}))
    
    // res.json({status:"success"})
    res.send("sent")
})





app.use(express.json());  // middleware  its use to convert the json data into object

//for postmon  post api
 app.post("/", async (req, res) => {
    console.log(req.body)

    
    // console.log(req.body.num)
    let name=req.body.name
    let email=req.body.email
    let n_array=req.body.num      //num must be in array format


    // Array.isArray(fruits)
   /* if-else condition because after hit the postman it were working for array value only ( getting the array value only )so for one single value  applied the else condition */

    if(Array.isArray(n_array)){

        n_array.forEach((value,index)=>{
            console.log(value)
    
            var num=n_array[index]
    
    
            users.push({name,email,num})                      //have to pass the users from the users.push()
            fs.writeFileSync("./api.json",JSON.stringify(users),(err,data)=>{
                console.log("inserted!!")
            })
    
            result = collection.insertMany({name,email,num})     //insertManywill return the promise for handling the we will use the await(it comes inside the await async)
            
            
        })

    }
    else{

        users.push(req.body)                      //have to pass the users from the users.push()
        fs.writeFileSync("./api.json",JSON.stringify(users),(err,data)=>{
            console.log("inserted!!")
        })

        result = collection.insertMany(req.body)     //insertManywill return the promise for handling the we will use the await(it comes inside the await async)
    
    }


/*     n_array.forEach((value,index)=>{
        console.log(value)

        var num=n_array[index]


        users.push({name,email,num})                      //have to pass the users from the users.push()
        fs.writeFileSync("./api.json",JSON.stringify(users),(err,data)=>{
            console.log("inserted!!")
        })

        result = collection.insertMany({name,email,num})     //insertManywill return the promise for handling the we will use the await(it comes inside the await async)
        
        
    }) */
    
    res.send(users)
    

    /* for the single data must be use the if else condition */


    //why result is not showing here

    // users.push(req.body)                      //have to pass the users from the users.push()
    // fs.writeFile("./api.json",JSON.stringify(users),(err,data)=>{
    //     console.log("inserted!!")
    // })


 /*    result = await collection.insertMany(req.body)     //insertManywill return the promise for handling the we will use the await(it comes inside the await async)
    res.send(result) */
    // res.send({name:"anil"})
}) 


app.get("/list", async (req, res) => {
    data = await collection.find()
    console.log(data)
    // res.send(data)
    res.send(users)
})

app.delete("/delete/:_id", async (req, res) => {
    console.log(req.params)      //parameters
    data = await collection.deleteOne(req.params)
    res.send(data)
})



//-----end---


app.listen(3000, () => {
    console.log("port connected!!")
})






//async asynchronous used to fast access it wont wait for next data it will continously work but syncronous will wait to complete the particular task after completing that it will move for next task




















/* 
function textToArray(){
    var someArray = [];    
    var nameList = $("#txtArea").val();
  
    $.each(nameList.split(/\n/), function (i, name) {     
  
        // empty string check
        if(name != ""){
  
            someArray.push(name);
  
        }        
  }); */


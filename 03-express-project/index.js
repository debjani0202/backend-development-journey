let express=require("express");
let app=express();    

app.get("/",(req,res)=>{
    res.send({status:1,message:"hello express"});

})
app.get("/news",(req,res)=>{
    res.send({status:2,message:"hello news"});

})

app.listen("8000");
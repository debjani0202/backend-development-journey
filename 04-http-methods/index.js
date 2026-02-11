let express=require("express");
let app=express();

app.get("/",(req,res)=>{
    res.send({status:1,message:"hello express"});

})

app.get("/game",(req,res)=>{
    res.send({status:2,message:"hello games"});
})

app.post("/login",(req,res)=>{
    res.send({status:3,message:"hello login"})})

app.listen("5000");
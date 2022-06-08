const routes= require('express').Router();

routes.get("/user",(req,res)=>{
    res.send("User is succed")
})

routes.post("/user",(req,res)=>{
    const userName = req.body.username;
    console.log(userName)
    res.send("Your data comming from client "+ userName)
})

module.exports = routes;
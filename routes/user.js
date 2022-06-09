const routes= require('express').Router();

routes.get("/userGET",(req,res)=>{
    res.send("User is succed")
})

routes.post("/userPOST",(req,res)=>{
    const userName = req.body.username;
    console.log(userName)
    res.send("Your data comming from client "+ userName)
})

module.exports = routes;
const userRoute= require('./user')


module.exports= function MainRoute(app){
    app.use("/api/v1",userRoute)
}
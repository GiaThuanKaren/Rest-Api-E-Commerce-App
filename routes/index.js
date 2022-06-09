const userRoute= require('./user')
const authRoute = require('./auth')

module.exports= function MainRoute(app){
    app.use("/api/v1/user",userRoute)
    app.use("/api/v1/auth",authRoute)
}
const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
      const token=authHeader.split(" ")[1];
    jwt.verify(token, "thuan", (err, data) => {
      if (err) {
        return res.status(403).json("Token is not valid ");
      } else {
        req.user = data;
        next();
      }
    });
  } else {
    return res.status(401).json("You are no authenticate");
  }
};

const VerifyandAuthorization=(req,res,next)=>{
    VerifyToken(req,res,()=>{
        if(req.user.id==req.params.id|| req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not allowed to do it")
        }
    })
  }
  
  const VerifyandAdmin=(req,res,next)=>{
    VerifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not allowed to do it")
        }
    })
  }


module.exports = {VerifyandAdmin,VerifyToken,VerifyandAuthorization};

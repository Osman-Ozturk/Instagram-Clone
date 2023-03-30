const errorHandler = (err,req,res,next)=>{
        const statusCode = err.statusCode ?? 500;
        res.status(statusCode).send({
                error :{
                        status : statusCode,
                        message :err.message
                }
        })
}
export default errorHandler
import Message from "../models/Message.js";

const createMessage = async (req,res)=>{
        const newMessage = new Message(req.body)
        try {
                const savedMessage = await newMessage.save()
                res.status(201).json(savedMessage)
        } catch (error) {
           res.status(500).send(error)     
        }
}
const getMessage = async (req,res)=>{
       
        try {
             const messages = await Message.find({conversationId:req.params.conversationId})  
             res.status(201).json(messages)
        } catch (error) {
           res.status(500).send(error)     
        }
}

const getTwoMessage =async (req,res)=>{
        try {
                const message = await Message.findOne({members:{$all:[req.params.firstUserId,req.params.secondUserId]}})
                res.status(201).json(message)
        } catch (error) {
                res.status(500).send(error)
        }
}

export {createMessage,getMessage,getTwoMessage}
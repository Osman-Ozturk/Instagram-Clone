import Conversation from "../models/Conversation.js";

const createConversation = async (req,res)=>{
        const newConversation = new Conversation({members:[req.body.senderId,req.body.receiverId]})
        try {
                const savedConversation = await newConversation.save()
                res.status(201).json(savedConversation)
        } catch (error) {
           res.status(500).send(error)     
        }
}
const getConversation =  async (req, res) => {
        try {
                const userId = req.params.id
          const conversation = await Conversation.find({
            members: { $in: [userId] },
          });
          res.status(200).json(conversation);
        } catch (err) {
          res.status(500).send(err);
        }
      }

const getTwoConversation =async (req,res)=>{
        try {
                const conversation = await Conversation.findOne({members:{$all:[req.params.firstUserId,req.params.secondUserId]}})
                res.status(201).json(conversation)
        } catch (error) {
                res.status(500).send(error)
        }
}

export {createConversation,getConversation,getTwoConversation}
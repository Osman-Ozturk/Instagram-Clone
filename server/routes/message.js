import express from 'express'
import {createMessage,getMessage,getTwoMessage} from '../controllers/messageController.js'

const router = express.Router()

router.route('/').post(createMessage)
router.route('/:conversationId').get(getMessage)
router.route('/find/:firstUserId/:secondUserId').get(getTwoMessage)

export default router;
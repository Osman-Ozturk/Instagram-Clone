import express from 'express'
import {createConversation,getConversation,getTwoConversation} from '../controllers/conversationController.js'

const router = express.Router()

router.route('/').post(createConversation)
router.route('/:id').get(getConversation)
router.route('/find/:firstUserId/:secondUserId').get(getTwoConversation)

export default router;
import express from 'express'
import { updateUser ,deleteUser ,getUser,getUserId,getAllUsers,followUser,unfollowUser,getFriends} from '../controllers/userController.js'

const router = express.Router()

router.route('/:id').put(updateUser).delete(deleteUser)
router.route('/:id/follow').put(followUser)
router.route('/:id/unfollow').put(unfollowUser)
router.route('/list').get(getAllUsers)
router.route('/').get(getUser)
router.route('/friends/:id').get(getFriends)


export default router;
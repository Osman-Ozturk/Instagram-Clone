import  {createPost,updatePost,deletePost,getPost , getAllPost,getTimelinePost,getUserAllPosts,likeDisklikePost} from '../controllers/postController.js'
import express  from 'express'

const router = express.Router();

router.route('/').post(createPost).get(getAllPost)
router.route('/:id').put(updatePost).delete(deletePost).get(getPost)
router.route('/timeline/:userId').get(getTimelinePost)
router.route('/profile/:userName').get(getUserAllPosts)
router.route('/:id/like').put(likeDisklikePost)

export default router;
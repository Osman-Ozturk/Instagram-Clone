import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
        userId:{
                type:String,
                required:true
        },
        img:{
                type:String,
                default:'' 
        },
        desc:{
                type:String,
                max:600
        },
        likes:{
                type:Array,
                default:[]
        }
},{ timestamps :true})

const Post = mongoose.model('Post',PostSchema);
export default Post; 
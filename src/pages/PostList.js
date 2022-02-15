import React from "react";
import Post from "../components/Post"
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Grid from "../elements/Grid";

const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state)=>state.post.list);
<<<<<<< HEAD
    const {history} =props
    console.log(post_list)
    
=======
    const user_nick = localStorage.getItem("user_nick")
>>>>>>> 692f61a201e43745faa5489bba5287658c16ee29
    React.useEffect(() => {
           dispatch(postActions.getPostFB());
        //    
    }, []);
  
    return (
        <React.Fragment>
            {post_list.map((p,idx)=>{
                 if (p.user_nick === user_nick) {
                    return (
                        <Grid key={idx}>
                            <Post {...p} is_me/>
                        </Grid>
                    )
                 }else{
                    return (
                    <Grid key={idx}>
                        <Post {...p} />
                    </Grid>
                )
                 }
            })}
        </React.Fragment>
    )
}

export default PostList;
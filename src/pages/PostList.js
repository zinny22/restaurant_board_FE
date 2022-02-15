import React from "react";
import { useState } from "react";
import Post from "../components/Post"
import {useSelector} from "react-redux";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { getCookie } from "../shared/cookie";
import Grid from "../elements/Grid";

const PostList = (props) => {
    
    
    const dispatch = useDispatch();
    const post_list = useSelector((state)=>state.post.list);
    const {history} =props
    console.log(post_list)
    
    React.useEffect(() => {
           dispatch(postActions.getPostFB());
        //    
    }, []);
  
    return (
        <React.Fragment>
            {post_list.map((p,idx)=>{
                // console.log(p)
                return (
                    <Grid key={idx} _onClick ={()=>{history.push(`/getpost/${p.post_id}`)}}>
                        <Post {...p} />
                    </Grid>
                )
            })}
        </React.Fragment>
    )
}

export default PostList
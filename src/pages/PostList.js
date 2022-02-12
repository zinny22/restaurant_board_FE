import React from "react";
import { useState } from "react";
import Post from "../components/Post"
import {useSelector} from "react-redux";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state)=>state.post.list)

    React.useEffect(() => {
           dispatch(postActions.getPost(post_list));
    }, []);
  
    return (
        <React.Fragment>
            {post_list.map((p,idx)=>{
                return <Post key={idx} {...p} onClick ={()=>{history.push('/')}}/>
            })}
        </React.Fragment>
    )
}

export default PostList
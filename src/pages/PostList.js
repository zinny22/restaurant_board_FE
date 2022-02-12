import React from "react";
import { useState } from "react";
import Post from "../components/Post"
import {useSelector} from "react-redux";
import { history } from "../redux/configureStore";

const PostList = (props) => {
    const post_list = useSelector((state)=>state.post.list)
    return (
        <React.Fragment>
            {post_list.map((p,idx)=>{
                return <Post key={idx} {...p} onClick ={()=>{history.push('/')}}/>
            })}
        </React.Fragment>
    )
}

export default PostList
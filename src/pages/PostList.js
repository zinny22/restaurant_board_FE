import React from "react";
import { useState } from "react";
import Post from "../components/Post"
import {useSelector} from "react-redux";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { getCookie } from "../shared/cookie";

const PostList = (props) => {
    
    
    const dispatch = useDispatch();
    const post_list = useSelector((state)=>state.post.list);
    const {history} =props
    console.log(post_list)

    React.useEffect(() => {
           dispatch(postActions.getPostFB());
    }, []);
  
    return (
        <React.Fragment>
            {post_list.map((p,idx)=>{
                return <Post key={idx} {...p} onClick ={()=>{history.push(`/getpost/${p.id}`)}}/>
            })}
        </React.Fragment>
    )
}

export default PostList
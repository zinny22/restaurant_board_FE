import React from "react";
import Post from "../components/Post"
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Grid from "../elements/Grid";
import styled from "styled-components";

const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state)=>state.post.list);

    const user_nick = localStorage.getItem("user_nick")

    React.useEffect(() => {
        dispatch(postActions.getPostFB());
    }, []);
  
    return (
        <React.Fragment>
            <Container>
                {post_list.map((p,idx)=>{
                    if (p.user_nick === user_nick) {
                        return (
                            <Wrap key={idx}>
                                <Post {...p} is_me/>
                            </Wrap>
                        )
                    }else{
                        return (
                        <Wrap key={idx}>
                            <Post {...p} />
                        </Wrap>
                    )
                    }
                })}
            </Container>
        </React.Fragment>
    )
}
const Container = styled.div`
    display: flex;
    flex-flow: row-reverse wrap;
    flex-direction: row;
    justify-content:space-around;
    align-items:center;
    width: 70%;
    margin: auto;
`
const Wrap = styled.div`
display: flex;
`

export default PostList
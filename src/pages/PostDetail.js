import React from "react";
import { Grid, Image, Text} from "../elements/Index";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";
import StarMain from "../components/StarMain";


const PostDetail = (props) => {
  const dispatch = useDispatch()
  const post_id = props.match.params.postid;

  React.useEffect(()=>{
    dispatch(postActions.getOnePostFB(post_id))
    dispatch(commentActions.getOneCommentFB(post_id))
  },[])
  const comment_list = useSelector((state)=>state.comment.details)
  const post = useSelector((state) => state.post.detail);
  return (

      <React.Fragment>
        <Grid width="50%" margin="30px auto" box_shadow border_radius="10px">
          <div style={{
            padding:"0px 30px",
            display: "flex",
            justifyContent: "flex-start"
          }}>
            <Text size="25px">{post.user_nick}</Text>
          </div>
          <div style={{
            padding:"0px 10px 20px 0px",
            display: "flex",
            justifyContent: "flex-end",
          }}>
            <StarMain score={post.score}/>
          </div>
            <Image src ={post.image_url}/>
          <Grid  padding="16px">
            <Text>가게이름</Text>
            <Text bold size="25px">{post.title}</Text>
            <Text>위치</Text>
            <Text bold size="25px">{post.location}</Text>
            <Text>한줄평</Text>
            <Text bold size="25px">{post.comment}</Text>
          </Grid>
          <Wrap>
            <CommentWrite post_id={post_id}/>
            <CommentList comment_list={comment_list} post={post_id} />
          </Wrap>
        </Grid>
      </React.Fragment>
    );
};

const Wrap = styled.div`
  padding: 16px;
  @media only screen and (max-width: 960px) {
    width: ${(props) => (props.width ? "30%" : "")};
    height: ${(props) => (props.height ? "100%" : "")};
    padding: ${(props) => (props.padding ? "5%" : "")};
  }
  @media only screen and (max-width: 650px) {
    width: ${(props) => (props.width ? "30%" : "")};
    height: ${(props) => (props.height ? "100%" : "")};
    padding: ${(props) => (props.padding ? "5%" : "")};
  }  
`

export default PostDetail;

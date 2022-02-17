import React from "react";
import { Grid, Image, Text} from "../elements/Index";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";


const PostDetail = (props) => {
  const dispatch = useDispatch()
  const post_id = props.match.params.postid;

  React.useEffect(()=>{
    dispatch(postActions.getOnePostFB(post_id))
    // dispatch(commentActions.getOneCommentFB(post_id))
  },[])
  // const comment_list = useSelector((state)=>state.comment.details)
  const post = useSelector((state) => state.post.detail);
  return (

      <React.Fragment>
        <Grid width="40%" margin="30px auto" padding="16px" box_shadow border_radius="10px">
          <Grid is_flex padding="16px">
            <Text size="25px">{post.user_nick}</Text>
          </Grid>
          <Grid>
            <Style>
              <Image src ={post.image_url}/>
            </Style>
          </Grid>
          <Grid>
            <Text>가게이름</Text>
            <Text bold size="20px">{post.title}</Text>
          </Grid>
          <Grid>
            <Text>위치</Text>
            <Text bold size="20px">{post.location}</Text>
          </Grid> 
          <Grid>
            <Text>한줄평</Text>
            <Text bold size="20px">{post.comment}</Text>
          </Grid>
          <Grid padding="16px 0px" is_flex>
          </Grid>
            <CommentWrite post ={post}/>
            <CommentList post={post_id} />
        </Grid>
      </React.Fragment>
    );
};

const Style = styled.div`
  width: 100%;
`

export default PostDetail;

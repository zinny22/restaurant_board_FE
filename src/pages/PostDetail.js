import React from "react";
import { Grid, Image, Button, Text, Input } from "../elements/Index";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { useSelector } from "react-redux";
import PostD from "../components/PostD";
import Upload from "../shared/Upload";
import styled from "styled-components";


const PostDetail = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);
  const post_id = props.match.params.postid;
  let _post = post_list.find((p) => p.post_id === post_id);
  console.log(_post);

  if(post_id){
    return (
      <React.Fragment>
        <Grid width="80%" margin="auto" padding="16px">
          <Grid is_flex padding="16px">
            <Text >{_post.user_nick}</Text>
            <Text color="gray">{_post.createDate}</Text>
          </Grid>
          <Grid>
            <Style>
              <Image src ={_post.image_url}/>
            </Style>
          </Grid>
          <Grid>
            <Text>가게이름</Text>
            <Text bold size="20px">{_post.title}</Text>
          </Grid>
          <Grid>
            <Text>위치</Text>
            <Text bold size="20px">{_post.location}</Text>
          </Grid>
          <Grid>
            <Text>한줄평</Text>
            <Text bold size="20px">{_post.comment}</Text>
          </Grid>

          <Grid padding="16px 0px" is_flex>
            <Button
              height="100"
              width="20%"
              text="게시글 수정"
              _onClick={()=>{
                dispatch(postActions.editPost)
              }}></Button>
            <Button
              height="45px"
              width="20%"
              text="게시글 삭제"
              _onClick={()=>{dispatch(postActions.deletePostFB(_post.post_id))}}
              ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

};

const Style = styled.div`
  width: 100%;
  minHeight: 150px;
  boxSizing: border-box;
`

export default PostDetail;

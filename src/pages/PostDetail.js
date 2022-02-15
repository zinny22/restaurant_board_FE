import React from "react";
import { Grid, Image, Button, Text, Input } from "../elements/Index";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { history } from "../redux/configureStore";


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
        <Grid width="40%" margin="30px auto" padding="16px" border ="1px solid #f68843" border_radius="10px">
          <Grid is_flex padding="16px">
            <Text size="25px">{_post.user_nick}</Text>
            <Text color="gray" size="16px">{_post.createDate.slice(0,10)}</Text>
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
              height="50px"
              width="20%"
              text="게시글 수정"
              _onClick ={()=>{history.push(`/editpost/${_post.post_id}`)}}></Button>
            <Button
              height="50px"
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
`

export default PostDetail;

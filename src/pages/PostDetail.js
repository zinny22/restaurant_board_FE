import React from "react";
import { Grid, Image, Text} from "../elements/Index";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";


const PostDetail = (props) => {

  const post_id = props.match.params.postid;
<<<<<<< HEAD
  const dispatch = useDispatch();
=======
  console.log(post_id)
>>>>>>> 174e1051e82ee6d61b036f2d6ec2200e257cdde6

  React.useEffect(()=>{
    dispatch(postActions.getOnePostFB(post_id)) 
  },[])
<<<<<<< HEAD
  
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list)
=======
  const post = useSelector((state) => state.post.list);
  console.log(post)

>>>>>>> 174e1051e82ee6d61b036f2d6ec2200e257cdde6

  return (

      <React.Fragment>
        <Grid width="40%" margin="30px auto" padding="16px" box_shadow border_radius="10px">
          <Grid is_flex padding="16px">
            <Text size="25px">{post.user_nick}</Text>
            <Text color="gray" size="16px">{moment(post.createDate).format('YYYY/MM/DD - HH:mm:ss')}</Text>
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
        </Grid>
      </React.Fragment>
    );
  

};

const Style = styled.div`
  width: 100%;
`

export default PostDetail;

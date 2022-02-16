import React from "react";
import { Grid, Image, Text} from "../elements/Index";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";


const PostDetail = (props) => {
  const post_id = props.match.params.postid;
  const dispatch = useDispatch();
  console.log(post_id)
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list)
 
  let _post = post_list.find((p) => p.post_id=== post_id);
  console.log(_post)
//   React.useEffect(() => {

//     dispatch(postActions.getOnePostFB(post_id))
// }, [])

    return (
      <React.Fragment>
        <Grid width="40%" margin="30px auto" padding="16px" box_shadow border_radius="10px">
          <Grid is_flex padding="16px">
            <Text size="25px">{_post.user_nick}</Text>
            <Text color="gray" size="16px">{moment(_post.createDate).format('YYYY/MM/DD - HH:mm:ss')}</Text>
          </Grid>
          <Grid>
            <Style>
              <Image src ={_post.image_url}/>
            </Style>
          </Grid>
          <Grid>
            <Text>가게이름</Text>
            <Text bold size="20px">{_post[0].title}</Text>
          </Grid>
          <Grid>
            <Text>위치</Text>
            <Text bold size="20px">{_post[0].location}</Text>
          </Grid>
          <Grid>
            <Text>한줄평</Text>
            <Text bold size="20px">{_post[0].comment}</Text>
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

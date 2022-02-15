import React from "react";
import { useDispatch} from "react-redux";
import {Grid, Image,Button,Text} from "../elements/Index"
import { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configureStore";
import moment from "moment"

const Post =(props)=>{
    const dispatch = useDispatch();
    
    return(
        <React.Fragment>
                <Grid 
                margin="30px auto" 
                border="1px solid rgb(246, 136, 67)" 
                width="400px" 
                border_radius="10px"
                box_shadow
                padding="16px"
                bg="white">
                    <Grid is_end width="100px">
                        {props.is_me && <Button height="35px"  margin="0px 3px" _onClick={()=>{history.push(`/editpost/${props.post_id}`)}}>수정</Button>}
                        {props.is_me && <Button height="35px"  _onClick={()=>{dispatch(postActions.deletePostFB(props.post_id))}}>삭제</Button>}
                    </Grid> 
                    <Grid is_flex padding="16px">
                        <Text size="23px">{props.user_nick}</Text>
                        <Text color="gray" size="16px">{moment(props.createDate).format('YYYY/MM/DD - HH:mm:ss')}</Text>
                    </Grid>
                    <Grid padding="16px">
                        <Grid _onClick ={()=>{history.push(`/getpost/${props.post_id}`)}}><Image src={props.image_url} size="20" margin="auto"/></Grid>
                        <Text size="32px" center>📍 {props.title}</Text>
                    </Grid>
                </Grid>
        </React.Fragment>   
    )
}

Post.defaultProps = {
    is_me :false,
}
// {props.is_me && <Button width="10vh" _onClick={()=>{dispatch(postActions.deletePostFB(props._id))}} >삭제</Button>}
export default Post;
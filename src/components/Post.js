import React from "react";
import { useDispatch} from "react-redux";
import {Grid, Image,Button,Text} from "../elements/Index"
import { actionCreators as postActions } from "../redux/modules/post";

const Post =(props)=>{
    const dispatch = useDispatch();
    return(
        <React.Fragment>
                <Grid 
                margin="30px auto" 
                border="2px solid rgb(246, 136, 67)" 
                width="400px" 
                border_radius="10px"
                box_shadow
                padding="16px"
                bg="white">
                    <Grid is_flex padding="16px">
                        <Text size="23px">{props.user_nick}</Text>
                        <Text color="gray" size="16px">{props.createDate.slice(0,10)}</Text>
                    </Grid>
                    <Grid padding="16px">
                        <Image src={props.image_url} size="20" margin="auto"/>
                        <Text size="32px" center>📍 {props.title}</Text>
                    </Grid>
                </Grid>
        </React.Fragment>   
    )
}
// {props.is_me && <Button width="10vh" _onClick={()=>{dispatch(postActions.deletePostFB(props._id))}} >삭제</Button>}
export default Post;
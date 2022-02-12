import React from "react";
import {Grid, Image} from "../elements/Index";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import {useSelector} from "react-redux";

const PostDetail =(props)=>{
    const post_id = props.match.params.postid;
    const dispatch = useDispatch();
    const post_list = useSelector((state)=>state.post.list);
    const {history} =props

    React.useEffect(() => {
           dispatch(postActions.getPost(post_list));
    }, []);

    return (
        <React.Fragment>
                <Grid 
                margin="30px auto" 
                border="4px solid rgb(246, 136, 67)" 
                width="400px" 
                border_radius="10px"
                box_shadow
                padding="16px"
                bg="white">
                    <Grid is_flex padding="16px">
                        <p>{props.user_nick}</p>
                        <p>{props.createDate}</p>
                    </Grid>
                    <Grid padding="16px">
                        <Image src={props.image_url} size="20" margin="auto"/>
                        <p>{props.title}</p>
                    </Grid>
                </Grid>
        </React.Fragment>
    )
}

export default PostDetail
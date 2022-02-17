import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements/Index";
import { actionCreators as postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { history} from '../redux/configureStore'

const PostEdit = (props) => {

    const dispatch = useDispatch();   
    const post_id =props.match.params.postid;
    
    React.useEffect(()=>{
        if(!post){
            history.replace('/')
            return;
        }
        dispatch(postActions.getOnePostFB(post_id)) 
    },[])

    const post = useSelector((state)=>state.post.detail)
    
    const [title, setTitle] = React.useState(post?post.title:"");
    const [location, setLocation] = React.useState(post?post.location:"");
    const [comment, setComment] = React.useState(post?post.comment:"");

    return (
        <React.Fragment>
            <Grid width="50%" margin="30px auto" padding="16px" box_shadow border_radius="10px">
            <Grid padding="16px">
                <Text margin="0px" size="36px" bold center>
                  게시글 수정
                </Text>
            </Grid>
            <Grid margin="0px 0px 50px 0px">
                <Style>
                    <Image
                        margin="10px 0px 0px 0px"
                        shape="rectangle"
                        width="50%"
                        src={post.image_url}
                    />
                </Style>
            </Grid>

           <Grid margin="0px 0px 20px 0px">
                <Input
                    defaultValue={post.title}
                    _onChange={(e)=>{setTitle(e.target.value)}}
                    label="가게 이름"
                    placeholder="가게 이름을 적어주세요"
                />
            </Grid>

            <Grid margin="0px 0px 20px 0px">
                <Input
                    defaultValue={post.location}
                    _onChange={(e)=>{setLocation(e.target.value)}}
                    label="위치"
                    placeholder="위치를 적어주세요"
                />

            </Grid>

            <Grid>
                <Input
                    defaultValue={post.comment}
                    _onChange={(e)=>{setComment(e.target.value)}}
                    label="한줄 평"
                    placeholder="한줄 평을 적어주세요"
                />

            </Grid>
          
            <Grid padding="16px" is_end >
                <Button height="45px" width="20%" text="게시글 수정" _onClick={()=>{dispatch(postActions.editPostFB(post_id,{title:title, location:location, comment:comment}))}}></Button>
            </Grid>

            </Grid>
          

        </React.Fragment>
    );
}

const Style = styled.div`
  width: 100%;
  min-height: 150px;
  box-sizing: border-box;
`
export default PostEdit
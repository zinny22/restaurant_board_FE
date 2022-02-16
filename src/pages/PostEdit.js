import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements/Index";
import { actionCreators as postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { history} from '../redux/configureStore'

const PostEdit = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state)=>state.post.list)
    const post_id =props.match.params.postid;
    let _post = post_list.find((p)=> p.post_id === post_id)

    const [title, setTitle] = React.useState(_post? _post.title:"");
    const [location, setLocation] = React.useState(_post?_post.location:"");
    const [comment, setComment] = React.useState(_post?_post.comment:"");
    

    React.useEffect(()=>{
        if(!_post){
            console.log('포스트정보가 없음')
            history.replace('/')
            return;
        }
    },[])

    const changeComment =(e)=>{
        setComment(e.target.value);
    }

    const changeLocation =(e)=>{
        setLocation(e.target.value);
    }
    const changeTitle =(e)=>{
        setTitle(e.target.value);
    }

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
                        src={_post.image_url}
                    />
                </Style>
            </Grid>

            <Grid margin="0px 0px 20px 0px">
                <Input
                    value={title}
                    _onChange={changeTitle}
                    label="가게 이름"
                    placeholder="가게 이름을 적어주세요"
                />
            </Grid>

            <Grid margin="0px 0px 20px 0px">
                <Input
                    value={location}
                    _onChange={changeLocation}
                    label="위치"
                    placeholder="위치를 적어주세요"
                />

            </Grid>

            <Grid>
                <Input
                    value={comment}
                    _onChange={changeComment}
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
  minHeight: 150px;
  boxSizing: border-box;
 
`
export default PostEdit
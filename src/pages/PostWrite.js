import React, { useState } from "react";
import { Grid, Text, Button, Image, Input } from "../elements/Index";
import { actionCreators as postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Upload from "../shared/Upload";
import { history } from "../redux/configureStore";

const PostWrite = (props) => {
    const dispatch = useDispatch();
    const preview = useSelector((state) => state.image.preview);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [comment, setComment] = useState("");
    
    const addPost = () => {
 
        dispatch(postActions.addPostFB(title, location, comment, preview));
    
    };

    return (
        <React.Fragment>
            <Grid width ="50%" margin="auto">
            <Grid padding="16px">
                <Text margin="0px" size="36px" bold>
                    게시글 작성
                </Text>
            </Grid>
            <Upload />
            <Grid>
                <Grid padding="16px">
                    <Text margin="0px" size="24px" bold>
                        미리보기
                    </Text>
                </Grid>
            </Grid>

            <Grid>
                <Style>
                    <Image
                        margin="10px 0px 0px 0px"
                        shape="rectangle"
                        width="50%"
                        src={preview ? preview : "http://via.placeholder.com/400x300"}
                    />
                </Style>
            </Grid>

            <Grid>
                <Input
                    value={title}
                    _onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    label="가게 이름"
                    placeholder="가게 이름을 적어주세요"

                />
            </Grid>
            <Grid>
                <Input
                    value={location}
                    _onChange={(e) => {
                        setLocation(e.target.value)
                    }}
                    label="위치"
                    placeholder="위치를 적어주세요"
                />

            </Grid>
            <Grid>
                <Input
                    value={comment}
                    _onChange={(e) => {
                        setComment(e.target.value)
                    }}
                    label="한줄 평"
                    placeholder="한줄 평을 적어주세요"
                />

            </Grid>
          
            <Grid padding="16px" is_end >
                <Button height="45px" width="20%" text="게시글 작성" _onClick={()=>{
                    addPost()
                    // history.push('/')
                    }}>           
                    </Button>
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
export default PostWrite
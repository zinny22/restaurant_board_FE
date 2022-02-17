import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Image, Button, Text } from "../elements/Index"
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as likeActions } from "../redux/modules/like";
import { history } from "../redux/configureStore";
import moment from "moment"
import styled from "styled-components";
import StarMain from "./StarMain";
import MenuMain from "./MenuMain";
import HeartButton from "./HeartButton";
import { fontSize } from "@mui/system";
const Post = (props) => {
    const dispatch = useDispatch();
    const user_nick = props.user_nick
    const title = props.title
    const createDate = moment(props.createDate).format('YYYY/MM/DD - HH:mm:ss')
    const score = props.score
    const post_id = props.post_id
    const like_count = props.like_count

    React.useEffect(() => {
        dispatch(likeActions.getLikeFB(post_id))
    }, []);

    return (
        <React.Fragment>
            <Cards>
                <TextWrap>
                    {/* <Btn>
                        {props.is_me && <Button padding ="5%" margin="0px 3px" _onClick={()=>{history.push(`/editpost/${props.post_id}`)}} text="수정"/>}
                        {props.is_me && <Button padding ="5%"_onClick={()=>{dispatch(postActions.deletePostFB(props.post_id))}} text="삭제"/>}
                    </Btn> */}
                    <Nick>
                        <Text size="120%">{user_nick}</Text>
                        <div style={{ display: "flex", alignItems: "center", marginLeft: "6px" }}>
                            <Text color="gray">{createDate}</Text>
                            {props.is_me && <MenuMain post_id={props.post_id} />}
                        </div>
                    </Nick>
                    <Text center size="150%">📍{title}</Text>

                    <div style={{ display: "flex", alignItems: "center", flexDirection: "row", }}>
                        <div style={{ flexShrink: "0" , fontSize:"14px", color:"grey", marginRight:"1px"}}>
                        {like_count}
                        </div>
                        <div style={{ flexShrink: "0"}}>
                        <HeartButton post_id={post_id} />
                        </div>
                        <Grid is_end>
                        <StarMain score={score} />
                        </Grid>
                    </div>
               
                </TextWrap>
                <div onClick={() => { history.push(`/getpost/${props.post_id}`) }}>
                    <Img style={{cursor:"pointer"}}>
                        <Image src={props.image_url} />
                    </Img>
                </div>

            </Cards>
        </React.Fragment>
    )
}

Post.defaultProps = {
    is_me: false,
}

const Cards = styled.div`
    width: 500px;
    height: auto;
    border-radius: 10px;
    box-shadow: rgb(222 222 222) 0px 8px 7px 0px;
    margin: 30px;
    /* @media only screen and (max-width: 30%) { min-width: 30%} */
    :hover{
        box-shadow: rgb(222 222 222) 0px 15px 25px 0px;
    }

`
const TextWrap = styled.div`
    padding: 16px;
`
const Nick = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Img = styled.div`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
`


// {props.is_me && <Button width="10vh" _onClick={()=>{dispatch(postActions.deletePostFB(props._id))}} >삭제</Button>}
export default Post;
import React from "react";
import { useDispatch} from "react-redux";
import {Grid, Image,Button,Text} from "../elements/Index"
import { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configureStore";
import moment from "moment"
import styled from "styled-components";
import StarMain from "./StarMain";
import MenuMain from "./MenuMain";
const Post =(props)=>{
    const dispatch = useDispatch();
    const user_nick = props.user_nick
    const title = props.title
    const image_url =props.image_url
    const createDate = moment(props.createDate).format('YYYY/MM/DD - HH:mm:ss')
    const score = props.score
    console.log(score)
    return(
        <React.Fragment>
            <Cards>
                <TextWrap>
                    <Btn>
                        {props.is_me && <Button padding ="5%" margin="0px 3px" _onClick={()=>{history.push(`/editpost/${props.post_id}`)}} text="수정"/>}
                        {props.is_me && <Button padding ="5%"_onClick={()=>{dispatch(postActions.deletePostFB(props.post_id))}} text="삭제"/>}
                    </Btn>
                    <Nick>
                        <Text size="120%">{user_nick}</Text>
                        <Text color ="gray">{createDate}</Text>
                        <MenuMain/>
                    </Nick>
                    <Text center size="150%">📍{title}</Text>
                    <Grid is_end>
                    <StarMain score={score}/>
                    </Grid>
                </TextWrap>
                
                <div style={{borderRadius:"10px",overflow:"hidden"}}
                onClick ={()=>{history.push(`/getpost/${props.post_id}`)}}>
                    <Image src={props.image_url}/>
                </div>
            </Cards>
        </React.Fragment>
        // <React.Fragment>
        //         <Grid 
        //         margin="30px auto" 
        //         width="400px" 
        //         border_radius="10px"
        //         box_shadow
        //         padding="16px"
        //         bg="white">
        //             <Grid is_end width="100px">
        //                 {props.is_me && <Button height="35px"  margin="0px 3px" _onClick={()=>{history.push(`/editpost/${props.post_id}`)}}>수정</Button>}
        //                 {props.is_me && <Button height="35px"  _onClick={()=>{dispatch(postActions.deletePostFB(props.post_id))}}>삭제</Button>}
        //             </Grid> 
        //             <Grid is_flex padding="16px">
        //                 <Text size="23px">{props.user_nick}</Text>
        //                 <Text color="gray" size="16px">{moment(props.createDate).format('YYYY/MM/DD - HH:mm:ss')}</Text>
        //             </Grid>
        //             <Grid padding="16px">
        //                 <Text size="32px" center>📍 {props.title}</Text>
        //                 <Grid _onClick ={()=>{history.push(`/getpost/${props.post_id}`)}} padding="0px"><Image src={props.image_url} /></Grid>
        //             </Grid>
        //         </Grid>
        // </React.Fragment>   
    )
}

Post.defaultProps = {
    is_me :false,
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

const Btn = styled.div`
    display: flex;
    width: 40%;
`


// {props.is_me && <Button width="10vh" _onClick={()=>{dispatch(postActions.deletePostFB(props._id))}} >삭제</Button>}
export default Post;
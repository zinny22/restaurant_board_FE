import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Text } from "../elements/Index";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList =(props)=>{
  console.log(props)

  const post_id = props.post
  console.log(post_id)
  console.log(props.comment)

  // const comment_list= props.comment[post_id]
  // console.log(comment_list)
  const dispatch = useDispatch()

  React.useEffect(()=>{
    dispatch(commentActions.getOneCommentFB(post_id))
  },[])

  const comment_list = useSelector((state)=>state.comment.details)
  console.log(comment_list)
  console.log(comment_list[post_id])
  // console.log(comment_list[post_id])
  // const comments = comment_list[post_id]
  // console.log(comments)

  // if(comment_list[post_id]===post_id){
    return (
      <React.Fragment>
        {/* <CommentItem {...comment_list}/> */}
          {comment_list[post_id].map((p,idx)=>{
            return (<CommentItem key ={idx} {...p}/>)
          })}
      </React.Fragment>
    )
  }
// }

export default CommentList;

const CommentItem =(props)=>{
  console.log(props)
  // const {user_nick, user_comment, createDate} =props

  return(
    <Grid is_flex>
      <Text bold>{props.user_nick}</Text>
      <Grid is_flex margin="0px 4px">
        <Text>{props.user_comment}</Text>
        <Text>{props.createDate}</Text>  
      </Grid>
    </Grid>
  )
}

CommentItem.defaultProps ={
  user_nick:"jini",
  user_comment:"이게 되네",
  createDate:"2022-02-04 10:00:00"
}

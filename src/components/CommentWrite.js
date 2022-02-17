import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Input, Button } from "../elements/Index";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentWrite = (props) => {
  const user_nick = localStorage.getItem("user_nick")
  const {post_id} = props

  const [user_comment, setComment] = React.useState("")
  const dispatch = useDispatch()

  const addComment = () => {
    dispatch(commentActions.addCommentFB(user_comment, user_nick, post_id));
  }
  
  return (
    <React.Fragment>
      <Grid is_flex>
        <Input
          value={user_comment}
          _onChange={(e) => { setComment(e.target.value) }}
          placeholder="댓글을 입력해주세요:>" />
        <Button width="50px" margin="0px 2px"
          _onClick={() => {
            addComment()
          }}>작성</Button>
      </Grid>
    </React.Fragment>
  )
}

export default CommentWrite;
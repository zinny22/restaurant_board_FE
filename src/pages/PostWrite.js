// import React, { useState } from "react";
// import { Grid, Text, Button, Image, Input } from "../elements/Index";
// import Upload from "../shared/Upload";
// import styled from "styled-components";

// import { useSelector, useDispatch } from "react-redux";
// import { actionCreators as postActions } from "../redux/modules/post";
// import { actionCreators as imageActions } from "../redux/modules/image";

// const PostWrite = (props) => {
//     const dispatch = useDispatch();
//     const is_login = useSelector((state) => state.user.is_login);
//     const preview = useSelector((state) => state.image.preview);
//     const post_list = useSelector((state) => state.post.list);

//     const post_id = props.match.params.id;
//     //params 아이디 가져오기!
//     const is_edit = post_id ? true : false;
//     const { history } = props;
//     let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;
//     //post_list에서 param로 가져온 post_id 값!

//     const [contents, setContents] = React.useState(_post ? _post.contents : "");
//     //usestate의 기본값은 _post.contents
//     React.useEffect(() => {
//         if (is_edit && !_post) {
//             console.log("포스트 정보가 없어요!");
//             history.goBack();
//             return;
//         }

//         if (is_edit) {
//             dispatch(imageActions.setPreview(_post.image_url));
//         }
//     }, []);

//     const changeContents = (e) => {
//         setContents(e.target.value);
//     };

//     const addPost = () => {
//         dispatch(postActions.addPostFB(contents));
//     };

//     // const editPost = () => {
//     //     dispatch(postActions.editPostFB(post_id, { contents: contents, display: display }));
//     //     // 바뀐값 contents(오른쪽)을 contents란 이름으로 넘겨줌
//     // }

//     if (!is_login) {
//         return (
//             <Grid margin="100px 0px" padding="16px" center>
//                 <Text size="32px" bold>
//                     앗! 잠깐!
//                 </Text>
//                 <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
//                 <Button
//                     _onClick={() => {
//                         history.replace("/");
//                     }}
//                 >
//                     로그인 하러가기
//                 </Button>
//             </Grid>
//         );
//     }

// return (
//     <React.Fragment>

//         <Grid padding="16px">
//             <Text margin="0px" size="36px" bold>
//                 게시글 작성
//             </Text>
//             {/* <Upload /> */}
//         </Grid>

//         <Grid>
//             <Grid padding="16px">
//                 <Text margin="0px" size="24px" bold>
//                     미리보기
//                 </Text>
//             </Grid>
//         </Grid>
//         <Grid padding="10px">
//             <Style>
//                 <Image
//                     margin="10px 0px 0px 0px"
//                     shape="rectangle"
//                     width="100%"
//                     src={preview ? preview : "http://via.placeholder.com/400x300"}
//                 />
//             </Style>
//         </Grid>

//         <Grid padding="16px">
//             <input
//                 value={contents}
//                 _onChange={changeContents}
//                 label="게시글 내용"
//                 placeholder="게시글 작성"
//                 multiLine
//             />
//         </Grid>
//         <Grid padding="16px">
//                 <Button text="게시글 작성" _onClick={addPost}></Button>
//         </Grid>
//     </React.Fragment>
// );
// };

// const Style = styled.div`
//   width: 100%;
//   minHeight: 150px;
//   boxSizing: border-box;

// `
// export default PostWrite;

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
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    label="가게 이름"
                    placeholder="가게 이름을 적어주세요"

                />
            </Grid>
            <Grid>
                <Input
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value)
                    }}
                    label="위치"
                    placeholder="위치를 적어주세요"
                />

            </Grid>
            <Grid>
                <Input
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value)
                    }}
                    label="한줄 평"
                    placeholder="한줄 평을 적어주세요"
                />

            </Grid>
          
            <Grid padding="16px" is_end >
                <Button height="45px" width="20%" text="게시글 작성" _onClick={()=>{
                    addPost()
                    history.push('/')
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
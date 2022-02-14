import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { useSelector } from "react-redux";
import instance from "../../shared/Request";


const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST"

const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (title, location, comment, preview) => ({ title, location, comment, preview }));

const initialState = {
    list: [{
        user_nick: "jin",
        createDate: "2022-02-11 10:00:00",
        image_url: "https://img.sbs.co.kr/newimg/news/20210322/201532338_1280.jpg",
        title: "초밥이조아",
        loction: "",
        comment: ""
    }],
}


// 어떤 미들웨어
const addPostFB = (title, location, comment,preview) => {
    return function (getState, dispatch, {history}) {
        // const _user = getState().user.user;

        // const user_info = {
        //   user_nick: _user.user_nick,
        //   user_id: _user.token
        // };
       
        const _post = {
            title: title,
            location: location,
            comment: comment,
            image_url : preview
        }
        // 만들어둔 instance에 보낼 요청 타입과 주소로 요청합니다. 
        instance.post('/api/addpost/save', // 미리 약속한 주소
            { title: title, location: location, comment: comment, image_url: preview }, // 서버가 필요로 하는 데이터를 넘겨주고,
        ).then(function (response) {
            console.log(response);
        }).then((doc)=>{
            let post = {..._post, id: doc.id}
            dispatch((addPost(post)))
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
export default handleActions(
    {
        [GET_POST]: (state, action) => produce(state, (draft) => {
                draft.list=action.payload.post_list
        }),

        [ADD_POST]: (state, action) => produce(state, (draft) => {  
            draft.list.unshift(action.payload.post);
        })
    },
    initialState
)

const actionCreators = {

    getPost,
    addPost,
    addPostFB,
}
export { actionCreators };

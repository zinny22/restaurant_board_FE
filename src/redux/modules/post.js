import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";


const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST"

const getPost = createAction(GET_POST, (ll) => ({ ll }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

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

// middleware
const addPostFB = (title, location, comment, preview) => {
    return function(dispatch, getState, {history}) {
     
        //    const _post = {
    //         title: title,
    //         location: location,
    //         comment: comment,
    //         image_url: preview,
    //     }
        
    //     let post = {..._post}
    //     // 만들어둔 instance에 보낼 요청 타입과 주소로 요청합니다. 
    //     instance.post('/api/addpost/save', // 미리 약속한 주소
    //         {title: title, location: location, comment: comment, image_url: preview}, // 서버가 필요로 하는 데이터를 넘겨주고,
    //     ).then((res) => {
    //         console.log(res)
    //         dispatch(addPost(post))
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    }
}

const getPostFB = () => {
    return function(dispatch, getState, {history}) {
        const ll = "ll"
        console.log(ll)
        dispatch(getPost(ll))
    }
}

export default handleActions(
    {
        [GET_POST]: (state, action) => produce(state, (draft) => {
            console.log(action.payload)
            draft.list=action.payload.post_list
        }),

        [ADD_POST]: (state, action) => produce(state, (draft) => {
            console.log(action.payload)
            // draft.list.unshift(action.payload.post);
        })
    },
    initialState
)

const actionCreators = {
    getPost,
    addPost,
    getPostFB,
    addPostFB,
}
export { actionCreators };

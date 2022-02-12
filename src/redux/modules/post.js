import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { useSelector } from "react-redux";
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

export default handleActions(
    {
        [GET_POST]: (state, action) => produce(state, (draft) => {
                draft.list=action.payload.post_list
        }),

        [ADD_POST]: (state, action) => produce(state, (draft) => {
            const _post = {
                user_nick: "jin",
                createDate: "2022-02-11 10:00:00",
                title: action.payload.title,
                location: action.payload.location,
                comment: action.payload.comment,
                image_url: action.payload.preview,
              };
            let post = {..._post}
            draft.list.unshift(post)
        })
    },
    initialState
)

const actionCreators = {

    getPost,
    addPost,
}
export { actionCreators };

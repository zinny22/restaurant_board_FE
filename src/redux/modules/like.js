import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import { actionCreators as postActions } from "./post";
import instance from "../../shared/Request";

const SET_LIKE = "SET_LIKE";
const ADD_LIKE = "ADD_LIKE";
const CANCEL_LIKE = "CANCEL_LIKE";

const setLike = createAction(SET_LIKE, (post_id, user_list) => ({
    post_id,
    user_list,
}));
const addLike = createAction(ADD_LIKE, (post_id, user_nick) => ({
    post_id,
    user_nick,
}));

const cancelLike = createAction(CANCEL_LIKE, (post_id, user_nick) => ({
    post_id,
    user_nick,
}));

const initialState = {
    list: {},
};

const getLikeFB = (post_id) => {
    return function (dispatch, getState, { history }) {
        instance.get(`api/getlike/${post_id}`,
            {},
        ).then((res) => {
            const data = res.data.response
            const user_list = []
            data.forEach((doc) => {
                user_list.push(doc.user_nick);
            });
            dispatch(setLike(post_id, user_list));
        })
            .catch((error) => {
                console.log(error);
            });
    };
};

const addLikeFB = (post_id, user_nick) => {
    return function (dispatch, getState, { history }) {
        const post = getState().post.list.find((l) => l.post_id === post_id);
        const is_local = localStorage.getItem("is_login")
        
       
        const idx = getState().post.list.findIndex((p) => p.post_id === post_id)
        const _like_count= getState().post.list[idx]
        const like_count = parseInt(_like_count.like_count)+1   
       
        instance.post(`api/like/${post_id}`,
            {   like_count: like_count,
                user_nick: user_nick,
                post_id: post_id,
            },
            instance.defaults.headers.common["Authorization"] = `Bearer ${is_local}`
        ).then((res) => {
            console.log(res.data.response)
            dispatch(addLike(post_id, user_nick))
            if (post) {
                dispatch(
                  postActions.editPost(post_id, {
                    like_count: parseInt(post.like_count) + 1,
                  })
                );
              }
        })
        .catch((error) => {
            console.log(error);
        });
    };
};

const cancelLikeFB = (post_id, user_nick) => {
    return function (dispatch, getState, { history }) {
        // dispatch(cancelLike(post_id, user_nick))
        const post = getState().post.list.find((l) => l.post_id === post_id);
        const is_local = localStorage.getItem("is_login")

        const idx = getState().post.list.findIndex((p) => p.post_id === post_id)
        const _like_count= getState().post.list[idx]
        const like_count = parseInt(_like_count.like_count) - 1  
        console.log(like_count)

        instance.post(`api/unlike/${post_id}`,
            {   like_count: like_count,
                user_nick: user_nick,
                post_id: post_id,
            },
            instance.defaults.headers.common["Authorization"] = `Bearer ${is_local}`
        ).then((res) => {
            console.log(res.data.response)
            dispatch(cancelLike(post_id, user_nick))
            if (post) {
                dispatch(
                  postActions.editPost(post_id, {
                    like_count: parseInt(post.like_count) - 1,
                  })
                );
              }
        })
        .catch((error) => {
            console.log(error);
        });
    };
};

export default handleActions(
    {
        [SET_LIKE]: (state, action) =>
            produce(state, (draft) => {
                draft.list[action.payload.post_id] = action.payload.user_list;
            }),
        [ADD_LIKE]: (state, action) =>
            produce(state, (draft) => {
                draft.list[action.payload.post_id].push(action.payload.user_nick);
            }),
        [CANCEL_LIKE]: (state, action) =>
            produce(state, (draft) => {
                draft.list[action.payload.post_id] = draft.list[
                    action.payload.post_id
                ].filter((l) => l !== action.payload.user_nick);
            }),
    },
    initialState
);

const actionCreators = {
    getLikeFB,
    addLikeFB,
    cancelLikeFB,
};

export { actionCreators };

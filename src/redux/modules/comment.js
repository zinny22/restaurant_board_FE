import {produce} from "immer";
import { createAction, handleActions} from "redux-actions";
import "moment"
import moment from "moment";
import instance from "../../shared/Request";

const GET_COMMENT ="GET_COMMENT";
const GET_ONE_COMMENT ="GET_ONE_COMMENT";
const ADD_COMMENT ="ADD_COMMENT";
const LOADING = "LOADING"

const getComment = createAction(GET_COMMENT, (comment_list,post_id)=>({comment_list,post_id}));
const getOneComment = createAction(GET_ONE_COMMENT,(comment_list,post_id)=>({comment_list,post_id}))
const addComment = createAction(ADD_COMMENT, (post,post_id)=>({post,post_id}))
const loading = createAction(LOADING, (is_loading)=>({is_loading}))

const initialState ={
    list:[],
    // is_loading:false,
    details:[],
}

const getOneCommentFB = (post_id)=>{
    return function(dispatch, getState, {history}){
        instance.get(`/api/comment/get/${post_id}`,{})
        .then(function(response){
            const comments = response.data.comment_list
            const comment_list = []
            comments.forEach((v,i)=>{
                let list={
                    user_nick:v.user_nick,
                    user_comment:v.user_comment,
                    createDate:v.createDate,
                    post_id:v.articleId._id,
                }
                comment_list.push(list)
            })
            console.log(comment_list)
            dispatch(getOneComment(comment_list,post_id))
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

// const getCommentFB=(post_id)=>{
//     return function(dispatch, getState, {history}){
//         console.log(post_id)
//         instance.get(`/api/comment/get/${post_id}`,{})
//         .then(function(response){
//             const comments = response.data.comment_list
//             const comment_list = []
//             comments.forEach((v,i)=>{
//                 let list={
//                     user_nick:v.user_nick,
//                     user_comment:v.user_comment,
//                     createDate:v.createDate,
//                     post_id:v.articleId._id,
//                 }
//                 comment_list.push(list)
//             })
//             console.log(comment_list)
//             dispatch(getComment(comment_list,post_id))
//         })
//         .catch(function(error){
//             console.log(error)
//         })
//     }
// }

const addCommentFB =(user_comment,user_nick, post_id)=>{
    return function(dispatch, getState, {history}){
        const is_local = localStorage.getItem("is_login")
        const _comment ={
            user_nick: user_nick,
            user_comment :user_comment
        }
        let comment_list = {..._comment}
        instance.post(`/api/comment/save/${post_id}`,{
            user_nick: user_nick,
            user_comment :user_comment},
        instance.defaults.headers.common["Authorization"] = `Bearer ${is_local}`
        ).then((response)=>{
            console.log(response.data)
            console.log(comment_list)
            dispatch(addComment(comment_list, post_id))
            window.location.reload()
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export default handleActions({
    // [GET_COMMENT]:(state, action)=>produce(state, (draft)=>{
    //     console.log(action.payload)
    //     draft.list[action.payload.post_id] = action.payload.comment_list
    // }),
    [ADD_COMMENT]:(state, action)=>produce(state, (draft)=>{
        draft.list[action.payload.post_id].push(action.payload.comment_list)
    }),
    [LOADING]:(state, action)=>produce(state, (draft)=>{
        draft.is_loading = action.payload.is_loading;
    }),
    [GET_ONE_COMMENT]:(state, action)=>produce(state,(draft)=>{
        console.log(action.payload)
        draft.details[action.payload.post_id] = action.payload.comment_list
    })
},
initialState
)

const actionCreators={
    // getCommentFB,
    getComment,
    addComment,
    addCommentFB,
    getOneComment,
    getOneCommentFB
}

export{actionCreators};
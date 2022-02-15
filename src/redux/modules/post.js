import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";

const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST ="DELETE_POST";
const EDIT_POST ="EDIT_POST";

const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (post_index)=>({post_index}))
const editPost = createAction(EDIT_POST,(post_id,post)=>({post_id,post}))

const initialState = {
    list: [],
}

// middleware
const addPostFB = (title, location, comment, preview, rating) => {
    return function (dispatch, getState, { history }) {
        const is_local = localStorage.getItem("is_login")
        console.log(rating)
        const _post = {
            title: title,
            location: location,
            comment: comment,
            image_url: preview,
        }
        let post = { ..._post }
        // 만들어둔 instance에 보낼 요청 타입과 주소로 요청합니다. 
        instance.post('/api/addpost/save', // 미리 약속한 주소
            { title: title, location: location, comment: comment, image_url: preview }, // 서버가 필요로 하는 데이터를 넘겨주고,
            instance.defaults.headers.common["Authorization"] = `Bearer ${is_local}`
        ).then((res) => {
            console.log(res.data.success)
            dispatch(addPost(post))
            history.push('/')
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

const getPostFB = () => {
    return function (dispatch, getState, { history }) {
        instance.get('/api/main', {})
        .then(function (response) { 
            console.log(response.data.response)
            const postDB = response.data.response
            const post_list = []
            postDB.forEach((v, i) => {
                let list = {
                    title: v.title,
                    user_nick: v.user_nick, 
                    createDate: v.createdDate,
                    post_id: v._id,
                    image_url:v.image_url,
                    comment:v.comment,
                    location:v.location
                }
                post_list.push(list)
            })
            dispatch(getPost(post_list))
        })
            .catch(function (error) { console.log(error) })
    }
}


const deletePostFB =(post_id=null)=>{
    return function(dispatch, getState,{history}){
        const _post_idx = getState().post.list.findIndex((p)=>p.post_id===post_id)
        instance.delete(`/api/getpost/delete/${post_id}`,{},)
        .then(function(response){
            console.log(response)
            dispatch(deletePost(_post_idx))
            window.location.reload()
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
}

const editPostFB =(post_id=null, post={})=>{
    return function(dispatch ,getState, {history}){
        instance.patch(`/api/getpost/modify/${post_id}`,
        { title :post.title, location:post.location, comment:post.comment,})
        .then(function(response){
            dispatch(editPost(post_id, {...post}))
            history.replace('/')
        }).catch((error)=>{
            console.log(error)
        })
    }}


export default handleActions(
    {
        [GET_POST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.post_list
        }),

        [ADD_POST]: (state, action) => produce(state, (draft) => {
            draft.list.unshift(action.payload.post);
           
        }),
        [DELETE_POST]: (state, action) => produce(state, (draft) => {
            let deleted = draft.list.filter((e,i)=>{
                return (parseInt(action.payload._post_idx)!==i)
            })
            draft.list=deleted
        }),
        [EDIT_POST]: (state, action)=>produce(state, (draft)=>{
            let idx = draft.list.findIndex((p)=>p.post_id===action.payload.post_id)
            draft.list[idx] ={...draft.list[idx], ...action.payload.post}
        })
    },
    initialState
)

const actionCreators = {
    getPost,
    addPost,
    getPostFB,
    addPostFB,
    deletePostFB,
    deletePost,
    editPostFB,
    editPost
}
export { actionCreators };

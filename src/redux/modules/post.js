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
    return function (dispatch, getState, { history }) {

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
        ).then((res) => {
            console.log(res)
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
            console.log(postDB)
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
            console.log(post_list)
            dispatch(getPost(post_list))
        })
            .catch(function (error) { console.log(error) })
    }
}

const deletePostFB =(post_id=null)=>{
    return function(dispatch, getState,{history}){
        const _post_idx = getState().post.list.findIndex((p)=>p.id===post_id)
        instance.delete(`/api/getpost/delete/${post_id}`,{},
        )
        .then(function(response){
            console.log(response)
            dispatch(deletePost(_post_idx))
            history.push('/')
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
}



export default handleActions(
    {
        [GET_POST]: (state, action) => produce(state, (draft) => {
            console.log(action.payload)
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
    deletePost
}
export { actionCreators };

import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";

const GET_POST = "GET_POST";

const getPost = createAction(GET_POST, (post_list)=>({post_list}));


const initialState ={
    list:[{    
    user_nick: "jin",
    createDate :"2022-02-11 10:00:00",
    image_url : "https://img.sbs.co.kr/newimg/news/20210322/201532338_1280.jpg",
    title : "초밥이조아",}],
}

export default handleActions(
    {
        [GET_POST] : (state, action) =>produce(state,(draft)=>{
           
        })
    },
    initialState
)

const actionCreators ={
    getPost,
}
export {actionCreators};

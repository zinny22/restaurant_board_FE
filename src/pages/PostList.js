import React from "react";
import { history } from "../redux/configureStore";

const PostList = () => {
    return (
        <button onClick={()=>{
            history.push("/")
            console.log("연결됐다 ㅋㅋ")
        }}>
            ㅋㅋ
        </button>
    )
}

export default PostList
import React, { useEffect, useState } from "react";
import { Text, Grid, Button } from "../elements/Index"
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";


import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as likeActions } from "../redux/modules/like";

const HeartButton = (props) => {
    const dispatch = useDispatch();
    const like_list = useSelector((state) => state.like.list);
    //   const user_info = useSelector((state) => state.user.user); 
    const user_nick = localStorage.getItem("user_nick")
   
    const is_local = localStorage.getItem("is_login") ? true : false;
    const { post_id } = props;
   
    //   useEffect(() => {
    //     if (like_list[post_id]?.includes(user_info?.uid)) {
    //       setToggle(true);
    //     } else {
    //       setToggle(false);
    //     }
    //   });



    const [toggle, setToggle] = useState(false);
    const updateHeart = () => {
        setToggle(!toggle);
        if (!user_nick || !is_local) {
          return alert("로그인을 해주세요");
        } else if (!like_list[post_id]?.includes(user_nick)) {
          dispatch(likeActions.addLikeFB(post_id, user_nick));
        } 
        // else if (like_list[post_id]?.includes(user_nick)) {
        //   dispatch(likeActions.cancelLikeFB(post_id, user_nick));
        // }
    };
    return (
        <>
            <FavoriteOutlinedIcon
                onClick={updateHeart}
                style={
                    toggle ? { color: "#f68843", ...styles } : { color: "#a9a9a9", ...styles }
                }
            />
        </>
    );
};

const styles = {
    padding: "0px",
};

export default HeartButton;

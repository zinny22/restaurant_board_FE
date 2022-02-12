import React from "react";
import {Grid, Image} from "../elements/Index"

const Post =(props)=>{
    return(
        <React.Fragment>
                <Grid margin="30px auto" is_border="1px solid #f6bb43" size="300" >
                    <Grid is_flex padding="16px">
                        <p>{props.user_nick}</p>
                        <p>{props.createDate}</p>
                    </Grid>
                    <Grid padding="16px">
                        <Image src={props.image_url} size="20" margin="auto"/>
                        <p>{props.title}</p>
                    </Grid>
                </Grid>
        </React.Fragment>
    )
}

Post.defaultProps ={
    user_nick: "jin",
    createDate :"2022-02-11 10:00:00",
    image_url : "https://img.sbs.co.kr/newimg/news/20210322/201532338_1280.jpg",
    title : "초오밥",
}


export default Post;
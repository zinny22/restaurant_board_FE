import React from "react";
import {Grid, Image} from "../elements/Index"

const Post =(props)=>{
    return(
        <React.Fragment>
                <Grid 
                margin="30px auto" 
                border="4px solid rgb(246, 136, 67)" 
                width="400px" 
                border_radius="10px"
                box_shadow
                padding="16px"
                bg="white">
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

export default Post;
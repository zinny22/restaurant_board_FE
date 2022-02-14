import React from "react";
import {Grid, Image,Text,Input,Button} from "../elements/Index"

const PostD =(props)=>{
    return(
        <React.Fragment>
                <Grid>
                    <Grid is_flex padding="16px">
                        <Text>{props.user_nick}</Text>
                        <Text></Text>
                    </Grid>
                    <Grid padding="16px">
                        <Image src={props.image_url} size="20" margin="auto"/>
                        <Text>가게명</Text>
                        <Input></Input>
                        <Text>📍위치</Text>
                        <Input></Input>
                        <Text>한줄평</Text>
                        <Input></Input>
                    </Grid>
                    <Grid is_flex padding="16px">
                        <Button>수정</Button>
                        <Button>삭제</Button>
                    </Grid>
                </Grid>
        </React.Fragment>   
    )
}

export default PostD;
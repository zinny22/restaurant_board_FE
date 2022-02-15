import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, Text, Button, Image, Input } from "../elements/Index";
import { useSelector, useDispatch } from "react-redux";
import Upload from "../shared/Upload";
import { actionCreators as postActions } from "../redux/modules/post";



const RecipeReviewCard = () => {
    const [expanded, setExpanded] = React.useState(false);
    const dispatch = useDispatch();
    const preview = useSelector((state) => state.image.preview);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [comment, setComment] = useState("");
    ;
    const addPost = () => {
        dispatch(postActions.addPostFB(title, location, comment, preview));
    };

    return (
        <Card sx={{}}>
            <Grid is_flex >
                <Text size="35px" bold margin="20px">게시글작성</Text>
                <Upload />
            </Grid>

            <Image
                margin="10px 0px 0px 0px"
                shape="rectangle"
                width="50%"
                src={preview ? preview : "http://via.placeholder.com/400x300"}
            />
            <CardContent>
                <Grid>
                    <Input
                        value={title}
                        _onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        label="가게 이름"
                        placeholder="가게 이름을 적어주세요"

                    />
                </Grid>
                <Grid>
                    <Input
                        value={location}
                        _onChange={(e) => {
                            setLocation(e.target.value)
                        }}
                        label="위치"
                        placeholder="위치를 적어주세요"
                    />
                </Grid>
                <Grid>
                    <Input
                        value={comment}
                        _onChange={(e) => {
                            setComment(e.target.value)
                        }}
                        label="한줄 평"
                        placeholder="한줄 평을 적어주세요"
                    />
                </Grid>
                <Grid padding="16px" is_end >
                    <Button cursor="pointer" height="45px" width="20%" text="게시글 작성" _onClick={() => {
                        addPost()
                        // history.push('/')
                    }}>
                    </Button>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>
        </Card>
    );
}
export default RecipeReviewCard





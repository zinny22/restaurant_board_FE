import React, { useState } from "react";
import { Grid, Text, Button, Image, Input } from "../elements/Index";
import { actionCreators as postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Upload from "../shared/Upload";
import { history } from "../redux/configureStore";
import RecipeReviewCard from "../components/PostWriteD"

const PostWrite = (props) => {
    const dispatch = useDispatch();
    const preview = useSelector((state) => state.image.preview);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [comment, setComment] = useState("");

    const addPost = () => {
        dispatch(postActions.addPostFB(title, location, comment, preview));
    };

    return (
        <React.Fragment>
            <Grid width="50%" margin="30px auto" padding="16px">
            <RecipeReviewCard/>  
            </Grid>
        </React.Fragment>
    );
}

export default PostWrite


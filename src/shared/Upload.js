import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import styled from "styled-components";
import { actionCreators as imageActions } from "../redux/modules/image";
import { Grid } from "../elements/Index";

const Upload = (props) => {
    const dispatch = useDispatch();
    const uploading = useSelector((state) => state.image.uploading);
    const fileInput = React.useRef();


  
  
    const selectFile = (e) => {
    
        const reader = new FileReader();
        const file = e.target.files[0];
        
        reader.readAsDataURL(file)
     
        // reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
          // reader.result는 파일의 컨텐츠(내용물)입니다!
          console.log(reader.result)
          dispatch(imageActions.setPreview(reader.result));
        };
    };


      return (
        <React.Fragment>
          <Grid is_end padding="10px">
          <AddPhotoAlternateOutlinedIcon
           style={{color:"#f68843", fontSize:"30px", cursor:"pointer"}}
           onClick={() => {
            fileInput.current.click()
           }}/>
          <Input
            id="file"
            type="file"
            disabled={uploading} 
            ref={fileInput}
            onChange={selectFile}
          />
         </Grid>
        </React.Fragment>
      );
};


const Input = styled.input`
position: absolute;
width: 0;
height: 0;
padding: 0;
overflow: hidden;
border: 0;
`

export default Upload;
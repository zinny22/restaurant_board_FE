import React from "react";
import { Button } from "../elements/Index";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { actionCreators as imageActions } from "../redux/modules/image";

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
          <Input
            type="file"
            ref={fileInput}
            onChange={selectFile}
            disabled={uploading}
          />
        </React.Fragment>
      );
};

const Input= styled.input`
display: inline-block;
padding: 10px 20px;
color: #fff;
vertical-align: middle;
background-color: #999999;
cursor: pointer;
height: 40px;
margin-left: 10px;
`
export default Upload;
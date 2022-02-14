import React from "react";
import { Button } from "../elements/Index";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
    const dispatch = useDispatch();
    const uploading = useSelector((state) => state.image.uploading);
    const fileInput = React.useRef();

    const selectFile = (e) => {
      console.log(e.target.files[0])
      if ( /\.(jpe?g|png|gif)$/i.test(e.name) ) {
        const reader = new FileReader();
       
        const file = e.target.files[0];
        reader.readAsDataURL(file);

        reader.onloadend = () => {
 
          dispatch(imageActions.setPreview(reader.result));
        };
      }
      
    };

      return (
        <React.Fragment>
          <input
            type="file"
            ref={fileInput}
            onChange={selectFile}
            disabled={uploading}
          />
        </React.Fragment>
      );
};

export default Upload;
import { goForward } from "connected-react-router";
import React from "react";
import styled from "styled-components";

const Image = (props)=>{
    const {src, size, borderRadius, margin} = props;
    const styles ={
        src: src,
        size: size,
        borderRadius:borderRadius,
        margin: margin
    }
    return (
        <React.Fragment>
            <Images {...styles}/>
        </React.Fragment>
    )
}
Image.defaultProps = {
    src:"https://img.sbs.co.kr/newimg/news/20210322/201532338_1280.jpg",
    size: 36,
    borderRadius : false,
    margin: false,
}

const Images =styled.div`
    --size :${(props)=>props.size}vh;
    width: 100%;
    height: var(--size);
    ${(props)=>props.borderRadius?`border-radius:${props.borderRadius}` :""};
    background-image: url("${(props)=>props.src}");
    background-size: cover;
    margin: ${(props)=>props.margin};
`

export default Image;
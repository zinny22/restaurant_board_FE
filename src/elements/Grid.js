import React from "react";
import styled from "styled-components"

const Grid =(props) =>{
    const {children, width, margin, padding, bg,borderRadius,is_flex,is_border,size} =props;

    const styles ={
        width: width,
        margin: margin,
        padding: padding,
        bg:bg,
        borderRadius: borderRadius,
        is_flex:is_flex,
        is_border:is_border,
        size: size,
    }
     return(
         <React.Fragment>
             <GridBox {...styles}>{children}</GridBox>
         </React.Fragment>
     )
}

Grid.defaultPorps={
    children :null,
    width : false,
    margin: false,
    padding: false,
    bg: false,
    borderRadius : false,
    is_flex :false,
    is_border:false,
    size: false,
}

const GridBox = styled.div `
    box-sizing: border-box;
    height: 100%;
    --size :${(props)=>props.size}px;
    width: var(--size);
    ${(props=>props.width?`margin:${props.width}`:"")}
    ${(props=>props.margin?`margin:${props.margin}`:"")}
    ${(props=>props.padding?`margin:${props.padding}`:"")}
    ${(props=>props.bg?`margin:${props.bg}`:"")}
    ${(props)=>props.borderRadius?`border-radius:${props.borderRadius}` :""};
    ${(props)=>props.is_border?`border:${props.is_border}` :""};
    ${(props)=>props.is_flex?`display: flex; align-item:center; justify-content:space-between` :""};
`

export default Grid
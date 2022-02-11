import React from "react";
import styled from "styled-components"

const Grid =(props) =>{
    const {children, width, margin, padding, bg} =props;

    const styles ={
        width: width,
        margin: margin,
        padding: padding,
        bg:bg,
    }
     return(
         <React.Fragment>
             <GridBox {...styled}>{children}</GridBox>
         </React.Fragment>
     )
}

Grid.defaultPorps={
    children :null,
    width : false,
    margin: false,
    padding: false,
    bg: false,

}

const GridBox = styled.div `
    box-sizing: border-box;
    height: 100%;
    ${(props=>props.width?`margin:${props.width}`:"")}
    ${(props=>props.margin?`margin:${props.margin}`:"")}
    ${(props=>props.padding?`margin:${props.padding}`:"")}
    ${(props=>props.bg?`margin:${props.bg}`:"")}
`

export default Grid
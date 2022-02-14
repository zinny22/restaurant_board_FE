import { height } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { height, text, _onClick, children, margin, width, padding } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    height: height,
  };

  return (
    <React.Fragment>
      <MyButton {...styles} onClick={_onClick}>{text ? text : children}</MyButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => { },
  margin: false,
  width: '100%',
  height: '100%',
  padding: "12px 0px",
};


const MyButton = styled.button`
  width: ${(props) => props.width};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  background: linear-gradient(45deg, #F9D893 30%, #F6BB43 90%);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: ${(props) => props.height};
  transition: ease all .1s;
  @media only screen and (max-width: 960px) {
    width: ${(props) => (props.width ? "30%" : "")};
    height: ${(props) => (props.height ? "35px" : "")};}
  @media only screen and (max-width: 650px) {
    width: ${(props) => (props.width ? "50%" : "")};
    height: ${(props) => (props.height ? "30px" : "")};}
`

export default Button;
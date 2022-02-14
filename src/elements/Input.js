import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./Index";

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiLine, value } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #f68843 ;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #f68843;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;

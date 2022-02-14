import React from "react";
import { Text, Input, Grid, Button } from "../elements/Index";
import { useState } from "react";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { emailCheck } from "../shared/Common";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const login = () => {


    // if (id === "" || pwd === "") {
    //   window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
    //   return;
    // }

    // if (!emailCheck(id)) {
    //   window.alert("이메일 형식이 맞지 않습니다!");
    //   return;
    // }

    dispatch(userActions.loginDB(id, pwd));
  };

  return (
    <React.Fragment>
      <Grid width="60vw" margin="auto" padding="16px">
        <Text size="20px" bold center>
          🥨로그인하고 맛난거 먹으러 가볼까요?🥨
        </Text>
        <Grid margin="16px 0px">
          <Input
            label="아이디"
            placeholder="ID를 입력하여 주세요"
            type="text"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>
        <Grid margin="16px 0px">
          <Input
            label="비밀번호"
            placeholder="PWD를 입력하여 주세요"
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>
        <Grid margin="30px 0px 16px 0px">
          <Button
            text="로그인 하기"
            _onClick={(e) => {
              console.log("로그인 완료!");
              login();
            }}
          />
        </Grid>
        <Grid margin="16px 0px">
          <Button
            text="회원가입 하기"
            _onClick={() => {
              history.push("/Register");
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;

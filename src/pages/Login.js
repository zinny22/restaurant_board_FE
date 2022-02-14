// import React from "react";
// import { Text, Input, Grid, Button } from "../elements";
// import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

// import { useDispatch } from "react-redux";
// import { actionCreators as userActions } from "../redux/modules/user";
// import { emailCheck } from "../shared/common";

// const Login = (props) => {
//   const dispatch = useDispatch();

//   const [id, setId] = React.useState("");
//   const [pwd, setPwd] = React.useState("");

//   const login = () => {
//     console.log(id);

//     if (id === "" || pwd === "") {
//       window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
//       return;
//     }

//     if (!emailCheck(id)) {
//       window.alert("이메일 형식이 맞지 않습니다!");
//       return;
//     }

//     dispatch(userActions.loginFB(id, pwd));
//   };

//   return (
//     <React.Fragment>
//       <Grid padding="16px">
//         <Text size="32px" bold>
//           로그인
//         </Text>

//         <Grid padding="16px 0px">
//           <Input
//             label="아이디"
//             placeholder="아이디를 입력해주세요."
//             _onChange={(e) => {
//               setId(e.target.value);
//             }}
//           />
//         </Grid>

//         <Grid padding="16px 0px">
//           <Input
//             label="패스워드"
//             placeholder="패스워드 입력해주세요."
//             type="password"
//             _onChange={(e) => {
//               setPwd(e.target.value);
//             }}
//           />
//         </Grid>

//         {/* <Button
//           text="로그인하기"
//           _onClick={() => {
//             console.log("로그인 했어!");
//             login();
//           }}
//         ></Button> */}

//         <button
//           style={{
//             width: 440,
//             height: 40,
//             border: "1px solid black",
//           }}
//           disabled={id !== "" && pwd !== "" ? false : true}
//           onClick={login}
//         >
//           click me
//         </button>
//       </Grid>
//     </React.Fragment>
//   );
// };

// export default Login;

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
    console.log(id, pwd);

    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

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

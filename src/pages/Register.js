// import React from "react";
// import { Grid, Text, Input, Button } from "../elements";

// import { useDispatch } from "react-redux";
// import { actionCreators as userActions } from "../redux/modules/user";
// import { emailCheck } from "../shared/common";

// const Register = (props) => {
//   const dispatch = useDispatch();

//   const [id, setId] = React.useState("");
//   const [pwd, setPwd] = React.useState("");
//   const [pwd_check, setPwdCheck] = React.useState("");
//   const [user_name, setUserName] = React.useState("");
//   const [btnNow, setBtnNow] = React.useState("true");

//   const signup = () => {
//     if (id === "" || pwd === "" || user_name === "") {
//       window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
//       return;
//     }

//     if (!emailCheck(id)) {
//       window.alert("이메일 형식이 맞지 않습니다!");
//       return;
//     }

//     if (pwd !== pwd_check) {
//       window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
//       return;
//     }

//     dispatch(userActions.signupFB(id, pwd, user_name));
//   };

//   const activateBtn = () => {
//     if (id !== "" || pwd !== "" || user_name !== "") {
//       setBtnNow(false);
//     }
//   };
//   return (
//     <React.Fragment>
//       <Grid padding="16px">
//         <Text size="32px" bold>
//           회원가입
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
//             label="닉네임"
//             placeholder="닉네임을 입력해주세요."
//             _onChange={(e) => {
//               setUserName(e.target.value);
//             }}
//           />
//         </Grid>

//         <Grid padding="16px 0px">
//           <Input
//             label="비밀번호"
//             type="password"
//             placeholder="비밀번호를 입력해주세요."
//             _onChange={(e) => {
//               setPwd(e.target.value);
//             }}
//           />
//         </Grid>

//         <Grid padding="16px 0px">
//           <Input
//             label="비밀번호 확인"
//             type="password"
//             placeholder="비밀번호를 다시 입력해주세요."
//             _onChange={(e) => {
//               setPwdCheck(e.target.value);
//             }}
//           />
//         </Grid>

//         <Button
//           disabled={btnNow}
//           text="회원가입하기"
//           _onClick={signup}
//         ></Button>
//       </Grid>
//     </React.Fragment>
//   );
// };

// Register.defaultProps = {};

// export default Register;

import React from "react";
import { Text, Input, Grid, Button } from "../elements/Index";
import { history } from "../redux/configureStore";
import { emailCheck, nicknamecheck, pwdcheck } from "../shared/Common";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Register = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [nick, setNick] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [confirmpwd, setConfirmpwd] = React.useState("");

  const signup = () => {
    console.log(id, nick, pwd, confirmpwd);

    if (id === "" || nick === "" || pwd === "" || confirmpwd === "") {
      window.alert("이메일, 닉네임, 패스워드를 모두 입력해주세요");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    if (!nicknamecheck(nick)) {
      window.alert("닉네임 형식이 일치하지 않습니다.");
      return;
    }

    if (!pwdcheck(pwd)) {
      window.alert("비밀번호 형식이 일치하지 않습니다.");
      return;
    }

    if (pwd !== confirmpwd) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }

    dispatch(userActions.signUpDB(id, nick, pwd, confirmpwd));
  };

  const IDduplcheck = () => {
    console.log(id);
  };

  return (
    <React.Fragment>
      <Grid width="60vw" margin="auto" padding="16px">
        <Text size="20px" bold center>
          🍟세상에 맛난게 너무 많다! 회원가입 해보자🍟
        </Text>
        <Text>아이디</Text>

        <Grid is_flex="true">
          <Input
            placeholder="사용할 이메일 주소를 입력해 주세요"
            type="string"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <Button
            margin="0px 10px 0px 10px"
            width="10vw"
            text="중복확인"
            _onClick={IDduplcheck}
          />
        </Grid>

        <Text>닉네임</Text>
        <Grid is_flex="true">
          <Input
            placeholder="닉네임은 한글, 영문, 숫자만 가능, 2-10자리 가능"
            type="string"
            _onChange={(e) => {
              setNick(e.target.value);
            }}
          />
          <Button margin="0px 10px 0px 10px" width="10vw" text="중복확인" />
        </Grid>

        <Grid>
          <form>
            <Input
              label="비밀번호"
              placeholder=" 영문 대,소문자와 특수문자(!@#*-_), 숫자를 포함한 8자~ 16자"
              type="password"
              _onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </form>
        </Grid>
        <Grid>
          <form>
            <Input
              label="비밀번호 확인"
              placeholder="비밀번호를 한번더 확인해주세요"
              type="password"
              _onChange={(e) => {
                setConfirmpwd(e.target.value);
              }}
            />
          </form>
        </Grid>
        <Grid margin="30px 0px 16px 0px">
          <Button text="회원가입하기" _onClick={signup} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Register;

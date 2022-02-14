// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";

// import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// import { auth } from "../../shared/firebase";
// import firebase from "firebase/app";

// // actions
// const LOG_OUT = "LOG_OUT";
// const GET_USER = "GET_USER";
// const SET_USER = "SET_USER";

// // action creators
// const logOut = createAction(LOG_OUT, (user) => ({ user }));
// const getUser = createAction(GET_USER, (user) => ({ user }));
// const setUser = createAction(SET_USER, (user) => ({ user }));

// // initialState
// const initialState = {
//   user: null,
//   is_login: false,
// };

// // middleware actions
// const loginFB = (id, pwd) => {
//   return function (dispatch, getState, { history }) {
//     auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
//       auth
//         .signInWithEmailAndPassword(id, pwd)
//         .then((user) => {
//           console.log(user);

//           dispatch(
//             setUser({
//               user_name: user.user.displayName,
//               id: id,
//               user_profile: "",
//               uid: user.user.uid,
//             })
//           );

//           history.push("/");
//         })
//         .catch((error) => {
//           var errorCode = error.code;
//           var errorMessage = error.message;

//           console.log(errorCode, errorMessage);
//         });
//     });
//   };
// };

// const signupFB = (id, pwd, user_name) => {
//   return function (dispatch, getState, { history }) {
//     auth
//       .createUserWithEmailAndPassword(id, pwd)
//       .then((user) => {
//         console.log(user);

//         auth.currentUser
//           .updateProfile({
//             displayName: user_name,
//           })
//           .then(() => {
//             dispatch(
//               setUser({
//                 user_name: user_name,
//                 id: id,
//                 user_profile: "",
//                 uid: user.user.uid,
//               })
//             );
//             history.push("/");
//           })
//           .catch((error) => {
//             console.log(error);
//           });

//         // Signed in
//         // ...
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;

//         console.log(errorCode, errorMessage);
//         // ..
//       });
//   };
// };

// const loginCheckFB = () => {
//   return function (dispatch, getState, { history }) {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         dispatch(
//           setUser({
//             user_name: user.displayName,
//             user_profile: "",
//             id: user.email,
//             uid: user.uid,
//           })
//         );
//       } else {
//         dispatch(logOut());
//       }
//     });
//   };
// };

// const logoutFB = () => {
//   return function (dispatch, getState, { history }) {
//     auth.signOut().then(() => {
//       dispatch(logOut());
//       history.replace("/login");
//     });
//   };
// };

// // reducer
// export default handleActions(
//   {
//     [SET_USER]: (state, action) =>
//       produce(state, (draft) => {
//         setCookie("is_login", "success");
//         draft.user = action.payload.user;
//         draft.is_login = true;
//       }),
//     [LOG_OUT]: (state, action) =>
//       produce(state, (draft) => {
//         deleteCookie("is_login");
//         draft.user = null;
//         draft.is_login = false;
//       }),
//     [GET_USER]: (state, action) => produce(state, (draft) => {}),
//   },
//   initialState
// );

// // action creator export
// const actionCreators = {
//   logOut,
//   getUser,
//   signupFB,
//   loginFB,
//   loginCheckFB,
//   logoutFB,
// };

// export { actionCreators };

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";
import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// // 어떤 미들웨어
// const addPostFB = (title, location, comment,preview) => {
//     return function (getState, dispatch, {history}) {

//         // 만들어둔 instance에 보낼 요청 타입과 주소로 요청합니다.
//         instance.post('/api/addpost/save', // 미리 약속한 주소
//             { title: title, location: location, comment: comment, image_url: preview }, // 서버가 필요로 하는 데이터를 넘겨주고,
//         ).then(function (response) {
//             console.log(response);
//             // alert(response['success']);
//            dispatch((addPost(title, location, comment, preview)))
//         })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }
// }

const loginDB = (id, password) => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/api/login", { user_id: id, user_pwd: password })
      .then((res) => {
        console.log(res);
        alert(res["success"]);
        dispatch(
          setUser({
            email: res.data.email,
            nickname: res.data.nickname,
          })
        );
        const accessToken = res.data.token;
        //쿠키에 토큰 저장
        setCookie("is_login", `${accessToken}`);
        document.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//회원가입 API
const signUpDB = (id, nickname, password, confirmpwd) => {
  return function (dispatch, getState, { history }) {
    instance
      .post("api/register/save", {
        user_id: id,
        user_nick: nickname,
        user_pwd: password,
        user_confirmpwd: confirmpwd,
      })
      .then((res) => {
        window.alert(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//아이디 중복 제크 API
const IDduplcheckDB = (id) => {
  return function (dispatch, getState, { history }) {
    instance
      .get("/api/register/check", {
        user_id: id,
      })
      .then((res) => {
        window.alert(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//로그인 유지 API
//클라이언트 쿠키 저장소에 토큰이 존재하는 경우
//서버에서 토큰을 받아 유효성 검증 후 유효하다면 유저 정보를 주어 자동 로그인
//   const loginCheckDB = () => {
//     return function (dispatch, getState, { history }) {
//       const token = getCookie("is_login");
//       console.log(token);
//       instance.post({
//         url: "http://13.125.249.241/user/check",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((res) => {
//           console.log(res.data);
//           dispatch(
//             setUser({
//               email: res.data.email,
//               nickname: res.data.nickname,
//             })
//           );
//         })
//         .catch((error) => {
//           console.log(error.code, error.message);
//         });
//     };
//   };

const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logOut());
    history.replace("/");
    //replace는 push와 달리 뒤로가기해도 원래 페이지가 나오지 않음.
  };
};
//reducer
//produce (immer) 이용하여 불변성 유지
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  logOut,
  getUser,
  loginDB,
  signUpDB,
  // loginCheckDB,
  logoutDB,
  IDduplcheckDB,
};

export { actionCreators };

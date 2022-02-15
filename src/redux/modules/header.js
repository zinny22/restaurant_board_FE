import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { useSelector } from "react-redux";

// actions

const SET_NICK = "SET_NICK";

// action creators

const setNick = createAction(SET_NICK, (user_nick) => ({ user_nick }));

// initial state
const initialState = {
  nick_name: "",

};

// reducer
export default handleActions(
  {
 
    [SET_NICK]: (state, action) =>
      produce(state, (draft) => {
        
        console.log(action.payload.nick_name)
        // draft.nick_name = action.payload.preview;
      }),
  },
  initialState
);

const actionCreators = {
    setNick,
};

export { actionCreators };
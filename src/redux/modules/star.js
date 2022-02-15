import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";
import { useState } from "react";

// actions
const STAR = "STAR";


// action creators
const startRating = createAction(STAR, (rating) => ({ rating }));


// initialState
const initialState = {
    star: 0,
};

const startRatingDB = (rating) => {
  return function (dispatch, getState, { history }) {
    dispatch(startRating(rating));
  };
};

export default handleActions(
  {
    [STAR]: (state,action) => produce(state, (draft) =>{
        console.log(action.payload.rating)
        draft.star = action.payload.rating
    })
  },
  initialState
);

//action creator export
const actionCreators = {
    startRating,
    startRatingDB,
};

export { actionCreators };

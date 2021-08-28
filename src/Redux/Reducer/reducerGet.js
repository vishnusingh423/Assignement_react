import { ActionTypes } from "../contants/action-types";

const intialState = {
  getNew: [],
};

export const reducerGet = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_NEWS:
      return { ...state, getNew: payload };
    default:
      return state;
  }
};

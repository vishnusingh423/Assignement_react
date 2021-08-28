import { ActionTypes } from "../contants/action-types";
import storeApi from "../storeApi";

import axios from "axios";
export const getNews = () => async (dispatch) => {
  const response = await storeApi.get(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=162d89a23e9746dfa090bd26033d4b71"
  );
  dispatch({
    type: ActionTypes.SET_NEWS,
    payload: response.data.articles,
  });
};

import React, { useEffect, useState } from "react";
import Carousell from "../Components/Carousell";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../Redux/Action/actionCreater";
import { message, Button, Space } from "antd";

const Welcome = () => {
  const dispatch = useDispatch();
  const dataNews1 = useSelector((state) => state.reducerGet.getNew);
  console.log(dataNews1);
  //   dataNews1.forEach((e) => setImages(e.urlToImage));
  // const {} = getNewsdata;
  console.log(dataNews1);
  useEffect(() => {
    dispatch(getNews());
  }, []);
  // if (dataNews1.length == 0) {
  //   return <div>{message.error("Check Your Internet Connection")}</div>;
  // }

  return (
    <div>
      <h1> Welcome Vishnu...</h1>

      <Carousell valuPass={dataNews1} />
    </div>
  );
};
export default Welcome;

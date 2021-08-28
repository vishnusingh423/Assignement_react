import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
const contentStyle = {
  height: "260px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Carousell = (props) => {
  // const { author, content, description, urlToImage } = props.datas;
  const { valuPass } = props;

  return (
    <div>
      <Carousel autoplay>
        {valuPass.map((w, i) => (
          <div key={i}>
            <img src={w.urlToImage} style={{ width: "100%", height: 400 }} />
            <h1>{w.title}</h1>
            <p>{w.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousell;

import { useState } from "react";
import React from "react";

const FormReact = () => {
  const [count, setCount] = useState({ fname: "", lname: 12, check1: false });
  const { fname, lname, check1 } = count;
  const [record, setRecord] = useState([]);

  const fun = (e) => {
    const { name, value } = e.target;
    setCount({ ...count, [name]: value });
    console.log(value);
  };
  const onHandle = (e) => {
    e.preventDefault();
    console.log(count);

    const r = { ...count, id: new Date().getTime().toString() };
    setRecord([...record, r]);
    console.log(record);
  };
  // const onChange = (e) => {
  //   console.log("checked = ", e);
  // };
  return (
    <div style={{ marginTop: 21 }}>
      <form action="" onSubmit={onHandle}>
        <input type="text" name="fname" onChange={fun} />
        <input type="number" name="lname" onChange={fun} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormReact;

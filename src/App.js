import React from "react";
import MenuRouting from "./Routers/MenuRouting";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Login from "./Pages/Login/Login";
const App = () => {
  return (
    <Provider store={store}>
      <MenuRouting />
    </Provider>
  );
};
export default App;

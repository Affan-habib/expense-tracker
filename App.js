import * as React from "react";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import { store } from "./reducers/store";

  export default function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

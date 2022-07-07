import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { reducers } from "./reducers";
import App from "./App";

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

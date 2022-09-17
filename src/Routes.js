import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Orders_List from "./Page/Orders_List";
import Topbar from "./Component/Topbar";
import Service from "./Page/Service";
import ServiceDetail from "./Page/ServiceDetail";
//import store from "../src/Store/Store";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../src/Store/user";
import GetToken from "./Component/GetToken";

const store = configureStore({
  reducer: {
    user: useReducer,
  },
});

const Routes_ = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="*" element={<Navigate to="/Service" replace />} /> */}
            <Route path="/" element={<GetToken />}></Route>
            <Route path="/Service" element={<Service />}></Route>
            <Route
              path="/ServiceDetail/:id"
              element={<ServiceDetail />}
            ></Route>
            <Route path="/ServiceOrder" element={<Orders_List />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default Routes_;

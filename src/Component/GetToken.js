import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../Store/user";
const base = require("../Config/ConfigUrl");
export const GetToken = () => {
  const user = useSelector((state) => state.user.value);
  let history = useNavigate();
  const dispatch = useDispatch();
  const [Token, setToken] = useState();

  const Login = {
    username: "mozz",
    password: "mozz1234",
  };
  useEffect(() => {
    axios
      .post(base.URL + "/auth/signin", Login)
      .then((res) => {
        // console.log(res.data);
        signin(res.data.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const signin = (Token) => {
    localStorage.setItem("Token", JSON.stringify(Token));
    dispatch(
      login({
        username: Login.username,
        password: Login.password,
        Token: Token,
      })
    );

    history("/Service");
  };
  return (
    // <>
    //   <h2>user: {user.username}</h2>
    //   <h2>pass: {user.password}</h2>
    //   {/* // <h2>Token: {user.Token}</h2> */}
    //   {console.log(user.Token)}
    //   <button
    //     onClick={() => {
    //       dispatch(
    //         login({
    //           username: Login.username,
    //           password: Login.password,
    //           Token: Token,
    //         })
    //       );
    //     }}
    //   >
    //     login
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch(logout());
    //     }}
    //   >
    //     logout
    //   </button>
    // </>
    <div></div>
  );
};

export default GetToken;

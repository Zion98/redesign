import React, { useState } from "react";
// import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import StyleLogin from "./styles";
const Renew = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Header />

      <StyleLogin>
        <h1 className="login-title">Enter your new password</h1>
        <p className="renewPass" style={{ width: "35%", textAlign: "center", margin: "1rem 0" }}>
          Enter your new password to gain access to your account area.
        </p>

        <form>
          {" "}
          <div className="wrapper double-wrapper-left">
            <div className="label">
              <p>Password </p>
            </div>
            <input
              name="email"
              type={`${showPassword ? "type" : "password"}`}
              style={{ width: "90%" }}
              placeholder="Type your password"
              className="input-email"
            />
            <i
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"} `}
            ></i>
          </div>{" "}
          <div className="wrapper double-wrapper-left">
            <div className="label">
              <p>Password </p>
            </div>
            <input
              name="email"
              type={`${showPassword ? "type" : "password"}`}
              style={{ width: "90%" }}
              placeholder="Confirm your password"
              className="input-email"
            />
            <i
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"} `}
            ></i>
          </div>
          <button className="btn login-btn">Reset password</button>
        </form>
        <Footer />
      </StyleLogin>

     
    </>
  );
};

export default Renew;

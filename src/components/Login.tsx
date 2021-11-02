import React, { useState } from "react";
import StyleLogin from "./styles";
import Header from "./Header";
import Footer from "./Footer";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Header />
      <StyleLogin>
        <h1 className="login-title">Log in to your account</h1>
        <form>
          <div className="wrapper double-wrapper-left">
            <div className="label">
              <p>Email address</p>
            </div>
            <input
              name="email"
              type="email"
              placeholder="Type your email"
              style={{ width: "100%" }}
              className="input-email"
            />
          </div>

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
          </div>

          <label className="container">
            <input type="checkbox" />
            <span className="checkmark"></span>
             Remember me
          </label>

          <a href="/dashboard" className="btn login-btn">Log me in</a>
          <p className="forgot">
            Forgot your password?
            <a href="/renew" className="forgot-btn inner-link">
               Reset it here
            </a>{" "}
          </p>
        </form>

        <Footer />
      </StyleLogin>
    </>
  );
};

export default Login;

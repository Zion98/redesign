import React from "react";
// import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import StyleLogin from "./styles";
const Forgot = () => {
  return (
    <>
      <Header />

      <StyleLogin>
        <h1 className="login-title">Forgot your password?</h1>
        <p style={{ width: "35%", textAlign: "center", margin: "1rem 0" }}>
          Enter your email address below and we will send you a link where you
          can enter a new password.
        </p>
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

          <button style={{ margin: "2rem 0" }} className="btn login-btn">
            Reset password
          </button>
        </form>
        <Footer />
      </StyleLogin>
    </>
  );
};

// const Style = styled.div``;

export default Forgot;

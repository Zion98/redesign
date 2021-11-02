import React from "react";
import StyleLogin from "./styles";
import Header from "./Header";
import Footer from "./Footer";
const Check = () => {
  return (
    <>
      <Header />
      <StyleLogin>
        <h1 className="login-title">Check your email</h1>
        <p style={{ width: "35%", textAlign: "center", margin: "1rem 0" }}>
          We have sent a secure password reset link to your email address.
          Kindly click on the link to reset your password.Cheers!
        </p>
        <div style={{ width: "30%" }}>
          <button
            style={{ width: "100%", margin: "2rem 0" }}
            className="btn login-btn"
          >
            Back to home
          </button>
        </div>
      </StyleLogin>
    </>
  );
};

export default Check;

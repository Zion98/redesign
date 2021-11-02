import React from "react";
import decagonlight from "../assets/decagonlight.svg";
import styled from "styled-components";
const Congrats = () => {
  return (
    <>
      <CongratsStyle>
        <img src={decagonlight} className="decagonlight" alt="decagon-logo" />
        <h1 className="congrats done">
          Congratulations! <br />
          You have successfully applied for the Training
        </h1>

        <div className="verify done">
          A verification link has been sent to your email. Please verify your
          email address to login to your profile.
        </div>
        <div className="check done">
          Kindly check your email inbox or spam regularly as we would be sending
          you feedback on the status of your application as well as information
          on next steps.
        </div>
        <a href="/" className="gohome done">
          Go back Home
        </a>
      </CongratsStyle>
    </>
  );
};

const CongratsStyle = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  background: #2d2f48;

  .done {
    text-align: center;
    color: #ffffff;
  }

  .decagonlight {
    padding: 1rem;
  }
  .congrats {
    font-weight: 800;
    font-size: 3rem;
    line-height: 69px;
    max-width: 50%;
    padding-top: 4rem;
    padding-bottom: 2rem;
  }

  .verify,
  .check {
    font-size: 1rem;
    line-height: 40px;
    max-width: 45%;
    padding: 1rem 0;
  }

  .gohome {
    margin: 1rem 0;
  }

  @media only screen and (max-width: 768px) {
    height: 100%;
    .congrats {
      font-weight: 800;
      font-size: 2rem;
      max-width: 80%;
    }

    .verify,
    .check {
      font-size: 1rem;
      max-width: 80%;
    }
  }
`;

export default Congrats;

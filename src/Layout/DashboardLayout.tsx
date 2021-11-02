import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import StyleLogin from "../components/styles";
import Sidebar from "../components/Sidebar";
import decagon from "../assets/decagon.svg";
import Aside from "../components/Aside";
const Dashboard = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  let location = useLocation();
  const link = location.pathname.split("/")[2];
  console.log(link);
  return (
    <>
      <DashboardStyle>
        <Sidebar />
        <div className="header">
          <img
            src={decagon}
            className="decagon-logo sidebar-img mobile-img"
            alt="decagon-logo"
          />
          <h2 className="header-title">Get Started</h2>
          <p>Help</p>
        </div>

        <StyleLogin>{props.children}</StyleLogin>

        {link === "personal" ? (
          <Aside
            text1={"Get started"}
            text2={
              "We would like to know about you this would us understand you better"
            }
          />
        ) : (
          <Aside
            text1={"Education and others"}
            text2={"We would like to know about your educational background."}
          />
        )}
      </DashboardStyle>
    </>
  );
};

const DashboardStyle = styled.div`
  display: grid;
  grid-template-areas:
    "nav header header"
    "nav content aside";
  grid-template-columns: 1fr 2fr 2fr;

  .sidebar {
    grid-area: nav;
    background: #fafafa;
  }

  .header {
    grid-area: header;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ececec;
  }

  .header-title {
    font-size: 1.2rem;
    display: block;
  }

  .content {
    margin: 4rem 0;
    /* min-height: 100vh !important; */
    flex-direction: column !important;
    justify-content: flex-start;
    grid-area: content;
    width: 90%;
  }

  .tell-us {
    text-align: left;
    font-size: 1.5rem;
  }

  .better {
    color: #666666;
    margin: 1rem 0;
  }

  .double-wrapper-right,
  .double-wrapper-left {
    flex-basis: 100%;
  }

  .double-wrapper-right {
    margin-left: 1rem;
  }
  .content .personal-info-form {
    width: 100%;
  }

  .aside {
    grid-area: aside;
    border-left: 1px solid #e5e5e5;
  }

  input,
  select {
    width: 100%;
    font-size: 15px;
    color: #666666;
    background: none;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    option {
      background: #2d2f48;
    }
  }
  input:focus,
  select:focus {
    border: none;
    outline: none;
  }
  .flex2 {
    margin: 2rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .aside-content {
    padding: 2rem;
    background: rgba(177, 209, 69, 0.1);
  }

  .getstart {
    margin-left: 1rem;
  }

  .getcontent {
    width: 60%;
    font-size: 0.9rem;
  }

  .personal-btn {
    margin-top: 1rem;
    border: none;
    float: right;
    width: 40%;
  }

  .lastbtn {
    justify-content: flex-end !important;
    align-items: flex-end;
  }

  .lastbtn .btn {
    display: block;
    border: none;
  }

  .goback {
    font-size: 0.8rem !important;
    background: #fff;
    color: #b1d145;
    border: 1px solid #b1d145 !important;
    margin-right: 1rem;
  }

  .mobile-img {
    display: none !important;
  }

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-areas:
      "header header"
      "nav nav"
      "content content";
    grid-template-columns: 2fr;
    grid-template-rows: 0.1fr 0.1fr 2fr;

    .aside {
      display: none;
    }

    .header {
      border-bottom: 2px solid #ececec;
    }

    .mobile-img {
      display: block !important;
    }

    .header-title {
      display: none;
    }

    .content {
      margin: 2rem 0;
    }

    .flex {
      display: block;
    }

    .double-wrapper-right {
      margin-left: 0rem;
    }

    .lastbtn {
      display: flex;
    }
  }
`;

export default Dashboard;

import React from "react";
// import {Link} from "react-router-dom";
import decagon from "../assets/decagon.svg";
import styled from "styled-components";
import arrowlight from "../assets/arrowlight.svg";
import arrowchecked from "../assets/arrowchecked.svg";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <SidebarStyle>
          <a href="/">
          <img
            src={decagon}
            className="decagon-logo sidebar-img"
            alt="decagon-logo"
          />
          </a>
          <div className="side-tab flex" id="mobile-flex">
            <p className="start-tab">START APPLICATION</p>
            <a href="/signup/personal" className="first-tab tab">
              <img src={arrowchecked} className="arrow" alt="decagon-logo" />{" "}
              <p className="personal-tab">Personal information</p>
            </a>
            <a href="/signup/education" className="second-tab tab">
              <img src={arrowlight} className="arrow" alt="decagon-logo" />
              <p className="education-tab">Education & others</p>
            </a>
          </div>
        </SidebarStyle>
      </div>
    </>
  );
};

const SidebarStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  img.decagon-logo {
    margin: 1.2rem 2rem;
    width: 50%;
  }
  .side-tab {
    margin: 5rem 2rem;
  }
  .start-tab {
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  .first-tab,
  .second-tab {
    display: flex;
  }

  .tab {
    padding: 1rem 0;
    color: #000;
    text-decoration: none;
  }
  .personal-tab,
  .education-tab {
    padding-left: 1rem;
  }

  @media only screen and (max-width: 768px) {
    .sidebar-img {
      display: none;
    }

    #mobile-flex {
      display: flex;
      flex-direction: row !important;
    }

    .side-tab {
      margin: 1rem 0;
    }

    .start-tab {
      display: none;
    }
    .first-tab,
    .second-tab {
      margin-left: 0.5rem;
    }
  }
`;

export default Sidebar;

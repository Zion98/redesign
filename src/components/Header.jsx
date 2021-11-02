import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import decagon from "../assets/decagon.svg";
const Header = () => {
  return (
    <Style>
      <header class="main-header flex">
        <a href="/"> 
          <img src={decagon} alt="decagon-logo" />
        </a>

        <div class="">
          <Link to="/signup" class="btn">
            Apply become a decadev
          </Link>
        </div>
      </header>
    </Style>
  );
};

const Style = styled.div`
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main-header {
    padding: 1rem 5rem;
    border-bottom: 1px solid #ececec;
  }

  .btn {
    color: #fff;
    text-decoration: none;
    background: linear-gradient(135deg, #b8d344 0%, #34a853 100%);
    padding: 1rem 3rem;
  }

  @media only screen and (max-width: 768px) {
    .main-header {
      padding: 1rem 2rem;
    }
    img {
      width: 60%;
    }
    .btn {
      font-size: 0.7rem;
      padding: 1rem;
    }
  }
`;

export default Header;

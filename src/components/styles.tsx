import styled from "styled-components";

const StyleLogin = styled.div`
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .login-title {
    opacity: 0.8;
    font-size: 2rem;
    letter-spacing: 2px;
  }

  form {
    width: 22%;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrapper {
    flex-basis: 100%;
    background: rgba(203, 203, 203, 0.2);
    border: 1px solid #ededed;
    box-sizing: border-box;
    padding: 0.8rem;
    margin: 0.5rem 0;
  }

  .label {
    font-weight: bold;
    font-size: 1rem;
    color: #2d2f48;
    opacity: 0.7;
  }

  .input-email {
    border: none;
    background: transparent;

    :focus {
      outline: none;
    }
    ::placeholder {
    }
  }

  .remember {
    font-size: 12px;
  }

  .btn {
    color: #fff;
    text-align: center;
    text-decoration: none;
    background: linear-gradient(135deg, #b8d344 0%, #34a853 100%);
    padding: 1rem 3rem;
  }

  .login-btn {
    display: block;
    border: none;
    width: 100%;
    margin: 0 auto;
  }

  .forgot {
    padding: 0.5rem 0;
    font-weight: normal;
    font-size: 12px;
    color: #2d2f48;
    text-align: center;
  }

  //checkbox
  .container {
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 0.7rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border: 0.5px solid #cecece;
    background-color: #fff;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #fff;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid rgba(0, 0, 0, 0.5);
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .inner-link {
    color: #2d2f48;
    text-decoration: none;
    font-weight: bold;
  }

  .login-bottom {
    font-size: 12px;
    position: absolute;
    bottom: 2rem;
  }

  @media only screen and (max-width: 768px) {
    .login-title {
      width: 80%;
      margin: 0 auto;
      text-align: center;
    }

    .renewPass {
      width: 70% !important;
    }
    form {
      width: 90%;
    }
  }
`;

export default StyleLogin;

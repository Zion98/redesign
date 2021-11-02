import React from "react";
// import styled from "styled-components";
// import StyleLogin from "./styles";
const Personal = () => {
  // const [showPassword, setShowPassword] = useState(false);

  const gender = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];
  return (
    <>
      <div className="content ">
        <h1 className="tell-us">Tell us about yourself</h1>
        <p className="better">
          Get better matches by adding your personal details.
        </p>

        <form className="personal-info-form">
          <div className="flex">
            <div className="wrapper double-wrapper-left">
              <div className="label">
                <p>What is your First Name?</p>
              </div>
              <input
                name="firstname"
                type="text"
                placeholder="Type your first name"
                style={{ width: "100%" }}
                className="input-email"
              />
            </div>

            <div className="wrapper double-wrapper-right">
              <div className="label">
                <p>What is your last name?</p>
              </div>
              <input
                name="lastname"
                type="text"
                placeholder="Type your last name"
                style={{ width: "100%" }}
                className="input-email"
              />
            </div>
          </div>
          <div className="wrapper">
            <div className="label">
              <p>What is your email address?</p>
            </div>
            <input
              name="email"
              type="email"
              placeholder="Type your email"
              style={{ width: "100%" }}
              className="input-email"
            />
          </div>
          <div className="wrapper">
            <div className="label">
              <p>Confirm your email address?</p>
            </div>
            <input
              name="email"
              type="email"
              placeholder="Confirm your email"
              style={{ width: "100%" }}
              className="input-email"
            />
          </div>

          {/* //select */}
          <div className="flex">
            <div className="wrapper double-wrapper-left">
              <div className="label">
                <p>What is your gender?</p>
              </div>

              <select
                name="gender"
                style={{ width: "90%" }}
                // value={values.gender}
                // onChange={handleChange}
                // onBlur={handleBlur}
                // className={errors.gender && touched.gender ? 'error' : ''}
              >
                <option>Select a gender</option>
                {gender.map((gender) => (
                  <option value={gender.value} key={gender.value}>
                    {gender.label}
                  </option>
                ))}
              </select>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="wrapper double-wrapper-right">
              <div className="label">
                <p>What is your date of birth? </p>
              </div>
              <input
                name="dob"
                type="date"
                placeholder="Select a date"
                // value={values.dob}
                // onChange={handleChange}
                // onBlur={handleBlur}
                // className={errors.dob && touched.dob ? 'error' : ''}
              />
            </div>
          </div>

          <div className="wrapper">
            <div className="label">
              <p>What is your phone number?</p>
            </div>
            <input
              name="phone"
              type="number"
              placeholder="Type your phone number"
              style={{ width: "100%" }}
              className="input-email"
            />
          </div>

          <div className="wrapper">
            <div className="label">
              <p>What is your state of origin?</p>
            </div>
            <select
              name="gender"
              style={{ width: "90%" }}
              // value={values.gender}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // className={errors.gender && touched.gender ? 'error' : ''}
            >
              <option>Select option</option>
              {gender.map((gender) => (
                <option value={gender.value} key={gender.value}>
                  {gender.label}
                </option>
              ))}
            </select>{" "}
            <i className="fas fa-chevron-down"></i>
          </div>

          <div className="wrapper">
            <div className="label">
              <p>What is your current location?</p>
            </div>
            <select
              name="gender"
              style={{ width: "90%" }}
              // value={values.gender}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // className={errors.gender && touched.gender ? 'error' : ''}
            >
              <option>Select option</option>
              {gender.map((gender) => (
                <option value={gender.value} key={gender.value}>
                  {gender.label}
                </option>
              ))}
            </select>
            <i className="fas fa-chevron-down"></i>
          </div>

          <button type="button" onClick={()=>window.location.href="/signup/education"} className="btn personal-btn">Next</button>
        </form>
      </div>
    </>
  );
};

export default Personal;

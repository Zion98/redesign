import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

const Education = () => {
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
        <h1 className="tell-us">Education & others</h1>
        <p className="better">We would like some more information.</p>

        <form className="personal-info-form">
          <div className="wrapper">
            <div className="label">
              <p>What is your highest qualification?</p>
            </div>
            <select
              name="highestQualification"
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

          <div className="wrapper">
            <div className="label">
              <p>Where did you graduate from?</p>
            </div>
            <select
              name="highestQualification"
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
          <div className="flex">
            <div className="wrapper double-wrapper-left">
              <div className="label">
                <p>Course of Study</p>
              </div>
              <select
                name="courseOfStudy"
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

            <div className="wrapper double-wrapper-right">
              <div className="label">
                <p>Grade Achieved</p>
              </div>
              <select
                name="grade"
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
          </div>

          <div className="flex">
            <div className="wrapper double-wrapper-left">
              <div className="label">
                <p>Programming Experience</p>
              </div>
              <select
                name="courseOfStudy"
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

            <div className="wrapper double-wrapper-right">
              <div className="label">
                <p>NYSC Status</p>
              </div>
              <select
                name="nysc"
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
          </div>
          <div className="wrapper">
            <div className="label">
              <p>How did you know about us?</p>
            </div>
            <select
              name="nysc"
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

          <div className="wrapper">
            <div className="label">
              <p>Payment Option</p>
            </div>
            <select
              name="nysc"
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
          <div className="flex lastbtn">
            <button
              type="button"
              onClick={() => (window.location.href = "/signup/personal")}
              className="btn goback"
            >
              Go Back
            </button>
            <button
            type="button"
              onClick={() => (window.location.href = "/congrats")}
              className="btn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Education;

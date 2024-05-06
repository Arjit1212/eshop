import React, { useState } from "react";
import "../Pages/Css/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  return (
    <>
      <div className="container login">
        <div className="row">
          <div className="col-12">
            <h2>{state}</h2>
            <div className="login-inputs">
              {state === "Sign Up" ? (
                <input type="text" placeholder="Enter your Name" />
              ) : (
                <></>
              )}
              <input type="email" placeholder="Enter your Email" />
              <input type="password" placeholder="Enter your Password" />
              <button>{state}</button>
            </div>
            {state === "Sign Up" ? (
              <p>
                Already have an account ?{" "}
                <span
                  onClick={() => {
                    setState("Login");
                  }}
                >
                  {" "}
                  Login Here
                </span>
              </p>
            ) : (
              <p>
                Create an account !{" "}
                <span
                  onClick={() => {
                    setState("Sign Up");
                  }}
                >
                  {" "}
                  Click Here
                </span>
              </p>
            )}

            <div className="login-agree">
              {state === "Sign Up" ? (
                <p>
                  <input type="checkbox" /> By continuing,i agree to the terms
                  of use & privacy policy.
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;

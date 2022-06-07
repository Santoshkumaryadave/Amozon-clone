import React, { useState } from "react";
import "./sign.css";
import { NavLink } from "react-router-dom";

const Signin = () => {
  const [logdata, setLogdata] = useState({ email: "", password: "" });
  
  console.log(logdata)
  const handleonChange = (e) => {
    const {name, value}= e.target;

    setLogdata(()=>{
      return {
        ...logdata,
        [name]:value
      }
    })
  
  };
  return (
    <div>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="" />
          </div>
          <div className="sign_form">
            <form action="">
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleonChange}
                  value={logdata.email}
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  onChange={handleonChange}
                  value={logdata.password}
                  placeholder="Atleast 6 char"
                />
              </div>
              <button className="signin_btn">Continue</button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New To Amazon</p>
            <NavLink to="/signup">
              {" "}
              <button>Create Your amazon account</button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;

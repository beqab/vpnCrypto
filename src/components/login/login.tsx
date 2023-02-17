import React from "react";
import { Link } from "react-router-dom";
import { Input, FormGroup } from "../common/form";

export const Login = () => {
  return (
    <div className="login">
      <div className="login_">
        <h2>Login to your account</h2>
        <FormGroup>
          <Input placeholder="Email address" />
        </FormGroup>
        <FormGroup>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <div className="d-flex justify-content-between mt-4">
          <div>
            <label>Don’t have an account?</label>
            <div>
              <Link to="/register">Create account</Link>
            </div>
          </div>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

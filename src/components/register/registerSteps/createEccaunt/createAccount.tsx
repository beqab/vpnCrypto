import React from "react";
import { Link } from "react-router-dom";
import { Button, FormGroup, Input } from "../../../common/form";

export const CrateAccount = () => {
  return (
    <div>
      <h3 className="text-center mt-5 mb-5">
        Get your Free VPN account, Join VPNcrypto
      </h3>
      <form>
        <FormGroup>
          <Input placeholder="Email Address" />
        </FormGroup>
        <div className="my-3">
          <FormGroup>
            <Input placeholder="password" type="password" />
          </FormGroup>
        </div>
        <FormGroup>
          <Input placeholder="Confirm password" type="password" />
        </FormGroup>
        <div className="d-flex align-items-center justify-content-between mt-4">
          <div>
            <span>Got an account?</span>
            <Link to={"/"}>Log IN</Link>
          </div>
          <Button className="btn btn-default px-5">Sign in</Button>
        </div>
      </form>
    </div>
  );
};

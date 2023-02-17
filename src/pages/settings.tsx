import React from "react";
import { Button, FormGroup, Input } from "../components/common/form";

export const Settings = () => {
  return (
    <div className="vpnForm">
      <form>
        <h2>Account info</h2>
        <FormGroup Label="Email">
          <Input className="mb-4" placeholder="Emailexample@gmail.com" />
        </FormGroup>
        <FormGroup Label="Password">
          <Input placeholder="Password" />
        </FormGroup>
        <Button className="btn btn-primary w-100 justify-content-center  mt-4">
          Change password
        </Button>
        <div className="or pb-4"></div>
        <Button className="btn btn-light w-100 justify-content-center ">
          Deactivate account
        </Button>
      </form>
    </div>
  );
};

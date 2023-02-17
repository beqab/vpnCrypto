import React from "react";
import { Button, FormGroup, Input } from "../components/common/form";

export const VpnDetails = () => {
  return (
    <div className="vpnForm">
      <form>
        <h2>VPN account info</h2>
        <FormGroup Label={"Username"}>
          <Input className="mb-4" placeholder="Usernameexample123" />
        </FormGroup>
        <FormGroup className="" Label={"Password"}>
          <Input placeholder="Password" />
        </FormGroup>
        <div className="mt-4">
          <Button className="btn btn-light w-100 justify-content-center">
            Change password
          </Button>
        </div>
      </form>
    </div>
  );
};

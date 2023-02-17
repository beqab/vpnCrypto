import React from "react";
import { Button, FormGroup, Input } from "../../common/form";

export const CreateVpnUsername = () => {
  return (
    <div className="registerStep">
      <h2>
        Create your VPN software
        <br />
        username & password:
      </h2>
      <form>
        <label>Pick own username/password</label>
        <FormGroup>
          <Input placeholder="Username" />
        </FormGroup>
        <div className="my-3">
          <FormGroup>
            <Input placeholder="Password" />
          </FormGroup>
        </div>
        <Button className="btn btn-default w-100 justify-content-center">
          Confirm
        </Button>
      </form>
      <div className="or">
        <div>OR</div>
      </div>
      <Button className="btn btn-light  w-100  justify-content-center">
        Automatically generate
      </Button>
    </div>
  );
};

import React from "react";
import { Button } from "../../common/form";

export const SaveAccountStep = () => {
  return (
    <div className="registerStep mw-100">
      <h2>Download software for your device:</h2>
      <p className="text-center mt-5">Your vpn username and password are:</p>
      <div className="passwordBox">
        <div>
          <b>Username:</b> <span>usernameexample444</span>
        </div>
        <div>
          <b className="mb-0">Password:</b> <span>passwordQwda123</span>
        </div>
      </div>
      <p className="text-center text mt-4">
        Please save your details, you need to have these credentials <br />
        to enter in the software to be able to connect to vpn.
      </p>
      <div className="line"></div>
      <div className="downloadGroup">
        <img src="./App Store Black.svg" />
        <img src="./Google Play Black.svg" />
        <img src="./Microsoft Black.svg" />
        <img src="./Mac App Stor.svg" />
        <img src="./Group 6.svg" />
      </div>
      <div className="miniCOntainer">
        <div className="or">
          <div>OR</div>
        </div>
        <p className="text-center">
          Generate config files openvpn/wireguard <br />
          for routers or manual installations
        </p>
        <Button className="btn btn-light  w-100 justify-content-center mb-4">
          Generate config file
        </Button>
        <Button className="btn w-100 justify-content-center">Finish</Button>
      </div>
    </div>
  );
};

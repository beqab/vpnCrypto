import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetUser } from "../../../redux/actions";
import { Button } from "../../common/form";
import { RegisterContext } from "../registerContext/registerContext";

export const SaveAccountStep = () => {
  const dispatch = useDispatch();
  const { user } = useContext(RegisterContext);
  const navigate = useNavigate();
  const loginUser = () => {
    dispatch(SetUser({ user, token: user.token }));
    navigate("/dashboard");
  };
  return (
    <div className="registerStep mw-100">
      <h2>Download software for your device:</h2>
      <p className="text-center mt-5">Your vpn username and password are:</p>
      <div className="passwordBox">
        <div>
          <b>Username:</b> <span>{user?.meta?.vpn?.data?.username}</span>
        </div>
        <div>
          <b className="mb-0">Password:</b>{" "}
          <span>{user?.meta?.vpn?.data?.password}</span>
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
        <Button
          onClick={loginUser}
          className="btn w-100 justify-content-center"
        >
          Finish
        </Button>
      </div>
    </div>
  );
};

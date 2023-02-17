import React from "react";
import { Button } from "../components/common/form";
import { Select } from "../components/common/form/select";

export const VpnConfig = () => {
  return (
    <div className="VpnConfig">
      <div>
        <h2>
          Generate config files openvpn/wireguard <br />
          for routers or manual installations
        </h2>
        <p className="mt-5">
          Create your OpenVPN config file here with your <br />
          desired server settings
        </p>
        <div className="d-flex">
          <div className="mr-4">
            <Select value="Amsterdam" />
          </div>
          <div className="mx-4">
            <Select value="UDP - 53" />
          </div>
          <Button className="btn">Generate</Button>
        </div>
        <p className="mt-5">
          Create your Wireguard config here with your <br />
          desired server location and username settings
        </p>
        <div className="d-flex ">
          <div className="mr-4">
            <Select value="Amsterdam" />
          </div>
          <div className="mx-4">
            <Select value="UDP - 53" />
          </div>
          <Button className="btn">Generate</Button>
        </div>
      </div>
    </div>
  );
};

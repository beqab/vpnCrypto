import React from "react";
import { Select } from "../components/common/form/select";

export const VpnConfig = () => {
  return (
    <div className="VpnConfig">
      <div>
        <h2>
          Generate config files openvpn/wireguard for routers or manual
          installations
        </h2>
        <p>
          Create your OpenVPN config file here with your desired server settings
        </p>
        <div>
          <Select />
        </div>
      </div>
    </div>
  );
};

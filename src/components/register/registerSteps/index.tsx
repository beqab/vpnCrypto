import React, { useContext } from "react";
import { ConfirmStep } from "../confirmStep";
import { CreateVpnUsername } from "../createVpnUsername";
import { RegisterContext } from "../registerContext/registerContext";
import { SaveAccountStep } from "../saveAccountStep/saveAccountStep";
import { CrateAccount } from "./createEccaunt";

export default function RegisterSteps() {
  const { currentStep } = useContext(RegisterContext);
  switch (currentStep) {
    case 0:
      return <CrateAccount />;
    case 1:
      return <ConfirmStep />;
    case 2:
      return <CreateVpnUsername />;
    default:
      return <SaveAccountStep />;
  }
}

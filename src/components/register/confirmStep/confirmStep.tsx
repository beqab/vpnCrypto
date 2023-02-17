import React from "react";
import { Button } from "../../common/form";
import ReactCodeInput from "react-verification-code-input";

export const ConfirmStep = () => {
  return (
    <div className="registerStep">
      <h2>
        Confirm your email by enter the confirmation code send to your email.
      </h2>
      <div>
        <div>
          <ReactCodeInput className="confirmField_wrapper" />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <span className="pointer">Modify your email</span>
        <span className="pointer">Resend code</span>
      </div>
      <Button className="btn btn-primary w-100 text-center justify-content-center mt-4">
        Confirm email
      </Button>
    </div>
  );
};

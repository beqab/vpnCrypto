import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../common/form";
import ReactCodeInput from "react-verification-code-input";
import { ToastContainer, toast } from "react-toastify";
import { AuthService } from "../../../api/auth/auth.http";
import { RegisterContext } from "../registerContext/registerContext";

export const ConfirmStep = () => {
  const { registerForm, setCurrentStep, setUser, user } = useContext(
    RegisterContext,
  );
  const [resendLoad, setResendLoad] = useState(false);
  const [load, setLoad] = useState(false);
  const [code, setCode] = useState("");

  const resendConfirmation = async () => {
    if (resendLoad) return;
    setResendLoad(true);
    try {
      const res = await AuthService.register({
        ...registerForm,
        type: "customer",
      });
      toast.success("Check the email to verify!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (e) {
    } finally {
      setResendLoad(false);
    }
  };

  const getPrevStep = () => {
    setCurrentStep(0);
  };

  const confirmCode = async () => {
    setLoad(true);
    try {
      const res = await AuthService.confirmCode({
        code,
        user_id: registerForm.user_id,
      });
      toast.success("Email confirmation finished!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        setCurrentStep(2);
      }, 2000);
      setUser(res.data);
    } catch (e) {
    } finally {
      setLoad(false);
    }
  };
  return (
    <div className="registerStep">
      <ToastContainer />
      <h2>
        Confirm your email by enter the confirmation code send to your email.
      </h2>
      <div>
        <div>
          <ReactCodeInput
            onComplete={v => {
              console.log(v);
              setCode(v);
            }}
            onChange={v => {
              console.log(v);
              setCode(v);
            }}
            className="confirmField_wrapper"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <span onClick={getPrevStep} className="pointer">
          Modify your email
        </span>
        <span onClick={resendConfirmation} className="pointer">
          {resendLoad ? " Resend code sending..." : "Resend code"}
        </span>
      </div>
      <Button
        loading={load}
        onClick={confirmCode}
        className="btn btn-primary w-100 text-center justify-content-center mt-4"
      >
        Confirm email
      </Button>
    </div>
  );
};

import React from "react";
import { RegisterStepIndicator } from "../components/register/registerstepindicator";
import { RegisterProvider } from "../components/register/registerContext/registerContext";
import RegisterSteps from "../components/register/registerSteps";

export default function Register() {
  return (
    <section>
      <RegisterProvider>
        <h2 className="text-center mb-5 pb-3 mt-5">Join our community</h2>

        <div className="register_wrapper">
          <RegisterStepIndicator />
          <RegisterSteps />
        </div>
      </RegisterProvider>
    </section>
  );
}

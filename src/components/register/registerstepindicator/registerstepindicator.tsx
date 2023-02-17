import React, { useMemo, useState } from "react";
import "./RegisterStepIndicator.scss";
import { useContext } from "react";
import { RegisterContext } from "../registerContext/registerContext";

export const RegisterStepIndicator = () => {
  const { currentStep, setCurrentStep } = useContext(RegisterContext);

  const Steps = useMemo(() => {
    let Step = [];
    for (let index = 0; index < 4; index++) {
      Step.push(
        <div
          onClick={() => {
            setCurrentStep(index);
          }}
          className="register_step_point"
        >
          <div className="register_step_point_label">step {index + 1}</div>
          {currentStep > index ? (
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r="14.5"
                fill="#1CC700"
                stroke="#1CC700"
                stroke-width="7"
              />
              <g clip-path="url(#clip0_0_1)">
                <path
                  d="M16.0002 21.172L25.1922 11.979L26.6072 13.393L16.0002 24L9.63623 17.636L11.0502 16.222L16.0002 21.172Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_1">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(6 6)"
                  />
                </clipPath>
              </defs>
            </svg>
          ) : currentStep === index ? (
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r="14.5"
                fill="white"
                stroke="#5EA4FC"
                stroke-width="7"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="white" />
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="black"
                strokeOpacity="0.3"
                strokeWidth="4"
              />
            </svg>
          )}
        </div>,
      );
    }
    return Step;
  }, [currentStep]);

  return (
    <div className="register_steps">
      <>{Steps}</>
    </div>
  );
};

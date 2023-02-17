import React, { createContext, useState } from "react";

interface IRegisterContextProps {
  currentStep: number;
  setCurrentStep: (v: any) => void;
}

export const RegisterContext = createContext<IRegisterContextProps>({
  currentStep: 0,
  setCurrentStep: (n: number) => null,
});

interface IProps {
  children: React.ReactNode;
}

export const RegisterProvider: React.FC<IProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <RegisterContext.Provider
      value={{
        currentStep,
        setCurrentStep: (n: number) => {
          setCurrentStep(n);
        },
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

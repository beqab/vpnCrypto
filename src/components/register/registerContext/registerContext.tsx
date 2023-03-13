import React, { createContext, useState } from "react";

interface IRegisterContextProps {
  currentStep: number;
  setCurrentStep: (v: any) => void;
  setRegisterForm: (v: any) => void;
  setUser: (v: any) => void;
  registerForm: {
    email: string;
    password: string;
    type?: string;
    user_id?: number;
  };
  user?: any;
}

export const RegisterContext = createContext<IRegisterContextProps>({
  currentStep: 0,
  setCurrentStep: (n: number) => null,
  setRegisterForm: (n: any) => null,
  setUser: (n: any) => null,
  registerForm: {
    email: "",
    password: "",
  },
  user: {},
});

interface IProps {
  children: React.ReactNode;
}

export const RegisterProvider: React.FC<IProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [user, setUser] = useState({});
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
  });

  return (
    <RegisterContext.Provider
      value={{
        currentStep,
        setCurrentStep: (n: number) => {
          setCurrentStep(n);
        },
        registerForm,
        setRegisterForm,
        setUser,
        user,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

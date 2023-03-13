import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, FormGroup, Input } from "../../../common/form";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import { AuthService } from "../../../../api/auth/auth.http";
import { RegisterContext } from "../../registerContext/registerContext";

type FormData = {
  email: string;
  password: string;
  passwordConfirm?: string;
};

export const CrateAccount = () => {
  const { setCurrentStep, registerForm, setRegisterForm } = useContext(
    RegisterContext,
  );
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    trigger,
    clearErrors,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: registerForm,
  });

  useEffect(() => {}, []);

  const onSubmit = handleSubmit(async formData => {
    try {
      setIsLoading(true);
      const registerData = { ...formData, type: "customer" };
      const response: any = await AuthService.register(registerData);
      toast.success("Check the email to verify!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        setCurrentStep(1);
      }, 2000);
      console.log(response, response.user_id);
      setRegisterForm({ ...formData, user_id: response.user_id });
      // Do something with the response, like redirect the user to the dashboard
    } catch (error) {
      // Handle the error, such as displaying an error message to the user
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <div className="formContainer">
      <ToastContainer />
      <h3 className="text-center mt-5 mb-5">
        Get your Free VPN account, Join VPNcrypto
      </h3>
      <form onSubmit={onSubmit}>
        <FormGroup
          errorMessage={
            errors.email?.type === "required"
              ? "Email is required"
              : errors.email?.type === "pattern"
              ? "Please enter a valid email address"
              : ""
          }
        >
          <Input
            onChange={() => clearErrors("email")}
            useRef={register("email", {
              required: "Email is required",
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email address",
              },
            })}
            hasError={!!errors.email}
            name="email"
            type="text"
            placeholder="example@mail.com"
          />
        </FormGroup>

        <FormGroup
          errorMessage={
            errors.password?.type === "required"
              ? "Password is required"
              : errors.password?.type === "minLength"
              ? "Password must be at least 6 characters"
              : ""
          }
        >
          <Input
            useRef={register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            onChange={() => {
              clearErrors("password");
              clearErrors("passwordConfirm");
              trigger("passwordConfirm"); // trigger revalidation of passwordConfirm
            }}
            name="password"
            type="password"
            placeholder="Password"
            hasError={!!errors.password}
          />
        </FormGroup>

        <FormGroup
          errorMessage={
            errors.passwordConfirm?.type === "required"
              ? "Confirm Password is required"
              : errors.passwordConfirm?.type === "validate"
              ? "Passwords do not match"
              : ""
          }
        >
          <Input
            useRef={register("passwordConfirm", {
              required: "Confirm password is required",
              validate: value =>
                value === watch("password") || "Passwords do not match",
            })}
            onChange={() => clearErrors("passwordConfirm")}
            name="passwordConfirm"
            type="password"
            placeholder="Confirm password"
            hasError={!!errors.passwordConfirm}
          />
        </FormGroup>
        <div className="d-flex align-items-center justify-content-between mt-4">
          <div>
            <span>Already have an account?</span>
            <Link to={"/"}>Log in</Link>
          </div>
          <Button className="btn btn-default px-5" loading={isLoading}>
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
};

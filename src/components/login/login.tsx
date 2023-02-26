import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, FormGroup, Button } from "../common/form";
import { useForm } from "react-hook-form";
import validator from "validator";
import { AuthService } from "../../api/auth/auth.http";
import { AxiosError } from "axios";

type FormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const [load, setLoad] = useState(false);
  const {
    register,
    handleSubmit,
    trigger,
    clearErrors,

    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async data => {
    console.log(errors?.email, "errrors");
    console.log(data);

    try {
      let response = await AuthService.login(data);
    } catch (err) {
      console.log(err.response);
    }
  });

  console.log(errors, "errors ");

  return (
    <div className="login">
      <div className="login_">
        <form onSubmit={onSubmit}>
          <h2>Login to your account</h2>
          <FormGroup
            errorMessage={
              errors.email?.type === "required"
                ? "email is required"
                : errors.email?.type === "pattern"
                ? "Please enter email in correct format"
                : ""
            }
          >
            <Input
              onChange={() => clearErrors("email")}
              useRef={register("email", {
                required: "email is require",
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              hasError={!!errors.email}
              name="email"
              type="text"
              placeholder="example@mail.com"
            />
          </FormGroup>
          <FormGroup>
            <Input
              useRef={register("password", {
                required: "password is require",
              })}
              onChange={() => clearErrors("password")}
              name="password"
              type="password"
              placeholder="Password"
              hasError={!!errors.password}
            />
          </FormGroup>
          <Button className="btn btn-primary d-md-none d-flex w-100 tet-center justify-content-center">Sign Up</Button>

          <div className="d-md-flex justify-content-md-between justify-content-center text-center w-100  mt-4">
            <div className="text-center text-md-left">
              <label className="mr-4">Don’t have an account?</label>
              <div>
                <Link to="/register">Create account</Link>
              </div>
            </div>
            <Button className="btn btn-primary d-none d-md-flex">Sign Up</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

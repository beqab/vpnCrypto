import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, FormGroup, Button } from "../common/form";
import { useForm } from "react-hook-form";
import validator from "validator";
import { AuthService } from "../../api/auth/auth.http";
import { AxiosError } from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { SetUser } from "../../redux/actions";

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async data => {
    console.log(errors?.email, "errrors");
    console.log(data);
    setLoad(true);
    try {
      let response = await AuthService.login({
        ...data,
        type: "customer",
      });
      dispatch(
        SetUser({ user: response.data.user, token: response.data.user.token }),
      );
      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.log(err, "errr");
      if (err.data?.message?.error?.length) {
        toast.error(err.data?.message?.error[0], {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } finally {
      setLoad(false);
    }
  });

  console.log(errors, "errors ");

  return (
    <div className="login">
      <ToastContainer />
      <div className="login_">
        <form onSubmit={onSubmit}>
          <h2>Login to your account</h2>
          <FormGroup
            errorMessage={
              errors.email?.type === "required"
                ? "Email is required"
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
          <FormGroup
            errorMessage={
              errors.email?.type === "required" ? "Password is required" : ""
            }
          >
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
          <Button className="btn btn-primary d-md-none d-flex w-100 tet-center justify-content-center">
            Sign Up
          </Button>

          <div className="d-md-flex justify-content-md-between justify-content-center text-center w-100  mt-4">
            <div className="text-center text-md-left">
              <label className="mr-4">Don’t have an account?</label>
              <div>
                <Link to="/register">Create account</Link>
              </div>
            </div>
            <Button loading={load} className="btn btn-primary d-none d-md-flex">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

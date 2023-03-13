import React, { useContext, useState } from "react";
import { Button, FormGroup, Input } from "../../common/form";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { AuthService } from "../../../api/auth/auth.http";
import { VpnService } from "../../../api/vpnService/vpnService.http";
import { RegisterContext } from "../registerContext/registerContext";

import generator from "generate-password";

interface FormData {
  username: string;
  password: string;
}

export const CreateVpnUsername = () => {
  const { user, setCurrentStep, setUser } = useContext(RegisterContext);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    trigger,
    clearErrors,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const createVpnAccount = handleSubmit(async data => {
    setIsLoading(true);
    // debugger;
    try {
      const response = await VpnService.register({
        ...data,
        token: user.token,
      });
      setUser({
        ...response.data,
        meta: {
          ...response.data.meta,
          vpn: {
            ...response.data.meta.vpn,
            data: { ...response.data.meta.vpn.data, password: data.password },
          },
        },
      });
      toast.success("user created!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        setCurrentStep(3);
      }, 2000);
      // debugger;
    } catch (e) {
      // debugger;
      console.log("e.response");
      // console.log(e);
      if (e.data.message) {
        toast.error(e.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("something gets wrong", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <div className="registerStep">
      <ToastContainer />
      <h2>
        Create your VPN software
        <br />
        username & password:
      </h2>
      <form onSubmit={createVpnAccount}>
        <label>Pick own username/password</label>
        <FormGroup>
          <Input
            onChange={() => {
              clearErrors("username");
            }}
            useRef={register("username", {
              required: "Username is required",
              minLength: {
                value: 6,
                message: "Username must be at least 6 characters",
              },
            })}
            hasError={!!errors.username}
            name="username"
            placeholder="Username"
          />
        </FormGroup>
        <div className="my-3">
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
              }}
              name="password"
              type="password"
              placeholder="Password"
              hasError={!!errors.password}
            />
          </FormGroup>
        </div>
        <Button className="btn btn-default w-100 justify-content-center">
          Confirm
        </Button>
      </form>
      <div className="or">
        <div>OR</div>
      </div>
      <Button
        loading={isLoading}
        className="btn btn-light  w-100  justify-content-center"
      >
        Automatically generate
      </Button>
    </div>
  );
};

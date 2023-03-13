import React, { useContext, useState } from "react";
import { Button, FormGroup, Input } from "../../common/form";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { AuthService } from "../../../api/auth/auth.http";
import { VpnService } from "../../../api/vpnService/vpnService.http";
import { RegisterContext } from "../registerContext/registerContext";
import { generateFromEmail, generateUsername } from "unique-username-generator";

import generator from "generate-password";

interface FormData {
  username: string;
  password: string;
}

export const CreateVpnUsername = () => {
  const { user, setCurrentStep, setUser, registerForm } = useContext(
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
    setValue,
  } = useForm<FormData>();

  const generateUser = () => {
    const generateUsername = () => {
      const username = registerForm.email.split("@")[0]; // Extract username from email
      const randomNumber = Math.floor(Math.random() * 10000); // Generate a random number between 0-9999
      const uniqueUsername = `${username}${randomNumber}`; // Combine username and random number
      return uniqueUsername;
    };

    const generatePassword = () => {
      return Math.random().toString(36).slice(4);
    };

    setValue("password", generatePassword());
    setValue("username", generateUsername());
  };

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
        <Button
          loading={isLoading}
          className="btn btn-default w-100 justify-content-center"
        >
          Confirm
        </Button>
      </form>
      <div className="or">
        <div>OR</div>
      </div>
      <Button
        onClick={generateUser}
        className="btn btn-light  w-100  justify-content-center"
      >
        Automatically generate
      </Button>
    </div>
  );
};

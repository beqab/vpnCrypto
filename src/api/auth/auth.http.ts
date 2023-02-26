import { axiosHeaderConfig } from "../api";
import { axiosWithToken } from "../axios-with-token";
import axios, { AxiosPromise, AxiosRequestConfig, AxiosError } from "axios";
import { backEndRoutes } from "../backend-routes";
import { ILogin, IResendCode } from "./auth.types";

class _AuthService {
  login = (data: ILogin): AxiosPromise => {
    return axios
      .post(backEndRoutes.auth.login(), data)
      .then(response => {
        return Promise.resolve(response.data);
      })
      .catch(error => {
        return Promise.reject(this.formatError(error));
      });
  };

  resendVerification = (data: IResendCode) => {
    return axios.get(backEndRoutes.auth.resendVerification(data));
  };

  private formatError = (error: AxiosError) => {
    if (error?.response?.status === 401) {
      window.dispatchEvent(new Event("Logout"));
      return null;
    }

    return {
      code: error?.code,
      status: error?.response?.status,
      statusText: error?.response?.statusText || "Unknown error",
      data: error?.response?.data || {},
    };
  };
}

export const AuthService = new _AuthService();

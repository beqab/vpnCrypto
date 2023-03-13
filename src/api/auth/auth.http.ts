import { axiosHeaderConfig } from "../api";
import { axiosWithToken } from "../axios-with-token";
import axios, { AxiosPromise, AxiosRequestConfig, AxiosError } from "axios";
import { backEndRoutes } from "../backend-routes";
import { ILogin, IConfirmCode, IRegister, IIuser } from "./auth.types";

class _AuthService {
  login = (data: ILogin): AxiosPromise<IIuser> => {
    return axios
      .post(backEndRoutes.auth.login(), data)
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(this.formatError(error));
      });
  };

  register = (data: IRegister): AxiosPromise => {
    return axios
      .post(backEndRoutes.auth.register(), data)
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(error => {
        return Promise.reject(this.formatError(error));
      });
  };

  getUser = (token: string): AxiosPromise => {
    return axios
      .get(backEndRoutes.auth.getUser(token))
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(error => {
        return Promise.reject(this.formatError(error));
      });
  };

  confirmCode = (data: IConfirmCode) => {
    return axios.get(backEndRoutes.auth.confirmCode(data));
  };

  private formatError = (error: AxiosError) => {
    if (error?.response?.status === 401) {
      window.dispatchEvent(new Event("Logout"));
      return null;
    }

    return error.response;
  };
}

export const AuthService = new _AuthService();

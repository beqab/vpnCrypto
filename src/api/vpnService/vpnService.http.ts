import { axiosHeaderConfig } from "../api";
import { axiosWithToken } from "../axios-with-token";
import axios, { AxiosPromise, AxiosRequestConfig, AxiosError } from "axios";
import { backEndRoutes } from "../backend-routes";
import { IRegister } from "./vpnService.types";

class _VpnService {
  //   register = (data: ILogin): AxiosPromise => {
  //     return axios
  //       .post(backEndRoutes.auth.login(), data)
  //       .then(response => {
  //         return Promise.resolve(response.data);
  //       })
  //       .catch(error => {
  //         return Promise.reject(this.formatError(error));
  //       });
  //   };

  register = ({ token, ...data }: IRegister): AxiosPromise => {
    return axios
      .post(backEndRoutes.vpnService.register(), data, {
        headers: {
          token: token,
        },
      })
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(error => {
        return Promise.reject(this.formatError(error));
      });
  };

  //   confirmCode = (data: IConfirmCode) => {
  //     return axios.get(backEndRoutes.auth.confirmCode(data));
  //   };

  private formatError = (error: AxiosError) => {
    if (error?.response?.status === 401) {
      window.dispatchEvent(new Event("Logout"));
      return null;
    }

    return error.response;
  };
}

export const VpnService = new _VpnService();

import { STORE_API_BASE_URL } from "./api";

export const backEndRoutes = {
  auth: {
    login: () => `${STORE_API_BASE_URL}​/api/login`,
    register: () => `${STORE_API_BASE_URL}​/api/register`,
    getUser: (token: string) => `${STORE_API_BASE_URL}​/api/getUser/${token}`,

    confirmCode: ({ user_id, code }) =>
      `${STORE_API_BASE_URL}/api/verify/email/${user_id}/${code}`,
  },
  vpnService: {
    register: () => `${STORE_API_BASE_URL}​/api/vpnsellers/account`,
  },
};

import { STORE_API_BASE_URL } from "./api";

export const backEndRoutes = {
  auth: {
    login: () => `${STORE_API_BASE_URL}​/api/auth`,

    resendVerification: (email: any) =>
      `${STORE_API_BASE_URL}/api/resend/verification/${email}`,
  },
};

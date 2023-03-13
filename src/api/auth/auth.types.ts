export interface ILogin {
  email: string;
  password: string;
  type?: string;
}

export interface IRegister {
  email: string;
  password: string;
  type?: string;
}

export interface IConfirmCode {
  code: string;
  user_id: number;
}

export interface IIuser {
  user: { first_name: null | string; token: string };
  status: boolean;
}

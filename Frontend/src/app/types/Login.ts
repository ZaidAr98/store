export type LoginResponse = {
    refreshToken: string | null,
    accessToken: string | null,
    accessTokenUpdatedAt : string | null
  }

  export type LoginFormData = {
    email:string;
    password:string;
  };
  
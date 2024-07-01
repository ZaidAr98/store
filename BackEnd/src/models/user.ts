
export enum Role {
    General = "general",
    Admin = "admin"
}
export type UserType = {
    id:string;
    name:string;
    email:string;
    password:string;
    role:Role;
   
}


export type RefreshTokenType = {
    id: string;
    userId: string;
    refreshToken: string;
    accessToken: string;
}

export type AuthType ={
    email:string;
    password:string;
    tokens: RefreshTokenType[];
}
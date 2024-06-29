
export enum Role {
    General = "general",
    Admin = "admin"
}
export type UserType = {
    id:string;
    name:string;
    email:string;
    password:string;
    role:Role
}



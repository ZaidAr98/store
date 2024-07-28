export type LoginResponse = {
   userId : string | null,
   role:string|null

  }


  export type LogoutResponse = {
     success: boolean,
     message: string
 
   }
 




  export type LoginFormData = {
    email:string;
    password:string;
  };
  

  
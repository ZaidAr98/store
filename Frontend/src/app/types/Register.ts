export type RegistrationFormData = {
    name:string;
    email:string;
    password:string;
    
  
  };
  
  export type RegisterResponse = {
    success: boolean,
    message: string,
  }
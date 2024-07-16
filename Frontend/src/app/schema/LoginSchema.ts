import * as Yup from "yup";

const LoginSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("password is required"),

});

export default LoginSchema;
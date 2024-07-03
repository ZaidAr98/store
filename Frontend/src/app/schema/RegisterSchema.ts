import * as Yup from "yup";

const RegisterSchema = Yup.object({
    name: Yup.string()
    .required("First Name is required")
    .max(20, "First name must be less than 20"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("password is required"),

});

export default RegisterSchema;
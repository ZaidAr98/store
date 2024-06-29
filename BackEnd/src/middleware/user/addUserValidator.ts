import { check } from "express-validator";

const addUserValidator = [
  check("name", "Name is required").isString().isLength({min:2,max:20}).trim(),

  check("email", "Email is required").isEmail().trim(),
  check("password", "password with 5 or more characters required").isLength({
    min: 5,
  }),
  check("role").default("general"),
];

export default addUserValidator;

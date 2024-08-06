import { useForm } from "react-hook-form";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { RegistrationFormData } from "../types/Register";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import RegisterSchema from "../schema/RegisterSchema";
import { useSignUpMutation } from "../services/RegisterApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({ resolver: yupResolver(RegisterSchema) });

  const [
    signUp,
    {
      data,
      isSuccess: isSignupSuccess,
      isError: isSignupError,
      error: signupError,
    },
  ] = useSignUpMutation();

  const onSubmit = handleSubmit(async (data) => {
    signUp(data);
    navigate("/login");
  });

  useEffect(() => {
    if (isSignupSuccess) {
      toast.success("User SignUp Successfully");
    
    }
  }, [isSignupSuccess]);

  useEffect(() => {
    if (isSignupError) {
      toast.error((signupError as any).data.message);
    }
  }, [isSignupError,signupError]);

  return (
    <>
      <Toaster />
      <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <div className="w-full p-20 max-w-md bg-white rounded-md">
          <h2 className="pb-6 text-center text-2xl font-extrabold text-sky-900">
            Create an Account
          </h2>
          <form onSubmit={onSubmit} className="mt-8 ">
          <div className="pb-10">
              
                <input
                  id="name"
                  type="text"
                  className={`appearance-none rounded-none relative  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-700 focus:border-emerald-700 focus:z-10 sm:text-sm ${errors.email ? "border-red-500" : ""}`}
                  placeholder="name"
                  {...register("name")}
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>
          
              <div className="pb-10">
              
                <input
                  id="email"
                  type="email"
                    className={`appearance-none rounded-none relative  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-700 focus:border-emerald-700 focus:z-10 sm:text-sm ${errors.email ? "border-red-500" : ""}`}
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              <div className="pb-10">
              
                <input
                  id="password"
                  type="password"
                  className={`appearance-none rounded-none relative  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-700 focus:border-emerald-700 focus:z-10 sm:text-sm ${errors.email ? "border-red-500" : ""}`}
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
              </div>
              
              
           
            <div>
              <button
                type="submit"
                className="group relative w-24  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
             <div className="text-center  mt-10 text-slate-600">
             Do you have account already?
              <a href="/login" className="text-sky-600 hover:text-sky-900">
              Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

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
        <div className="w-full max-w-xs">
          <h2 className="mt-6 text-center text-2xl font-extrabold text-pink-600">
            Create an Account
          </h2>
          <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div>
                <label htmlFor="name" className="block text-sm font-medium text-green-500">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${errors.last_name ? 'border-red-500' : ''}`}
                  placeholder="name"
                  {...register("name")}
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-green-500">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-green-500">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
              </div>
              
              
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
            <div className="text-center text-white mt-2">
              Don&apos;t have an account?&nbsp;
              <a href="/pages/login" className="text-pink-600 hover:text-pink-500">
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
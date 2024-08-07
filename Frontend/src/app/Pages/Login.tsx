import { useForm } from "react-hook-form";
import { LoginFormData } from "../types/Login";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import LoginSchema from "../schema/LoginSchema";
import { useLoginMutation } from "../services/LoginApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../reducers/authSlice";
import { useAppDispatch } from "../hooks";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowpassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(LoginSchema) });

  const [
    login,
    {
      data,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginMutation();

  const onSubmit = handleSubmit(async (data) => {
    login(data);
  });

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success("User Logged In Successfully");
      dispatch(
        setUser({
          userId: data.userId,
          role: data.role,
        })
      );
      navigate("/");
    }

    if (isLoginError) {
      const errorMessage = (loginError as any).data.message;
      toast.error(errorMessage || "Something went wrong");
    }
  }, [isLoginSuccess, isLoginError, loginError, dispatch, data, navigate]);

  return (
    <>
      <Toaster />
      <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <div className="w-full p-20 max-w-md bg-white rounded-md">
          <h2 className="pb-6 text-center text-2xl font-extrabold text-sky-900">
            Login
          </h2>
          <form onSubmit={onSubmit} className="mt-8">
            <div className="pb-8">
              <input
                id="email"
                type="email"
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-700 focus:border-emerald-700 focus:z-10 sm:text-sm ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="pb-4">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-emerald-700 focus:border-emerald-700 focus:z-10 sm:text-sm ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="flex justify-start pb-8">
              <label className="text-sm pl-3">
                <input
                  className="mr-3"
                  type="checkbox"
                  defaultChecked={showPassword}
                  onChange={() => setShowpassword((state) => !state)}
                />
                Show Password
              </label>
            </div>
            <div className="flex justify-center pb-10">
              <button
                type="submit"
                className="group relative w-24 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
            <div className="text-center mt-2 text-slate-600">
              Don't have an account?&nbsp;
              <a href="/register" className="text-sky-600 hover:text-sky-900">
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

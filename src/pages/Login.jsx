import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../../axios.config.js";
import React, { useState } from "react";

const onError = (errors, e) => console.log(errors, e);

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const onSubmit = async (data, e) => {
    setIsLoading(true);
    console.log(data);
    console.log(e);
    // call the api from server
    try {
      const response = await axios.post("/login", data);

      console.log("response:", response);
      if (response["status"] == 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        setIsLoginError(error.response.data.message || "Đăng nhập thất bại");
      } else {
        setIsLoginError("Có lỗi xảy ra, vui lòng thử lại.");
      }
    } finally {
      setIsLoading(false); // Dừng loading
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Đăng nhập</h2>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Mật khẩu</label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
          <div>{isLoginError && "Vui lòng nhập lại tài khoản, mật khẩu"}</div>
        </form>
      </div>
    </div>
  );
};

export default Login;

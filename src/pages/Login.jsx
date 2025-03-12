import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const onSubmit = (data, e) => console.log(data, e);
const onError = (errors, e) => console.log(errors, e);

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Đăng nhập</h2>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              {...register("email")}
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Mật khẩu</label>
            <input
              {...register("password")}
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            />
          </div>

          <button
            onClick={() => navigate("/")}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

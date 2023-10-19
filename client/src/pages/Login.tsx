import { useEffect, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useLoginMutation } from "../slices/userApiSlice";
import { setCredential } from "../slices/UserSlice";
interface formData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const initialFormData: formData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState<formData>(initialFormData);
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const { userInfo } = useAppSelector((state) => state.user);
  const email = "michael@example.com";
  const password = "123456";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await login({ email, password }).unwrap();
    console.log(res);

    dispatch(setCredential(res));
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className=' p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-semibold mb-4'>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium '>
              Email
            </label>
            <input
              onChange={handlechange}
              value={formData.email}
              type='email'
              id='email'
              name='email'
              className='mt-1 p-2 w-full border rounded-md text-slate-950'
              placeholder='youremail@example.com'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium '>
              Password
            </label>
            <input
              onChange={handlechange}
              value={formData.password}
              type='password'
              id='password'
              name='password'
              className='mt-1 p-2 w-full border rounded-md text-slate-950'
              placeholder='********'
            />
          </div>

          <button
            type='submit'
            className='w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'>
            Login
          </button>
        </form>

        <p className='mt-4 text-center text-sm '>
          Don't have an account?{" "}
          <a href='/login' className='text-blue-500 hover:underline'>
            <Link to={"/register"}>Register here</Link>
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

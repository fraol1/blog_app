import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
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
            Register here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

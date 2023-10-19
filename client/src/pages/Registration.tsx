import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../slices/userApiSlice";

interface formData {
  Fullname: string;
  email: string;
  password: string;
}

const RegistrationPage = () => {
  const initialFormData: formData = {
    Fullname: "",
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

  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await register(formData).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className=' p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-semibold mb-4'>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium '>
              Full Name
            </label>
            <input
              onChange={handlechange}
              value={formData.Fullname}
              type='text'
              id='name'
              name='Fullname'
              className='mt-1 p-2 w-full border rounded-md text-slate-950'
              placeholder='John Doe'
            />
          </div>

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
            Register
          </button>
        </form>

        <p className='mt-4 text-center text-sm '>
          Already have an account?{" "}
          <span className='text-blue-500 hover:underline'>
            <Link to={"/login"}>Login here</Link>
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;

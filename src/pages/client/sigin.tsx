
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ISignin } from '../../interfaces/auth';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../api/auth';
import { Form, Input, Button, Typography } from 'antd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const { Title } = Typography; <div style={{ maxWidth: '400px', margin: '0 auto', paddingTop: '50px' }}></div>

type Props = {}

const Sigin
  = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ISignin>();
    const navigate = useNavigate();
    const [Login] = useLoginMutation();
    const [showPassword, setShowPassword] = useState(false); 
    const onSubmit = async (data) => {
      try {
        const response = await Login(data);
        if ('error' in response) {
          alert("Login failed");
          console.error(response.error);
        } else {
          alert("Login success");
          // Chuyển hướng hoặc thực hiện các hành động khác sau khi đăng nhập thành công
          navigate('/login');
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    
    
    return (
      <div className='flex justify-center h-screen items-center bg-gray-100'>
      <div className='bg-white rounded-lg p-8 shadow-lg'>
        <h1 className='text-4xl text-center mb-10'>Signin</h1>
        <form action="" onSubmit={handleSubmit(onSubmit as any)}>
          <label htmlFor="email">Email</label>
          <div className='mb-4'>
            <input
              type="text"
              id='email'
              {...register("email", { required: "Email is required" })}
              className='border-2 border-black rounded w-72 h-10'
              placeholder='Nhập email'
            />
            <div className='text-red-500'>{errors.email?.message}</div>
          </div>
          <label htmlFor="password">Password</label>
          <div className='mb-4'>
            <input
             type={showPassword ? 'text' : 'password'}
              id='password'
              {...register("password", { required: "Password is required" })}
              className='border-2 border-black rounded w-72 h-10'
              placeholder='Nhập password'
            />
            <div
              className='absolute right-2 top-2 cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </div>
            <div className='text-red-500'>{errors.password?.message}</div>
          </div>
          <div className='flex justify-between'>
            <button
              type='submit'
              className='bg-red-600 rounded-xl mt-5 text-2xl font-thin  hover:bg-sky-500 p-1'
            >
              Submit
            </button>
            <button
              type='submit'
              className=' rounded mt-5 text-1xl underline font-mono uppercase hover:bg-sky-500'
            >
              Forgot Password
            </button>

            
          </div>
        </form>
      </div>
    </div>
    
      
    )
  }

export default Sigin


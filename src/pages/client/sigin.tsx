import React from 'react'
import { useForm } from 'react-hook-form'
import { ISignin } from '../../interfaces/auth'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../api/auth'

type Props = {}

const Sigin
  = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ISignin>();
    const navigate = useNavigate();
    const [Login] = useLoginMutation();
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
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit as any)}>
          <h1 className='text-2xl'>Signin</h1>
          <label htmlFor="email">Email</label>
          <div className=''>
            <input type="text"
              id='email'
              {...register("email", { required: "email is required" })}
              className='border-2 border-black rounded'
              placeholder='nhập eamil'
            />
            <div>{errors.email?.message}</div>
          </div>
          <label htmlFor="password">Password</label>
          <div className=''>
            <input type="password"
              id='password'
              {...register("password", { required: "password is required" })}
              className='border-2 border-black rounded'
              placeholder='nhập password'
            />
            <div>{errors.password?.message}</div>
          </div>
          <button type='submit' className='bg-red-600 rounded mt-10'>
            submit
          </button>
        </form>

      </div>
    )
  }

export default Sigin

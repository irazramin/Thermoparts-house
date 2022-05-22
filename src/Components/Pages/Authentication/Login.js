import React from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../../Shared/Loading';


const Login = () => {
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);
  
  
  const navigate = useNavigate();
  const location = useLocation();
  
   const [currentUser] = useAuthState(auth);
   const [token] = useToken(user || user2 || currentUser);
   const from = location.state?.from?.pathname || '/';  console.log(token)
   console.log(user)
  if(token){
      navigate(from,{replace:true});
  }
  if(loading || loading2){
      return <Loading />
  }

//   if(error || error2){
//       setFirebaseErrors(error?.message || error2?.message);
//   }

   const onSubmit = (data) => {
     signInWithEmailAndPassword(data.email, data.password);
   };


  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  return (
    <div className=''>
      <section class='bg-[#F4F7FF] py-20 lg:py-[120px] mx-auto w-full flex items-center justify-center'>
        <div class='container'>
          <div class='flex flex-wrap -mx-4'>
            <div class='w-full px-4'>
              <div
                class='
               max-w-[525px]
               mx-auto
               text-center
               bg-white
               rounded-lg
               relative
               overflow-hidden
               py-16
               px-10
               sm:px-12
               md:px-[60px]
               '
              >
                <div class='mb-10 md:mb-16 text-center'>
                  <a
                    href='javascript:void(0)'
                    class='inline-block max-w-[160px] mx-auto'
                  >
                    <img
                      src='https://cdn.tailgrids.com/1.0/assets/images/logo/logo.svg'
                      alt='logo'
                    />
                  </a>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class='mb-6'>
                    <input
                      type='text'
                      placeholder='Email'
                      class='
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        '
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'Email is Required',
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: 'Please Enter a valid Email Address',
                        },
                      })}
                    />
                    <div className='text-left'>
                      {errors.email?.type === 'required' && (
                        <p className='text-warning'>{errors.email.message}</p>
                      )}
                      {errors.email?.type === 'pattern' && (
                        <p className='text-warning'>{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div class='mb-6'>
                    <input
                      type='password'
                      placeholder='Password'
                      class='
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        '
                      {...register('password', {
                        required: {
                          value: true,
                          message: 'Password is Required',
                        },
                        minLength: {
                          value: 6,
                          message: 'Your password atleast 6 characters or more',
                        },
                      })}
                    />
                    <div className='text-left'>
                      {errors.password?.type === 'required' && (
                        <p className='text-warning'>
                          {errors.password.message}
                        </p>
                      )}
                      {errors.password?.type === 'pattern' && (
                        <p className='text-warning'>
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div class='mb-7'>
                    <input
                      type='submit'
                      value='Sign In'
                      class='
                        w-full
                        rounded-md
                        border
                        border-primary
                        py-3
                        px-5
                        bg-primary
                        text-base text-white
                        cursor-pointer
                        hover:bg-opacity-90
                        transition
                        '
                    />
                  </div>

                  <p className='mt-5 text-warning'>{(error || error2)  ? (error?.message || error2?.message) : ''}</p>
                </form>
                <p class='text-base mb-6 text-[#adadad]'>Connect With</p>
                <ul class='flex justify-center items-center -mx-2 mb-6'>
                  <li class='px-2 w-[140px]' onClick={handleGoogleLogin}>
                    <a
                      href='javascript:void(0)'
                      class='
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#D64937]
                        hover:bg-opacity-90
                        '
                    >
                      <svg
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z'
                          fill='white'
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
                <a
                  href='javascript:void(0)'
                  class='
                  text-base
                  inline-block
                  mb-2
                  text-[#adadad]
                  hover:underline hover:text-primary
                  '
                >
                  Forget Password?
                </a>
                <p class='text-base text-[#adadad]'>
                  Not a member yet?
                  <button
                    onClick={() => navigate('/signup')}
                    class='text-primary hover:underline'
                  >
                    Sign Up
                  </button>
                </p>
                <div>
                  <span class='absolute top-1 right-1'>
                    <svg
                      width='40'
                      height='40'
                      viewBox='0 0 40 40'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='1.39737'
                        cy='38.6026'
                        r='1.39737'
                        transform='rotate(-90 1.39737 38.6026)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='1.39737'
                        cy='1.99122'
                        r='1.39737'
                        transform='rotate(-90 1.39737 1.99122)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='13.6943'
                        cy='38.6026'
                        r='1.39737'
                        transform='rotate(-90 13.6943 38.6026)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='13.6943'
                        cy='1.99122'
                        r='1.39737'
                        transform='rotate(-90 13.6943 1.99122)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='25.9911'
                        cy='38.6026'
                        r='1.39737'
                        transform='rotate(-90 25.9911 38.6026)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='25.9911'
                        cy='1.99122'
                        r='1.39737'
                        transform='rotate(-90 25.9911 1.99122)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='38.288'
                        cy='38.6026'
                        r='1.39737'
                        transform='rotate(-90 38.288 38.6026)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='38.288'
                        cy='1.99122'
                        r='1.39737'
                        transform='rotate(-90 38.288 1.99122)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='1.39737'
                        cy='26.3057'
                        r='1.39737'
                        transform='rotate(-90 1.39737 26.3057)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='13.6943'
                        cy='26.3057'
                        r='1.39737'
                        transform='rotate(-90 13.6943 26.3057)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='25.9911'
                        cy='26.3057'
                        r='1.39737'
                        transform='rotate(-90 25.9911 26.3057)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='38.288'
                        cy='26.3057'
                        r='1.39737'
                        transform='rotate(-90 38.288 26.3057)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='1.39737'
                        cy='14.0086'
                        r='1.39737'
                        transform='rotate(-90 1.39737 14.0086)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='13.6943'
                        cy='14.0086'
                        r='1.39737'
                        transform='rotate(-90 13.6943 14.0086)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='25.9911'
                        cy='14.0086'
                        r='1.39737'
                        transform='rotate(-90 25.9911 14.0086)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='38.288'
                        cy='14.0086'
                        r='1.39737'
                        transform='rotate(-90 38.288 14.0086)'
                        fill='#3056D3'
                      />
                    </svg>
                  </span>
                  <span class='absolute left-1 bottom-1'>
                    <svg
                      width='29'
                      height='40'
                      viewBox='0 0 29 40'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='2.288'
                        cy='25.9912'
                        r='1.39737'
                        transform='rotate(-90 2.288 25.9912)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='14.5849'
                        cy='25.9911'
                        r='1.39737'
                        transform='rotate(-90 14.5849 25.9911)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='26.7216'
                        cy='25.9911'
                        r='1.39737'
                        transform='rotate(-90 26.7216 25.9911)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='2.288'
                        cy='13.6944'
                        r='1.39737'
                        transform='rotate(-90 2.288 13.6944)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='14.5849'
                        cy='13.6943'
                        r='1.39737'
                        transform='rotate(-90 14.5849 13.6943)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='26.7216'
                        cy='13.6943'
                        r='1.39737'
                        transform='rotate(-90 26.7216 13.6943)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='2.288'
                        cy='38.0087'
                        r='1.39737'
                        transform='rotate(-90 2.288 38.0087)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='2.288'
                        cy='1.39739'
                        r='1.39737'
                        transform='rotate(-90 2.288 1.39739)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='14.5849'
                        cy='38.0089'
                        r='1.39737'
                        transform='rotate(-90 14.5849 38.0089)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='26.7216'
                        cy='38.0089'
                        r='1.39737'
                        transform='rotate(-90 26.7216 38.0089)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='14.5849'
                        cy='1.39761'
                        r='1.39737'
                        transform='rotate(-90 14.5849 1.39761)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='26.7216'
                        cy='1.39761'
                        r='1.39737'
                        transform='rotate(-90 26.7216 1.39761)'
                        fill='#3056D3'
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Button from './Button';
import auth from "../../Firebase.init"
const Header = () => {
  const [user] = useAuthState(auth);

     const navItems = (
       <>
         <li>
           <Link to='/'>Home</Link>
         </li>
         <li tabIndex='0'>
           <Link to='/blogs'>Blogs</Link>
         </li>
         <li tabIndex='0'>
           <Link to='/myportfolio'>My Portfolio</Link>
         </li>
         {user && (
           <li>
             <Link to='/dashboard'>Dashboard</Link>
           </li>
         )}
       </>
     );
  return (
    <div class=' shadow-md w-full'>
      <div className='navbar text-black container mx-auto'>
        <div class='navbar-start'>
          <div class='dropdown'>
            <label tabindex='0' class='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex='0'
              class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navItems}
            </ul>
          </div>
          <a class='btn btn-ghost normal-case text-xl'>daisyUI</a>
        </div>
        <div class='navbar-center hidden lg:flex navbar-end'>
          <ul class='menu menu-horizontal p-0'>{navItems}</ul>
          <>
            {user ? (
              <li>
                <button
                  className='btn btn-outline'
                  onClick={() => {
                    signOut(auth);
                    //    localStorage.removeItem('accessToken');
                  }}
                >
                  Sign out
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to='/login'
                    className='btn btn-primary btn-sm text-white mx-1'
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to='/signup'
                    className='btn btn-outline btn-sm text-primary mx-1 hover:bg-primary'
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
}

export default Header
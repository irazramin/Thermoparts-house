import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from "../../Firebase.init";
import CustomLink from './CustomLink';
const Header = () => {
  const [user] = useAuthState(auth);

     const navItems = (
       <>
         <li>
           <CustomLink className='px-3 py-1 border-b-[2px] rounded-md' to='/'>
             Home
           </CustomLink>
         </li>
         <li tabIndex='0'>
           <CustomLink
             className='px-3 py-1 border-b-[2px] rounded-md'
             to='/blogs'
           >
             Blogs
           </CustomLink>
         </li>
         <li tabIndex='0'>
           <CustomLink
             className='px-3 py-1 border-b-[2px] rounded-md'
             to='/myportfolio'
           >
             My Portfolio
           </CustomLink>
         </li>
         {user && (
           <li>
             <CustomLink
               className='px-3 py-1 border-b-[2px] rounded-md'
               to='/dashboard'
             >
               Dashboard
             </CustomLink>
           </li>
         )}
         {user ? (
           <li>
             <button
               className=' inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out'
               onClick={() => {
                 signOut(auth);
                 localStorage.removeItem('accessToken');
               }}
             >
               Sign out
             </button>
           </li>
         ) : (
           <>
             <div>
               <Link
                 to='/login'
                 className='btn btn-primary btn-sm text-white mx-1 my-1 lg:my-0 '
               >
                 Login
               </Link>
             </div>
             <div>
               <Link
                 to='/signup'
                 className='btn btn-outline btn-sm text-primary mx-1 hover:bg-primary my-1 lg:my-0 '
               >
                 Signup
               </Link>
             </div>
           </>
         )}
       </>
     );
  return (
    <div className=' shadow-md w-full'>
      <div className='navbar text-black container mx-auto'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex='0' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  strokeLinecap='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex='0'
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navItems}
            </ul>
          </div>
          <a className='btn btn-ghost normal-case text-xl'>Thermoparts House</a>
        </div>
        <div className='navbar-center hidden lg:flex navbar-end'>
          <ul className='menu menu-horizontal p-0 flex justify-center items-center'>
            
              {navItems}
             
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header
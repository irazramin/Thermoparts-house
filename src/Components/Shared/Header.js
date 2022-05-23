import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from "../../Firebase.init";
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
         {user ? (
           <li>
             <button
               className='btn btn-outline btn-sm text-primary mx-1 hover:bg-primary my-1 lg:my-0'
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
                 className='btn btn-primary btn-sm text-white mx-1 my-1 lg:my-0'
               >
                 Login
               </Link>
             </div>
             <div>
               <Link
                 to='/signup'
                 className='btn btn-outline btn-sm text-primary mx-1 hover:bg-primary my-1 lg:my-0'
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
          <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
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
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../Firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [isAdmin] = useAdmin(email);

  return (
    <div>
      <div className='drawer drawer-mobile w-full'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content  items-center mt-8 w-[85%] mx-auto'>
          <h2 className='text-3xl font-semibold text-gray-900'>
            Hello <span className='text-accent'>{user?.displayName}</span>,
            Welcome to dashboard
          </h2>
          <Outlet />
          {/* <!-- Page content here --> */}
          <label
            htmlFor='my-drawer-2'
            className='btn btn-primary drawer-button lg:hidden absolute top-2 right-2'
          >
            =
          </label>
        </div>
        <div className='drawer-side '>
          <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
          <ul className='menu p-4  w-60 text-white bg-primary'>
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to='/dashboard'>My Profile</Link>
            </li>
            {user && !isAdmin && (
              <>
                <li>
                  <Link to='myorder'>My Order</Link>
                </li>
                <li>
                  <Link to='addreview'>Add a review</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to='manageallorders'>Manage All Orders</Link>
                </li>
                <li>
                  <Link to='addproduct'>Add A Product</Link>
                </li>
                <li>
                  <Link to='makeadmin'>Make Admin</Link>
                </li>
                <li>
                  <Link to='manageproducts'>Manage Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

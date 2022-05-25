import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../../Firebase.init';
import useAdmin from '../../hooks/useAdmin';
import DashboardCustomLink from '../../Shared/DashboardCustomLink';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [isAdmin] = useAdmin(email);

  return (
    <div>
      <div className='drawer drawer-mobile w-full'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content  items-center mt-8 container lg:px-10 md:px-6 px-3 mx-auto'>
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
            <li className='my-0'>
              <DashboardCustomLink
                className='px-3 py-1 w-full rounded'
                to='/dashboard'
              >
                My Profile
              </DashboardCustomLink>
            </li>
            {user && !isAdmin ? (
              <>
                <li className='my-0'>
                  <DashboardCustomLink
                    className='px-3 py-1 w-full rounded'
                    to='myorder'
                  >
                    My Order
                  </DashboardCustomLink>
                </li>
                <li className='my-0'>
                  <DashboardCustomLink
                    className='px-3 py-1 w-full rounded'
                    to='addreview'
                  >
                    Add a review
                  </DashboardCustomLink>
                </li>
              </>
            ) : (
              <>
                <li className='my-0'>
                  <DashboardCustomLink
                    className='px-3 py-1 w-full rounded'
                    to='manageallorders'
                  >
                    Manage All Orders
                  </DashboardCustomLink>
                </li>
                <li className='my-0'>
                  <DashboardCustomLink
                    className='px-3 py-1 w-full rounded'
                    to='addproduct'
                  >
                    Add A Product
                  </DashboardCustomLink>
                </li>
                <li className='my-0'>
                  <DashboardCustomLink
                    className='px-3 py-1 w-full rounded'
                    to='makeadmin'
                  >
                    Make Admin
                  </DashboardCustomLink>
                </li>
                <li className='my-0'>
                  <DashboardCustomLink
                    className='px-3 py-1 w-full rounded'
                    to='manageproducts'
                  >
                    Manage Products
                  </DashboardCustomLink>
                </li>
              </>
            )}
            {/* {isAdmin && (
     
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

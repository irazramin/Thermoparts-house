import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../Firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div class='drawer drawer-mobile'>
        <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
        <div class='drawer-content flex flex-col items-center justify-center'>
          <h2>Hello {user?.displayName}, Welcome to dashboard</h2>
          <Outlet />
          {/* <!-- Page content here --> */}
          <label
            for='my-drawer-2'
            class='btn btn-primary drawer-button lg:hidden absolute top-2 right-2'
          >
            =
          </label>
        </div>
        <div class='drawer-side '>
          <label for='my-drawer-2' class='drawer-overlay'></label>
          <ul class='menu p-4 overflow-y-auto w-60 text-white bg-primary'>
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to='/dashboard'>My Profile</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to='myorder'>My Order</Link>
                </li>
                <li>
                  <Link to='addreview'>Add a review</Link>
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

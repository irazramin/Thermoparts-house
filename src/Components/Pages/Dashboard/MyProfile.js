import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import userImg from '../../../assests/user.png';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading';
const MyProfile = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const {
    data: userprofiles,
    isLoading,
    refetch,
  } = useQuery(['profile', email], () =>
    fetch(`http://localhost:5000/userprofile/${email}`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(userprofiles);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const fName = e.target.fname.value;
    const lName = e.target.lname.value;
    const email = e.target.email.value;
    const phone = e.target.number.value;
    const education = e.target.education.value;
    const linkedin = e.target.linkedin.value;
    const github = e.target.github.value;
    const location = e.target.location.value;

    const updateProfile = {
      fName,
      lName,
      email,
      location,
      phone,
      education,
      linkedin,
      github,
    };

    fetch(`http://localhost:5000/userprofile/${user?.email}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updateProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Profile Update Successfully');
        }
      });
  };
  return (
    <div className='my-20 overflow-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-6 gap-2'>
        <div className='col-span-2 w-96 max-w-lg'>
          <div class='flex justify-center'>
            <div class='rounded-lg shadow-lg bg-white w-full mx-5'>
              <a href='#!'>
                <img
                  class='rounded-t-lg'
                  src={userImg}
                  className='w-[100px] mx-auto'
                  alt=''
                />
              </a>
              <div class='p-6'>
                <h5 class='text-gray-900 text-center text-xl font-medium mb-2'>
                  {userprofiles.firstName} {userprofiles.lastName}
                </h5>
                <div className='mt-10'>
                  <p className='text-gray-900 text-base mb-3 font-medium'>
                    Education : <span> {userprofiles.education}</span>
                  </p>
                  <p className='text-gray-900 text-base mb-3 font-medium'>
                    Location : <span>{userprofiles.location}</span>
                  </p>
                  <p className='text-gray-900 text-base mb-3 font-medium'>
                    phone : <span> {userprofiles.phone}</span>
                  </p>
                </div>
                <div className='mt-5 text-gray-700'>
                  <h3>Social Links</h3>
                  <a
                    href={userprofiles.linkedin}
                    target='_blank'
                    className='text-gray-900 text-base  font-bold ' rel="noreferrer"
                  >
                    {' '}
                    LinkedIn{' '}
                  </a>{' '}
                  |{' '}
                  <a
                    href={userprofiles.github}
                    target='_blank'
                    className='text-gray-900 text-base  font-bold ' rel="noreferrer"
                  >
                    {' '}
                    Github{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-4'>
          <div class='flex justify-center'>
            <div class='flex flex-col md:flex-row mx-4 w-full rounded bg-white shadow-lg'>
              <div class='p-6 flex flex-col justify-start'>
                <h5 class='text-gray-900 text-xl font-medium mb-2'>
                  Edit Profile
                </h5>
                <form onSubmit={handleUpdateProfile}>
                  <div className='grid grid-cols-2 lg:gap-10 gap-3'>
                    <div>
                      <input
                        type='text'
                        placeholder='First Name'
                        name='fname'
                        class='
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-2
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        lg:mb-10
                        mb-5
                        '
                      />
                      <input
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={user?.email}
                        disabled
                        class='
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-2
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        lg:mb-10
                        mb-5
                        '
                      />
                      <input
                        type='text'
                        placeholder='Location'
                        name='location'
                        class='
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-2
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        lg:mb-10
                        mb-5
                        '
                      />
                      <input
                        type='text'
                        placeholder='LinkedIn'
                        name='linkedin'
                        class='
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-2
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        lg:mb-10
                        mb-5
                        '
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        placeholder='Last Name'
                        name='lname'
                        class='
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-2
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        lg:mb-10
                        mb-5
                        '
                      />
                      <input
                        type='number'
                        placeholder='Number'
                        name='number'
                        class='
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-2
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        lg:mb-10
                        mb-5
                        '
                      />
                      <input
                        type='text'
                        placeholder='Education'
                        name='education'
                        class='
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-2
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        lg:mb-10
                        mb-5
                        '
                      />
                      <input
                        type='text'
                        placeholder='Github'
                        name='github'
                        class='
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-2
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        lg:mb-10
                        mb-5
                        '
                      />
                    </div>
                  </div>
                  <button className='btn btn-primary '>Update Profile</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

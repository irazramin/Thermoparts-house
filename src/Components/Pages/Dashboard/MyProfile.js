import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import userImg from '../../../assests/user.png';
import auth from '../../../Firebase.init';
const MyProfile = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [userProfiles,setUserProfiles] = useState({})

  useEffect(() =>{
     fetch(`https://thermopartshouse.herokuapp.com/userprofile/${email}`)
     .then((res) => res.json())
     .then(data =>{
       setUserProfiles(data)
     })
  },[email])

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

    fetch(`https://thermopartshouse.herokuapp.com/userprofile/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
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
          <div className='flex justify-center'>
            <div className='rounded-lg shadow-lg bg-white w-full mx-5'>
              <a href='#!'>
                <img
                  className='rounded-t-lg w-[100px] mx-auto'
                  src={userImg}
                  alt=''
                />
              </a>
              <div className='p-6'>
                <h5 className='text-gray-900 text-center text-xl font-medium mb-2'>
                  {userProfiles.firstName ? userProfiles?.firstName : 'N/A'} {userProfiles.lastName ? userProfiles?.lastName : 'N/A'}
                </h5>
                <div className='mt-10'>
                  <p className='text-gray-900 text-base mb-3 font-medium'>
                    Education : <span> {userProfiles.education ? userProfiles?.education : "N/A"}</span>
                  </p>
                  <p className='text-gray-900 text-base mb-3 font-medium'>
                    Location : <span>{userProfiles.location ? userProfiles?.location : "N/A"}</span>
                  </p>
                  <p className='text-gray-900 text-base mb-3 font-medium'>
                    phone : <span> {userProfiles.phone ? userProfiles?.phone : "N/A"}</span>
                  </p>
                </div>
                <div className='mt-5 text-gray-700'>
                  <h3>Social Links</h3>
                  <a
                    href={userProfiles.linkedin ? userProfiles?.linkedin : 'N/A'}
                    target='_blank'
                    className='text-gray-900 text-base  font-bold ' rel="noreferrer"
                  >
                    {' '}
                    LinkedIn{' '}
                  </a>{' '}
                  |{' '}
                  <a
                    href={userProfiles.github ? userProfiles?.github : 'N/A'}
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
          <div className='flex justify-center'>
            <div className='flex flex-col md:flex-row mx-4 w-full rounded bg-white shadow-lg'>
              <div className='p-6 flex flex-col justify-start'>
                <h5 className='text-gray-900 text-xl font-medium mb-2'>
                  Edit Profile
                </h5>
                <form onSubmit={handleUpdateProfile}>
                  <div className='grid grid-cols-2 lg:gap-10 gap-3'>
                    <div>
                      <input
                        type='text'
                        placeholder='First Name'
                        name='fname'
                        className='
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
                        className='
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
                        className='
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
                        className='
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
                        className='
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
                        className='
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
                        className='
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
                        className='
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

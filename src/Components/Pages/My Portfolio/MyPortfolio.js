import React from 'react';
import facebook from "../../../assests/facebook.png";
import github from "../../../assests/github.png";
import linkedin from "../../../assests/linkedin.png";
import pic from "../../../assests/my_pic.jpg";
import Footer from '../../Shared/Footer';
const MyPortfolio = () => {
  return (
    <div className='bg-slate-50 min-h-screen'>
      <div className='container mx-auto my-20'>
        <div className='grid lg:grid-cols-5 grid-cols-1 gap-5 '>
          <div className='  col-span-3'>
            <div className='bg-white p-10'>
              <h4 className='text-lg text-gray-900'>Hello</h4>
              <h2 className='text-5xl font-bold text-gray-900'>
                I'm <span className='text-primary'>Iraz</span> Ramin
              </h2>
              <p className='mt-7 text-gray-900'>
                This is iraz ramin frontend developer, who works with TML, CSS,
                UI libraries ( Bootstrap5, TailwindCSS), Javascript, ReactJS,
                NodeJS, MongoDB, and ExpressJS with dedication and hardworking
                looking for a responsible position to gain practical experience.
              </p>

              <div className='mt-5 text-gray-900 border-2 border-dashed  p-5'>
                <p className='text-lg font-bold text-gray-900'>Projects</p>
                <div>
                  <strong className='text-gray-900 text-base'>
                    <small>
                      1. Project Name: Perfumes Hut This is a MERN STACK
                      project.
                    </small>
                  </strong>
                  <p>
                    This is a warehouse-related website, where users can see the
                    product with their price and product stock. Users can add
                    their own products
                  </p>
                  <p className='mt-2'>
                    {' '}
                    <strong>Technologies Used:</strong>{' '}
                    Node.js,React.Js,MongoDB,React router,Tailwind,Firebase
                  </p>
                  <p>
                    <strong> Project Link: </strong>{' '}
                    <a
                      href='https://github.com/irazramin/perfumeshut-'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Frontend{' '}
                    </a>{' '}
                    |
                    <a
                      href='https://github.com/irazramin/Perfumeshuts-backend'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Backend
                    </a>{' '}
                    |{' '}
                    <a
                      href='https://warehouse-client-side.web.app/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Live
                    </a>
                  </p>
                </div>
                <div className='mt-5'>
                  <strong className='text-gray-900 text-base'>
                    <small>
                      2. Project Name: Weddography - A photography service{' '}
                    </small>
                  </strong>
                  <p>
                    This project is focused on ReactJs and Firebase
                    Authentication. Project summary, A professional photographer
                    who gives service to people. People can purchase different
                    packages from the website.
                  </p>
                  <p className='mt-2'>
                    {' '}
                    <strong>Technologies Used:</strong> React.Js, Firebase
                    authentication, TailwindCss, React router, Flowbite
                  </p>
                  <p>
                    <strong> Project Link: </strong>{' '}
                    <a
                      href='https://github.com/irazramin/Weddography'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Frontend{' '}
                    </a>{' '}
                    |
                    <a
                      href='https://warehouse-client-side.web.app/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Live
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-2 bg-white p-10 w-full'>
            <div className='flex justify-center items-center'>
              <div class='avatar'>
                <div class='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                  <img src={pic} />
                </div>
              </div>
            </div>
            <div className='text-center mt-5'>
              <p className='text-gray-900 text-lg font-bold'>Iraz Ramin Bayejid</p>
              <span className='text-gray-900 text-base'>
                Frontend Developer
              </span>
            </div>

            <div className='mt-5'>
              <span className='text-sm text-gray-500'>Email Address </span>
              <p className='text-gray-900'>irazramin@gmail.com</p>
            </div>
            <div className='mt-5'>
              <span className='text-sm text-gray-500'>Phone </span>
              <p className='text-gray-900'>01728257929</p>
            </div>
            <div className='mt-5'>
              <span className='text-sm text-gray-500'>Home Address </span>
              <p className='text-gray-900'>Road No: 20, Nikunja-2, Dhaka </p>
            </div>
            <div className='mt-5'>
              <span className='text-sm text-gray-500'>Education </span>
              <p className='text-gray-900'>
                <span className='text-lg font-semibold'>
                  {' '}
                  Computer Science & Engineering
                </span>
                <p>Primeasia University, Dhaka</p>
                <small>Expected Graduation year : 05/2023</small>
              </p>
            </div>

            <div className=' mt-5'>
              <span className='text-sm text-gray-500'>Social Links </span>

              <div className='mt-2 flex'>
                <a className='mx-2' href='https://www.facebook.com/irazraminB/'>
                  <img src={facebook} alt='' />
                </a>
                <a
                  className='mx-2'
                  href='https://www.linkedin.com/in/irazraminb/'
                >
                  <img src={linkedin} alt='' />
                </a>
                <a className='mx-2' href='https://github.com/irazramin'>
                  <img src={github} alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyPortfolio
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from 'react-rating-stars-component';
import auth from '../../../Firebase.init';

const AddAReview = () => {
    const [user] = useAuthState(auth)
    const [rating,setRating] = useState(0);

    const handleSubmitReview = e =>{
        e.preventDefault()
        console.log(rating)
        const name = e.target.name.value;
        const city = e.target.city.value;
        const comment = e.target.comment.value;

        const review = {
            userName:name,
            city,
            comment,
            rating
        }

        // fetch()
        e.target.reset();
    }
  return (
    <div className='mt-20'>
      <div class='flex justify-center'>
        <div class='block p-6 rounded-lg shadow-lg bg-white '>
          <h5 class='text-gray-900 text-xl leading-tight font-medium mb-2'>
            Add a review
          </h5>
          <form onSubmit={handleSubmitReview}>
            <div className='my-5'>
              <ReactStars
                filledIcon='2'
                value={0}
                edit={true}
                count={5}
                size={30}
                onChange={(e) => setRating(e)}
                activeColor='#83c914'
                color='#777'
              />
            </div>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={user?.displayName}
              disabled
              class='
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-[6px]
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        '
            />
            <input
              type='text'
              placeholder='City'
              name='city'
              class='
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-[6px]
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        '
            />

            <textarea
              className='w-full rounded-md border bordder-[#E9EDF4] py-[6px] px-5 bg-[#FssCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary mb-5'
              name='comment'
              id=''
              cols='20'
              rows='6'
              placeholder='write a review'
            ></textarea>

            <div className='text-right'>
              <button
                type='submit'
                class=' bg-primary text-white btn-sm btn border-0'
              >
                Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAReview
import React from 'react';
import Footer from '../../Shared/Footer';

const Blogs = () => {
  return (
    <div>
      <div className='container mx-auto my-20 min-h-screen text-gray-900'>
        <div className='mx-auto w-[70%]'>
          <div
            tabindex='0'
            class='collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5'
          >
            <div class='collapse-title text-xl font-medium'>
              How will you improve the performance of a React Application?
            </div>
            <div class='collapse-content'>
              <p>
                React কে অপটিমাইজ করতে সর্বপ্রথম যেটা করতে হবে সেটা হচ্ছে
                অপ্রয়োজনীয় সকল props বাদ দিয়ে দিতে হবে, শুধু প্রয়োজনীয় props
                গুলো ব্যবহার করতে হবে । এটি cpu consuming কম করে এবং অপ্রয়োজনীয়
                rendering থেকে বিরর থাকে। যখন আমরা map ইউজ করে লিস্ট বানাই
                সেখানে key লাগে , কিন্তু map থেকে যে index প্যারামিটার পাই সেটা
                লিস্টের key হিসেবে ব্যবহার করলে কোড অপটিমাইজ হয় না। Dom elements
                এ props spread করলে পারফরম্যান্সে বাধা ঘটায়।
              </p>
            </div>
          </div>
          <div
            tabindex='0'
            class='collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5'
          >
            <div class='collapse-title text-xl font-medium'>
              What are the different ways to manage a state in a React
              application?
            </div>
            <div class='collapse-content'>
              <p>অনেক ভাবে react এ state manage করা যায়</p>
              <ul>
                <li>
                  <strong>১। Local (UI) state : </strong> এটি আমরা সাধারনত
                  বিভিন্ন components এ ব্যবহার করে থাকি। local state manage করার
                  জন্য আমরা React এর useState ব্যবহার করে থাকি
                </li>
                <li>
                  <strong>২। Global (UI) state </strong> এটি আমরা সাধারনত
                  multiple components এ ব্যবহার করে থাকি। যখন app যেকোনো জায়গা
                  থেকে state update এর প্রয়োজন হয় তখন আমরা Global state ব্যবহার
                </li>
                <li>
                  <strong>৩। Server state </strong> যেসব ডাটা সার্ভার থেকে আসে
                  সেটা আমাদের UI এর সাথে integrate থাকতে হবে , এমন অনেক state
                  আছে যেটা data fetch এর সময় ম্যানেজ করে থাকে
                </li>
              </ul>
            </div>
          </div>
          <div
            tabindex='0'
            class='collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5'
          >
            <div class='collapse-title text-xl font-medium'>
              How does prototypical inheritance work?
            </div>
            <div class='collapse-content'>
              <p>
                Prototypal Inheritance একটি জাভাএক্রিপ্টের ফিচার যা methods and
                properties গুলো অব্জেক্টে এড করে থাকে।এটি এমন একটি method যা
                একটি অব্জেক্টের methods and properties কে inherit করতে পারে।
                Prototypal Inheritance সবচেয়ে গুরুত্বপূর্ণ সুবিধাগুলির মধ্যে
                একটি হল যে prototype তৈরি করার পরে নতুন properties add করা যায়।
                এটি একটি prototype add করতে allow যা সব object এর available থাকে
                হবে
              </p>
            </div>
          </div>
          <div
            tabindex='0'
            class='collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5'
          >
            <div class='collapse-title text-xl font-medium'>
              What is a unit test? Why should write unit tests?
            </div>
            <div class='collapse-content'>
              <p>
                Unit test একটি এক ধরনের software testing যেখানে software এর
                individual units অথবা components কে test করা হয়।মুলত নিখুত ভাবে
                software এর এরর বা বাগ খোজা হয় Unit test এর মাধ্যমে। Unit test
                আমাদের বাস্তবিক জীবনে অনেক হেল্পফুল , কারণ এটি সময় নষ্ট হতে
                বাচায় যেখানে আমাদের এরর খুজতে অনেক সময় লাগে সেখানে কয়টি Unit
                test লিখে দিলেই কাজ গুলো করে দেয়। এতে ডেভেলপারদের বেচে যায়।
              </p>
            </div>
          </div>
          <div
            tabindex='0'
            class='collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5'
          >
            <div class='collapse-title text-xl font-medium'>
              Why you do not set the state directly in React?
            </div>
            <div class='collapse-content'>
              <p>
                আমরা সরাসরি state আপডেট করতে পারবো না কারণঃ
                <ul>
                  <li>
                    ১। যদি আমরা সরাসরি state আপডেট করি এবং তারপর setState() কে
                    কল কর তাহলে আপডেটেট ভ্যালু টি replace হয়ে যাবে{' '}
                  </li>
                  <li>
                    ২। যখন আমরা সরাসরি state আপডেট করি ্ তখন state টি
                    immediately আপডেট করে না বরং এটি state বানিয়ে panding এ রাখে ।
                  </li>
                  <li>
                    ৩। এটি সব components থেকে আর কট্রোল হারিয়ে ফেলে
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;

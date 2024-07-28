import React, { useState } from 'react';
import { IoMapSharp, IoMailSharp } from "react-icons/io5";
import { FaMobile } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:8000/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Form submitted successfully:', result);
          setFormData({
            fullName: '',
            email: '',
            subject: '',
            message: ''
          });
          alert('Form submitted successfully!');
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <div className='flex project-bg mx-10 justify-center items-start lg:px-14 md:px-12 sm:px-10 mb-10'>
      <div className="text-left px-2 flex flex-col gap-4 w-3/4">
        <h2 className="text-3xl text-black font-bold mb-4">Leave Me your info</h2>
        <form onSubmit={handleSubmit} className='bg-white p-4'>
          <div className="mb-4">
            <label className="block text-gray-400 text-base font-bold mb-2" htmlFor="fullName">
              Your Full Name (Required)
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="shadow appearance-none bg-gray-200 border rounded w-full py-2 px-3 text-black"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-base font-bold mb-2" htmlFor="email">
              Your Email (Required)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none bg-gray-200 border rounded w-full py-2 px-3 text-black"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-base font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="shadow appearance-none bg-gray-200 border rounded w-full py-2 px-3 text-black"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-base font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 h-36 text-black"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <button type="submit" className="bg-[#EAB305] text-black font-bold py-2 px-4 rounded">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
      <div className='w-1/4 text-left px-2 flex flex-col gap-4'>
        <h2 className="text-3xl text-black font-bold mb-4">Contact Information</h2>
        <div className='flex flex-col justify-center items-center w-full bg-white px-4 pt-6 pb-4 gap-6'>
          <span className='bg-[#EAB305] p-2 text-xl rounded-full'>
            <IoMapSharp />
          </span>
          <div className='w-full'>
            <span className='flex justify-between items-center text-gray-500'>
              <p>Country : </p> <p>India</p>
            </span>
            <span className='flex justify-between items-center text-gray-500'>
              <p>City :</p> <p>Nagpur</p>
            </span>
            <span className='flex justify-between items-center text-gray-500'>
              <p>Street : </p> <p>Nagpur</p>
            </span>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full bg-white px-4 pt-6 pb-4 gap-6'>
          <span className='bg-[#EAB305] p-2 text-xl rounded-full'>
            <IoMailSharp />
          </span>
          <div className='w-full'>
            <span className='flex justify-between items-center text-gray-500'>
              <p>Email: </p> <p>abubakr@gmail.com</p>
            </span>
            <span className='flex justify-between items-center text-gray-500'>
              <p>Skype:</p> <p>@abubakr26</p>
            </span>
            <span className='flex justify-between items-center text-gray-500'>
              <p>Telegram: </p> <p>@abubakr26</p>
            </span>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full bg-white px-4 pt-6 pb-4 gap-6'>
          <span className='bg-[#EAB305] p-2 text-xl rounded-full'>
            <FaMobile />
          </span>
          <div className='w-full'>
            <span className='flex justify-between items-center text-gray-500'>
              <p>Support Services </p> <p>15369</p>
            </span>
            <span className='flex justify-between items-center text-gray-500'>
              <p>Office:</p> <p>7219196950</p>
            </span>
            <span className='flex justify-between items-center text-gray-500'>
              <p>Personal </p> <p>7219196950</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

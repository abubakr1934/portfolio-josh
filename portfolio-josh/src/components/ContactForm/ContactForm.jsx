import React from 'react'
import { IoMapSharp } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className='flex project-bg mx-10 justify-center items-start'>
      <div className="text-left px-2 flex flex-col gap-4 w-3/4 ">
        <h2 className="text-3xl text-black font-semibold mb-4">Leave Me your info</h2>
        <form action="submit" className='bg-white p-4'>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="fullName">
              Your Full Name (Required)
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="shadow appearance-none bg-gray-200  border rounded w-full py-2 px-3 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
              Your Email (Required)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none bg-gray-200  border rounded w-full py-2 px-3 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="shadow appearance-none bg-gray-200 border rounded w-full py-2 px-3 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 h-36 text-black"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-[#EAB305] text-black font-bold py-2 px-4 rounded"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
      <div className='w-1/4 text-left px-2 flex flex-col gap-4'>
        <h2 className="text-3xl text-black font-semibold mb-4">Contact Infomation</h2>

        <div className='flex flex-col justify-center items-center w-full bg-white px-4 pt-6 pb-4 gap-6'>
          <span className='bg-[#EAB305] p-2 text-xl rounded-full'>
            <IoMapSharp />
          </span>

          <div className='w-full'>
            <span className='flex justify-between items-center'>
              <p>Country : </p> <p>India</p>
            </span>
            <span className='flex justify-between items-center'>
              <p>City :</p> <p>Nagpur</p>
            </span>
            <span className='flex justify-between items-center'>
              <p>Streat : </p> <p>Nagpur</p>
            </span>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center w-full bg-white px-4 pt-6 pb-4 gap-6'>
          <span className='bg-[#EAB305] p-2 text-xl rounded-full'>
            <IoMapSharp />
          </span>

          <div className='w-full'>
            <span className='flex justify-between items-center'>
              <p>Country : </p> <p>India</p>
            </span>
            <span className='flex justify-between items-center'>
              <p>City :</p> <p>Nagpur</p>
            </span>
            <span className='flex justify-between items-center'>
              <p>Streat : </p> <p>Nagpur</p>
            </span>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full bg-white px-4 pt-6 pb-4 gap-6'>
          <span className='bg-[#EAB305] p-2 text-xl rounded-full'>
            <IoMapSharp />
          </span>

          <div className='w-full'>
            <span className='flex justify-between items-center'>
              <p>Country : </p> <p>India</p>
            </span>
            <span className='flex justify-between items-center'>
              <p>City :</p> <p>Nagpur</p>
            </span>
            <span className='flex justify-between items-center'>
              <p>Streat : </p> <p>Nagpur</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

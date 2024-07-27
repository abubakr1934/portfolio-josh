import React from 'react'

const ContactForm = () => {
  return (
    <div className='grid grid-cols-12 gap-4'>
        <div className="col-span-8 gap-2 px-2 py-2 ml-10 bg-gray-400 flex flex-col">
            <h2 className="text-3xl text-black"> Leave Me your info</h2>
            <form action="submit">
                <input type="text" name="" id="" />
            </form>
        </div>
      
    </div>
  )
}

export default ContactForm

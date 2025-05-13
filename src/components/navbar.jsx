import React from 'react'

export function Navbar() {

  return <>
    <nav className='bg-[#02042A] w-full'>
      <div className='flex items-center h-[80px] justify-center gap-x-12'>

        <div className='flex items-center justify-start w-full md:w-auto !ml-5'>
          <a href="/">
            <img src="./src/assets/razorpaylogo.svg" alt="" className='w-32 h-2' />
          </a>
        </div>

        {/* Mobile Menu Toggle (Hamburger Icon) */}
          <div className='md:hidden flex items-center justify-end !mr-5'>
            <button className='mr-5'>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        {/* Navigation Links */}
        <ul className='hidden md:flex h-full gap-6'>
          <li className='text-white h-full px-4 flex items-center hover:text-blue-500 cursor-pointer transition-all duration-200 relative group'>
            <a href="#">Payments</a>

            <span className='absolute left-0 bottom-0 w-full h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200'></span>
          </li>

          <li className='text-white h-full px-4 flex items-center hover:text-blue-500 cursor-pointer transition-all duration-200 relative group'>
            <a href="#">Banking</a>

            <span className='absolute left-0 bottom-0 w-full h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200'></span>
          </li>

          <li className='text-white h-full px-4 flex items-center hover:text-blue-500 cursor-pointer transition-all duration-200 relative group'>
            <a href="#">Corporate Card</a>
          </li>

          <li className='text-white h-full px-4 flex items-center hover:text-blue-500 cursor-pointer transition-all duration-200 relative group'>
            <a href="#">Payroll</a>
          </li>

          <li className='text-white h-full px-4 flex items-center hover:text-blue-500 cursor-pointer transition-all duration-200 relative group'>
            <a href="#">Resource</a>

            <span className='absolute left-0 bottom-0 w-full h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200'></span>
          </li>

          <li className='text-white h-full px-4 flex items-center hover:text-blue-500 cursor-pointer transition-all duration-200 relative group'>
            <a href="#">Support</a>

            <span className='absolute left-0 bottom-0 w-full h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200'></span>
          </li>

          <li className='text-white h-full px-4 flex items-center hover:text-blue-500 cursor-pointer transition-all duration-200 relative group'>
            <a href="#">Pricing</a>

            <span className='absolute left-0 bottom-0 w-full h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200'></span>
          </li>

        </ul>

        <div className='hidden md:flex items-center gap-6'>

          <img src="./src/assets/india_flag.png" alt="" className='h-[20px] w-[30px]' />

          <button className='h-[45px] w-[75px] !font-bold cursor-pointer !text-white !border-[1px] !border-blue-500 !text-sm'>Log in</button>

          <button className='h-[45px] w-[110px] font-semibold cursor-pointer !text-blue-300 !border-[2px] !border-amber-50 flex items-center justify-center gap-2 hover:text-blue-600 !bg-white'>Sign up

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>

          </button>
        </div>

      </div>
    </nav>
  </>
}
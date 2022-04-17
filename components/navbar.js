import React from 'react'
import {useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
        <section className='w-full fixed z-50 border-b border-gray-600 bg-black  py-0 '>
        <div className='xl:w-8/12 mx-auto relative z-50  '>
     <nav className='flex items-center flex-wrap    w-full '>
        <Link href='/' passHref>
        <p className="text-xl font-semibold" href="/">
                <img
                src="/svg/logo.svg"
                alt="Picture of the author"
              className='w-12 h-12 md:w-14 md:h-14  p-2 lg:p-1'
            />
                </p>
        </Link>
        <button
          className=' inline-flex  rounded lg:hidden text-white ml-auto  outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto  text-white justify-between`}
        >
          <div className=' lg:inline-flex lg:flex-row  lg:w-auto w-full my-auto lg:text-xl xl:text-2xl items-start  flex flex-col lg:h-auto   lg:px-10' >
            <div className='border-2 border-black hover:border-b-2 hover:border-b-blue-800 py-4 text-center px-2 '>
                <Link href='/#how' passHref>
                <p className=' px-2 hover:text-blue-800 active '>
                    How it Works
                </p>
                </Link>
            </div>
            <div className='border-2 border-black hover:border-b-2 hover:border-b-blue-800 py-4 px-2 '>
                <Link href='/#smartfeed' passHref>
                <p className='px-2 hover:text-blue-800 active '>
                    Smart feed
                </p>
                </Link>
            </div>
            
            <div className='border-2 border-black hover:border-b-2 hover:border-b-blue-800 py-4 px-2 '>
                <Link href='/#discover' passHref>
                <p className=' px-2 hover:text-blue-800 active'>
                    Discovery Project
                </p>
                </Link>
            </div>
            

            <div className='border-2 border-black hover:border-b-2 hover:border-b-blue-800 py-4 px-2 '>
                <Link href='/' passHref>
                <p className=' px-2 hover:text-blue-800 active justify-center flex  '>
                    Others
                </p>
                </Link>
            </div>            
          </div>
          <div className='rounded-lg border-2 px-2  mx-4 border-gray-600 hover:bg-blue-400 py-2 my-4 flex   justify-center'>
              <Link href='/nft' passHref>
              <button className=' px-4 text-lg text-center'>
                  Go to App
              </button>
              </Link>
          </div>
        </div>
      </nav>
     </div>
        </section>
    </>
  );

}

export default Navbar
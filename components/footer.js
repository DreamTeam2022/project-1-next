import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
function Footer() {
    return (
   <>
      <footer className="w-full bg-black  border-t border-gray-800 ">
      <div className='2xl:w-8/12 xl:w-10/12 lg:w-11/12 w-full mx-auto  text-gray-800 flex flex-wrap justify-left lg:py-24 '>
         <div className="lg:w-4/12 sm:w-12/12">         
               <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                  Getting Started
               </div>   
               <Link href='/' passHref>
            <p className="text-xl font-semibold" href="/">
                     <Image
                     src="/svg/logo.svg"
                     alt="Picture of the author"
                     width={60}
                     height={60}
                  />
                     </p>
            </Link>       
         </div>
         <div className=" text-gray-800 flex flex-wrap justify-left w-8/12">       

            <div className="p-5 w-1/2 sm:w-4/12 md:w-4/12">
            
                  <div className="text-lg uppercase text-gray-300 font-medium mb-6">
                     App quick links
                  </div>

            
                  <Link href="#" passHref>
                     <p  className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                        Smart feed
                     </p>
                  </Link>
                  <Link href="#" passHref>
                     <p  className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                        Ranking
                     </p>
                  </Link>
                  <Link href="#" passHref>
                     <p  className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                     Project search
                     </p>
                  </Link>
                  <Link href="#" passHref>
                     <p  className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                        Feature request
                     </p>
                  </Link>
                  <Link href="#" passHref>
                     <p  className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                        NFT Drops
                     </p>
                  </Link>

            </div>

         
            <div className="p-5 w-1/2 sm:w-4/12 md:w-4/12">
      
                  <div className="text-lg uppercase text-gray-300 font-medium mb-6">
                     Misc
                  </div>


                  <Link href="#" passHref>
                     <p className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                        Join NFT Newsletter
                     </p>
                  </Link>
                  <Link href="#" passHref>
                     <p className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                        Contact us
                     </p>
                  </Link>
                  <Link href="#" passHref>
                     <p className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                        Join our team
                     </p>
                  </Link>
                  <Link href="#" passHref>
                     <p className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                        Privacy policy
                     </p>
                  </Link>   
                  <Link href="#" passHref>
                     <p className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                        Partnerships
                     </p>
                  </Link>        
               
            </div>


            <div className="p-5 w-1/2 sm:w-4/12 md:w-4/12">
         
                  <div className="text-lg uppercase text-gray-200 font-medium mb-6">
                     Ayzd Family
                  </div>

                  <Link href="#" passHref>
                     <p  className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                        NFT Merch
                     </p>
                  </Link>
                  <Link href="#" passHref>
                     <p  className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                        Ayzd For Artists
                     </p>
                  </Link>
                  <Link href="#" passHref>
                     <p  className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                        NFT Resources
                     </p>
                  </Link>
                  <Link href="#" passHref>
                     <p  className="my-3 lg:my-4 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-600">
                        NFT Meditations
                     </p>
                  </Link>           
            
            </div>
         </div>
      </div>

         <div className=" pt-2 border-t border-gray-800 ">
            <div className="2xl:w-8/12 xl:w-10/12 lg:w-11/12 w-full mx-auto flex pb-5 px-3 mx-auto py-3 
                  text-gray-400 text-sm 
                  flex-col md:flex-row ">
                  <div className="mt-2 lg:text-2xl flex py-auto">
                     <h1> © Copyright 1998-year. All Rights Reserved.</h1>
                  </div>
               
                  <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row mx-auto flex">               
                     
                     <div className='mx-2 hover:border-[1px] border-blue-500 p-2 rounded-xl'>
                        <p href="#" >
                        <img src='/svg/linkedin.svg' alt='linkedin' className='w-6 h-6 md:w-10 md:h-10'/>
                        </p>
                     </div>

                     <div className='mx-2 hover:border-[1px] border-blue-500 p-2 rounded-xl'>
                     <p href="#" >
                     <img src='/svg/tiktok.svg' alt='tiktok' className='w-6 h-6 md:w-10 md:h-10'/>
                     </p>
                     </div>
                  
                  <div className='mx-2 hover:border-[1px] border-blue-500 p-2 rounded-xl'>
                     <p href="#" >
                     <img src='/svg/twitter.svg' alt='twitter' className='w-6 h-6 md:w-10 md:h-10'/>
                        </p>
                  </div>
                     <div className='mx-2 hover:border-[1px] border-blue-500 p-2 rounded-xl'>
                     <p href="#"  >
                     <img src='/svg/telegram.svg' alt='telegram' className='w-6 h-6 md:w-10 md:h-10'/>
                        
                     </p>
                     </div>
                     <div className='mx-2 hover:border-[1px] border-blue-500 p-2 rounded-xl '>
                     <p href="#" className="  ">
                        <img src='/svg/instagram.svg' alt='instagram' className='w-6 h-6 md:w-10 md:h-10'/>
                     </p>
                     </div>
                     <div className='mx-2 hover:border-[1px] border-blue-500 p-2 rounded-xl'>
                     <p href="#" className="  ">
                        <img src='/svg/social-discort.svg' alt='discort' className='w-6 h-6 md:w-10 md:h-10'/>
                     </p>
                     </div>
                  </div>
            </div>
         </div>
      </footer>
   </>
    )
}

export default Footer;
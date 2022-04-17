import React, { useEffect, useState} from 'react'
function Lifenewsfeed(props) {

  return (
    <>
    <div key={props.key} className='w-full bg-black  text-white px-4'>    

                    <button  className='bg-zinc-600 hover:bg-zinc-800 my-2  rounded w-full h-20 overflow-hidden '>
                        <div  className='flex  w-full relative'>
                           <div className=''>
                              <div className='w-20 h-20'>
                                 <img alt={props.name} src={props.image} className ="h-full rounded-l-lg xl:h-[280px] w-full" /> 
                              </div> 
                           </div>
                            <div className='   pl-2 py-1 '>
                              <div>
                              <h1 className='text-left h-6 overflow-hidden w-full'>{props.title}</h1>
                              <p className='text-sm text-left overflow-hidden '>{props.description}</p>
                              </div>
                              <div className='flex'>
                            {/*      <Link href={props.permalink}>
                                  <a  className="no-underline hover:underline ...">opensea Link</a>
                                  </Link>  */}
                               
                              </div>
                            </div> 
                        </div>
                    </button>  
    
      </div>
    </>
  )
}

export default Lifenewsfeed
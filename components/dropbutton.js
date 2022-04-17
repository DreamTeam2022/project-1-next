import React from 'react'

function Dropbutton({data}) {
  return (
    <>
    
  
    <div className='h-screen  pt-16 relative h-screen overflow-y-auto '>
    {
        data.map((item,index)=>{
            return(               
                <div key={index} className=' text-white  px-2 py-2 oveflow-y-scroll'>
                    <button className='flex justify-between hover:bg-zinc-800 w-full py-2 px-2 hover:rounded-lg'>
                        <p className='text-left'>{item.name}</p>
                        <p className='flex pl-auto border-[1px] border-gray-700 py-[2px] px-[6px] rounded'>3</p>
                    </button>            
    
                </div>
                
               
            )
        })
    }
    </div>
 
       
    
    </>
  )
}

export default Dropbutton
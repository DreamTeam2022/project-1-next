import React from 'react'

function GuidesCard({data}) {
  //  console.log(data)
    
  return (
    <>      
        {
            data.map((item,index) => {
                return (  
                    <div key={index} className='w-full md:w-1/3 xl:w-1/4 2xl:w-1/5 px-2 py-3 relative'>
                                                        
                        <div className='w-full bg-zinc-800 rounded-2xl '>
                        <img src={item.collection.banner_image_url} alt='femae' className='rounded-t-xl w-full h-[300px] ' />
                        <img src={item.image_url} alt='femae' className='absolute inset-x-0 shadow-xl bg-white w-16 h-16 top-[28px] rounded-full p-1 bg-white mx-auto'/* className=' absolute h-16 w-16 rounded-full w-full left-[40%] top-1/3 p-1 bg-black ' */ />
                        <h1 className='absolute text-white inset-x-0 mx-auto text-center text-green-400 text-2xl font-bold  top-1/3'> how to  aljlkbjal</h1>
                        <img src="/svg/logo.svg" alt='/lobo' className='absolute rounded-full h-6 w-6 inset-x-0 mx-auto top-1/2 ' />
                            <div className='p-3 border-b-[1px] border-gray-900'>
                                <p className='text-gray-500'></p>
                                <h1 className='text-gray-200 text-lg'>
                                    {item.name}
                                </h1>
                             <p className='text-gray-500'> {item.collection.name}</p>
                            </div>
                            
                        </div>
                    </div>
                )                          
            })                
         }     
       
    </>
  )
}

export default GuidesCard
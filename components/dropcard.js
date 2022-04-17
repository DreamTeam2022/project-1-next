import React from 'react'

function DropCard({data}) {
   // console.log(data)
    
  return (
    <>      
        {
            data.map((item , index) => {
                return (  
                    <div key={index} className='px-4 py-4'>                                                        
                        <div className='w-full bg-zinc-800 rounded-2xl'>
                        <img src={item.image_url} alt='femae' className='rounded-t-xl w-full h-[340px] ' />
                            <div className='p-3 border-b-[1px] border-gray-900'>
                                <p className='text-gray-500'></p>
                                <h1 className='text-gray-200 text-lg'>
                                    {item.name}
                                </h1>
                            <p className='text-gray-500'> Mint size : 5498465</p>
                            </div>
                            <div className='p-3 mb-3 text-gray-500'>
                                <div className='flex justify-between pb-3'>
                                    <p>1514564</p>
                                    <p> -552144%</p>
                                </div>
                                <button className='text-center bg-black w-full py-2 rounded-xl text-white'>
                                        Add to Callendar
                                </button>
                            </div>
                        </div>
                    </div>
                )                          
            })                
         }     
       
    </>
  )
}

export default DropCard
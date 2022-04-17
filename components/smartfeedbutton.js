import react, {useState, useEffect} from 'react';
import axios from 'axios';

function Smartfeedbutton({NewsData}) {
  //console.log(NewsData)
  return (
    <>
      <div className='py-2 px-2'>
     {
        NewsData.map((items ,index) => {
               return (   
                                     
                <div key={index} className=' py-1 '>
                    <button className='flex w-full bg-zinc-900 py-1 pl-1 my-1 rounded-xl text-white text-left'>
                  <img alt={items.name} src={items.image_url} className ="rounded-full  h-[30px] xl:h-[30px] w-[30px]" />
                <h5 className ="text-gray-400 text-sm xl:text-lg py-1 pl-2">{items.name}</h5>
              </button>
            </div>                
                             
            )
          })}         
        
      </div> 
    </>
  )
}

export default Smartfeedbutton 
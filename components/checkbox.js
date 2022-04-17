import React from "react";

const Checkbox = ({ data}) => {
    return (
        <>       
      
        <div className='h-screen  pt-2 relative h-screen overflow-y-auto '>
            <div className='py-2 flex h-12 border-b-[1px] border-gray-700'>
                <img src='/svg/category.svg' alt='category' className='w-6 h-6 my-auto ml-2'/>
                <h1 className='my-auto pl-2'>Category</h1>
            </div>
        {
            data.map((item,index)=>{
                return(
                    <>
                    <div key={index} className="pl-4 py-1">
                         <input type="checkbox" className="bg-black text-2xl p-2" /* onChange = {() => filterItem(Val)} key={id} *//> {item.name} {/* {Val} */}
                    </div>
                    </>     
                
                    
                   
                )
            })
        }
        </div>
     
           
        
        </>
      )
    }
 
export default Checkbox;
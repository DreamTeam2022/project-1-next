import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'
import NFTNavbar from '../../components/nftnavbar';
import Link from 'next/link';
import Lifenewsfeed from '../../components/lifenewsfeed';
import Upcomingdropscards from '../../components/upcomingdropscard';
import Smartfeedbutton from '../../components/smartfeedbutton';


const Dashboard = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };


  const [APIData, setAPIData] = useState([])
  useEffect(() => {
      //axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json`)
     //axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x646B56b7775e357DA5c35Cd2f8441Bb6aC0EDce1&format=json&order_direction=asc')
     axios.get('https://api.opensea.io/api/v1/assets?limit=100')
    // axios.get('https://testnets-api.opensea.io/assets?format=json&order_direction=asc')

          .then((response) => {
              setAPIData(response.data.assets);
          }).catch(err => console.log(err))
  }, [])

console.log(APIData)

  return (
    <>
        <NFTNavbar/>  
        <div className='w-full bg-black flex flex-wrap text-white relative pt-16 '>
            
            {/* Search box here */}
            
            <div className='w-full lg:w-2/12 border-r-[1px] border-gray-900 relative'> 
                <div className='hidden lg:block h-16  px-4 py-2 border-b-[1px] border-gray-900 '>
                    <div className='flex justify-between  bg-gray-800 rounded-lg px-4 py-2'>
                        <div className='my-auto flex'>
                            <img src='/svg/searchicon.svg' alt='smart feed' className='h-4 w-4 my-auto' />
                            <input  className=" w-full text-black  text-lg bg-gray-800"
                            id="name"
                            name="name"
                            type="text"
                            placeholder='Search NFT Project'
                           /*  onChange={(e) => searchItems(e.target.value)} */
                        />
                        </div>
                        
                    </div>
                </div>
                <div className='fixed z-40 h-16 w-full lg:w-2/12 px-4 py-2 '>
                    <div className='flex justify-between  bg-gray-800 rounded-lg px-4 py-2'>
                        <div className='my-auto flex'>
                            <img src='/images/smart_feed.png' alt='smart feed' className='h-4 w-4 my-auto' />
                            <h1 className='my-auto pl-2'>Smart Feed</h1>
                        </div>
                        <button onClick={handleClick} className='lg:hidden '>
                           <img src='/svg/arrowdown.svg' alt='arrow' className=' text-white border-gray-200' />
                        </button>
                    </div>
                </div>
                <div className={`${ active ? '' : 'hidden' }    px-4  `} >
                    <div className='w-full flex-row px-4 bg-gray-800 rounded-lg py-2 mt-12'>
                     <Smartfeedbutton NewsData = {APIData}/>  
                    </div>
                </div>

                <div className='hidden lg:block h-80 lg:h-screen overflow-hidden overflow-y-auto '>                                         
                   <Smartfeedbutton  NewsData = {APIData}/>                 
                </div>
            </div>           
            

{/*  life news feed  */}

            <div className='w-full lg:w-5/12 h-screen overflow-y-auto'> 
                <div className='h-16 border-b-[1px] border-gray-900 flex px-6'>
                    <img src='/svg/livenewsfeed.svg' alt='news feed ' className='h-6 w-6 my-auto' />
                    <h1 className='my-auto pl-4'> Life News Feed</h1>
                </div>  
                {APIData.map((news)=>{
                    return(
                        <Lifenewsfeed key={news.id} link={news.permalink} image={news.image_url} title ={news.name} description={news.collection.name}/>  
                    )
                })}

                              
            </div>
            
            
        {/* upcoming drops */}
            <div className='w-full lg:w-5/12 border-l-[1px] border-gray-900 h-screen overflow-y-auto '>
                <div className='h-16 border-y-[1px] border-gray-900 flex justify-between px-2 '>
                    <div className='flex'>
                        <img src='/svg/calendar.svg' alt='drops' className='h-6 w-6 my-auto ' />
                        <h1 className='my-auto  pl-2'> Up coming Drops </h1>
                    </div>
                    <button className='px-4 hover:text-gray-600'>
                        View All
                    </button>
                </div>             
                
             
              {/*   {APIData.map((drops) =>{
                    return(
                        <Upcomingdropscards image={drops.image_url}  name={drops.name} id={drops.id}/>
                    )
                })} */}
              
                <Upcomingdropscards  data = {APIData}/> 
                


                <div className='h-16 border-y-[1px] border-gray-900 flex justify-between px-2 '>
                    <div className='flex'>
                        <img src='/svg/calendar.svg' alt='drops' className='h-6 w-6 my-auto ' />
                        <h1 className='my-auto  pl-2'> Metaverse Project </h1>
                    </div>
                    <button className='px-4 hover:text-gray-600'>
                        View All
                    </button>
                </div>             
               
                <Upcomingdropscards  data = {APIData}/>          


                <div className='h-16 border-b-[1px] border-gray-900 flex justify-between px-2 '>
                    <div className='flex'>
                        <img src='/svg/guides.svg' alt='drops' className='h-6 w-6 my-auto ' />
                        <h1 className='my-auto  pl-2'> Featured Guids </h1>
                    </div>
                    <button className='px-4 hover:text-gray-600'>
                        View All
                    </button>
                </div>                
                 <Upcomingdropscards data = {APIData}/>  
            </div> 
        </div>





{/*     <NFTNavbar/> */}
        <div className='fixed w-full mt-16'>   
            {/* <div className='w-full flex h-16 py-4 pl-10 bg-zinc-800 text-white '>
                <div className='my-auto'>
                <input  className=" w-full text-black bg-zinc-800 text-xl border-none  "
                    id="name"
                    name="name"
                    type="text"
                    placeholder='Search NFT Project'
                    onChange={(e) => searchItems(e.target.value)}
                /> 
                </div>
            </div> */}           
        </div>         
    </>
  );
};

export default Dashboard;
import react, {useState, useEffect} from 'react';
import axios from 'axios';
import Dropbutton from '../../components/dropbutton';
import GuidesCard from '../../components/guidescard';
import Button from '../../components/Button'
import NFTNavbar from '../../components/nftnavbar';

import React from 'react'

export default function index() {
    const [APIData, setAPIData] = useState([])
    useEffect(() => {
    axios.get('https://api.opensea.io/api/v1/assets?limit=100')
      .then((response) => {
                setAPIData(response.data.assets);
            }).catch(err => console.log(err))
    }, [])

    const childToParent = () => {
        setAPIData();
    }

    return (
        <>
        <NFTNavbar/>
        <div className='w-full flex  bg-black pt-16'>
            <div className='hidden lg:block  lg:w-2/12 w-full border-r-[1px] border-gray-700 relative  '>
                <div className='bg-black z-30 h-16 border-b-[1px] border-r-[1px] border-gray-700 text-white flex fixed  w-2/12 px-2'>
                    <img src='/svg/allguides.svg' alt='' className='w-6 h-6 my-auto '/>
                    <p className='my-auto pl-2'>all Guides</p>
                </div>
                <Dropbutton data={APIData}/>
            </div>
            <div className='w-full lg:w-10/12 flex flex-wrap h-screen overflow-y-scroll'>
                <div className='relative w-full '>
                    
                    
                        <video autoPlay loop style={{ width: '100%', height: '100%' }} className=" top-0 ">
                            <source src="/backgroundvideo.mp4" />
                        </video> 
                    
           {/*          <div className='pl-4 lg:pl-20 lg:pt-40 pt-6 z-40  '>
                        <h1 className='text-gray-400 xl:text-3xl z-40'>Getting started with NFTs</h1>
                        <h1 className='text-gray-500 pb-6 font-bold'>
                        Easy and comprehensive guid to the NFT world
                        </h1>
                        
                        <Button name={'Learn more about NFT'}/>                
    
                    </div>  */}
    
                </div>
               
                    
                <GuidesCard data = {APIData}/>            
            </div>      
    
        </div>
        </>
      )
}

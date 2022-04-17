import React from 'react'
import Button from '../components/Button'

function Hero() {
  return (
    <>
        <section id='hero' className='relative pt-20 bg-black'>
            <div className='w-full  h-full'>
                <div className='text-center pt-24 xl:pt-40 2xl:pt-60  relative '>
                    <h1 className='text-blue-400 xl:text-3xl'>Be at the frontline of the nft revolution</h1>
                    <h1 className='text-white text-5xl xl:text-7xl font-bold'>
                    Metaverse & NFT Analytics
                    </h1>
                    <div className='lg:w-4/12 md:w-8/12 w-10/12 mx-auto text-gray-500 '>
                        <p className='2xl:text-2xl xl:text:xl xl:py-4'>
                        Ayzd helps you learn about the NFT and Metaverse drops. Biggest NFT project database, live news feed, top collections, powerful analytics, statistics & more.
                        </p>
                    </div>
                    <Button name={'Open Dashboard'}/>                

                </div>               
               <video autoPlay loop style={{ width: '100%', height: '100%' }} className="lg:-mt-32 md:-mt-12 bottum-0 z-10">
                    <source src="/backgroundvideo.mp4" />
                </video>
                             
            </div>
        </section>
    </>
  )
}
export default Hero
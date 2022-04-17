import React from 'react'
import Button from '../components/Button'
import Container from '../components/container'

function Smartfeed() {
  return (
    <>
    <div className='relative bg-[#0b0326] '>
        <Container>
            <section className='' >
                <div className='w-full '>
                    <div className='my-auto py-20 md:py-30 lg:py-40'>
                        <img src='/svg/smartfeedd.svg' className='w-full mx-auto md:w-7/12 '/>
                        <h1 className='text-gray-200 text-center text-3xl font-bold w-full md:w-8/12 mx-auto'>
                            Be ahead of the market and receive the best news in one place
                        </h1>
                        <p className='py-2 text-gray-300 text-center w-full md:w-8/12 mx-auto'>
                            We aggregate the best source of NFT news and put them in a convernient way for you. Set Ayzd as your homepage and you will be up to date with the latest trends an events
                        </p>
                        <div className='text-center py-4'>
                            <Button name='View Smart Feed'/>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
   <div className='h-[10vh] w-full h-full absolute top-0  bg-gradient-to-b from-[0b0326] to-blue-900'>

        </div> 
        <div>

        </div>
    </div>
    <hr className='border-b-1 border-gray-700'></hr>
    </>
  )
}

export default Smartfeed
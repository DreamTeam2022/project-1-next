import React from 'react'
import Button from '../components/Button';
import { useViewportScroll,useTransform,motion, scrollY, scrollYProgress} from "framer-motion"
//import anime from 'animejs';

function Lead() {
 
    const { scrollY, scrollYProgress } = useViewportScroll();        
               // useTransform(motionValue, from, to);
                const scaletopAnim = useTransform(scrollYProgress, [0.1, 0.3], [0.2, 1]);
                const xtopPosAnim = useTransform(scrollYProgress, [0.1, 0.4], [-10, 1]);
                const ytopPosAnim = useTransform(scrollYProgress, [0.1, 0.4], [100, -10]);
        
            // dashboard image animation
             
                const scaledashboardimage = useTransform(scrollYProgress, [0.1, 0.16], [0.5, 1]);
                const xdashAnim = useTransform(scrollYProgress, [0.1, 0.4], [-200, 10]);
                const ydashAnim = useTransform(scrollYProgress, [0.1, 0.4], [300, -10]);
        
            // useTransform(motionValue, from, to);
                const scalesunset = useTransform(scrollYProgress, [0.1, 0.2], [0.5, 1]);
                //const  xPosAnimsunset = useTransform(scrollYProgress, [0.2,  0.3], ["10%",  "-10%"]);
                const yPosAnimsunset = useTransform(scrollYProgress, [0.2, 0.38 ], [1, 700]);



  return (
    <>
    <div className='bg-black'> 
            <section className='w-full  min-h-screen flex px-2 md:px-10  overflow-hidden'>
                <div className='w-full max-w-screen-xl  m-auto  '>
                    <div className='flex flex-wrap w-full py-[150px]'>         
                   
                        <div className='block md:hidden w-full   md:order-last xl:order-first'>
                            <img src='/svg/leadsectionimage.svg' className='w-full h-full'/> 
                        </div> 

                        <div className='hidden md:block w-full w-12/12 md:w-8/12  relative md:order-last xl:order-first'>
                            <div className='my-auto flex xl:pr-20'>
                            <motion.div  style={{      
                                scale : scaledashboardimage,    }}            
                                className=' mx-auto z-30 '>
                                <img src='/svg/dashboardimage.svg'   className='mx-auto w-[700px] h-full' />  
                            </motion.div>
                        
                            <motion.div  style={{
                                scale: scaletopAnim,              
                                }}  className='absolute  right-0 xl:pr-20  z-10'>
                                <img src='/svg/backimage.svg'  className='  ' />
                            </motion.div>              
                    
                        
                            <motion.div   style={{                     
                                    scale: scalesunset, 
                                /*  x: xPosAnimsunset, */
                                    y: yPosAnimsunset,                      
                                    }} className='overflow-hidden absolute left-1/4 md:left-[38%] lg:left-[40%] md:-ml-8 ml-8 top-[60%] md:top-[58%]    -mt-12 z-30 '>
                                            <img   src='/svg/sunset.svg'   className=' z-50 w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[250px]' /> 
                            </motion.div>
                    
                            </div>  
                        </div>
                        <div className='w-full w-12/12 md:w-4/12  flex'>
                            <div className=' my-auto'>
                                <h1 className='text-4xl lg:text-5xl xl:text-[48px]  font-bold text-white text-center md:text-left'>
                                    Learn first about next cyprto Punks
                                </h1>
                                <p className='text-xl lg:text-2xl xl:text-[16px]  text-gray-400 py-2 text-center md:text-left'>
                                    Ayzd helps you to learn about NFT projects. Biggest NFT and Metaverse database, live news feed, top collections, powerfull analytics, statixticand more
                                </p>
                                <div className='py-4 text-center md:text-left'>
                                <Button name={'Discover Drops'}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
   
    </div>
    <hr className='border-gray-900'></hr>
    </>
  )
}

export default Lead
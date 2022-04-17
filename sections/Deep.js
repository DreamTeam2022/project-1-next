import React from 'react'
import Button from '../components/Button'
import { useViewportScroll,useTransform,motion, scrollY, scrollYProgress} from "framer-motion"


function Deep() {

    const { scrollY, scrollYProgress } = useViewportScroll();        
               // useTransform(motionValue, from, to);
                const scalecard = useTransform(scrollYProgress, [0.4, 0.47], [0.2, 1]);
                const xPoscard = useTransform(scrollYProgress, [0.4, 0.47], [10, 1]);
                const yPoscard = useTransform(scrollYProgress, [0.4, 0.47], [-60, 80]);
        
            // dashboard image animation
             
                const scalegraph = useTransform(scrollYProgress, [0.4, 0.47], [0.5, 1]);
                const xPosgraph = useTransform(scrollYProgress, [0.4, 0.47], [-100, 10]);
                const yPosgraph = useTransform(scrollYProgress, [0.4, 0.47], [30, 0]);

             // dashboard image animation
             
             const scalecartoon = useTransform(scrollYProgress, [0.4, 0.47], [0.5, 1]);
             const xPoscartoon = useTransform(scrollYProgress, [0.4, 0.47], [100, -10]);
             const yPoscartoon = useTransform(scrollYProgress, [0.4, 0.47], [30, 0]);
        
            // useTransform(motionValue, from, to);
          
                const scalesunset = useTransform(scrollYProgress, [0.4, 0.47], [1, 1.4]);              
                const yPosAnimsunset = useTransform(scrollYProgress, [0.38, 0.21 ], [1, -700]);
                

  return (
    <>
        <div className='bg-black relative'>     
            <section className='w-full min-h-screen flex m-auto px-2 md:px-10  overflow-hidden'>
                <div className='w-full max-w-screen-xl  m-auto  '>                
                    <div className='flex flex-wrap w-full py-[150px]'>  

                        <div className='md:hidden w-full '>
                             <img src='/svg/deepsectionimage.svg' className='w-full h-full'/> 
                        </div>       
                        <div className='hidden md:block w-full w-12/12 md:w-8/12  relative md:order-last xl:order-first '>
                            <motion.div >
                            <motion.img style={{                     
                                    scale: scalecard, 
                                     x: xPoscard, 
                                     y: yPoscard,                      
                                    }} src='/svg/card.svg' className='absolute bottom-0 -mb-24 md:-mb-6 lg:mb-0 md:left-20 lg:left-1/4  z-20'/>
                            </motion.div>

                            <motion.div style={{                     
                                    scale: scalesunset, 
                                /*  x: xPosAnimsunset, */
                                    y: yPosAnimsunset,                      
                                    }} className='overflow-hidden absolute left-1/4 md:left-[38%] lg:left-[40%] md:-ml-6 ml-8  md:top-[30%]    -mt-12 z-30 '>
                                
                                <img src='/svg/whitesunset.svg'   className=' z-50 w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[250px]' /* className='relative ml-[100px] mt-[40px] md:ml-[120px] md:mt-[60px] lg:ml-[210px] lg:mt-[80px] xl:ml-[260px] xl:mt-[111px] 2xl:mt-[100px] w-[170px] md:w-[200px] xl:w-[230px] z-20' *//>

                            </motion.div>

                            <motion.div>
                             <motion.img style={{                     
                                    scale: scalegraph, 
                                     x: xPosgraph, 
                                     y: yPosgraph,                      
                                    }} src='/svg/graph.svg' className='absolute top-0 right-0 lg:mr-20 xl:mr-40 z-10'/>
                            </motion.div>


                            <motion.div>
                            <motion.img style={{                     
                                    scale: scalecartoon, 
                                     x: xPoscartoon, 
                                     y: yPoscartoon,                      
                                    }} src='/svg/cartoon.svg' className='absolute top-0  md:left-20 lg:left-1/4 z-10'/>
                            </motion.div>
                        </div>

                        <div className='w-full w-12/12 md:w-4/12  flex pt-32 md:pt-2'>
                            <div className=' my-auto'>
                                <h1 className='text-4xl lg:text-5xl xl:text-[48px]  font-bold text-white text-center md:text-left'>
                                    Deep dive into the project analytics
                                </h1>
                                <p className='text-xl lg:text-2xl xl:text-[16px]  text-gray-400 py-2 text-center md:text-left'>
                                    Understand which projects are on a rise right now and which are losing its hpye
                                </p>
                                <div className='py-4 text-center md:text-left'>
                                <Button name={'Project Database'}/>
                                </div>

                            </div>
                        </div> 
                    </div>
                </div>
            </section>

        <div className=' w-full absolute bottom-0'><img src='/svg/sectionbackground.svg' alt='section' className=' w-[100vw] no-repeat ' /></div>
        </div>
    <hr className='border-gray-900'></hr>
    
    </>
  )
}

export default Deep
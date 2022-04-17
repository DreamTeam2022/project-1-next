import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 pb-20 w-screen bg-black  transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md   h-16"> {/*logo container*/}
   {/*              <p className="text-xl font-semibold" href="/">
                <Image
                src="/svg/logo.svg"
                alt="Picture of the author"
                width={100}
                height={100}
            />
                </p> */}
            </div>
            <div className="flex flex-col ml-4">
                <div className='py-3 text-md flex'>
                    
                   <img src='/svg/dashboard.svg'  alt='' className='w-[28px] h-[28px] stroke-white my-auto'/>
                    <Link href="/dashboard" className="py-10 bg-red" passHref>
                    <p className="text-xl pl-10"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Dashboard
                    </p>
                    </Link>
                </div>
                <div className='py-3 text-md flex'>
                <img src='/svg/nft.svg'  alt='' className='w-[28px] h-[28px] stroke-white my-auto'/>
                    <Link href="/nft" passHref>
                    <p className="text-xl pl-10"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    NFT Project
                    </p>
                    </Link>
                </div>
                <div className='py-3 text-md flex'>
                    <img src='/svg/calendar.svg'  alt='' className='w-[28px] h-[28px] stroke-white my-auto'/>
                    <Link href="/drops" passHref>
                    <p className="text-xl pl-10"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Drop & IGO Calendar
                    </p>
                    </Link>
                </div>
                <div className='py-3 text-md flex'>
                <img src='/svg/guides.svg'  alt='' className='w-[28px] h-[28px] stroke-white my-auto'/>
                    <Link href="/guides" passHref>
                    <p className="text-xl pl-10"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Guid & Research
                    </p>
                    </Link>
                </div> 
            </div>  
        </div>
    )
}

export default function NFTNavbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="fixed z-50 w-full flex  filter drop-shadow-md bg-black text-gray-500 px-4 py-4 h-16 items-center border-b-[1px] border-zinc-700">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className=" flex items-center">
                <Link href='/' passHref>
                    <p className="text-2xl font-semibold" href="/">
                    <Image
                    src="/svg/logo.svg"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                />
                    </p>
                </Link>
               
            </div>
            <div className=" flex  items-center justify-between  w-full">    
                <div className="hidden lg:flex pl-4 text-sm">
                     <div className="flex active px-2 ">
                          <img src='/svg/dashboard.svg'  alt='' className='w-[24px] h-[24px] stroke-white my-auto'/>
                            <Link href="/dashboard" className="py-auto" passHref>                   
                                <p className='pl-2'>Dashboad</p>
                            </Link>
                        </div>

                        <div className='flex px-2'>
                        <img src='/svg/nft.svg'  alt='' className='w-[24px] h-[24px] stroke-white my-auto'/>
                            <Link href="/nft" className='pl-6' passHref>
                                <p className='pl-2'>NFT Project</p>
                            </Link>
                        </div>
                        <div className='flex px-2'>
                            <img src='/svg/calendar.svg'  alt='' className='w-[24px] h-[24px] stroke-white my-auto'/>
                            <Link href ="/drops" passHref>
                                <p className='pl-2'> Drop & IGO Calendar</p>
                               
                            </Link>
                        </div>
                        <div className='flex px-2'>
                           <img src='/svg/guides.svg'  alt='' className='w-[24px] h-[24px] stroke-white my-auto'/>
                            <Link href ="/guides" passHref>
                              <p className='pl-2'>
                              Guid & Research
                              </p>
                            </Link>
                        </div> 
                        
                    
                   
                </div>   
                <div className="hidden lg:flex  pbg-blue-200 px-6 py-2 rounded-lg text-white  bg-violet-700">
                    <Link href="" passHref>
                        <p>Subscribe to NFT Newsletter</p>
                    </Link>
                </div>             
            </div>
            <div>
                 <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center  lg:hidden" onClick={() => {
                    setOpen(!open)
                    }}>
                   
                    <span className={`h-1 w-full bg-gray-400 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-gray-400 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-gray-400 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
            </div>
        </nav>
    )
}
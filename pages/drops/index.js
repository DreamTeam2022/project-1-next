import react, {useState, useEffect} from 'react';
import axios from 'axios';
import Dropbutton from '../../components/dropbutton';
import DropCard from '../../components/dropcard';
import NFTNavbar from '../../components/nftnavbar';

function Drops() {
    const [APIData, setAPIData] = useState([])
    useEffect(() => {
    axios.get('https://api.opensea.io/api/v1/assets?limit=100')
      .then((response) => {
                setAPIData(response.data.assets);
            }).catch(err => console.log(err))
    }, [])  
  return (
    <>
    <NFTNavbar/>
    <div className='w-full flex  bg-black pt-16'>
        <div className='hidden lg:block  lg:w-2/12 w-full border-r-[1px] border-gray-700 relative '>
            <div className='bg-black z-30 h-16 border-b-[1px] border-gray-700 text-white flex fixed  w-2/12 px-2'>
                <img src='/svg/calendar.svg' alt='' className='w-6 h-6 my-auto '/>
                <p className='my-auto pl-2'>Drop Date</p>
            </div>
            
            <Dropbutton data={APIData}/>
            
            
        </div>
        <div className='w-full lg:w-10/12 flex flex-wrap h-screen overflow-y-scroll'>
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-12'> 
            <DropCard data = {APIData}/>  
            </div>          
        </div> 
    </div>
    </>
  )
}

export default Drops; 

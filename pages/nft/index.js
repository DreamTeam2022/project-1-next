import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'
import NFTNavbar from '../../components/nftnavbar';
//import NftCard from '../../components/NftCard';
import Link from 'next/link';
import Checkbox from '../../components/checkbox';
/* import NftCard from '../../components/NftCard'; */

const Nft = () => {
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



 // console.log(APIData)
   const [searchInput, setSearchInput] = useState('');
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = APIData.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(APIData)
    }
  }

   const [filteredResults, setFilteredResults] = useState([]);
   const filteredData = APIData.filter((item) => {
    return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  })  



  return (
    <>
    <NFTNavbar/>
    <div className='fixed w-full mt-16'>   
    <div className='w-full flex h-16 py-4 pl-10 bg-zinc-800 text-white '>
        <div className='my-auto'>
        <input  className=" w-full text-black bg-zinc-800 text-xl border-none  "
            id="name"
            name="name"
            type="text"
            placeholder='Search NFT Project'
            onChange={(e) => searchItems(e.target.value)}
           /> 
        </div>
    </div>
    <div className=' bg-black py-2 pl-4'>
    <button  className='lg:hidden py-2  rounded-lg  text-white  hover:text-white flex px-4  bg-zinc-800 '
                onClick={handleClick}
                >  
             <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M0.791667 4.26062H2.95767C3.12759 4.88583 3.49851 5.43775 4.01322 5.83123C4.52792 6.22472 5.1578 6.43791 5.80569 6.43791C6.45357 6.43791 7.08345 6.22472 7.59816 5.83123C8.11286 5.43775 8.48379 4.88583 8.65371 4.26062H18.2083C18.4183 4.26062 18.6197 4.17721 18.7681 4.02875C18.9166 3.88028 19 3.67892 19 3.46896C19 3.25899 18.9166 3.05763 18.7681 2.90916C18.6197 2.7607 18.4183 2.67729 18.2083 2.67729H8.65371C8.48379 2.05208 8.11286 1.50016 7.59816 1.10668C7.08345 0.713189 6.45357 0.5 5.80569 0.5C5.1578 0.5 4.52792 0.713189 4.01322 1.10668C3.49851 1.50016 3.12759 2.05208 2.95767 2.67729H0.791667C0.581704 2.67729 0.38034 2.7607 0.231874 2.90916C0.0834075 3.05763 0 3.25899 0 3.46896C0 3.67892 0.0834075 3.88028 0.231874 4.02875C0.38034 4.17721 0.581704 4.26062 0.791667 4.26062ZM5.80529 2.08354C6.0793 2.08354 6.34716 2.16479 6.57499 2.31702C6.80282 2.46925 6.98039 2.68563 7.08525 2.93878C7.19011 3.19193 7.21755 3.47049 7.16409 3.73924C7.11063 4.00798 6.97868 4.25484 6.78493 4.44859C6.59118 4.64235 6.34432 4.77429 6.07557 4.82775C5.80683 4.88121 5.52827 4.85377 5.27512 4.74891C5.02196 4.64405 4.80559 4.46648 4.65336 4.23865C4.50113 4.01082 4.41988 3.74296 4.41988 3.46896C4.42029 3.10165 4.56639 2.74951 4.82612 2.48978C5.08584 2.23006 5.43799 2.08396 5.80529 2.08354ZM18.2083 9.20854H16.0423C15.8727 8.58319 15.5019 8.03107 14.9873 7.63742C14.4726 7.24377 13.8427 7.03048 13.1947 7.03048C12.5468 7.03048 11.9168 7.24377 11.4022 7.63742C10.8875 8.03107 10.5167 8.58319 10.3471 9.20854H0.791667C0.581704 9.20854 0.38034 9.29195 0.231874 9.44041C0.0834075 9.58888 0 9.79024 0 10.0002C0 10.2102 0.0834075 10.4115 0.231874 10.56C0.38034 10.7085 0.581704 10.7919 0.791667 10.7919H10.3471C10.5167 11.4172 10.8875 11.9693 11.4022 12.363C11.9168 12.7566 12.5468 12.9699 13.1947 12.9699C13.8427 12.9699 14.4726 12.7566 14.9873 12.363C15.5019 11.9693 15.8727 11.4172 16.0423 10.7919H18.2083C18.4183 10.7919 18.6197 10.7085 18.7681 10.56C18.9166 10.4115 19 10.2102 19 10.0002C19 9.79024 18.9166 9.58888 18.7681 9.44041C18.6197 9.29195 18.4183 9.20854 18.2083 9.20854ZM13.1947 11.3856C12.9207 11.3856 12.6528 11.3044 12.425 11.1521C12.1972 10.9999 12.0196 10.7835 11.9148 10.5304C11.8099 10.2772 11.7825 9.99867 11.8359 9.72992C11.8894 9.46118 12.0213 9.21432 12.2151 9.02057C12.4088 8.82681 12.6557 8.69486 12.9244 8.64141C13.1932 8.58795 13.4717 8.61539 13.7249 8.72025C13.978 8.8251 14.1944 9.00268 14.3466 9.23051C14.4989 9.45834 14.5801 9.72619 14.5801 10.0002C14.5797 10.3675 14.4336 10.7197 14.1739 10.9794C13.9142 11.2391 13.562 11.3852 13.1947 11.3856ZM8.65371 15.7398H18.2083C18.4183 15.7398 18.6197 15.8232 18.7681 15.9717C18.9166 16.1201 19 16.3215 19 16.5315C19 16.7414 18.9166 16.9428 18.7681 17.0912C18.6197 17.2397 18.4183 17.3231 18.2083 17.3231H8.65371C8.48379 17.9483 8.11286 18.5002 7.59816 18.8937C7.08345 19.2872 6.45357 19.5004 5.80569 19.5004C5.1578 19.5004 4.52792 19.2872 4.01322 18.8937C3.49851 18.5002 3.12759 17.9483 2.95767 17.3231H0.791667C0.581704 17.3231 0.38034 17.2397 0.231874 17.0912C0.0834075 16.9428 0 16.7414 0 16.5315C0 16.3215 0.0834075 16.1201 0.231874 15.9717C0.38034 15.8232 0.581704 15.7398 0.791667 15.7398H2.95767C3.12759 15.1146 3.49851 14.5627 4.01322 14.1692C4.52792 13.7757 5.1578 13.5625 5.80569 13.5625C6.45357 13.5625 7.08345 13.7757 7.59816 14.1692C8.11286 14.5627 8.48379 15.1146 8.65371 15.7398ZM5.0356 17.6834C5.26343 17.8356 5.53128 17.9169 5.80529 17.9169C6.17253 17.9162 6.52456 17.7701 6.78424 17.5104C7.04392 17.2507 7.19008 16.8987 7.19071 16.5315C7.19071 16.2574 7.10946 15.9896 6.95722 15.7618C6.80499 15.5339 6.58862 15.3564 6.33547 15.2515C6.08232 15.1466 5.80375 15.1192 5.53501 15.1727C5.26627 15.2261 5.01941 15.3581 4.82565 15.5518C4.6319 15.7456 4.49995 15.9924 4.4465 16.2612C4.39304 16.5299 4.42048 16.8085 4.52533 17.0616C4.63019 17.3148 4.80777 17.5312 5.0356 17.6834Z" fill="#5E5E5E"/>
</svg> <p className='px-4 '>Sort</p>
            </button> 
    </div>  
    </div> 
    <div className='w-full flex flex-wrap'>   
       
        <div
            className={`${
                active ? '' : 'hidden'
            }     lg:inline-flex  fixed mt-32 border-r-[1px] border-gray-700 bg-black`}
            >
            
            <div className=' w-52 2xl:w-72 h-screen  w-full   items-start  text-white relative '>
           
            <button  className='lg:hidden absolute right-0 -mr-12 mt-3  px-2  rounded-full border-[1px] border-gray-700 h-10  hover:text-white '
                onClick={handleClick}
                >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
         
            </button>     
               <Checkbox data = {APIData}/> 
            </div>                     
        </div>         
      <div className='bg-black  w-full pt-48 lg:pl-52 2xl:pl-72 lg:mt-1 '>          
        <div className=' w-full  '>     
                    {/*  <NftCard data={APIData} /> */}
                      <div className='grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6'>                  

                      {searchInput.length > 1 ? (
                            filteredResults.map((item,index) => {
                                return (
                                  <div key={index} className ="flex flex-wrap bg-neutral-800 rounded-lg  mx-2 my-2 ">
                                        <img alt={item.name} src={item.image_url} className ="rounded-t-lg  h-[170px] xl:h-[280px] w-[100%]" />
                                        <div className='px-2 py-3'>
                                            <h5 className ="text-gray-400 text-sm xl:text-lg py-1">{item.name}</h5>                                  
                                            <p className ="text-gray-200 text-sm xl:text-lg ">{item.collection.name}</p>
                                        </div>
                                 </div>
                                )
                            })
                        ) : (
                          APIData.map((item, index) => {
                              return (  
                                <Link key={index} href="/nft/[id]" as={"/nft/" + item.id} passHref>                             
                                               
                                  <div className ="flex flex-wrap bg-neutral-800 rounded-lg  mx-2 2xl:mx-6 my-2 2xl:my-4">
                                      <img alt={item.name} src={item.image_url} blurDataURL="/svg/dashboard.svg" className ="rounded-t-lg  h-[170px] xl:h-[280px] w-[100%]" />
                                      <div className ="overlay">
                                        <div className='px-2 py-3'>
                                            <h5 className ="text-gray-400 text-sm xl:text-lg py-1">{item.name}</h5>                                  
                                            <p className ="text-gray-200 text-sm xl:text-lg ">{item.collection.name}</p>
                                        </div>
                                      </div>
                                  </div>
                                  </Link> 
                              )
                          })
                      )}   
                        </div> 
          </div> 
      </div> 
    </div>
    </>
  );
};

export default Nft;
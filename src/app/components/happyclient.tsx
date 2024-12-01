import React from 'react'
import Image from 'next/image'
import Frame10 from '../../../public/Frame 10.png'
import Frame31 from '../../../public/Frame 31.png'

function happyclient() {
  return (
    <div className='sm:mt-[120px] md:w-[768px] lg:relative lg:bottom-[560px] lg:w-[1024px]  '>
      <h1 className=' pt-[35px] pb-[25px] font-[intigral] font-[700] text-[32px] leading-[36px] text-[#000000] lg:hidden ml-[16px] xs:text-[40px] sm:text-[70px] sm:leading-[55px]'>
      OUR HAPPY <br /> CUSTOMERS
      </h1>
      <h1 className='xs:hidden sm:hidden md:hidden lg:block text-[48px] leading-[57.6px] text-[#000000] font-[integralcf] pt-[10px] ml-[16px] font-extrabold'>OUR HAPPY CUSTOMERS</h1>
      <div className='flex '>
      <div className='w-[358px] h-[186.19px] ml-[16px] rounded-[16px] p-[24px] border border-[#0000001A] xs:w-[430px] sm:w-[610px] md:w-[710px] lg:w-[400px] lg:h-[240px] '>
        <Image src={Frame10} alt='Frame10' className='sm:w-[120px]'/>
        <Image src={Frame31} alt='Frame31' className='xs:p-[10px] sm:w-[120px]'/>
        <p className='font-Satoshi font-[400] text-[14px] leading-[20px] text-[#00000099] xs:text-[17px] sm:text-[23px] lg:text-[20px]'>
        I m blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses every piece I have bought has exceeded my expectations.
        </p>

      </div>
      <div className=' md:hidden sm:hidden xs:hidden w-[358px] h-[186.19px] ml-[16px] rounded-[16px] p-[24px] border border-[#0000001A] xs:w-[430px] sm:w-[610px] md:w-[710px] lg:w-[400px] lg:h-[240px] lg:text-[20px] '>
        <Image src={Frame10} alt='Frame10' className='sm:w-[120px]'/>
        <Image src={Frame31} alt='Frame31' className='xs:p-[10px] sm:w-[120px]'/>
        <p className='font-Satoshi font-[400] text-[14px] leading-[20px] text-[#00000099] xs:text-[17px] sm:text-[23px]'>Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable catering to a variety of tastes and occasions.</p>

      </div>
      <div className=' md:hidden sm:hidden xs:hidden w-[358px] h-[186.19px] ml-[16px] rounded-[16px] p-[24px] border border-[#0000001A] xs:w-[430px] sm:w-[610px] md:w-[710px] lg:w-[400px] lg:h-[240px] lg:text-[20px]'>
        <Image src={Frame10} alt='Frame10' className='sm:w-[120px]'/>
        <Image src={Frame31} alt='Frame31' className='xs:p-[10px] sm:w-[120px]'/>
        <p className='font-Satoshi font-[400] text-[14px] leading-[20px] text-[#00000099] xs:text-[17px] sm:text-[23px]'>
        As someone whos always on the lookout for unique fashion pieces I m thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also onpoint with the latest trends.
        </p>

      </div>
      </div>
      <div className='lg:mt-[90px] lg:flex lg:items-center lg:justify-between lg:h-[200px] w-[358px] h-[293px] ml-[16px] rounded-[20px] p-[24px] bg-[#000000] m-[20px] xs:w-[430px] sm:w-[610px] sm:h-[360px] md:w-[710px] lg:w-[1024px] '>
        <h1 className='lg:hidden  font-[integralcf] font-[700] text-[32px] leading-[35px] text-[#FFFFFF] xs:text-[42px] xs:leading-[40px] sm:text-[60px] sm:leading-[55px]'>STAY UPTO DATE <br /> ABOUT OUR <br /> LATEST OFFERS</h1>
        <h1 className='xs:hidden sm:hidden md:hidden lg:block  font-[integralcf] lg:text-[40px] lg:leading-[55px] font-[700] text-[32px] leading-[35px] text-[#FFFFFF] xs:text-[42px] xs:leading-[40px] sm:text-[60px] sm:leading-[55px]'>STAY UPTO DATE ABOUT <br /> OUR  LATEST OFFERS</h1>
      
        <div>
        <div className="my-[20px] w-[311px] h-[42px] rounded-[62px] py-[12px] px-[16pxpx] bg-[#FFFFFF] xs:w-[350px] sm:w-[550px] sm:h-[50px] md:w-[650px] lg:w-[350px] ">
        <h1 className="font-satoshi font-[500]  text-[14px] leading-[18.9px] text-[#00000066] text-center sm:text-[22px] sm:py-[5px]">Enter your email-Address</h1>
        

      </div>
      <div className="my-[20px] w-[311px] h-[42px] rounded-[62px] py-[12px] px-[16pxpx] bg-[#FFFFFF] xs:w-[350px] sm:w-[550px] sm:h-[50px] md:w-[650px] lg:w-[350px]">
        <h1 className="font-satoshi font-[500]  text-[14px] leading-[18.9px] text-[#000000] text-center sm:text-[22px] sm:py-[5px]">Subscribe to Newsletter</h1>
        

      </div>
        </div>
        

      </div>
    </div>
  )
}

export default happyclient
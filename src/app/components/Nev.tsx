import React from 'react'
import Image from 'next/image'
import vector from '../../../public/menu_24dp_00000_FILL0_wght400_GRAD0_opsz24.png'
import search from '../../../public/search_24dp_00000_FILL0_wght400_GRAD0_opsz24.png'
import shopping from '../../../public/shopping_cart_24dp_00000_FILL0_wght400_GRAD0_opsz24.png'
import account from '../../../public/account_circle_24dp_00000_FILL0_wght400_GRAD0_opsz24.png'
import Shop from '../../../public/SHOP.CO.png'

function Nev() {
  return (
    <div className='w-[390px] p-[15px] flex justify-between  xs:w-[480px] sm:w-[640px] md:w-[768px] lg:w-[1024px]'>
        <div className='flex gap-[12px] sm:gap-[12px]'>
        <div className='lg:hidden'>
            <Image src={vector} alt='vector logo' className='h-[24px] w-[24px] '/>
        </div>
        <div>
            <Image src={Shop} alt='shop.co' className=''/>
            
        </div>
        <div className='flex items-center justify-between gap-[12px] xs:hidden sm:hidden md:hidden  lg:flex'>
          
          <option value="Shop">shop</option>
          <option value="Onsale">On Sale</option>
          <option value="Newarrival">New Arriaval</option>
          <option value="brand">Brand</option>
        </div>
        </div>
        <div className='flex gap-[12px] sm:justify-between font-[satoshi] font-[400] leading-[21.6px]'>
        <Image src={search} alt='search' className='h-[24px] w-[24px] sm:h-[30px] sm:w-[30px] md:hidden  lg:rounded  '/>
        <input type="search" placeholder='Search Product'className='h-[30px] w-[250px] text-white bg-[#F0F0F0] rounded bg-none  p-[10px] sm:hidden md:block lg:block lg:w-[400px] xs:hidden sm:hidden' />
        <Image src={shopping} alt='shopping' className='h-[24px] w-[24px] sm:h-[30px] sm:w-[30px]'/>
        <Image src={account} alt='account' className='h-[24px] w-[24px] sm:h-[30px] sm:w-[30px]'/>
        </div>
       
    </div>
  )
}

export default Nev
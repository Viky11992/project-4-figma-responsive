import React from "react";
import Shop from "../../../public/SHOP.CO.png";
import Social from "../../../public/Social.png";
import Badge from "../../../public/Badge.png";
import Badge1 from "../../../public/Badge (1).png";
import Badge2 from "../../../public/Badge (2).png";
import Badge3 from "../../../public/Badge (3).png";
import Badge4 from "../../../public/Badge (4).png";
import Image from "next/image";

function footer() {
  return (
    <>
      <div className="">
      <div className="pt-[10px] sm:pt-[50px] md:w-[768px] bg-[#F0F0F0] lg:relative lg:bottom-[580px] lg:w-[262px] ">
        <Image src={Shop} alt="footer" className="ml-[16px] xs:w-[190px] sm:w-[240px] lg:w-[140px]" />
        <div className="w-[357px] h-[40px] py-[10px] xs:w-[430px] sm:w-[610px] lg:w-[262px] ">
          <p className="lg:text-[15px] font-[satoshi] font-[400]  text-[14px] leading-[20px] text-[##00000099] ml-[16px] xs:text-[17px] sm:text-[25px] sm:leading-[25px] ">
            We have clothes that suits your style and which you are proud to
            wear. From women to men.
          </p>
        </div>
        <Image
          src={Social}
          alt="footer"
          className="ml-[16px] py-[10px] m-[10px] xs:w-[190px] sm:w-[230px] sm:mt-[20px] lg:pt-[60px]"
        />
      </div>
      <div className=" w-[390px] h-auto flex gap-x-[140px] flex-wrap bg-[#F0F0F0] py-[30px] xs:w-[480px] sm:w-[640px] md:w-[768px] lg:relative lg:bottom-[835px] lg:left-[260px]  lg:flex-nowrap lg:gap-[15px] ">
        <div className="w-[91px] h-[146px] ml-[16px] flex flex-col gap-[3px] xs:w-[100px] sm:w-[220px] sm:h-[160px] sm:gap-[10px] ">
          <h1 className="font-[Satoshi] font-[500] text-[14px] leading-[18px] tracking-[3px]  sm:text-[22px] lg:text-[14px]">
            COMPANY
          </h1>
          <h3 className="font-[satoshi] font-[400]  text-[14px] leading-[16px] text-[#00000099] mt-[10px] xs:text-[17px] xs:ml-[5px] sm:text-[22px] lg:text-[12px]">
            About
          </h3>
          <h3 className="font-[satoshi] font-[400]  text-[14px] leading-[16px] text-[#00000099] mt-[10px] xs:text-[17px] xs:ml-[5px] sm:text-[22px] lg:text-[12px]">
            Features
          </h3>
          <h3 className="font-[satoshi] font-[400]  text-[14px] leading-[16px] text-[#00000099] mt-[10px] xs:text-[17px] xs:ml-[5px] sm:text-[22px] lg:text-[12px]">
            Works
          </h3>
          <h3 className="font-[satoshi] font-[400]  text-[14px] leading-[16px] text-[#00000099] mt-[10px] xs:text-[17px] xs:ml-[5px] sm:text-[22px] lg:text-[12px]">
            Carrer
          </h3>
        </div>
        <div className="w-[121px] h-[146px] ml-[16px] flex  flex-col xs:w-[150px] sm:w-[220px] sm:h-[160px] sm:gap-[8px] ">
          <h1 className="font-Satoshi font-[500] text-[14px] leading-[18px] tracking-[3px] xs:text-[17px] sm:text-[22px] lg:text-[14px] ">
            HELP
          </h1>
          <h3 className="font-[satoshi] font-[400]  text-[14px] leading-[16px] text-[#00000099] mt-[10px] xs:text-[17px] sm:text-[22px] lg:text-[12px]">
            Customer Support 
          </h3>
          <h3 className="font-[satoshi] font-[400]  text-[14px] leading-[16px] text-[#00000099] mt-[10px] xs:text-[17px] sm:text-[22px] lg:text-[12px] ">
            Delivery Details
          </h3>
          <h3 className="font-[satoshi] font-[400]  text-[14px] leading-[16px] text-[#00000099] mt-[10px] xs:text-[17px] sm:text-[22px] lg:text-[12px]">
            Terms & Conditions
          </h3>
          <h3 className="font-[satoshi] font-[400]  text-[14px] leading-[16px] text-[#00000099] mt-[10px] xs:text-[17px] sm:text-[22px] lg:text-[12px]">
            Privacy
          </h3>
        </div>

        <div className=" ml-[16px] flex gap-[10px] flex-col xs:w-[150px]  xs:mt-[15px] xs:ml-[16px]  sm:w-[220px] sm:h-[160px] sm:gap-[15px] sm:mt-[20px]">
          <h1 className="font-[Satoshi] font-[500] text-[14px] leading-[18px] tracking-[3px] xs:text-[17px] sm:text-[22px] lg:text-[14px]">
            FAQ
          </h1>
          <h3 className="font-[satoshi] font-[400]  text-[14px] leading-[16px] text-[#00000099]  xs:text-[17px] sm:text-[22px] lg:text-[12px]">
            Account
          </h3>
          <h3 className="font-[satoshi] font-[400]  text-[14px] leading-[16px] text-[#00000099]  xs:text-[17px] sm:text-[22px] lg:text-[12px]">
            Mange deliveries
          </h3>
          <h3 className="font-[satoshi] font-[400]  text-[14px] leading-[16px] text-[#00000099]  xs:text-[17px] sm:text-[22px] lg:text-[12px]">
            Order
          </h3>
          <h3 className="font-[satoshi] font-[400]  text-[14px] leading-[16px] text-[#00000099]  xs:text-[17px] sm:text-[22px] lg:text-[12px]">
            Payment
          </h3>
        </div>

        <div className="   flex   flex-col xs:w-[160px] mt-[15px] xs:relative xs:left-[-40px] sm:text-[22px] sm:w-[220px] sm:h-[160px] sm:gap-[8px] sm:mt-[20px] sm:left-[0.1px] ">
          <h1 className="font-Satoshi font-[500] text-[14px] leading-[18px] tracking-[3px] xs:text-[17px] sm:text-[22px] lg:text-[14px] ">
            RESOURCES
          </h1>
          <h3 className="font-satoshi font-[400]  text-[14px] leading-[16px] text-[#00000099] mt-[10px] xs:text-[17px] sm:text-[22px] lg:text-[12px]">
            Free eBook
          </h3>
          <h3 className="font-satoshi font-[400]  text-[14px] leading-[16px] text-[#00000099] mt-[10px] xs:text-[17px] sm:text-[22px] lg:text-[12px]">
            Devolpment Tutorial
          </h3>
          <h3 className="font-satoshi font-[400]  text-[14px] leading-[16px] text-[#00000099] mt-[10px] xs:text-[17px] sm:text-[22px] lg:text-[12px]">
            How to -Blog
          </h3>
          <h3 className="font-satoshi font-[400]  text-[14px] leading-[16px] text-[#00000099] mt-[10px] xs:text-[17px] sm:text-[22px] lg:text-[12px]">
            Youtube Playlist
          </h3>
        </div>
       
      </div>
      <div className="w-[358px] ml-[16px] border border-[#0000001A] my-[20px] xs:w-[420px] sm:w-[610px] md:w-[768px] lg:w-[1000px] lg:relative lg:bottom-[780px]"></div>
       <div className="lg:flex lg:items-center lg:justify-between lg:relative lg:bottom-[780px]">
       <p className="ml-[16px] xs:ml-[80px] sm:text-[22px] sm:ml-[120px] md:ml-[170px] lg:text-[8px]">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="w-[240.93px] h-[25.74px] ml-[44px] mt-[10px] mb-[25px] flex xs:ml-[90px] xs:w-[280px] xs:h-[28px] sm:h-[34px] sm:w-[340px] sm:ml-[169px] md:w-[768px] md:ml-[240px]">
        <Image
          src={Badge}
          alt="Badge"
          
        />
           <Image
          src={Badge1}
          alt="Badge"
          
        />
           <Image
          src={Badge2}
          alt="Badge"
          
        />
           <Image
          src={Badge3}
          alt="Badge"
          
        />
           <Image
          src={Badge4}
          alt="Badge"
          
        />
            

        </div>
       </div>
      </div>
    </>
  );
}

export default footer;

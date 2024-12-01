import React from "react";
import Image from "next/image";
import rectangle from "../../../public/Rectangle 2.png";
import Star from "../../../public/star_rate_24dp_00000_FILL0_wght400_GRAD0_opsz24.png";
import Versace from "../../../public/Group (2).png";
import zra from "../../../public/zara-logo-1 1 (2).png";
import gucci from "../../../public/gucci-logo-1 1 (2).png";
import prada from "../../../public/prada-logo-1 1 (1).png";
import kalvin from "../../../public/Group (3).png";
import find from "../../../public/FIND CLOTHES THAT MATCHES YOUR STYLE.png";

function Find() {
  return (
    <>
      <div className="w-[390px] h-[700px] bg-[#F2F0F1]  xs:w-[480px] sm:w-[640px] md:w-[768px] lg:w-[1024px] lg:flex lg:pt-[30px]">
       <div className="lg:w-[500px] pt-[20px]">
       <Image
          src={find}
          alt="find"
          className="ml-[16px] mb-[20px] pt-[35px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[185px] lg:w-[460px] lg:h-[160px] "
        />
        <p className="font-[Satoshi] text-[#00000099] font-[400] text-[14px] px-[15px]  leading-[20px] xs:text-[17px] xs:leading-[25px] sm:text-[23px] md:text-[25px] lg:text-[13.5px] lg:leading-[16px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="xs:w-[430px] xs:ml-[16px] w-[358px] h-[52px]  rounded-[62px] py-[16px] px-[54px] mt-[10px] bg-[#000000]  font-[500] text-[16px] leading-[21.6px] text-[#FFFFFF] sm:w-[600px] sm:text-[22px] md:w-[710px] lg:w-[180px] lg:text-[12px]">
          Shop Now
        </button>
        <div className="lg:flex lg:justify-center lg:items-center lg:mt-[20px]">
        <div className="h-[52px] w-[278px]  border-green-600 flex justify-between  mt-[10px] ml-[40px] xs:justify-between xs:ml-[110px] sm:w-[480px] sm:h-[80px] sm:items-center lg:ml-[16px] lg:gap-[50px]">
          <div>
            <h1 className="Satoshi font-[700] text-[24px] leading-[32.4px] text-[#000000] sm:text-[32px]">
              200+
            </h1>
            <p className="Satoshi font-[400] text-[12px] leading-[22px] text-[#00000099] sm:text-[16px] lg:text-[10px]">
              International Brands
            </p>
          </div>
          <div>
            <h1 className="Satoshi font-[700] text-[24px] leading-[32.4px] text-[#000000] sm:text-[32px]">
              2,000+
            </h1>
            <p className="Satoshi font-[400] text-[12px] leading-[22px] text-[#00000099] sm:text-[16px] lg:text-[10px]">
              High-Quality Products
            </p>
          </div>
          <div className="">
          <h1 className="font-Satoshi font-[700] text-[24px] leading-[32.4px] text-[#000000] sm:text-[32px]">
            30,000+
          </h1>
          <p className="font-Satoshi font-[400] text-[12px] leading-[22px] text-[#00000099] sm:text-[16px] lg:text-[10px] ">
            Happy customers
          </p>
        </div>
        </div>
        
        </div>
       </div>
        <div className="lg:w-[500px]" >
        <Image
          src={rectangle}
          alt="rectangle"
          className="xs:w-[480px] sm:w-[640px] md:w-[768px] lg:w-[1024px] 2xl:w-[1536px]"
        />

       <div className="lg:relative top-[200px] lg:right-[60px]">
       <Image
          src={Star}
          alt="Star"
          className="h-[76px] w-[76px] relative left-[293px] bottom-[450px] xs:left-[352px] xs:bottom-[500px] xs:w-[85px] sm:w-[100px] sm:left-[460px] sm:bottom-[650px] md:relative md:left-[580px] md:bottom-[720px] lg:left-[460px] lg:h-[64px] lg:w-[64px]"
        />
        <Image
          src={Star}
          alt="Star"
          className="h-[44px] w-[44px] relative left-[30px] bottom-[450px] xs:left-[30px] xs:bottom-[450px] xs:w-[55px] xs:h-[55px] sm:w-[60px] sm:left-[60px] sm:bottom-[580px] md:left-[80px] md:bottom-[650px] lg:h-[44px] lg:w-[44px]"
        />
       </div>
        </div>
      </div>
      <div className="w-[390px] h-[146px] bg-[#000000] flex gap-[20px] justify-center flex-wrap px-[20px] py-[45px] xs:relative   top-[113px] xs:w-[480px] sm:w-[640px] sm:h-[155px] sm:mt-[240px] md:w-[768px] md:relative md:top-[285px] lg:w-[1024px] lg:relative lg:top-[-337px] lg:items-center">
        <Image
          src={Versace}
          alt="versace-logo"
          className="h-[23.25px] w-[116.74px] xs:h-[26px] xs:w-[200px] sm:h-[28px] sm:w-[225px]"
        />
        <Image
          src={zra}
          alt="zra-logo"
          className="h-[26.65px] w-[63.81px] xs:h-[30px] xs:w-[75px] sm:w-[95px]"
        />
        <Image
          src={gucci}
          alt="gucci-logo"
          className="h-[25.24px] w-[109.39px] xs:h-[30px] xs:w-[120px] sm:w-[150px]"
        />
        <Image
          src={prada}
          alt="prada-logo"
          className="h-[21px] w-[127px] xs:h-[30px] xs:w-[150px] sm:w-[185px]"
        />
        <Image
          src={kalvin}
          alt="kalvin-logo"
          className="h-[21.75px] w-[134.84] sm:w-[190px] sm:h-[30px]"
        />
      </div>
    </>
  );
}

export default Find;

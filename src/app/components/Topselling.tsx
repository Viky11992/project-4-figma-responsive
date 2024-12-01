import React from "react";
import Frame60 from "../../../public/Frame 60.png";
import Frame61 from "../../../public/Frame 61.png";
import Frame62 from "../../../public/Frame 62.png";
import Frame103 from "../../../public/Frame 103.png";
import Frame63 from "../../../public/Frame 63.png";
import Frame260 from "../../../public/$260.png";
import Frame40 from "../../../public/Frame 40.png";
import Frame80 from "../../../public/$80.png";
import Frame145 from "../../../public/$145.png";
import Frame44 from "../../../public/Frame 44 (1).png";
import Frame41 from "../../../public/Frame 41 (1).png";
import Frame38 from "../../../public/Frame 38.png";
import Image from "next/image";

function Topselling() {
  return (
    <div className="w-[390px] bg-white flex flex-col items-center justify-center sm:w-[640px] md:w-[768px] lg:w-[1024px] lg:relative lg:top-[-560px]">
    <h1 className="font-intigralcf font-[700]  text-[32px] leading-[38.4px] text-[#000000] text-center pt-[32px] pb-[20px] xs:ml-[70px] sm:text-[40px]">
      TOP SELLING
    </h1>
    <div className="flex">
      <div className="">
        <div className="w-[198px] h-[200.01px] ml-[16px] rounded-[13.42px] bg-[#F0EEED] xs:w-[220px] sm:w-[290px] sm:h-[250px] lg:h-[250px] lg:w-[250px]">
          <Image src={Frame60} alt="frame" className="sm:w-[250px]" />
        </div>
        <h1 className="font-Satoshi font-[700] text-[14px] leading-[21.6px] ml-[22px] sm:text-[20px] sm:mt-[15px] lg:text-[14px]">
        Vertical Striped Shirt
        </h1>
        <Image src={Frame62} alt="frame" className="ml-[20px] sm:h-[20px] sm:mt-[5px] sm:w-[150px] lg:w-[120px] lg:h-[15px]" />
        <Image src={Frame103} alt="frame" className="ml-[20px] sm:w-[140px] sm:mt-[5px]" />
      </div>
      <div>
        <div className="w-[198px] h-[200.01px] ml-[16px] rounded-[13.42px] bg-[#F0EEED] xs:w-[200px] sm:w-[290px] sm:h-[250px] lg:h-[250px] lg:w-[250px]">
          <Image src={Frame61} alt="frame" className="sm:w-[200px]"/>
        </div>
        <h1 className="font-Satoshi font-[700] text-[14px] leading-[21.6px] ml-[22px] sm:text-[20px] sm:mt-[15px] lg:text-[14px]">
        Courage Graphic T-short
        </h1>
        <Image src={Frame63} alt="frame" className="ml-[20px] sm:h-[20px] sm:mt-[5px] sm:w-[150px] lg:w-[120px] lg:h-[15px]" />
        <Image src={Frame145} alt="frame" className="ml-[20px] sm:w-[50px] sm:mt-[5px] " />
        <Image
          src={Frame260}
          alt="frame"
          className="ml-[20px] relative bottom-[20px] left-[55px] sm:w-[50px] "
        />
      </div>
      <div className="">
        <div className="w-[198px] h-[200.01px] ml-[16px] rounded-[13.42px] bg-[#F0EEED] xs:w-[220px] sm:w-[290px] sm:h-[250px] lg:h-[250px] lg:w-[250px]">
          <Image src={Frame60} alt="frame" className="sm:w-[250px]" />
        </div>
        <h1 className="font-Satoshi font-[700] text-[14px] leading-[21.6px] ml-[22px] sm:text-[20px] sm:mt-[15px] lg:text-[14px]">
        LOOSE FIT BERMUDA SHORTS
        </h1>
        <Image src={Frame40} alt="frame" className="ml-[20px] sm:h-[20px] sm:mt-[5px] sm:w-[150px] lg:w-[120px] lg:h-[15px]" />
        <Image src={Frame80} alt="frame" className="ml-[20px] sm:w-[140px] sm:mt-[5px] lg:w-[50px]" />
      </div>
      <div className="">
        <div className="w-[198px] h-[200.01px] ml-[16px] rounded-[13.42px] bg-[#F0EEED] xs:w-[220px] sm:w-[290px] sm:h-[250px] lg:h-[250px] lg:w-[250px]">
          <Image src={Frame38} alt="frame" className="sm:w-[250px]" />
        </div>
        <h1 className="font-Satoshi font-[700] text-[14px] leading-[21.6px] ml-[22px] sm:text-[20px] sm:mt-[15px] lg:text-[14px]">
        FADED SKINNY JEANS
        </h1>
        <Image src={Frame41} alt="frame" className="ml-[20px] sm:h-[20px] sm:mt-[5px] sm:w-[150px] lg:w-[120px] lg:h-[15px]" />
        <Image src={Frame44} alt="frame" className="ml-[20px] sm:w-[140px] sm:mt-[5px] lg:w-[50px]" />
      </div>
      
    </div>
    <div className="ml-[20px] w-[358px] h-[46px] flex items-center justify-center rounded-[62px] py-[16px] px-[54px] border border-[#0000001A] xs:w-[420px] sm:w-[600px] md:w-[740px] md:h-[60px] lg:w-[200px] lg:h-[50px]">
      <h1 className="font-satoshi font-[500]  text-[14px] leading-[18.9px] text-[#000000] text-center sm:text-[22px] ">View All</h1>

    </div>
  </div>
  )
}

export default Topselling
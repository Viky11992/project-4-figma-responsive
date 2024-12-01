import React from "react";
import Frame from "../../../public/Frame 32.png";
import Frame2 from "../../../public/Frame 58.png";
import Frame35 from "../../../public/Frame 35.png";
import Frame120 from "../../../public/$120.png";
import Frame59 from "../../../public/Frame 59.png";
import Frame260 from "../../../public/$260.png";
import Frame240 from "../../../public/$240.png";
import Frame9 from "../../../public/image 9.png";
import Frame40 from "../../../public/Frame 40.png";
import Frame180 from "../../../public/$180.png";
import Frame44 from "../../../public/Frame 44.png";
import Frame41 from "../../../public/Frame 41.png";
import Frame10 from "../../../public/image 10@2x.png";
import Image from "next/image";

function Newarrival() {
  return (
    <div className="w-[390px] bg-white flex flex-col items-center justify-center xs:mt-[150px] sm:w-[640px] md:w-[768px]  md:mt-[285px] lg:relative lg:top-[-600px] lg:w-[1024px]">
      <h1 className="font-fontspring font-[700]  text-[32px] leading-[38.4px] text-[#000000] text-center pt-[32px] pb-[20px] xs:ml-[70px] sm:text-[40px]">
        NEW ARRIVALS
      </h1>
      <div className="flex ">
        <div className="">
          <div className="w-[198px] h-[200.01px] ml-[16px] rounded-[13.42px] bg-[#F0EEED] xs:w-[220px] sm:w-[290px] sm:h-[250px] lg:h-[250px] lg:w-[250px]">
            <Image src={Frame} alt="frame" className="sm:w-[330px]"/>
          </div>
          <h1 className="font-Satoshi font-[700] text-[14px] leading-[21.6px] ml-[22px] sm:text-[20px] sm:mt-[55px] lg:text-[14px]">
            T-Shirt With Tape Details
          </h1>
          <Image
            src={Frame35}
            alt="frame"
            className="ml-[20px] sm:w-[150px] sm:h-[20px] sm:mt-[5px] lg:w-[120px] lg:h-[15px]"
          />
          <Image
            src={Frame120}
            alt="frame"
            className="ml-[20px] sm:w-[60px] sm:mt-[5px]"
          />
        </div>
        <div className="">
          <div className="w-[198px] h-[200.01px] ml-[16px] rounded-[13.42px] bg-[#F0EEED]  xs:w-[290px] sm:h-[295px] lg:h-[250px] lg:w-[250px] lg:pr-[10px]">
            <Image src={Frame2} alt="frame" className="sm:w-[230px] lg:w-[330px] lg:h-[260px]"  />
          </div>
          <h1 className="font-Satoshi font-[700] lg:mt-[60px] text-[14px] leading-[21.6px] ml-[22px] sm:text-[20px] sm:mt-[10px] lg:text-[14px] ">
            Skinny Fit Jeans
          </h1>
          <Image
            src={Frame59}
            alt="frame"
            className="ml-[20px] sm:w-[150px] sm:h-[20px] sm:mt-[5px] lg:w-[120px] lg:h-[15px] "
          />
          <Image
            src={Frame240}
            alt="frame"
            className="ml-[20px] sm:w-[70px] sm:mt-[5px] lg:w-[60px] "
          />
          <Image
            src={Frame260}
            alt="frame"
            className="ml-[20px] relative bottom-[20px] left-[55px] sm:w-[60px] sm:h-[30px] sm:bottom-[28px] sm:left-[80px]"
          />
        </div>
        <div className="">
          <div className="w-[198px] h-[200.01px] ml-[16px] rounded-[13.42px] bg-[#F0EEED] xs:w-[220px] sm:w-[290px] sm:h-[250px] lg:h-[250px] lg:w-[250px] ">
            <Image src={Frame9} alt="frame" className="sm:w-[330px] rounded-[13.42px]"/>
          </div>
          <h1 className="font-Satoshi font-[700] text-[14px] leading-[21.6px] ml-[22px] sm:text-[20px] sm:mt-[55px] lg:text-[14px]">
          CHECKERED SHIRT
          </h1>
          <Image
            src={Frame40}
            alt="frame"
            className="ml-[20px] sm:w-[150px] sm:h-[20px] sm:mt-[5px] lg:w-[120px] lg:h-[15px]"
          />
          <Image
            src={Frame180}
            alt="frame"
            className="ml-[20px] sm:w-[60px] sm:mt-[5px]"
          />
        </div>
        <div className="xs:hidden md:hidden sm:hidden">
          <div className="w-[198px] h-[200.01px] ml-[16px] rounded-[13.42px] bg-[#F0EEED] xs:w-[220px] sm:w-[290px] sm:h-[250px] lg:h-[250px] lg:w-[250px]">
            <Image src={Frame10} alt="frame" className="sm:w-[330px] rounded-[13.42px]"/>
          </div>
          <h1 className="font-Satoshi font-[700] text-[14px] leading-[21.6px] ml-[22px] sm:text-[20px] sm:mt-[55px] lg:text-[14px]">
          SLEEVE STRIPED T-SHIRT
          </h1>
          <Image
            src={Frame41}
            alt="frame"
            className="ml-[20px] sm:w-[150px] sm:h-[20px] sm:mt-[5px] lg:w-[120px] lg:h-[15px]"
          />
          <Image
            src={Frame44}
            alt="frame"
            className="ml-[20px] sm:w-[60px] sm:mt-[5px] lg:w-[170px]"
          />
        </div>
      </div>
      <div className="ml-[20px] w-[358px] flex items-center justify-center h-[46px] rounded-[62px] py-[16px] px-[54px] border border-[#0000001A] xs:w-[420px] sm:w-[600px] sm:h-[50px] md:w-[740px] md:h-[60px] lg:w-[200px] lg:h-[50px]">
        <h1 className="font-satoshi font-[500]  text-[14px] leading-[18.9px] text-[#000000] text-center sm:text-[22px]  ">
          View All
        </h1>
      </div>
    </div>
  );
}

export default Newarrival;

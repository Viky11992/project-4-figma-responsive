import React from "react";
import Image from "next/image";
import frame105 from "../../../public/Frame 105.png";
import frame106 from "../../../public/Frame 106.png";
import frame107 from "../../../public/Frame 107.png";
import frame108 from "../../../public/Frame 108.png";

function Dressstyle() {
  return (
    <div className="w-[358px] h-[990px] ml-[16px] bg-[#F0F0F0] rounded-[20px]  xs:w-[430px] xs:h-[1200px] sm:w-[610px] sm:h-[1500px] md:w-[720px] md:h-[2100px] lg:relative lg:top-[-500px] lg:w-[1024px] lg:h-[800px]">
      <div>
        <h1 className="font-Fontspring font-[700] text-[32px] text-[#000000] leading-[36px] text-center px-[35px] pt-[40px] pb-[20px] sm:text-[50px] sm:leading-[50px] md:text-[70px] md:leading-[60px]">
          BROWSE BY <br /> DRESS STYLE
        </h1>
      </div>
      <div className="flex flex-wrap ">
      <div className="   ml-[24px] lg:flex lg:gap-[10px] mt-[20px] rounded-[20px] xs:w-[380px] sm:w-[560px] sm:h-[300px]  md:w-[670px] md:h-[400px] lg:w-[1000px]">
        <Image src={frame105} alt="frame105" className="xs:w-[380px] sm:w-[570px] md:w-[670px] lg:w-[407px] lg:h-[289px]" />
        <Image src={frame106} alt="frame105" className="xs:w-[380px] sm:w-[570px] md:w-[670px] lg:w-[684px] lg:h-[289px]"/>
      </div>
      <div  className=" lg:relative lg:bottom-[90px] lg:gap-[10px] ml-[24px] lg:flex rounded-[20px] xs:w-[380px] sm:w-[560px] sm:h-[300px]  md:w-[670px] md:h-[400px] lg:w-[1000px]">    
        <Image src={frame107} alt="frame105"  className="xs:w-[380px] sm:w-[570px] md:w-[670px] lg:w-[684px] lg:h-[289px]" />
        <Image src={frame108} alt="frame105"  className="xs:w-[380px] sm:w-[570px] md:w-[670px] lg:w-[407px] lg:h-[289px]" />
        </div>
      {/* <div className="w-[310px] h-[190px] ml-[24px] mt-[20px] rounded-[20px] bg-[#FFFFFF] xs:w-[380px] xs:mt-[65px] sm:w-[560px] sm:h-[300px] md:w-[670px] md:h-[400px]"> */}
      {/* </div> */}
      {/* <div className="w-[310px] h-[190px] ml-[24px] mt-[20px] rounded-[20px] bg-[#FFFFFF] xs:w-[380px] xs:mt-[65px] sm:w-[560px] sm:h-[300px] md:w-[670px] md:h-[400px]"> */}
      {/* </div> */}
      {/* <div className="w-[310px] h-[190px] ml-[24px] mt-[20px] rounded-[20px] bg-[#FFFFFF] xs:w-[380px] xs:mt-[65px] sm:w-[560px] sm:h-[300px] md:w-[670px] md:h-[400px]"> */}
      {/* </div> */}
      </div>
    </div>
  );
}

export default Dressstyle;

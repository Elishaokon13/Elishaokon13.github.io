import Resume from "./resume";
import { ExpCircle } from "./svgs";
import resumeUrl from "../utils/ED.pdf";

const Experience = () => {
  return (
    <>
      <div className={`flex flex-col ml-3 lg:items-end`}>
        <div className="font-pop">
          <h2
            className={`h-full flex items-center ml-0 lg:ml-20 font-clashbold text-white text-[20px] font-semibold lg:text-[50px] lg:leading-[49.2px]`}
          >
            Experience <small className={`animate-bounce`}>🚀</small>
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] text-left lg:text-[20px] lg:leading-[30px]]`}
          >
            Some of my professional experiences across various roles.
          </p>
        </div>
        <div className="flex flex-row relative z-[100] lg:justify-between mt-[30px]">
          <div className="w-0.5 h-[940px] lg:h-[740px] bg-blue-950"></div>
          <div className={`flex flex-col space-y-[60px]`}>

            {/* EthSafari - Base Representative */}
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]">
                  BASE Representative - EthSafari (Kenya) <span>-</span>&nbsp;
                  <span className="italic text-[#FFFFFF99]">September 2024</span>
                </h3>
                <p className={`text-[#1E90FF] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}>
                  Conducted workshops on building on-chain applications on Base and supported developers during hackathons.
                </p>
                
              </div>
            </div>

            {/* Blockchain Contributor - Impermax Finance */}
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]">
                  Blockchain Contributor - Impermax Finance <span>-</span>&nbsp;
                  <span className="italic text-[#FFFFFF99]">July 2024 - August 2024</span>
                </h3>
                <p className={`text-[#1E90FF] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}>
                  Updated financial data on Scroll Network via DefiLlama to ensure accuracy.
                </p>
                
              </div>
            </div>

            {/* BASE Captain - Flagship.FYI */}
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]">
                  BASE Captain - Flagship.FYI <span>-</span>&nbsp;
                  <span className="italic text-[#FFFFFF99]">September 2023 - September 2024</span>
                </h3>
                <p className={`text-[#1E90FF] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}>
                  Led the content team, ensuring alignment with the BASE ecosystem.
                </p>
                
              </div>
            </div>

            {/* Developer Relations - Memoi Africa */}
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]">
                  Developer Relations - Memoi Africa <span>-</span>&nbsp;
                  <span className="italic text-[#FFFFFF99]">July 2023 – May 2024</span>
                </h3>
                <p className={`text-[#1E90FF] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}>
                  Hosted virtual hackathons, organized coding sessions, and provided community support.
                </p>
                
              </div>
            </div>

            {/* Ambassador - Alchemy University */}
            

            {/* RESUME */}
            <Resume
              pdfUrl={resumeUrl}
              fileName="Elisha David.pdf"
              buttonText="Download Resume"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

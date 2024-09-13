import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="mt-[20px] mx-[30px] lg:mt-[86px] lg:mx-[76px]">
      <div className="gradientTex">
        <h1
          className="flex items-center font-clashbold font-semibold text-white text-[20px] leading-[30.75px] lg:text-[60px] lg:leading-[73.8px]"
        >
          My Expertise <span className="animate-bounce">🔥</span>
        </h1>
        <p
          className="text-[#D0E0FF] font-medium text-[15px] leading-[22.5px] lg:text-[18px] lg:leading-[27px]"
        >
          Leveraging my skills to deliver top-notch solutions in web development and blockchain technology.
        </p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col mt-[56px] gap-2 lg:mt-[56px] lg:flex lg:flex-wrap lg:justify-start lg:flex-row lg:items-center lg:gap-[24px]">
        {/* First Set of Cards */}
        <div className="overflow-hidden flex flex-col gap-3 flex-nowrap justify-start md:flex md:flex-row md:flex-wrap md:justify-around md:gap-4 lg:flex lg:flex-col lg:gap-[24px]">
          <motion.div
            whileHover={{ scale: 0.99 }}
            className="bg-gradient-to-l max-w-max to-[#B0E0FF] from-[#87CEFA] pl-0.5 pt-0.5"
          >
            <motion.div
              whileHover={{ scale: 0.99 }}
              className="bg-[#003366] text-[#D0E0FF] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0"
            >
              <h4
                className="font-semibold text-white font-clashbold text-[20px] leading-[24.6px] max-w-[156px] lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]"
              >
                Frontend Development
              </h4>
              <p
                className="font-normal text-[13px] leading-[19.5px] mt-4 max-w-[308px] lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]"
              >
                Crafting engaging user interfaces using HTML, CSS, TailwindCSS, Bootstrap, JavaScript, React.js, Next.js, and TypeScript.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 0.99 }}
            className="bg-gradient-to-l max-w-[369.808px] lg:max-w-[642px] to-[#B0E0FF] from-[#87CEFA] pl-0.5 pt-0.5"
          >
            <motion.div
              whileHover={{ scale: 0.99 }}
              className="bg-[#003366] text-[#D0E0FF] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0"
            >
              <h4
                className="font-semibold uppercase text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]"
              >
                API Integration
              </h4>
              <p
                className="font-normal text-[13px] leading-[19.5px] mt-4 max-w-[308px] lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]"
              >
                Integrating frontend interfaces with backend services and APIs for dynamic data handling and real-time updates.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.99 }}
            className="bg-gradient-to-r max-w-[369.808px] lg:max-w-[642px] to-[#B0E0FF] from-[#87CEFA] pr-0.5 pt-0.5"
          >
            <motion.div
              whileHover={{ scale: 0.99 }}
              className="bg-[#003366] text-[#D0E0FF] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0"
            >
              <h4
                className="font-semibold uppercase text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]"
              >
                Public Speaking
              </h4>
              <p
                className="font-normal text-[13px] leading-[19.5px] mt-4 max-w-[308px] lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]"
              >
                Engaging audiences through compelling and effective communication, delivering impactful presentations, and sharing insights on a variety of topics.
              </p>
            </motion.div>
          </motion.div>

        </div>
        {/* Second Set of Cards */}
        <div className="flex flex-col gap-3 flex-nowrap justify-start md:flex md:flex-row md:flex-wrap md:justify-start md:gap-4 lg:mt-[148px] lg:flex lg:flex-col lg:gap-[24px]">
          <motion.div
            whileHover={{ scale: 0.99 }}
            className="bg-gradient-to-t max-w-max to-[#B0E0FF] from-[#87CEFA] pl-0.5 pt-0.5"
          >
            <motion.div
              whileHover={{ scale: 0.99 }}
              className="bg-[#003366] text-[#D0E0FF] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0"
            >
              <h4
                className="font-semibold text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]"
              >
                Version Control
              </h4>
              <p
                className="font-normal text-[13px] leading-[19.5px] mt-4 max-w-[308px] lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]"
              >
                Utilizing version control systems like Git for effective collaboration and code management in development projects.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.99 }}
            className="bg-gradient-to-b max-w-max to-[#B0E0FF] from-[#87CEFA] pr-0.5 pb-0.5"
          >
            <motion.div
              whileHover={{ scale: 0.99 }}
              className="bg-[#003366] text-[#D0E0FF] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px]"
            >
              <h4
                className="font-semibold text-[20px] leading-[24.6px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]"
              >
                Blockchain Development
              </h4>
              <p
                className="font-normal text-[13px] leading-[19.5px] mt-4 max-w-[308px] lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]"
              >
                Building and deploying decentralized applications (dApps) and smart contracts with expertise in Solidity and various blockchain platforms.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

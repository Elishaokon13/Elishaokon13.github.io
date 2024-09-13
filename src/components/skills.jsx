import { Experience } from ".";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Skills gathered from experiences
const skills = [
  "TailwindCSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "Next.js",
  "Git",
  "GitHub",
  "Solidity",
  "Web3.js",
  "HardHat",
];

const Skills = () => {
  const [sectionRef] = useInView({
    triggerOnce: false,
    threshold: 0.9,
  });

  return (
    <section className="overflow-hidden px-[33px] mt-[60px] lg:px-[70px] lg:mt-[152px]">
      <div className="flex flex-col gap-[60px] lg:flex-row lg:gap-[36px] lg:justify-center">
        {/* Skills */}
        <div className="flex flex-col w-full lg:w-1/2">
          <div>
            <h2 className="flex items-center font-clashbold text-white font-semibold text-[20px] leading-[24.6px] lg:text-[60px] lg:leading-[49.2px]">
              Skills <small className="animate-bounce">🤹‍♂️</small>
            </h2>
            <p className="font-medium text-[#D0E0FF] text-[15px] leading-[22.5px] lg:text-[20px] lg:leading-[30px] lg:tracking-wide">
              I've honed these skills through diverse projects and experiences.
            </p>
          </div>
          <div className="mt-[31px] grid grid-cols-1 gap-y-[18.67px] md:grid-cols-2 md:gap-x-3 lg:mt-[36px] lg:gap-[20px]">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 0.96 }}
                ref={sectionRef}
                initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 300 }}
                transition={{ duration: 0.6 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} max-w-[369px] lg:max-w-[252px] to-[#87CEFA] from-[#1E90FF] ${index % 2 === 0 ? 'pr-0.5 pt-0.5' : 'pb-0.5 pl-0.5'}`}
              >
                <div className={`bg-[#003366] px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}>
                  <p className="text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px]">
                    {skill}
                  </p>
                </div>
              </motion.div>
            ))}
            
          </div>
        </div>

        {/* Experience */}
        <div className="flex flex-col w-full lg:w-1/2">
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default Skills;

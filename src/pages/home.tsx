import { icons } from '../data/icons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import projects from "@/data/projects.json";
import 'aos/dist/aos.css';
import '../styles/App.css';

const Home = () => {
  const text = "Full-stack-developer";
  const letters = text.split('');
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // تعريف أنيميشن الاهتزاز
  const shakeAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -5, 5, -5, 5, 0], // حركة اهتزاز
      transition: {
        duration: 0.5, // مدة الحركة
        repeat: Infinity, // تكرار الأنيميشن
        repeatType: 'loop' as const, // التكرار بشكل مستمر
      },
    },
  };


  return (
    <div className="min-h-[2412px] ">
      <div className="flex flex-col justify-center items-center  min-h-[810px] w-full bg-black overflow-hidden    ">
        <h1 className="text-white text-6xl font-body">Nedal Daher</h1>
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              style={{
                display: 'inline-block',
                margin: '0 2px',
                color: '#fff',
              }}
              className="font-logo cursor-pointer text-[16px] tracking-[5px] md:text-[30px] md:tracking-[11px] "
              initial={{ y: '100%' }}
              animate={!isPaused ? { y: '0%' } : {}}
              variants={shakeAnimation} // إضافة الاهتزاز
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                delay: index * 0.05, // تأخير بسيط لكل حرف
                type: 'spring',
                stiffness: 150,
                duration: 1.5, // مدة الحركة
              }}
            >
              {letter === ' ' ? '\u00A0' : letter} {/* التعامل مع المسافات */}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-col gap-16 justify-center items-center min-h-[1042px] p-16 bg-white">
        <div data-aos='fade-down' className="flex flex-col gap-5 min-w[650px] max-w-[650px] ">
          <h1 className="text-4xl fon font-bold font-logo">About me</h1>
          <p className="max-w-[650px] w-[298px]  md:w-[650px] text-base md:text-[16 px] font-text text-black font-normal">
            Hello, I’m Nedal, a passionate Web Application Developer dedicated to delivering innovative and efficient solutions tailored to your business needs. I specialize in frontend development using Next.js and React.js, enhancing user experiences and building state-of-the-art applications. With expertise in full-stack development, I’ve improved e-commerce website performance using React.js and Node.js, driving higher conversion rates. My technical skills include GraphQL, Redux, SASS, UI/UX design, and API integration. I hold a Bachelor’s degree in Computer Science with a focus on software development. My client-centric approach ensures clear communication, professional problem-solving, and timely project delivery. I’m always eager to learn and implement cutting-edge technologies to provide exceptional results. Let’s collaborate to turn your ideas into impactful solutions that exceed expectations!
          </p>
        </div>
        <div data-aos='fade-down' className="flex flex-col gap-5 min-w[300px] w-[300px]   md:min-w-[650px] md:w-[650px]">
          <h1 className="font-logo font-bold text-[32px]">My skills</h1>
          <div className="flex gap-[10px] md:gap-5 flex-wrap">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex gap-2 items-center  basis-[calc(50%-10px)] md:basis-0 "
              >
                <img src={icon.image} alt={icon.name} width={14} height={14} />
                <p className="text-base">{icon.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col  justify-center  items-center flex-wrap md:flex-row gap-5 min-w[650px]  md:w-[700px] lg:w-[1199px]">
          {
            projects.map((project, index) => (
             
                <div
                  key={index}
                   data-aos={project.data_aos}
                  className="relative min-w-[298px] w-[298px] md:min-w-[330px] md:w-[300px]  h-[480px] bg-black text-white"
                >
                  <div className="flex flex-col absolute p-8 top-0 left-0 ">
                    <h1 className="font-logo font-bold text-[20px]  leading-[15px]">
                      {project.title}
                    </h1>
                    <p className="text-[16px] font-normal">{project.description}</p>
                  </div>
                  <img src="/example.png" className="w-full h-full" alt="" />
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;

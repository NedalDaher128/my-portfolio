
const about = () => {

    return (

        <div className=" h-full">
            <div className="flex flex-col justify-center items-center  min-h-[810px] w-full bg-black overflow-hidden ">
                <h1 className="text-white text-6xl font-body">Nedal Daher</h1>
                <p className="font-logo cursor-pointer text-[16px] text-white tracking-[5px] md:text-[30px] md:tracking-[11px] ">Bro-I am-Superman!</p>
            </div>
            <div className="flex flex-col gap-16 justify-center items-center min-h-[780px] p-16     ">
                <div className="flex flex-col gap-5 min-w[650px] max-w-[650px]">
                    <h1 className="text-4xl fon font-bold font-logo">My Background</h1>
                    <p className="max-w-[650px] w-[298px] md:w-[650px] text-base md:text-[16px] font-text text-black font-normal">
                        <span>
                            I have a diverse set of skills that combine technical expertise with strong interpersonal abilities. I’ve worked as a Full-Stack Developer, where I gained hands-on experience using frameworks like React and Next.js. On the backend, I’ve worked extensively with Express.js and developed a solid understanding of key concepts such as REST APIs and Graphics APIs.
                        </span>
                        <span className="block mt-4">
                            In addition to that, I have a strong foundation in algorithms and data structures, which has been invaluable in my work. Previously, I was part of a software company in Jordan, where I contributed to creating various programs and web applications.
                        </span>
                        <span className="block mt-4">
                            Some of the projects I’m particularly proud of include developing an e-commerce platform, building an information management system, and designing a portfolio website for a client on Upwork. These experiences allowed me to grow both technically and professionally.
                        </span>
                    </p>

                </div>
                <div className="flex flex-col gap-5 min-w[650px] max-w-[650px]">
                    <h1 className="text-4xl fon font-bold font-logo">My Hobbies</h1>
                    <p className="max-w-[650px] w-[298px] md:w-[650px] text-base md:text-[16px] font-text text-black font-normal">
                    I have many hobbies. One of them is playing League of Legends and story-based games. Another hobby of mine is programming, which I practice almost every day. Additionally, I try to exercise regularly to stay active and healthy 
                    </p>

                </div>
            </div>
        </div>
    );

};

export default about;
import Menu from '/menu.svg';
import Logo from '/logo.png';
import { motion } from "framer-motion";
import { useState } from "react";
import MenuSub from './menu';

const navbar = () => {

        const [isOpened, setIsOpened] = useState(false);
    return (
        <>
            <MenuSub isOpened={isOpened} setIsOpened={setIsOpened} />
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 z-0  min-h-[80px] w-[300px] md:min-h-[100px] md:w-[500px] lg:w-[800px]  xl:w-[1200px] 2xl:w-[1400px]  ">
            <div className='flex justify-between items-center'>
                    <motion.img initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }} src={Logo} className=' w-[80px]  sm:w-[90px] md:w-[100px] lg:w-[120px] ' alt="logo" />
                    <motion.img onClick={()=> setIsOpened(!isOpened)} initial={{ opacity: 0.8 }} whileHover={{ scale: 1.2, opacity: 1 }} transition={{ type: "spring", stiffness: 300 }} style={{ cursor: "pointer" }} src={Menu} alt="menu" />
                </div>
            </div>     
        </>
    )
}

export default navbar

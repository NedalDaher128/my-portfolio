import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router";

interface MenuProps {
    isOpened: boolean;
    setIsOpened: (isOpened: boolean) => void;
}

const Menu = ({ setIsOpened, isOpened }: MenuProps) => {
    useEffect(() => {
        document.body.style.overflow = isOpened ? 'hidden' : 'auto';
    }, [isOpened]);

    return (
        <AnimatePresence>
            {isOpened && (
                <motion.div
                    className="fixed inset-0 flex flex-col w-full h-full pr-[20px] pt-[5px] md:pt-[62px] md:pr-[62px] font-body bg-white text-black justify-around items-center z-10"
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    exit={{ opacity: 0, }}
                    transition={{ duration: 0.5 }}
                >
                    {/* زر الإغلاق */}
                    <img
                        className="cursor-pointer self-end"
                        onClick={() => setIsOpened(false)}
                        src="/X.svg"
                        alt="Close Menu"
                    />

                    {/* المحتوى */}
                    <div className="flex flex-col md:flex-row  items-center justify-around w-full text-black text-[16px] gap-8 font-bold">
                        <div className="flex flex-row items-center text-black text-[16px] gap-8 font-semibold">
                            <ul className="text-[48px] md:text-[64px] ">
                                <Link className='block' to="/">HOME</Link>
                                <Link className='block' to="/projects">PROJECTS</Link>
                                <Link className='block' to="/about">ABOUT</Link>
                                <Link className='block' to="/contact">CONTACT</Link>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start font-body font-bold text-[24px] gap-5">
                            <p>your_mail@email.com</p>
                            <p>+123 456 7890</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Menu;

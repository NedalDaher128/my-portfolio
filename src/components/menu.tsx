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
                    className="fixed inset-0 grid grid-rows-[auto_1fr] w-full h-full font-body bg-white text-black z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* زر الإغلاق في أعلى الصفحة */}
                    <div className="flex  justify-end items-center pr-[37px] pt-[30px] md::pt-[119px] md:pr-[60px] ">
                        <img
                            className="cursor-pointer   "
                            onClick={() => setIsOpened(!isOpened)}
                            src="/X.svg"
                            alt="Close Menu"
                        />
                    </div>

                    {/* المحتوى في منتصف الشاشة */}
                    <div className="grid place-items-center text-center">
                        <div className="flex flex-col  items-center w-full justify-around  gap-8  md:flex-row">
                            {/* الروابط */}
                            <ul className="text-[48px] md:text-[64px] font-bold">
                                <Link onClick={()=> setIsOpened(!isOpened)}  className="block" to="/">HOME</Link>
                                <Link onClick={()=> setIsOpened(!isOpened)}  className="block" to="/about">ABOUT</Link>
                                <Link onClick={()=> setIsOpened(!isOpened)}  className="block" to="/contact">CONTACT</Link>
                            </ul>

                            {/* معلومات التواصل */}
                            <div className="flex flex-col gap-5 text-[24px] font-bold">
                                <p>your_mail@email.com</p>
                                <p>+123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            )}
        </AnimatePresence>
    );
};

export default Menu;

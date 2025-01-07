import { Link } from "react-router";

const footer  = () => {
    return (
        <footer className=" bg-black h-[400px] text-white flex flex-col md:flex-row justify-around items-center">

            <div className="flex flex-row items-center text-white text-[16px] gap-3 font-bold">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>

            </div>
            <div className="flex flex-col items-center text-white font-bold gap-5">
                <p className=" text-[16px]">your_mail@email.com</p>
                <p className=" text-[16px]">+123 456 7890</p>
            </div>
            <img src="/logo.png" alt="nedal daher" />
        </footer>
    )
}


export default footer;
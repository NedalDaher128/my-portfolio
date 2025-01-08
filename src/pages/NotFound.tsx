const NotFound = () => {
    return (
        <div className=" h-[1500px]">
            <div className="flex flex-col justify-center items-center  min-h-[810px] w-full bg-black overflow-hidden ">
                <h1 data-aos="fade-left" className="text-white text-6xl font-body">Not Found</h1>
                <p data-aos="fade-down" className="font-logo cursor-pointer text-[16px] text-white tracking-[5px] md:text-[30px] md:tracking-[11px] ">Not Found </p>
            </div>
            <div className=" h-[810px] flex justify-center items-center text-center">
                <h1 className=" text-[46px] md:text-[56px] font-bold">404 Not Found Page</h1>
            </div>
        </div>
    )
}

export default NotFound
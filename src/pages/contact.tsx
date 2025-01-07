import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const Contact = () => {


    return (
        <div className=" h-full">
            <div className="flex flex-col justify-center items-center  min-h-[810px] w-full bg-black overflow-hidden ">
                <h1 className="text-white text-6xl font-body">CONTACT ME</h1>
                <p className="font-logo cursor-pointer text-[16px] text-white tracking-[5px] md:text-[30px] md:tracking-[11px] ">CALL ME 😭</p>
            </div>
            <div className="flex w-full flex-col gap-16 justify-center items-center min-h-[780px] p-16 ">
                <div className="flex flex-col  gap-5 max-w-[300px]  w-[300px] md:max-w-[700px] md:w-[700px] xl:max-w-[1200px] xl:w-[1200px]">
                    <h1 className="text-4xl fon font-bold font-logo">Contact Me</h1>
                    <div className=" flex flex-col gap-5 md:flex-row items-center justify-between  ">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label className=" font-logo font-bold text-[16px]" htmlFor="Name">Name</Label>
                            <Input className=" border-[#000000] font-text"  type="Name" id="Name" placeholder="Your name" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label className=" font-logo font-bold text-[16px]" htmlFor="email">Email</Label>
                            <Input className=" border-[#000000] font-text" type="email" id="email" placeholder="Email" />
                        </div>

                    </div>
                    <Textarea className="   h-[300px] font-text border-[#000000]"  placeholder="Type your message here." />
                </div>
                <Button className=" bg-[#D9D9D9] w-[240px] h-[60px] " variant="outline">Send message</Button>
            </div>
        </div>
    )
}

export default Contact;
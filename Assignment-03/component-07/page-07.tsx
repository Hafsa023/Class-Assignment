import Image from "next/image";
import logo from "@/app/assets/Logo.png"
import line from "@/app/assets/Line 2.png"

const Seven = () => {
    return(
        <div className="w-[1920px] h-[461px] absolute top-[5195px] bg-[#043873] flex items-center ">
            <div className="w-[1480px] h-[289px] my-[100px] absolute top-[7%] left-[11%]">
                <div className="w-[1480px] h-[169px]  flex justify-between  ">
                    <div className="w-[295px] h-[169px] ">
                        <div className="w-[191px] h-[34px] "><Image src={logo} alt="logo"></Image></div>
                        <div className="w-[240px] h-[120px] my-[15px]  "><p className="font-normal text-[#F7F7EE] text-[18px] leading-[30px] tracking-[-2%]  ">whitepace was created for the new ways we live and work. We make a better workspace around the world</p></div>
                    </div>
                    <div className="w-[295px] h-[127px] mx-[100px] absolute left-[20%]">
                        <div className="w-[68px] h-[22px] "><p className="font-bold text-white text-[18px] leading-[21.78px] tracking-[-2%] ">Product</p></div>
                        <div className="w-[70px] h-[20px]"><p className="font-normal text-[16px] text-[#ffe492] my-[16px] leading-[20px] tracking-[-2%] ">Overview</p></div>
                        <div className="w-[50px] h-[20px] "><p className="font-normal text-[16px] text-white my-[16px] leading-[20px] tracking-[-2%]">Pricing</p></div>
                        <div className="w-[177px] h-[20px] "><p className="font-normal text-[16px] text-white my-[16px] leading-[20px] tracking-[-2%]">Customer stories</p></div>
                    </div>
                    <div className="w-[295px] h-[130px] mx-[100px] absolute left-[46.5%] ">
                        <div className="w-[91px] h-[22px] "><p className="text-white font-bold text-[18px] leading-[21.78px] tracking-[-2%]">Resources</p></div>
                        <div className="w-[33px] h-[20px]"><p className="font-normal text-[16px] text-[white] my-[16px] leading-[20px] tracking-[-2%] ">Blog</p></div>
                        <div className="w-[128px] h-[20px] "><p className="font-normal text-[16px] text-white my-[16px] leading-[20px] tracking-[-2%]">Guides & tutorials</p></div>
                        <div className="w-[130px] h-[20px] "><p className="font-normal text-[16px] text-white my-[16px] leading-[20px] tracking-[-2%]">Help center</p></div>
                    </div>
                    <div className="w-[295px] h-[130px] mx-[100px] absolute left-[73%]">
                    <div className="w-[83px] h-[22px] "><p className="text-white font-bold text-[18px] leading-[21.78px] tracking-[-2%]">Company</p></div>
                        <div className="w-[66px] h-[20px]"><p className="font-normal text-[16px] text-[white] my-[16px] leading-[20px] tracking-[-2%] ">About us</p></div>
                        <div className="w-[62px] h-[20px] "><p className="font-normal text-[16px] text-white my-[16px] leading-[20px] tracking-[-2%]">Careers</p></div>
                        <div className="w-[99px] h-[20px] "><p className="font-normal text-[16px] text-white my-[16px] leading-[20px] tracking-[-2%]">Media kit</p></div>
                    </div>
                </div>
                <div className="w-[1480px] h-[0px] my-[85px] ">
                    <Image src={line} alt="line"></Image>
                </div>
                <div className="w-[1480px] h-[20px] absolute bottom-[-0.5%] ">
                    <div className="w-[169px] h-[20px] absolute left-[44%]"><p className="text-white font-normal text-[16px] leading-[20px] tracking-[-2%]">©2021 Whitepace LLC.</p></div>
                </div>
            </div>
        </div>
    )
}
export default Seven;

import Image from "next/image";
import logos from "@/app/assets/sponsors.png"

const Six = () => {
    return(
        <div className="w-[1920px] h-[538px] absolute top-[4654px] px-[220px] py-[140px] ">
            <div className="w-[1482px] h-[87px] ">
                <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%]  text-[#212529] absolute left-[37%]">Our sponsors</h1>
            </div>
            <div className="w-[1482px] h-[71px] my-[100px] absolute left-[10%] ">
                <Image src={logos} alt="sponsors"></Image>

            </div>
        </div>
    )
}

export default Six;
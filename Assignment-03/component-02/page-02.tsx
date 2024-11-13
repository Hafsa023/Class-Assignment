import Image from "next/image";
import circle from "@/app/assets/circle.png"



const Two = () => {
    return(
        <div className="w-[1920px] h-[1588px] absolute top-[921px] px-[220px] py-[140px] ">
            <div className="w-[1480px] h-[547px]  flex justify-between ">
                <div className="w-[672px] h-[411px] ">
                    <div className="w-[672] h-[288px] my-[58px]">
                        <div className="w-[672px] h-[174px] ">
                            <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]">
                                Project Management
                            </h1>
                        </div>
                        <div className="w-[672px] h-[60px] my-[20px]">
                            <p className="font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#212529] ">
                                Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                            </p>
                        </div>
                    </div>
                    <div className="w-[201px] h-[63px] rounded-[6px] py-[20px] px-[40px] bg-[#4F9CF9]  ">
                        <div className="w-[97px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[-2%] text-white  mx-[10px]  ">
                            Get Started
                        </div>
                    </div>
                </div>
                <div className="w-[748px] h-[549px] bg-[#C4DEFD] "></div>
            </div>

            <div className="w-[1480px] h-[661px] my-[100px] flex justify-between items-center">
                <div className="w-[710px] h-[661px] flex items-center">
                    <div className="w-[661px] h-[661px] mx-[35px] ">
                        <Image src={circle} alt="circle"></Image>
                    </div>
                </div>
                <div className="w-[670px] h-[294px] my-[60px] ">
                    <div className="w-[670px] h-[171px]">
                        <div className="w-[670px] h-[87px]">
                            <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]">Work together</h1>
                        </div>
                        <div className="w-[670px] h-[60px] my-[32px]">
                            <p className="text-[#212529]">With whitepace, share your notes with your colleagues and collaborate on them.
                                <br/>You can also publish a note to the internet and share the URL with others
                            </p>
                        </div>
                        <div className="w-[186px] h-[63px] px-[40px] py-[20px] rounded-[6px] bg-[#4F9CF9] my-[55px]">
                            <button className="w-[82px] h-[23px] text-white font-medium text-[18px] leading-[23px] tracking-[-2%] text-nowrap">Try it now -></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Two;
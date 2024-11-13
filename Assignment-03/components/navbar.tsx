import Image from "next/image";
import logo from "@/app/assets/Logo.png"

const Navbar = () => {
    return(
    <div className="w-[1920px] h-[92px] px-[220px] py-[16px] bg-[#043873] flex justify-between items-center text-white">
        <div className="w-[191px] h-[34px]">
            <Image src={logo} alt="image"></Image>
        </div>
        <div className="w-[737.5px] h-[60px] flex justify-between items-center ">
            <div className="w-[549px] h-[23px] ">
                <ul className="flex flex-row gap-[32px]   ">
                    <li>Products</li>
                    <li>Solutions</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="w-[126px] h-[60px] justify-between gap-[10px] ">
                <button className="py-[16px] px-[40px] rounded-lg bg-[#FFE492] text-black ">Login</button>
            </div>
        </div>

    </div>
    )
}
export default Navbar;
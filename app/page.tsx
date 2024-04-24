import Image from "next/image";
import Nav1 from "../../newfolder/public/Nav1.svg"
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <><nav>
      <div className="flex w-full items-center 	justify-between py-4 px-4">
        <div className="flex flex-row">
        <Image src="/asset/Nav1.svg" width={40} height={40} alt="" />
          <h1 className="text-[#263238] font-bold stroke-black text-[30px]	">Nexcent</h1>
          
        </div>

        <div className="flex w-left font-light py-4 px-4 gap-x-4">
          <h1 className="[text-#4D4D4D]">Home</h1>
          <h1 className="[text-#4D4D4D]">Features</h1>
          <h1 className="[text-#4D4D4D]">Community</h1>
          <h1 className="[text-#4D4D4D]">Blog</h1>
          <h1 className="[text-#4D4D4D]">Pricing</h1>
          <button className="px-4 bg-[#4CAF4F] font-small text-white rounded">Register Now →</button>


        </div>
        
        
      </div>

    </nav>

    <div className="bg-[#F5F7FA] py-[220px] flex flex-rows ">
      
      <div>
        <h1 className="pl-20 text-[45px] font-bold">Lessons and insights</h1>
      <h1 className="pl-20 text-[45px] font-bold text-[#4CAF4F]">from 8 years</h1>
      <p className="pl-20 pb-2 text-[#717171]">Where to grow your business as a photographer: site or social media?</p>
      
      <button className="ml-20 px-4 py-4 bg-[#4CAF4F] font-small text-white rounded">Register</button>

      </div>
      
      <div>
      
        <Image src="/asset/Hero.svg" width={200} height={200} alt="" />
        
      </div>


    </div>

    <div>
      <h1 className="text-[30px] text-center font-bold text-[#4D4D4D]">Our Client</h1>
      <p className="text-center text-[#717171]">We have been working with some Fortune 500+ clients</p>
    </div>

    <div className="py-11"></div>

    <div>
    <h1 className="text-[30px] text-center font-bold text-[#4D4D4D]">Manage your entire community</h1>
    <h1 className="text-[30px] text-center font-bold text-[#4D4D4D]">in a single system</h1>
      <p className="text-center text-[#717171]">Who is Nextcent suitable for?</p>
    </div>
    
    <div className="py-7"></div>

    <div className="grid grid-cols-3 gap-4">
      <div>
        <h1 className="text-center font-bold text-[28px] text-[#4D4D4D]">Membership</h1>
        <h1 className="text-center font-bold text-[28px] text-[#4D4D4D]">Organisations</h1>
        <p className="text-center text-[#717171]">Our membership management software provides full automation of membership renewals and payments</p>
      </div>

      <div>
        <h1 className="text-center font-bold text-[28px] text-[#4D4D4D]">National</h1>
        <h1 className="text-center font-bold text-[28px] text-[#4D4D4D]">Associations</h1>
        <p className="text-center text-[#717171]">Our membership management software provides full automation of membership renewals and payments</p>
      </div>

      <div>
        <h1 className="text-center font-bold text-[28px] text-[#4D4D4D]">Clubs And</h1>
        <h1 className="text-center font-bold text-[28px] text-[#4D4D4D]">Groups</h1>
        <p className="text-center text-[#717171]">Our membership management software provides full automation of membership renewals and payments</p>
      </div>
      
    </div>
    
      

    </>
  );
}

import Image from "next/image";
import CircuralAnimation from "../components/circural-animation";
import SectionWrapper from "../components/section-wrapper";
import HeroButtons from "../components/hero-buttons";
import PartnersLongTemp from "../components/partners-long-term";
import AutoScrolledCompanies from "../components/auto-scrolled-companies";
import Quotes from "../components/quotes";
import Clutch from "../components/clutch";
import Numbers from "../components/numbers";
import OurServices from "../components/our-services";
import WhyWorkWithUs from "../components/why-work-with-us";
import WeWorkGlobally from "../components/we-work-globally";
import PartnerWithUs from "../components/partner-with-us";
import MotionWrapper from "../components/motion-wrapper";
import { partnersArray } from "@/data/partners";

export default function Home() {
  return (
    <main className="">
      <div className=" bg-[#efece7] ">
        <CircuralAnimation />
        {/* <HeroButtons /> */}
        <div className="">
          <p className="text-center font-bold uppercase">Certified Partners:</p>
          <div>
            <ul className="flex flex-wrap items-center justify-center gap-6 ">
              {partnersArray.map((partner) => (
                <li
                  key={partner.name}
                  className=" flex h-16  translate-y-[50%] cursor-pointer rounded-2xl  bg-white p-4 hover:border-2"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={130}
                    height={130}
                    className="z-30 w-auto object-contain object-center"
                  />
                </li>
              ))}
            </ul>
            <div className="h-[100px] bg-white"></div>
          </div>
        </div>
      </div>
      <PartnersLongTemp />

      <AutoScrolledCompanies />

      {/* <div className="mx-auto w-[95vw] overflow-x-hidden bg-blue-400"> */}
      <MotionWrapper>
        <Quotes />
      </MotionWrapper>
      {/* </div> */}
      <MotionWrapper>
        <Clutch />
      </MotionWrapper>
      <Numbers />
      <MotionWrapper>
        <OurServices />
      </MotionWrapper>
      <MotionWrapper>
        <WhyWorkWithUs />
      </MotionWrapper>
      <MotionWrapper>
        <WeWorkGlobally />
      </MotionWrapper>

      <PartnerWithUs />
    </main>
  );
}

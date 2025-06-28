import Image from "next/image";
import Footer from "../common/footer";
import Logo from "../common/logo";
import Wheel from "../home/Wheel";
import Prizes from "../home/Prizes";
import HeroBanner from "../home/HeroBanner";
import TableUser from "../home/TableUser";
import GameHot from "../home/GameHot";
import TopBanner from "../home/TopBanner";

export default function HomeV1() {
  return (
    <div className="bg-[url(/assets/images/ldp-1/webp/bg-body.webp)] min-h-[100vh] bg-cover md:bg-position-[center_20%]">
      <div className="header text-center absolute top left-0 right-0 z-10">
        <Logo />
      </div>
      <TopBanner>
        <Wheel />
      </TopBanner>
      <div className="h-2"></div>
      <Prizes />
      <div className="h-2"></div>
      <HeroBanner />
      <div className="h-6 md:h-12"></div>
      <TableUser />
      <div className="h-12"></div>
      <GameHot />
      <div className="h-12"></div>
      <Footer />
    </div>
  );
}

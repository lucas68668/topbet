import { cn } from "@/lib/utils";
import Image from "next/image";

const Prizes = () => {
  const PRIZES = [
    {
      id: 1,
      title: "",
      prizeAmount: 100,
    },
    {
      id: 1,
      title: "",
      prizeAmount: 80,
    },
    {
      id: 1,
      title: "",
      prizeAmount: 40,
    },
    {
      id: 1,
      title: "",
      prizeAmount: 20,
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <div className="prizes text-center">
        <div className="header mx-auto relative z-10 w-[68%] lg:w-[33%]">
          <Image
            src="/assets/images/ldp-1/webp/prize-title.webp"
            width={412}
            height={105}
            alt="top banner"
            className="aspect-[412/105] w-full"
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-x-6 gap-x-3 -mt-[3%] md:-mt-[1.5%]">
          {PRIZES.map((item, _index) => (
            <PrizeItem key={_index} {...item} className="" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Prizes;

interface PrizeItemProps {
  prizeAmount: number;
  className?: string;
}
const PrizeItem: React.FC<PrizeItemProps> = ({ prizeAmount, className }) => {
  return (
    <div>
      <div
        className={cn(
          "prize-item aspect-[300/320] bg-[url(/assets/images/ldp-1/webp/bg-item-reward.webp)] overflow-hidden bg-cover rounded-3xl",
          className
        )}
      >
        <div className="prize-item__inner flex flex-col justify-between h-full relative">
          <div className="prize-item__top px-[8%] pt-[8%]">
            <div className="prize-item__top-bar w-full h-4 sm:h-6 rounded-full bg-gradient-to-t from-[#2FA076] to-[#206D50]"></div>
            <div className="prize-item__top-content bg-gradient-to-b from-[#FEFCF8] to-[#f6deab] mx-3 mt-2 relative">
              <div className="w-full  h-4 sm:h-6 bg-gradient-to-t from-[#FEFCF8] from-[20%] to-transparent to-[100%] -mt-4 sm:-mt-6 absolute left-0 right-0"></div>
              <div className="py-[6%]">
                <span className="bg-gradient-to-b from-[#FA7306] to-[#DE0401] bg-clip-text text-transparent font-black text-[2rem] md:text-[3.5rem] leading-none">
                  {prizeAmount}
                </span>
                <div>
                  <span className="bg-gradient-to-b from-[#FA7306] to-[#DE0401] bg-clip-text text-transparent font-black text-[1.125rem] md:text-[1.5rem] leading-none">
                    TRIỆU VNĐ
                  </span>
                </div>
              </div>
              <div className="pattern aspect-[243/16] absolute bottom-0 translate-y-[90%] left-0 right-0">
                <svg
                  width="243"
                  height="16"
                  viewBox="0 0 243 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M10.8314 15.4213H0V0H242.553V15.4213H230.555C230.58 15.2716 230.606 15.1469 230.606 14.9972C230.606 10.6563 227.029 7.13863 222.615 7.13863C218.201 7.13863 214.625 10.6563 214.625 14.9972C214.625 15.1469 214.676 15.2716 214.676 15.4213H201.434C201.46 15.2716 201.485 15.1469 201.485 14.9972C201.485 10.6563 197.908 7.13863 193.495 7.13863C189.081 7.13863 185.504 10.6563 185.504 14.9972C185.504 15.1469 185.555 15.2716 185.555 15.4213H172.314C172.339 15.2716 172.364 15.1469 172.364 14.9972C172.364 10.6563 168.788 7.13863 164.374 7.13863C159.96 7.13863 156.384 10.6563 156.384 14.9972C156.384 15.1469 156.434 15.2716 156.434 15.4213H143.193C143.218 15.2716 143.244 15.1469 143.244 14.9972C143.244 10.6563 139.667 7.13863 135.253 7.13863C130.84 7.13863 127.263 10.6563 127.263 14.9972C127.263 15.1469 127.314 15.2716 127.314 15.4213H114.073C114.098 15.2716 114.123 15.1469 114.123 14.9972C114.123 10.6563 110.547 7.13863 106.133 7.13863C101.719 7.13863 98.1425 10.6563 98.1425 14.9972C98.1425 15.1469 98.1932 15.2716 98.1932 15.4213H84.952C84.9773 15.2716 85.0027 15.1469 85.0027 14.9972C85.0027 10.6563 81.426 7.13863 77.0123 7.13863C72.5985 7.13863 69.0219 10.6563 69.0219 14.9972C69.0219 15.1469 69.0726 15.2716 69.0726 15.4213H55.8314C55.8567 15.2716 55.8821 15.1469 55.8821 14.9972C55.8821 10.6563 52.3054 7.13863 47.8917 7.13863C43.478 7.13863 39.9013 10.6563 39.9013 14.9972C39.9013 15.1469 39.952 15.2716 39.952 15.4213H26.7108C26.7361 15.2716 26.7615 15.1469 26.7615 14.9972C26.7615 10.6563 23.1849 7.13863 18.7711 7.13863C14.3574 7.13863 10.7807 10.6563 10.7807 14.9972C10.7807 15.1469 10.8314 15.2716 10.8314 15.4213Z"
                    fill="url(#paint0_linear_171_6485)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_171_6485"
                      x1="121.277"
                      y1="96.6624"
                      x2="121.277"
                      y2="-140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EEBE5A" />
                      <stop offset="0.55" stopColor="#FBF0D8" />
                      <stop offset="0.95" stopColor="#FEFCF8" />
                      <stop offset="1" stopColor="#237556" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="prize-item__bottom relative">
            <Image
              src={"/assets/images/ldp-1/webp/gold.webp"}
              alt="Gold"
              width={304}
              height={77}
              className="w-full absolute left-0 right-0 top-0 -translate-y-[70%]"
            />
            <div className="prize-item__bottom-content bg-gradient-to-t from-[#087860] to-[#86dcb1] relative aspect-[300/73] flex items-center justify-center">
              <div className="curve aspect-[300/21] w-full absolute top-0 -translate-y-[99%]">
                <svg
                  width="300"
                  height="21"
                  viewBox="0 0 300 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M146.658 19.6019C59.5522 19.6019 0 0 0 0V21H300V0C300 0 231.045 19.6019 146.658 19.6019Z"
                    fill="url(#paint0_linear_171_6480)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_171_6480"
                      x1="186.269"
                      y1="14.2559"
                      x2="186.269"
                      y2="98.8857"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91E4B8" />
                      <stop offset="1" stopColor="#087860" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="bg-[#00514C] text-xs sm:text-sm md:text-xl font-bold text-white px-[8%] py-[3%] rounded-full">
                GIẢI TIỀN MẶT
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="prize-item__bottom-content bg-gradient-to-b from-[#087860] via-[10%] to-[transpaarent] to-[40%] relative aspect-[300/73] flex items-center justify-center rounded-tr-3xl rounded-tl-3xl"></div>
    </div>
  );
};

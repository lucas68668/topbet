import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "logo flex justify-center relative mx-auto aspect-[460/100] w-[30%] md:w-[20%] lg:w-[20%]",
        className
      )}
    >
      <Image
        src="/assets/images/ldp-1/logo-pattern-left.svg"
        alt="logo"
        width={70}
        height={100}
        className="aspect-[7/10] max-h-full w-fit -mr-[2px]"
      />

      <div className="inner bg-[#1C4332] flex items-center justify-center py-[5%]">
        <Image
          src="/assets/images/ldp-1/logo.svg"
          alt="logo"
          width={312}
          height={62}
          className="max-w-full max-h-full object-contain aspect-[312/62]"
        />
      </div>

      <Image
        src="/assets/images/ldp-1/logo-pattern-right.svg"
        alt="logo"
        width={70}
        height={100}
        className="aspect-[7/10] max-h-full w-fit -ml-[2px]"
      />
    </div>
  );
};
export default Logo;

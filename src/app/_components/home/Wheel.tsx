"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import DiaLogSignUp from "./SingUp/DialogSignUp";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
interface WheelProps {
  className?: string;
}
const Wheel: React.FC<WheelProps> = ({ className }) => {
  const [drawing, setDrawing] = useState(false);
  const [rotate, setRotate] = useState(0);
  const rotateRef = useRef(0);
  const handleDraw = () => {
    if (drawing) return;

    const rorate = Math.round(Math.random() * 10000);
    rotateRef.current += rorate;

    setRotate(rotateRef.current);
    setDrawing(true);
    const timeout = setTimeout(() => {
      setDrawing(false);
      clearTimeout(timeout);
    }, 10000);
  };

  return (
    <div className="wheel w-[80%] md:w-[30%] lg:w-[30%] text-center max-h-full">
      <div className={cn("mx-auto max-h-full relative w-full", className)}>
        <Image
          src="/assets/images/ldp-1/webp/wheel-container.webp"
          alt="wheel-container"
          width={547}
          height={651}
          quality={100}
          className="aspect-[547/651] w-full"
        />
        <div
          className="absolute aspect-square bottom-[6.5%] w-[84%] left-[8%] pointer-events-none"
          style={{
            transform: `rotate(${rotate}deg)`,
            transitionDuration: "10s",
            transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          }}
        >
          <Image
            src="/assets/images/ldp-1/webp/wheel-inner.webp"
            alt="wheel-container"
            width={464}
            height={464}
            quality={100}
            className="aspect-square w-full"
          />
        </div>
        <div className="absolute aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-[21%] w-[36%]">
          <Button
            className="bg-transparent p-0 hover:bg-transparent cursor-pointer w-full h-full"
            onClick={handleDraw}
          >
            <Image
              src="/assets/images/ldp-1/webp/wheel-draw.webp"
              alt="wheel-container"
              width={185}
              height={185}
              quality={100}
              className="aspect-square w-full"
            />
          </Button>
        </div>
        <div className="wheel-pointer absolute right-0 top-1/2 translate-y-1/2 -mt-[3%] -mx-[5%] aspect-[98/66] w-[18%]">
          <Image
            src="/assets/images/ldp-1/webp/wheel-pointer.webp"
            alt="wheel-container"
            width={98}
            height={66}
            className="w-full"
          />
        </div>
      </div>
      <div className="h-3"></div>
      <DiaLogSignUp />
    </div>
  );
};
export default Wheel;

"use client";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ScreenShot = () => {
  const swiperRef = useRef<SwiperType>(null);

  const GAMES = [
    {
      id: 1,
      thumbnail: "/assets/images/ldp-2/sc-1.webp",
    },
    {
      id: 2,
      thumbnail: "/assets/images/ldp-2/sc-2.webp",
    },
    {
      id: 3,
      thumbnail: "/assets/images/ldp-2/sc-3.webp",
    },
    {
      id: 4,
      thumbnail: "/assets/images/ldp-2/sc-4.webp",
    },
    {
      id: 5,
      thumbnail: "/assets/images/ldp-2/sc-5.webp",
    },
    {
      id: 6,
      thumbnail: "/assets/images/ldp-2/sc-6.webp",
    },
  ];
  return (
    <div className="game-hot">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-[1rem] sm:text-lg font-semibold mb-4">
          Screenshots
        </h2>
        <div className="relative">
          <Swiper
            spaceBetween={12}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                spaceBetween: 16,
              },
            }}
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {GAMES.map((game) => (
              <SwiperSlide
                key={game.id}
                className="w-full max-w-[35%] md:max-w-[30%] lg:max-w-[22%] box-border rounded-md overflow-hidden py-2"
              >
                <Link href="/">
                  <Image
                    src={game.thumbnail}
                    width={640}
                    height={640}
                    alt="game"
                    className="w-full aspect-[9/16] object-cover hover:-translate-y-[3px] rounded-md transition-all"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className=" hidden sm:block">
            <div className="flex items-center gap-2 absolute z-10 left-0 right-0 top-1/2 justify-between pointer-events-none">
              <Button
                className="bg-white rounded-full w-10 h-10 p-0 hover:bg-white cursor-pointer shadow-none pointer-events-auto"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ChevronLeft className="!text-gray-600 !w-6 !h-6" />
              </Button>
              <Button
                className="bg-white rounded-full w-10 h-10 p-0 leading-none hover:bg-white cursor-pointer shadow-none pointer-events-auto"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <ChevronRight className="!text-gray-600 !w-6 !h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScreenShot;

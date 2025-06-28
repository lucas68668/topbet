"use client";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const GameHot = () => {
  const swiperRef = useRef<SwiperType>(null);

  const GAMES = [
    {
      id: 1,
      thumbnail: "/assets/images/ldp-1/webp/game-1.webp",
    },
    {
      id: 2,
      thumbnail: "/assets/images/ldp-1/webp/game-2.webp",
    },
    {
      id: 3,
      thumbnail: "/assets/images/ldp-1/webp/game-3.webp",
    },
    {
      id: 4,
      thumbnail: "/assets/images/ldp-1/webp/game-4.webp",
    },
    {
      id: 5,
      thumbnail: "/assets/images/ldp-1/webp/game-5.webp",
    },
    {
      id: 6,
      thumbnail: "/assets/images/ldp-1/webp/game-6.webp",
    },
  ];
  return (
    <div className="game-hot">
      <div className="container mx-auto px-4">
        <div className="header flex justify-between mb-6">
          <h3 className="font-extrabold text-3xl text-[#1C4332] uppercase">
            Game hot
          </h3>
          <div className="flex">
            <div className="flex items-center gap-2">
              <Button
                className="bg-transparent w-fit p-0 hover:bg-transparent cursor-pointer shadow-none"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <Image
                  src="/assets/images/ldp-1/arrow-left.svg"
                  alt="prev"
                  width={30}
                  height={30}
                />
              </Button>
              <Button
                className="bg-transparent w-fit p-0 rounded-full leading-none hover:bg-transparent cursor-pointer  shadow-none"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <Image
                  src="/assets/images/ldp-1/arrow-right.svg"
                  alt="next"
                  width={30}
                  height={30}
                />
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Swiper
            spaceBetween={12}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            }}
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {GAMES.map((game) => (
              <SwiperSlide
                key={game.id}
                className="w-full max-w-[36%] md:max-w-none box-border"
              >
                <Link href="/">
                  <Image
                    src={game.thumbnail}
                    width={193}
                    height={193}
                    alt="game"
                    className="w-full"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default GameHot;

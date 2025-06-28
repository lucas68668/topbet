import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="container mx-auto px-4">
        <div className="hero-banner-content bg-[url('/assets/images/ldp-1/webp/bg-slogan.webp')] rounded-2xl flex items-center gap-6 px-4 lg:px-6 py-3">
          <div className="thumbnail aspect-[290/180] w-[200px] xl:w-[290px] -mt-8 hidden lg:block">
            <Image
              src="/assets/images/ldp-1/webp/coin-dollas.webp"
              alt="dolla"
              width={300}
              height={200}
              quality={100}
            />
          </div>
          <div className="content flex-1">
            <div className="flex relative">
              <div className="coins">
                <Image
                  src="/assets/images/ldp-1/webp/coin-1.webp"
                  alt="coin"
                  width={78}
                  height={80}
                  quality={100}
                  className="absolute left-0 -translate-x-1/2 md:translate-x-0 lg:left-8 top-0 -translate-y-[30%] w-[34px] md:w-[78px]"
                />
                <Image
                  src="/assets/images/ldp-1/webp/coin-2.webp"
                  alt="coin"
                  width={78}
                  height={80}
                  quality={100}
                  className="absolute right-0 bottom-0 translate-x-[30%] w-[34px] md:w-[78px]"
                />
              </div>
              <div className="pattern-left">
                <svg
                  width="8"
                  height="118"
                  viewBox="0 0 8 118"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_157_5966)">
                    <path
                      d="M0 109.664C0.111717 109.664 0.290466 109.686 0.290466 109.686V109.817C3.15041 109.817 5.47411 107.536 5.47411 104.728C5.47411 101.92 3.15041 99.6386 0.290466 99.6386C0.178749 99.6386 0 99.6605 0 99.6605V91.2367C0.111717 91.2367 0.201093 91.2586 0.290466 91.2586C3.15041 91.2586 5.47411 88.9771 5.47411 86.1692C5.47411 83.3612 3.15041 81.0798 0.290466 81.0798C0.178749 81.0798 0 81.1017 0 81.1017V72.6778C0.111717 72.6778 0.201093 72.6998 0.290466 72.6998C3.15041 72.6998 5.47411 70.4183 5.47411 67.6103C5.47411 64.8024 3.15041 62.5209 0.290466 62.5209C0.178749 62.5209 0 62.5429 0 62.5429V54.119C0.111717 54.119 0.201093 54.1409 0.290466 54.1409C3.15041 54.1409 5.47411 51.8595 5.47411 49.0515C5.47411 46.2435 3.15041 43.9621 0.290466 43.9621C0.178749 43.9621 0 43.984 0 43.984V35.5601C0.111717 35.5601 0.201093 35.5821 0.290466 35.5821C3.15041 35.5821 5.47411 33.3006 5.47411 30.4927C5.47411 27.6847 3.15041 25.4032 0.290466 25.4032C0.178749 25.4032 0 25.4252 0 25.4252V17.0013C0.111717 17.0013 0.201093 17.0232 0.290466 17.0232C3.12807 17.0232 5.47411 14.7637 5.47411 11.9558C5.47411 9.1478 3.15041 6.86633 0.290466 6.86633C0.178749 6.86633 0 6.88827 0 6.88827V0H8V118H0V109.664Z"
                      fill="url(#paint0_linear_157_5966)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_157_5966"
                      x1="-251.185"
                      y1="59"
                      x2="1145.36"
                      y2="59"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F2D598" />
                      <stop offset="0.5" stopColor="#FFFEFB" />
                      <stop offset="1" stopColor="#F2D598" />
                    </linearGradient>
                    <clipPath id="clip0_157_5966">
                      <rect width="8" height="118" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="content-inner bg-gradient-to-r from-[#f7e4bd] via-[#FFFEFB] to-[#f7e4bd] flex-1 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[1rem] sm:text-[1.5rem] lg:text-3xl font-bold  leading-snug">
                    VÀ NHIỀU GIẢI THƯỞNG TIỀN MẶT
                  </p>
                  <p className="text-[1rem] sm:text-[1.5rem] lg:text-3xl font-bold leading-snug">
                    GIÁ TRỊ LÊN ĐẾN{" "}
                    <span className="bg-gradient-to-b from-[#FA7306] to-[#DE0401] bg-clip-text text-transparent font-black">
                      10 TRIỆU VNĐ
                    </span>
                  </p>
                </div>
              </div>
              <div className="pattern-right">
                <svg
                  width="8"
                  height="118"
                  viewBox="0 0 8 118"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_157_5967)">
                    <path
                      d="M8 109.664V118H0V0H8V6.73471C7.88828 6.73471 7.79909 6.71277 7.70972 6.71277C4.84977 6.71277 2.52594 8.99424 2.52594 11.8022C2.52594 14.6102 4.84977 16.8916 7.70972 16.8916C7.82143 16.8916 8 16.8697 8 16.8697V25.2935C7.88828 25.2935 7.79909 25.2716 7.70972 25.2716C4.84977 25.2716 2.52594 27.5531 2.52594 30.361C2.52594 33.169 4.84977 35.4505 7.70972 35.4505C7.82143 35.4505 8 35.4285 8 35.4285V43.8524C7.88828 43.8524 7.79909 43.8304 7.70972 43.8304C4.84977 43.8304 2.52594 46.1119 2.52594 48.9199C2.52594 51.7278 4.84977 54.0093 7.70972 54.0093C7.82143 54.0093 8 53.9874 8 53.9874V62.4112C7.88828 62.4112 7.79909 62.3893 7.70972 62.3893C4.84977 62.3893 2.52594 64.6708 2.52594 67.4787C2.52594 70.2867 4.84977 72.5681 7.70972 72.5681C7.82143 72.5681 8 72.5462 8 72.5462V80.9701C7.88828 80.9701 7.79909 80.9481 7.70972 80.9481C4.84977 80.9481 2.52594 83.2296 2.52594 86.0376C2.52594 88.8455 4.84977 91.127 7.70972 91.127C7.82143 91.127 8 91.105 8 91.105V99.5289C7.88828 99.5289 7.79909 99.507 7.70972 99.507C4.84977 99.507 2.52594 101.788 2.52594 104.596C2.52594 107.404 4.84977 109.686 7.70972 109.686C7.82143 109.686 8 109.664 8 109.664Z"
                      fill="url(#paint0_linear_157_5967)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_157_5967"
                      x1="-1120.18"
                      y1="59"
                      x2="276.36"
                      y2="59"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F2D598" />
                      <stop offset="0.5" stopColor="#FFFEFB" />
                      <stop offset="1" stopColor="#F2D598" />
                    </linearGradient>
                    <clipPath id="clip0_157_5967">
                      <rect width="8" height="118" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;

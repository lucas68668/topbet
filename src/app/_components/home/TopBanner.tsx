"use client";
import Image from "next/image";

import { PropsWithChildren } from "react";
import styled from "styled-components";
import styles from "./top-banner.module.css";

type TopbannerProps = PropsWithChildren & {};
const TopBanner: React.FC<TopbannerProps> = ({ children }) => {
  return (
    <TopBannerWraper className={`${styles.topbanner} relative mx-auto`}>
      <Image
        src="/assets/images/ldp-1/webp/top-banner.webp"
        width={1920}
        height={1000}
        alt="top banner"
        className={`${styles["banner-pc"]} w-full hidden md:block h-full object-cover`}
      />
      <Image
        src="/assets/images/ldp-1/webp/top-banner-mb.webp"
        width={375}
        height={520}
        alt="top banner"
        className={`${styles["banner-mobile"]} w-full block md:hidden `}
      />
      <div className="content absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center pt-[5%]">
        <div className="w-full h-full mx-auto flex items-center justify-center">
          {children}
        </div>
      </div>
    </TopBannerWraper>
  );
};
export default TopBanner;

const TopBannerWraper = styled("div")`
  @media all and (orientation: landscape) and (max-width: 1280.1px) {
    .wheel {
      width: 32%;
    }
  }

  @media all and (orientation: landscape) and (max-width: 1024.1px) {
    .wheel {
      width: 32%;
    }
  }

  @media all and (orientation: landscape) and (max-width: 956.1px) {
    .wheel {
      width: 24%;
    }
  }

  @media all and (orientation: landscape) and (max-width: 896.1px) {
    .wheel {
      width: 24%;
    }
  }
  @media all and (orientation: landscape) and (max-width: 812px) {
    .wheel {
      width: 23%;
    }
  }
  @media all and (orientation: landscape) and (max-width: 640px) {
    .wheel {
      width: 24%;
    }
  }
`;

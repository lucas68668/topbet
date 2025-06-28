import InputSearch from "@/components/base/InputSearch";
import { Button } from "@/components/ui/button";
import { InfoIcon, Search } from "lucide-react";

const Header = () => {
  return (
    <div className="header sticky top-0 z-10">
      <div className="flex items-center justify-between py-3 px-4 shadow-[0_2px_6px_-4px_rgb(0,0,0,0.3)] bg-white">
        <div className="logo inline-flex items-center gap-2">
          <svg
            aria-hidden="true"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9"
          >
            <path fill="none" d="M0,0h40v40H0V0z"></path>
            <g>
              <path
                d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z"
                fill="#EA4335"
              ></path>
              <path
                d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z"
                fill="#FBBC04"
              ></path>
              <path
                d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z"
                fill="#4285F4"
              ></path>
              <path
                d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z"
                fill="#34A853"
              ></path>
            </g>
          </svg>
          <span className="text-[1.25rem] font-[500] text-gray-600 font-['inter'] hidden sm:block">
            Google Play
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="search">
            <Button className="rounded-full hover:!bg-transparent bg-slate-100 p-0 block md:hidden w-9 h-9">
              <Search className="!w-4 !h-4 text-black/60" />
            </Button>
            <InputSearch className="hidden md:block" />
          </div>
          <div className="noti">
            <Button className="p-0 rounded-full shadow-none bg-white hover:bg-slate-100 text-xl w-9 h-9 cursor-pointer">
              <InfoIcon className="text-black/60 !w-5 !h-5" />
            </Button>
          </div>
          <div className="avata">
            <Button className="p-0 rounded-full shadow-none bg-blue-50 hover:bg-slate-100 text-xl w-9 h-9 cursor-pointer">
              <span className="text-blue-500 font-semibold">G</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

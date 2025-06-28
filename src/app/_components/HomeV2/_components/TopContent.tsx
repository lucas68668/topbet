"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Bookmark,
  BookMarkedIcon,
  Download,
  ShareIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface TopContentProps {
  className?: string;
}
const TopContent: React.FC<TopContentProps> = ({ className }) => {
  const router = useRouter();
  return (
    <div className={cn("top-content", className)}>
      <div className="container max-w-4xl mx-auto flex flex-col gap-6 px-4">
        <div className="flex gap-6">
          <div className="icon-app w-24">
            <Image
              src="/assets/images/ldp-2/logo.jpg"
              alt="logo"
              width={200}
              height={200}
              className="w-24"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-2xl font-bold text-gray-900">
              Win79 - Game Bài Hiện Đại
            </h3>
            <Link
              href="/"
              className="text-blue-600 font-[500] mb-2 inline-block text-sm"
            >
              Win79
            </Link>
            <p className="bg-gray-100 px-3 py-1 text-gray-500 text-xs rounded-full w-fit mb-2">
              Được xác minh bởi ứng dụng
            </p>
            <ul className="flex items-center text-gray-600 p-0 m-0 text-xs">
              <li>Trò chơi</li>
              <li className="w-1 h-1 bg-gray-400 rounded-full mx-2"></li>
              <li>Cờ bạc</li>
              <li className="w-1 h-1 bg-gray-400 rounded-full mx-2"></li>
              <li>Chứa quảng cáo</li>
            </ul>
          </div>
        </div>
        <div className="info border-t pt-6 border-r-gray-200">
          <div className="flex mb-6">
            <div className="item flex flex-col justify-center items-center gap-1 w-1/3 px-2">
              <div className="flex items-center gap-1">
                <span className="font-semibold">5.0</span>
                <StarIcon className="fill-yellow-400 stroke-yellow-400 !w-4 !h-4" />
              </div>
              <p className="text-xs text-gray-600">1K đánh giá</p>
            </div>
            <div className="line w-[1px] bg-gray-200"></div>
            <div className="item flex flex-col justify-center items-center gap-1 w-1/3 px-2">
              <div className="inline-flex items-center gap-1 mx-auto">
                <span className="font-semibold">100K+</span>
                <Download className="!w-4 !h-4 text-gray-500 ml-1" />
              </div>
              <p className="text-xs text-gray-600">Tải xuống</p>
            </div>
            <div className="line w-[1px] bg-gray-200"></div>
            <div className="item flex flex-col justify-center items-center gap-1 w-1/3 px-2">
              <div className="inline-flex">
                <span className="font-semibold text-red-600">18+</span>
              </div>
              <p className="text-xs text-gray-600 text-center">
                Được xếp hạng dành cho 18+
              </p>
            </div>
          </div>
          <Button
            className="bg-[#059669] w-full px-6 py-2 text-white font-semibold rounded-md shadow-md transition duration-200 text-[1rem] h-auto cursor-pointer hover:bg-[#059669]"
            onClick={() =>
              router.push(
                "https://i.win79.club/?a=eeb4aab177e1491a62256ccba404a8c4&utm_campaign=googleads&utm_source=tuananh&utm_medium=search&utm_term=&utm_content=webview"
              )
            }
          >
            Cài đặt ứng dụng
          </Button>
          <div className="h-2"></div>
          <div className="flex items-center gap-3 justify-center">
            <Button className="bg-transparent hover:bg-transparent shadow-none group/item cursor-pointer flex flex-col h-auto gap-0">
              <span className="w-10 h-10 rounded-full group-hover/item:bg-gray-100 transition-all inline-flex items-center justify-center">
                <ShareIcon className="!text-gray-600 !w-6 !h-6" />
              </span>
              <span className="text-gray-600 text-xs">Chia sẻ</span>
            </Button>
            <Button className="bg-transparent hover:bg-transparent shadow-none group/item cursor-pointer flex flex-col h-auto gap-0">
              <span className="w-10 h-10 rounded-full group-hover/item:bg-gray-100 transition-all inline-flex items-center justify-center">
                <Bookmark className="!text-gray-600 !w-6 !h-6" />
              </span>
              <span className="text-gray-600 text-xs">Thêm vào danh sách</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopContent;

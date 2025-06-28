import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const DevelopmentBox = () => {
  return (
    <div className="feature-box">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-xs p-4 md:p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4 gap-3">
            <h2 className="text-[1rem] md:text-lg font-semibold">
              Giới thiệu về ứng dụng này
            </h2>
            <Link
              href="/"
              className="text-xs md:text-sm text-blue-600 font-semibold"
            >
              <span className="flex items-center gap-1">
                <span className="text-nowrap">Trang web</span>
                <ChevronRight className="!w-4 !h-4" />
              </span>
            </Link>
          </div>
          <div>
            <div className="flex gap-4 mb-6">
              <div className="develop__avatar">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                  W
                </span>
              </div>
              <div className="develop__content">
                <h5 className="font-semibold mb-1">Win79 Game Studio</h5>
                <p className="text-xs text-gray-600">Nhà phát triển</p>
              </div>
            </div>
            <div>
              <Button className="border bg-transparent hover:bg-transparent w-full text-blue-600 h-auto py-2">
                <span className="text-[1rem]">Xem thêm ứng dụng</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DevelopmentBox;

import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ContentBox = () => {
  const ITEMS = [
    {
      id: 1,
      title: "Game bài",
    },
    {
      id: 2,
      title: "Đổi thưởng",
    },
    {
      id: 3,
      title: "Poker",
    },
    {
      id: 4,
      title: "Tiến lên",
    },
    {
      id: 5,
      title: "Slot game",
    },
  ];
  return (
    <div className="feature-box">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-xs p-4 md:p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[1rem] sm:text-lg font-semibold">
              Giới thiệu về ứng dụng này
            </h2>
            <Link
              href="/"
              className="text-xs md:text-sm text-blue-600 font-semibold"
            >
              <span className="flex items-center gap-1">
                <span className="text-nowrap">Xem thêm</span>
                <ChevronRight className="!w-4 !h-4" />
              </span>
            </Link>
          </div>
          <div className="text-sm mb-4">
            <p className="mb-3 text-justify">
              Win79 là một cổng game bài đổi thưởng trực tuyến nổi bật tại Việt
              Nam và khu vực châu Á, được nhiều người chơi ưa chuộng nhờ vào kho
              trò chơi đa dạng, giao diện hiện đại và dịch vụ chăm sóc khách
              hàng chuyên nghiệp.
            </p>
            <p className="text-justify">
              Với hơn 100 trò chơi khác nhau từ các thể loại như bài poker, tiến
              lên miền nam, xóc đĩa, tài xỉu, bầu cua, slot game và nhiều game
              bài dân gian khác, Win79 mang đến trải nghiệm giải trí đa dạng cho
              người chơi.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {ITEMS.map((item) => (
              <div
                key={item.id}
                className="item bg-slate-100 rounded-full w-fit px-2 py-1"
              >
                <h4 className="text-xs text-gray-800">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentBox;

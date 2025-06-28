import { cn } from "@/lib/utils";
import { ChevronRight, StarIcon } from "lucide-react";
import Link from "next/link";

const Rating = () => {
  const RATINGS = [
    {
      id: 1,
      star: 5,
      rating: 4.6 / 5,
    },
    {
      id: 2,
      star: 4,
      rating: 0.2 / 5,
    },
    {
      id: 3,
      star: 3,
      rating: 0.5 / 5,
    },
    {
      id: 4,
      star: 2,
      rating: 0.1 / 5,
    },
    {
      id: 5,
      star: 1,
      rating: 0.1 / 5,
    },
  ];
  const REVIEWS = [
    {
      id: 1,
      name: "Nguyễn Văn An",
      humanDay: "2 ngày trước",
      content:
        "Ứng dụng rất tuyệt vời, giao diện đẹp và dễ sử dụng. Tôi thích các trò chơi ở đây!",
    },
    {
      id: 2,
      name: "Trần Nguyên Anh",
      humanDay: "5 ngày trước",
      content:
        "Ứng dụng rất tuyệt vời, giao diện đẹp và dễ sử dụng. Tôi thích các trò chơi ở đây!",
    },
  ];
  return (
    <div className="feature-box">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-xs p-4 md:p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[1rem] md:text-lg font-semibold">
              Đánh giá & nhận xét
            </h2>
            <Link
              href="/"
              className="text-xs md:text-sm text-blue-600 font-semibold"
            >
              <span className="flex items-center gap-1">
                <span className="text-nowrap">Xem tất cả</span>
                <ChevronRight className="!w-4 !h-4" />
              </span>
            </Link>
          </div>

          <div className="flex gap-3">
            <div className="px-4 md:px-6">
              <div className="text-center">
                <span className="text-4xl font-bold mb-3 inline-block">
                  5.0
                </span>
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (v, k) => (
                    <StarIcon
                      key={k}
                      className="fill-yellow-400 stroke-yellow-400 !w-4 !h-4"
                    />
                  ))}
                </div>
                <div>
                  <span className="text-gray-600 text-xs">1,000+ đánh giá</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-2">
                {RATINGS.map((item) => (
                  <div key={item.id} className="flex items-center gap-6 w-full">
                    <span className="text-xs text-gray-800">{item.star}</span>
                    <div className="bg-slate-100 flex-1 h-2 relative rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "absolute h-full left-0 top-0 bottom-0 bg-emerald-500"
                        )}
                        style={{ width: `${item.rating * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="line h-[1px] w-full my-8 bg-slate-200"></div>
          <div className="review flex flex-col gap-6">
            {REVIEWS.map((item) => (
              <div key={item.id} className="review">
                <div className="flex gap-4">
                  <div className="review__avatar">
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <div className="review__content">
                    <div className="review__content-name flex items-center mb-1">
                      <h5 className="font-semibold text-sm">{item.name}</h5>
                      <span className="block w-1 h-1 rounded-full bg-slate-300 mx-2"></span>
                      <span className="text-xs">{item.humanDay}</span>
                    </div>
                    <div className="review__content-bottom flex flex-col gap-2">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }, (v, k) => (
                          <StarIcon
                            key={k}
                            className="fill-yellow-400 stroke-yellow-400 !w-3 !h-3"
                          />
                        ))}
                      </div>
                      <p className="text-sm">{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rating;

import { CreditCard, Gamepad2, Gift, Headphones, Zap } from "lucide-react";

const FeatureBox = () => {
  const ITEMS = [
    {
      id: 1,
      title: "Đa dạng trò chơi",
      icon: Gamepad2,
      className: "text-blue-600",
      description: "Hơn 100+ trò chơi khác nhau từ bài poker đến slot game",
    },
    {
      id: 2,
      title: "Tốc độ nhanh chóng",
      icon: Zap,
      className: "text-yellow-500",
      description: "Tải game nhanh, chơi mượt mà không giật lag",
    },
    {
      id: 3,
      title: "Bảo mật cao",
      icon: Zap,
      className: "text-green-500",
      description: "Bảo vệ thông tin và giao dịch của người chơi",
    },
    {
      id: 4,
      title: "Khuyến mãi hấp dẫn",
      icon: Gift,
      className: "text-red-600",
      description: "Nhiều ưu đãi và quà tặng cho người chơi mới và cũ",
    },
    {
      id: 5,
      title: "Thanh toán đa dạng",
      description: "Hỗ trợ nhiều phương thức nạp và rút tiền",
      icon: CreditCard,
      className: "text-purple-500",
    },
    {
      id: 6,
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ CSKH luôn sẵn sàng hỗ trợ mọi lúc",
      icon: Headphones,
      className: "text-emerald-500",
    },
  ];
  return (
    <div className="feature-box">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-xs p-4 md:p-6 rounded-xl">
          <h2 className="text-[1rem] sm:text-lg font-semibold mb-4">
            Tính năng nổi bật
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 -mx-3">
            {ITEMS.map((item) => (
              <div
                key={item.id}
                className="item hover:bg-slate-50 rounded-xl px-3 py-2 group/item cursor-pointer"
              >
                <div className="flex gap-x-3">
                  <div className="icon w-10 h-10 flex items-center justify-center bg-slate-50 rounded-full group-hover/item:bg-slate-100">
                    {<item.icon className={item.className} />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-[1rem] font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-800 text-sm">{item.description}</p>
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
export default FeatureBox;

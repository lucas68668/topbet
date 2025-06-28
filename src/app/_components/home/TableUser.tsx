import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import dayjs from "dayjs";
import Image from "next/image";
const TableUser = () => {
  const USERS = [
    {
      id: 1,
      name: "Dra******01",
      avatar: "/assets/images/ldp-1/webp/user-icon.webp",
      prizeAmount: "100,000,000 VNĐ",
      date: dayjs(),
    },
    {
      id: 2,
      name: "Dra******01",
      avatar: "/assets/images/ldp-1/webp/user-icon.webp",
      prizeAmount: "100,000,000 VNĐ",
      date: dayjs(),
    },
    {
      id: 3,
      name: "Dra******01",
      avatar: "/assets/images/ldp-1/webp/user-icon.webp",
      prizeAmount: "100,000,000 VNĐ",
      date: dayjs(),
    },
    {
      id: 4,
      name: "Dra******01",
      avatar: "/assets/images/ldp-1/webp/user-icon.webp",
      prizeAmount: "100,000,000 VNĐ",
      date: dayjs(),
    },
    {
      id: 5,
      name: "Dra******01",
      avatar: "/assets/images/ldp-1/webp/user-icon.webp",
      prizeAmount: "100,000,000 VNĐ",
      date: dayjs(),
    },
    {
      id: 6,
      name: "Dra******01",
      avatar: "/assets/images/ldp-1/webp/user-icon.webp",
      prizeAmount: "100,000,000 VNĐ",
      date: dayjs(),
    },
    {
      id: 7,
      name: "Dra******01",
      avatar: "/assets/images/ldp-1/webp/user-icon.webp",
      prizeAmount: "100,000,000 VNĐ",
      date: dayjs(),
    },
  ];

  return (
    <div className="table-user">
      <div className="container mx-auto px-4">
        <div className="table-user-inner bg-[url('/assets/images/ldp-1/webp/bg-reward.webp')] rounded-2xl md:rounded-3xl overflow-hidden bg-cover p-3 md:p-6">
          <div className="head mb-2 md:mb-4 text-center px-6">
            <div className="text relative w-fit mx-auto">
              <h3 className="bg-gradient-to-b from-[#FFFFFF] to-[#FFED9B] bg-clip-text text-transparent font-black text-[1.125rem] lg:text-3xl relative z-10">
                DANH SÁCH NHẬN THƯỞNG
              </h3>
              <span className="font-black text-[1.125rem] lg:text-3xl absolute left-0 right-0 top-[2px]">
                DANH SÁCH NHẬN THƯỞNG
              </span>
            </div>
          </div>

          <div className="bg-white relative p-3 md:p-6 rounded-bl-2xl rounded-br-2xl">
            <div className="pattern flex items-center justify-between absolute top-0 -translate-y-[62%] md:-translate-y-[67%] left-0 right-0">
              <div className="aspect-[105/84] w-[68px] md:w-[105px]">
                <svg
                  width="107"
                  height="86"
                  viewBox="0 0 107 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M76.1396 52.828L27.138 5.31405C16.9895 -4.52628 0 2.66492 0 16.8008V70C0 78.8366 7.16344 86 16 86H92.6706C100.585 86 107 79.5845 107 71.6706C107 63.7567 100.585 57.3412 92.6706 57.3412H87.2776C83.1196 57.3412 79.1248 55.7225 76.1396 52.828Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="aspect-[105/84] w-[68px] md:w-[105px]">
                <svg
                  width="107"
                  height="86"
                  viewBox="0 0 107 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M30.8604 52.828L79.862 5.31405C90.0105 -4.52628 107 2.66492 107 16.8008V70C107 78.8366 99.8366 86 91 86H14.3294C6.41548 86 0 79.5845 0 71.6706C0 63.7567 6.41549 57.3412 14.3294 57.3412H19.7224C23.8804 57.3412 27.8752 55.7225 30.8604 52.828Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <Table className="border-spacing-y-3 border-separate text-[0.625rem] md:text-[1rem]">
              <TableHeader>
                <TableRow>
                  <TableHead className="bg-[#EDFFF0] rounded-tl-xl rounded-bl-xl md:w-1/3">
                    <span className="font-bold text-[0.625rem] md:text-[1rem]">
                      Thời gian
                    </span>
                  </TableHead>
                  <TableHead className="bg-[#EDFFF0] md:w-1/3">
                    <span className="font-bold text-[0.625rem] md:text-[1rem]">
                      Người chơi
                    </span>
                  </TableHead>
                  <TableHead className="text-right bg-[#EDFFF0] rounded-tr-xl rounded-br-xl md:w-1/3">
                    <span className="font-bold">Tiền thưởng</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {USERS.map((item) => (
                  <TableRow
                    key={item.id}
                    className="bg-[#F7F8F9] !rounded-2xl overflow-hidden"
                  >
                    <TableCell className="rounded-tl-xl rounded-bl-xl bg-[#F7F8F9]">
                      <div className="bg-gradient-to-r from-[#88EAB6] to-[#289b7f] w-fit text-white md:pl-4 pl-2 pr-1 md:pr-2 py-2 md:py-3 text-center relative md:rounded-tl-2xl md:rounded-bl-2xl rounded-tl-md rounded-bl-md shadow-md md:ml-0 -ml-2 -my-2">
                        <div className="font-bold text-[0.625rem] md:text-[1rem]">
                          {item.date.format("HH:mm")}
                        </div>
                        <div className="text-[0.625rem] md:text-[1rem]">
                          {item.date.format("DD/MM/YYYY")}
                        </div>
                        <div className="pattern absolute aspect-[22/70] right-0 translate-x-[95%] top-0 h-full">
                          <Image
                            src="/assets/images/ldp-1/curve-3.svg"
                            alt=""
                            height={70}
                            width={22}
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Image
                          src={item.avatar}
                          alt="avatar"
                          width={20}
                          height={20}
                        />
                        <span className="font-bold text-[0.625rem] md:text-[1rem]">
                          {item.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right rounded-tr-xl rounded-br-xl">
                      <div className="flex items-center gap-1 md:gap-2 w-fit ml-auto bg-[#00514C] rounded-2xl md:px-3 px-2 py-2">
                        <Image
                          src="/assets/images/ldp-1/webp/user-coin.webp"
                          alt="coin"
                          width={30}
                          height={30}
                          quality={100}
                          className="md:w-7 md:h-7 w-4 h-4"
                        />
                        <span className="text-white font-bold text-[0.625rem] md:text-[1rem]">
                          {item.prizeAmount}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableUser;

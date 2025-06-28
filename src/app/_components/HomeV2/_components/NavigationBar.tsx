"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AppWindow, Book, Film, House, Menu } from "lucide-react";
import { useState } from "react";

const NavigationBar = () => {
  const [active, setActive] = useState(0);
  const ITEMS = [
    {
      id: 1,
      title: "Trò chơi",
      icon: House,
    },
    {
      id: 2,
      title: "Ứng dụng",
      icon: AppWindow,
    },
    {
      id: 3,
      title: "Phim",
      icon: Film,
    },
    {
      id: 4,
      title: "Sách",
      icon: Book,
    },
    {
      id: 5,
      title: "Tất cả",
      icon: Menu,
    },
  ];
  return (
    <div className="navigation-bar sticky bottom-0 w-full z-20">
      <div className="bg-white border-t py-3">
        <ul className="flex items-center justify-around">
          {ITEMS.map((item, _index) => (
            <li key={item.id} className="flex flex-col gap-2 items-center">
              <Button
                className="bg-transparent hover:!bg-transparent text-gray-800 h-auto p-0 cursor-pointer px-2"
                onClick={() => setActive(_index)}
              >
                <span className="inline-flex flex-col gap-1 items-center">
                  <span>
                    {
                      <item.icon
                        className={cn("!w-6 !h-6", {
                          "text-emerald-600": active === _index,
                        })}
                      />
                    }
                  </span>
                  <span
                    className={cn("text-xs", {
                      "text-emerald-700": active === _index,
                    })}
                  >
                    {item.title}
                  </span>
                </span>
              </Button>
              <span
                className={cn("line w-10 h-[2px] bg-emerald-600 rounded-full", {
                  "bg-emerald-600": active === _index,
                  "bg-transparent": active !== _index,
                })}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavigationBar;

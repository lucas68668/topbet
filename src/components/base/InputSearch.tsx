import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

interface InputSearchProps {
  className?: string;
}
const InputSearch: React.FC<InputSearchProps> = ({ className }) => {
  return (
    <div className={cn("input-search", className)}>
      <div className="border rounded-full px-3 flex items-center bg-gray-100">
        <span className="icon">
          <Search className="!w-4 !h-4 text-black/60" />
        </span>
        <Input
          placeholder="Search Google Play"
          className="border-transparent placeholder:text-gray-500"
        />
      </div>
    </div>
  );
};
export default InputSearch;

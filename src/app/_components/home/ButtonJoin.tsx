import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ButtonJoinProps {
  className?: string;
  onClick?: () => void;
}
const ButtonJoin: React.FC<ButtonJoinProps> = ({ className, onClick }) => {
  return (
    <Button
      className={cn(
        "bg-transparent hover:bg-transparent p-0 cursor-pointer shadow-none",
        className
      )}
      onClick={onClick}
    >
      <Image
        src="/assets/images/ldp-1/webp/button-tham-gia.webp"
        alt="wheel-container"
        width={306}
        height={92}
        quality={100}
        className=" aspect-[306/92] max-h-full object-contain w-full max-w-full"
      />
    </Button>
  );
};
export default ButtonJoin;

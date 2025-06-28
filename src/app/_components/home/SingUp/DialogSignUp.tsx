"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { memo, useCallback, useState } from "react";
import SignUpForm from "./SightUpForm";
import ButtonJoin from "../ButtonJoin";
import { XIcon } from "lucide-react";
interface DiaLogSignUpCompProps {
  classname?: string;
  // open?: boolean;
  onClose?: () => void;
}
const DiaLogSignUpComp: React.FC<DiaLogSignUpCompProps> = memo(
  ({ onClose }) => {
    const handleOpenChange = (open: boolean) => {
      if (open === false) {
        onClose?.();
      }
    };
    return (
      <>
        <Dialog onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <ButtonJoin className="mx-auto h-auto w-[80%]" />
          </DialogTrigger>
          <DialogContent
            className="md:max-w-[360px] sm:max-w-[360px] max-w-[360px] w-[90%] bg-transparent border-[#2AF47B] bg-[url('/assets/images/ldp-1/webp/bg-login.webp')] bg-cover p-4 md:p-6"
            showCloseButton={false}
          >
            <DialogTrigger asChild>
              <XIcon className="text-white right-0 top-0 md:translate-x-full md:-translate-y-1/2 -translate-y-full absolute" />
            </DialogTrigger>
            <DialogHeader>
              <DialogTitle className="text-left font-extrabold text-[1.125rem] md:text-[1.625rem]">
                Tạo tài khoản
              </DialogTitle>
            </DialogHeader>
            <SignUpForm />
          </DialogContent>
        </Dialog>
      </>
    );
  }
);

const useModal = () => {
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);
  return { open, onClose, onOpen };
};
DiaLogSignUpComp.displayName = "DiaLogSignUp";
export default Object.assign(DiaLogSignUpComp, { useModal });

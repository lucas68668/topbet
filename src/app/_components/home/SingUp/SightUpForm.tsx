"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ButtonJoin from "../ButtonJoin";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useState } from "react";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const SingUpSchema = z.object({
  username: z
    .string()
    .min(6, "Tên đăng nhập từ 6 ký tự trở lên.")
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Tên đăng nhập không chứa ký tự đặc biệt.",
    })
    .refine((val) => val.trim().length > 0, "Vui lòng nhập tên đăng nhập.")
    .transform((val) => val.replaceAll(/\s+/g, "")),
  passowrd: z
    .string()
    .min(6, "Mật khẩu phải từ 6 ký tự trở lên.")
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Mật khẩu không chứa ký tự đặc biệt.",
    })
    .refine((val) => val.trim().length > 0, "Vui lòng nhập Mật khẩu.")
    .transform((val) => val.replace(/\s+/g, "")),
  phoneNumber: z
    .string()
    .min(1, "Vui lòng nhập số điện thoại.")
    .regex(phoneRegex, "Vui lòng nhập đúng số điện thoại."),
});
type SingUpFormType = z.infer<typeof SingUpSchema>;
const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<SingUpFormType>({
    defaultValues: { username: "", passowrd: "", phoneNumber: "" },
    resolver: zodResolver(SingUpSchema),
  });

  const { control, handleSubmit } = form;
  function onSubmit(data: z.infer<typeof SingUpSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <Form {...form}>
      <form>
        <FormField
          control={control}
          name="username"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel className="hidden">Tên tài khoản</FormLabel>
              <FormControl>
                <div className="relative border-2 border-[#18C49B] bg-[#073B2F] text-white h-[38px] md:h-[46px] flex items-center rounded-md px-3">
                  <span className="icon w-5 h-5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M12 12.5263C9.38432 12.5263 7.26316 10.3837 7.26316 7.74163V6.78469C7.26316 4.14258 9.38432 2 12 2C14.6157 2 16.7368 4.14258 16.7368 6.78469V7.74163C16.7368 10.3837 14.6157 12.5263 12 12.5263Z"
                        fill="#B2B2B2"
                      />
                      <path
                        d="M22 19.7979C22 17.9032 20.803 16.2368 19.066 15.7389C17.172 15.1947 14.586 14.6316 12 14.6316C9.414 14.6316 6.828 15.1947 4.934 15.7389C3.197 16.2368 2 17.9032 2 19.7979C2 21.0141 2.98591 22 4.2021 22H19.7979C21.0141 22 22 21.0141 22 19.7979Z"
                        fill="#B2B2B2"
                      />
                      <path
                        d="M12 12.5263C9.38432 12.5263 7.26316 10.3837 7.26316 7.74163V6.78469C7.26316 4.14258 9.38432 2 12 2C14.6157 2 16.7368 4.14258 16.7368 6.78469V7.74163C16.7368 10.3837 14.6157 12.5263 12 12.5263Z"
                        fill="#B2B2B2"
                      />
                      <path
                        d="M22 19.7979C22 17.9032 20.803 16.2368 19.066 15.7389C17.172 15.1947 14.586 14.6316 12 14.6316C9.414 14.6316 6.828 15.1947 4.934 15.7389C3.197 16.2368 2 17.9032 2 19.7979C2 21.0141 2.98591 22 4.2021 22H19.7979C21.0141 22 22 21.0141 22 19.7979Z"
                        fill="#B2B2B2"
                      />
                    </svg>
                  </span>
                  <Input
                    placeholder="Tên tài khoản"
                    {...field}
                    className="border-transparent text-white"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="h-3"></div>
        <FormField
          control={control}
          name="passowrd"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel className="hidden">Mật khẩu</FormLabel>
              <FormControl>
                <div className="relative border-2 border-[#18C49B] bg-[#073B2F] text-white h-[38px] md:h-[46px] flex items-center rounded-md px-3">
                  <span className="icon w-5 h-5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.63494 7.3C5.63494 5.62914 6.3054 4.02671 7.49881 2.84523C8.69222 1.66375 10.3108 1 11.9986 1C13.6863 1 15.3049 1.66375 16.4984 2.84523C17.6918 4.02671 18.3622 5.62914 18.3622 7.3H19.4228C19.9854 7.3 20.5249 7.52125 20.9227 7.91508C21.3206 8.3089 21.544 8.84304 21.544 9.4V19.9C21.544 20.457 21.3206 20.9911 20.9227 21.3849C20.5249 21.7787 19.9854 22 19.4228 22H4.57434C4.01176 22 3.47222 21.7787 3.07441 21.3849C2.67661 20.9911 2.45313 20.457 2.45312 19.9V9.4C2.45312 8.84304 2.67661 8.3089 3.07441 7.91508C3.47222 7.52125 4.01176 7.3 4.57434 7.3H5.63494ZM11.9986 3.1C13.1237 3.1 14.2028 3.5425 14.9984 4.33015C15.794 5.1178 16.241 6.18609 16.241 7.3H7.75616C7.75616 6.18609 8.20312 5.1178 8.99873 4.33015C9.79434 3.5425 10.8734 3.1 11.9986 3.1ZM14.1198 13.6C14.1198 13.9686 14.0218 14.3307 13.8356 14.65C13.6494 14.9692 13.3816 15.2343 13.0592 15.4186V16.75C13.0592 17.0285 12.9474 17.2955 12.7485 17.4925C12.5496 17.6894 12.2799 17.8 11.9986 17.8C11.7173 17.8 11.4475 17.6894 11.2486 17.4925C11.0497 17.2955 10.938 17.0285 10.938 16.75V15.4186C10.5336 15.1874 10.2176 14.8307 10.0389 14.4036C9.86023 13.9765 9.82889 13.503 9.94974 13.0565C10.0706 12.61 10.3369 12.2154 10.7073 11.934C11.0778 11.6526 11.5316 11.5 11.9986 11.5C12.5612 11.5 13.1007 11.7212 13.4985 12.1151C13.8963 12.5089 14.1198 13.043 14.1198 13.6Z"
                        fill="#B2B2B2"
                      />
                    </svg>
                  </span>
                  <Input
                    placeholder="Mật khẩu"
                    type={showPassword ? "text" : "password"}
                    {...field}
                    className="border-transparent text-white"
                  />
                  <span
                    className="icon w-5 h-5"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                      >
                        <path
                          d="M19.6742 19.6739L4.32455 4.32473L4.32127 4.32098C4.23817 4.23856 4.13965 4.17331 4.03133 4.12896C3.92301 4.08461 3.80701 4.06203 3.68997 4.06251C3.57292 4.06299 3.45712 4.08651 3.34917 4.13175C3.24121 4.17698 3.14323 4.24304 3.0608 4.32614C2.97838 4.40924 2.91313 4.50776 2.86878 4.61608C2.82443 4.7244 2.80185 4.84039 2.80233 4.95744C2.8033 5.19382 2.89813 5.42014 3.06596 5.58661L4.40986 6.93051C2.78007 8.04672 1.37722 9.46246 0.275959 11.1024C0.0961223 11.3679 0 11.6812 0 12.0019C0 12.3226 0.0961223 12.6359 0.275959 12.9014C3.08705 17.0621 7.54346 19.4996 11.9999 19.4691C13.4434 19.4743 14.8772 19.234 16.2402 18.7585L18.4156 20.9339C18.5833 21.0962 18.8078 21.1861 19.0411 21.1845C19.2743 21.1829 19.4976 21.0899 19.663 20.9255C19.8284 20.761 19.9227 20.5382 19.9256 20.305C19.9284 20.0717 19.8397 19.8467 19.6785 19.6782L19.6742 19.6739ZM11.9999 17.0499C11.1556 17.0496 10.3248 16.8377 9.58347 16.4335C8.84216 16.0294 8.21395 15.4459 7.75626 14.7364C7.29857 14.0269 7.02599 13.214 6.96343 12.372C6.90087 11.53 7.05033 10.6858 7.39815 9.91645L8.80205 11.3204C8.68897 11.8532 8.71082 12.4059 8.86562 12.9282C9.02042 13.4505 9.30326 13.9258 9.68845 14.311C10.0736 14.6962 10.549 14.979 11.0712 15.1338C11.5935 15.2886 12.1462 15.3105 12.6791 15.1974L14.083 16.6013C13.4287 16.898 12.7183 17.051 11.9999 17.0499Z"
                          fill="#B2B2B2"
                        />
                        <path
                          d="M23.724 11.0996C20.9129 6.93661 16.4565 4.49911 12.0001 4.52958C10.5566 4.52435 9.1227 4.76465 7.75977 5.2402L9.91602 7.39645C10.8517 6.97302 11.8942 6.84481 12.9046 7.02889C13.9149 7.21297 14.8452 7.70061 15.5714 8.42682C16.2976 9.15303 16.7853 10.0833 16.9694 11.0937C17.1534 12.1041 17.0252 13.1466 16.6018 14.0822L19.5896 17.07C21.2197 15.954 22.6227 14.5383 23.724 12.8982C23.9037 12.6327 23.9998 12.3195 23.9998 11.9989C23.9998 11.6783 23.9037 11.365 23.724 11.0996Z"
                          fill="#B2B2B2"
                        />
                        <path
                          d="M11.9995 8.73047C11.7713 8.7305 11.5436 8.75438 11.3203 8.80172L15.1973 12.6783C15.2984 12.202 15.2919 11.7091 15.1781 11.2357C15.0643 10.7623 14.8462 10.3202 14.5398 9.94188C14.2333 9.56353 13.8462 9.25841 13.4067 9.04882C12.9672 8.83924 12.4864 8.73047 11.9995 8.73047Z"
                          fill="#B2B2B2"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                      >
                        <path
                          d="M21.7445 5.94202C20.2271 4.27048 15.874 0 10.999 0C6.12409 0 1.77476 4.27048 0.257427 5.94202C-0.0858088 6.31713 -0.0858088 6.8792 0.257427 7.25798C1.77476 8.92952 6.12789 13.2 10.999 13.2C15.8702 13.2 20.2271 8.92952 21.7445 7.25798C22.0852 6.8792 22.0852 6.31713 21.7445 5.94202ZM10.999 11.5248C8.18351 11.5248 5.89612 9.31441 5.89612 6.59817C5.89612 3.88192 8.18351 1.67154 10.999 1.67154C13.8146 1.67154 16.1058 3.88192 16.1058 6.59817C16.1058 9.31441 13.8146 11.5248 10.999 11.5248Z"
                          fill="#B2B2B2"
                        />
                        <path
                          d="M11.0001 4.13603C9.59294 4.13603 8.44671 5.24062 8.44671 6.59935C8.44671 7.95808 9.59167 9.06267 11.0001 9.06267C12.4085 9.06267 13.5534 7.95808 13.5534 6.59935C13.5534 5.24062 12.4085 4.13603 11.0001 4.13603Z"
                          fill="#B2B2B2"
                        />
                      </svg>
                    )}
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="h-3"></div>
        <FormField
          control={control}
          name="phoneNumber"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="">
              <FormLabel className="hidden">Số điện thoại</FormLabel>
              <FormControl>
                <div className="relative border-2 border-[#18C49B] bg-[#073B2F] text-white h-[38px] md:h-[46px] flex items-center rounded-md px-3">
                  <span className="icon w-5 h-5">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M3.58984 0C3.86984 0 4.15039 0.0596875 4.40039 0.179688C4.66031 0.299687 4.89036 0.480302 5.07031 0.740234L7.38965 4.00977C7.56964 4.25976 7.70004 4.48997 7.79004 4.70996C7.88004 4.91996 7.92969 5.13031 7.92969 5.32031C7.92963 5.56021 7.85967 5.80037 7.71973 6.03027C7.58973 6.26017 7.40004 6.50035 7.16016 6.74023L6.40039 7.53027C6.29046 7.6402 6.2403 7.76983 6.24023 7.92969C6.24023 8.00969 6.24953 8.08016 6.26953 8.16016C6.29953 8.24016 6.32961 8.30035 6.34961 8.36035C6.52961 8.69032 6.84035 9.11974 7.28027 9.63965C7.73027 10.1596 8.21047 10.6897 8.73047 11.2197C8.83037 11.3196 8.94013 11.4196 9.04004 11.5195C9.05793 11.537 9.07449 11.5558 9.09082 11.5742C9.58547 11.9706 11.4161 13.5086 11.6104 13.6104C11.6603 13.6304 11.7202 13.6605 11.79 13.6904C11.87 13.7204 11.9501 13.7305 12.04 13.7305C12.21 13.7305 12.3402 13.6696 12.4502 13.5596L13.21 12.8096C13.4598 12.5598 13.6998 12.37 13.9297 12.25C14.1596 12.1101 14.3898 12.0401 14.6396 12.04C14.8296 12.04 15.03 12.0799 15.25 12.1699C15.47 12.2599 15.7002 12.3896 15.9502 12.5596L19.2598 14.9102C19.5197 15.0901 19.6996 15.2999 19.8096 15.5498C19.9096 15.7998 19.9697 16.0501 19.9697 16.3301C19.9697 16.6099 19.9202 16.8998 19.8203 17.1797C19.7903 17.2597 19.7597 17.3399 19.7197 17.4199C19.5497 17.7799 19.33 18.1204 19.04 18.4404C18.5502 18.9802 18.0102 19.3701 17.4004 19.6201C17.3904 19.6201 17.3801 19.6298 17.3701 19.6299C16.7802 19.8699 16.1401 20 15.4502 20C14.4303 20 13.3404 19.7595 12.1904 19.2695C11.0404 18.7795 9.88999 18.12 8.75 17.29C8.36003 17.0001 6.3702 15.3102 6 15L6.02051 14.9746C5.93865 14.9313 5.86066 14.8767 5.79004 14.8096C5.68014 14.6997 5.56986 14.6001 5.45996 14.4902C4.42996 13.4502 3.49992 12.3597 2.66992 11.2197C1.84999 10.0798 1.18993 8.9395 0.709961 7.80957C0.240071 6.66972 6.01469e-06 5.57991 0 4.54004C0 3.86011 0.1204 3.2103 0.360352 2.61035C0.6003 2.00048 0.979942 1.44035 1.50977 0.94043C2.14972 0.310474 2.8499 4.36772e-05 3.58984 0Z"
                        fill="#B2B2B2"
                      />
                    </svg>
                  </span>
                  <Input
                    placeholder="Số điện thoại"
                    {...field}
                    className="border-transparent text-white max-w-full"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="h-8"></div>
        <div className="text-center absolute left-0 right-0 -translate-y-[10%]">
          <ButtonJoin
            onClick={handleSubmit(onSubmit)}
            className="w-full max-w-[50%] h-auto mx-auto"
          />
        </div>
      </form>
    </Form>
  );
};
export default SignUpForm;

// function validateUsername(fieldNode) {
//   const fieldValue = $(fieldNode).val();
//   let isValidFormField = true;
//   if (!fieldValue.length) {
//     showError(usernameField, "Vui lòng nhập tên đăng nhập.");
//     isValidFormField = false;
//   } else if (!isValidString(fieldValue)) {
//     showError(fieldNode, "Tên đăng nhập không chứa ký tự đặc biệt");
//     isValidFormField = false;
//   } else if (fieldValue.length < 6) {
//     showError(fieldNode, "Tên đăng nhập từ 6 ký tự trở lên.");
//     isValidFormField = false;
//   } else {
//     $(fieldNode).parent().next().removeClass("text-red-500").html("");
//   }
//   return isValidFormField;
// }

// function validatePassword(fieldNode) {
//   let fieldValue = $(fieldNode).val();
//   let isValidFormField = true;
//   if (!fieldValue || !fieldValue.length) {
//     showError(fieldNode, "Vui lòng nhập mật khẩu.");
//     isValidFormField = false;
//   } else if (fieldValue.length < 6) {
//     showError(fieldNode, "Mật khẩu phải từ 6 ký tự trở lên.");
//     isValidFormField = false;
//   } else if (isContainVietnameseWord(fieldValue)) {
//     showError(fieldNode, "Mật khẩu không chứa dấu.");
//     isValidFormField = false;
//   } else {
//     $(fieldNode).parent().next().removeClass("text-red-500").html("");
//   }
//   return isValidFormField;
// }

// function validatePhoneNumber(fieldNode) {
//   let fieldValue = $(fieldNode).val();
//   let isValidFormField = true;
//   if (!fieldValue.length) {
//     showError(fieldNode, "Vui lòng nhập số điện thoại.");
//     isValidFormField = false;
//   } else if (!isValidPhoneNumber(fieldValue)) {
//     showError(fieldNode, "Vui lòng nhập đúng số điện thoại.");
//     isValidFormField = false;
//   } else if (fieldValue.length < 8) {
//     showError(fieldNode, "Vui lòng nhập đúng số điện thoại.");
//     isValidFormField = false;
//   } else {
//     $(fieldNode).parent().next().removeClass("text-red-500").html("");
//   }

//   return isValidFormField;
// }

// function isValidString(str) {
//   const vietnameseRegex =
//     /[àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ]/;
//   const specialCharRegex = /[^a-zA-Z0-9\s]/;

//   return !vietnameseRegex.test(str) && !specialCharRegex.test(str);
// }
// function isContainVietnameseWord(str) {
//   const vietnameseRegex =
//     /[àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ]/;

//   return vietnameseRegex.test(str);
// }
// function isValidPhoneNumber(phone) {
//   // const vnPhoneRegex = /^(?:0)(?:3|5|7|8|9)\d{8}$/;
//   // const phoneRegex = /^(\+?\d{0,3})?\d{7,12}$/;
//   // const regexPhoneNumber = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
//   const regexPhoneNumber = /^(0|\+84)(3|5|7|8|9)\d{8,10}$/;

//   return phone.match(regexPhoneNumber);
// }

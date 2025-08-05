import * as yup from "yup";

export const authSchema = yup.object({
  phone: yup
    .string()
    .required("شماره موبایل الزامی است")
    .matches(/^09\d{9}$/, "شماره موبایل باید 11 رقم باشد و با 09 شروع شود"),
});

export type authFormData = yup.InferType<typeof authSchema>;

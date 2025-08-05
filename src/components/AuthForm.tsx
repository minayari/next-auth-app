"use client";

import { authFormData, authSchema } from "@/lib/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Input from "./ui/Input";
import Button from "./ui/Button";

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<authFormData>({ resolver: yupResolver(authSchema) });

  const router = useRouter();

  const onSubmit = async () => {
    const resp = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const data = await resp.json();
    const user = data.results[0];

    localStorage.setItem("user", JSON.stringify(user));
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        lable="شماره موبایل"
        {...register("phone")}
        error={errors.phone?.message}
      />
      <Button type="submit">ورود</Button>
    </form>
  );
}

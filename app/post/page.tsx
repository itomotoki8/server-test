"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submit } from "@/post";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const Post = () => {
  const router = useRouter();
  const touroku = async (formData: FormData) => {
    const status = await submit(formData);
    if (status) {
      toast.success("登録に成功しました。", {
        duration: 3000,
        position: "top-center",
      });
      router.refresh();
    } else {
      toast.error("登録に失敗しました。", {
        duration: 3000,
        position: "top-center",
      });
    }
  };

  return (
    <form
      action={touroku}
      className="flex justify-center gap-10 items-center mt-64"
    >
      <div className="flex items-center gap-5 w-1/3">
        <label htmlFor="name">名前</label>
        <Input name="user" className="flex-1" id="name" />
      </div>
      <Button type="submit">登録</Button>
    </form>
  );
};

export default Post;

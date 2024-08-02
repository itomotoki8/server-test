import React from "react";
import { User } from "../page";
import PostData from "../components/PostData";
import ClearButton from "../components/ClearButton";

const isr = async () => {
  const res = await fetch(
    "https://cspocagbpbrgambdnhet.supabase.co/rest/v1/users",
    {
      next: { revalidate: 10 },
      method: "Get",
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        Accept: "application/json",
      },
    }
  );
  const data: User[] = await res.json();
  return (
    <div className="flex">
      <h2 className="text-center text-xl mb-5 flex-1">10秒で更新</h2>
      <div className="flex-1">
        <PostData data={data} />
      </div>
      <div className="flex-1">
        <ClearButton />
      </div>
    </div>
  );
};

export default isr;

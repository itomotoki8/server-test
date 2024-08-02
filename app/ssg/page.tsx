import React from "react";
import { User } from "../page";
import PostData from "../components/PostData";

const ssg = async () => {
  const res = await fetch(
    "https://cspocagbpbrgambdnhet.supabase.co/rest/v1/users",
    {
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
    <div>
      <PostData data={data} />
    </div>
  );
};

export default ssg;

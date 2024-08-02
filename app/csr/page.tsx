"use client";
import React, { useEffect, useState } from "react";
import { User } from "../page";
import PostData from "../components/PostData";

const Csr = () => {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    const getData = async () => {
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
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);
  return (
    <div>
      <PostData data={data} />
    </div>
  );
};

export default Csr;

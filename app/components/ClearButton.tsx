"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const ClearButton = () => {
  const router = useRouter();
  return <Button onClick={() => router.refresh()}>cacheClear</Button>;
};

export default ClearButton;

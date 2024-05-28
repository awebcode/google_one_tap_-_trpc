"use client"
import { trpc } from "@/config/trpc";
import React from "react";

const TRPC = () => {
  const { data, isLoading } = trpc.user.getUser.useQuery({
    id: "123"})
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>User not found</div>;
  return <div>{JSON.stringify(data)}</div>;
};

export default TRPC;

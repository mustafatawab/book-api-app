"use client";
import { log } from "console";
import { requestToBodyStream } from "next/dist/server/body-streams";
import React from "react";
import useSWR from "swr";

const url = "https://api.quotable.io/random?tags=technology";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function ClientPage() {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>Error Occured</div>;

  if (isLoading) return <div>Loading</div>;
  console.log(data.contentn);

  return (
    <div>
      <h1>Client side API Calling</h1>
      <h2>{data.content}</h2>
    </div>
  );
}

export default ClientPage;

"use client"

import {useState} from "react";

interface AvisClient {
  name: string,
  note: number,
  content: string,
}

export default function AvisClient() {
  //States
  const [avisClient, setAvisClient] = useState<AvisClient[]>([
    {
    name: "Jhon Doe",
    note: 5,
    content: "test"
    },
    {
      name: "Jhon Doe",
      note: 5,
      content: "test"
    }]);
  return (
    <div className={'max-w-[600px]'}>

    </div>
  )
}
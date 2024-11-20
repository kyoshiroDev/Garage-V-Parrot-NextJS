'use client'

import { AvisClientInterface } from '@/lib/interface'
import { useState } from 'react'

export default function AvisClients() {
  //States
  const [avisClient, setAvisClient] = useState<AvisClientInterface[]>([
    {
      id: 1,
      name: 'Jhon Doe',
      note: 5,
      content: 'super garage trés compétitif et surtout tous agréable',
    },
    // {
    //   id: 2,
    //   name: 'Jhon Doe',
    //   note: 5,
    //   content: 'test',
    // },
  ])
  return (
    <div
      className={
        'flex flex-col justify-center items-center max-w-[600px] min-h-[250px] border-2 border-garage-red mt-40 m-auto rounded-xl'
      }
    >
      {avisClient.map((avisClient) => (
        <div
          key={avisClient.id}
          className="flex-1 h-full w-full flex flex-col justify-items-start items-center"
        >
          <div className="flex w-full justify-between py-5 px-10 text-lg font-semibold">
            <p>{avisClient.name}</p>
            <p>{avisClient.note} / 5</p>
          </div>
          <div className="flex w-full justify-center items-center text-xl mt-10">
            <p>{avisClient.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

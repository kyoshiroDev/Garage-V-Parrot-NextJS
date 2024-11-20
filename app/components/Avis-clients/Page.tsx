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
      content: 'test',
    },
    {
      id: 2,
      name: 'Jhon Doe',
      note: 5,
      content: 'test',
    },
  ])
  return (
    <div className={'max-w-[600px]'}>
      {avisClient.map((avisClient) => (
        <div key={avisClient.id}>
          <p>{avisClient.name}</p>
          <p>{avisClient.note}</p>
          <p>{avisClient.content}</p>
        </div>
      ))}
    </div>
  )
}

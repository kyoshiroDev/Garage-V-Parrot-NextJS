'use client'

import { ChildrenInterface } from "@/lib/interface"

export default function Button({ children }: ChildrenInterface) {
  return (
    <button className="button">
      {children}
    </button>
  )
}

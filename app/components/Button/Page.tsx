"use client";

import { ChildrenInterface } from "@/lib/interface";

export default function Button({ children }: ChildrenInterface) {
	return <button>{children}</button>;
}

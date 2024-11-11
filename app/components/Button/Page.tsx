"use client";

interface ButtonProps {
	children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
	return (
		<button>
			{children}
		</button>
	);
}

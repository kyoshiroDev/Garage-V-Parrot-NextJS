"use client";

import Image from "next/image";
import Button from "../Button/Page";
import Link from "next/link";
import { MenuInterface } from "@/lib/interface";
import { useState } from "react";

export default function Navbar() {
	// Variables
	const menu: MenuInterface[] = [
		{ id: 1, name: "Accueil", href: "/" },
		{ id: 2, name: "Mécanique", href: "/mecanique" },
		{ id: 3, name: "Carrosserie", href: "/carrosserie" },
		{ id: 4, name: "Occasions", href: "/occasions" },
	];

	// States
	const [isOPen, setIsOpen] = useState<boolean>(false);

	console.log(isOPen);
	return (
		<header className='flex items-center justify-between max-h-[100px] w-full border-b border-black'>
			<Image
				src='/Header/Logo.png'
				alt='logo de la société'
				width={250}
				height={0}
				className='aspect-square object-fill'
			/>
			<nav
				className={`nav-bar-mobile ${
					!isOPen ? "min-h-0 mt-[-300px]" : "min-h-full mt-0 "
				}`}>
				{menu.map((menu) => (
					<Link
						key={menu.id}
						href={menu.href}
						className='hover:text-garage-red hover:text-xl duration-150 h-full lg:h-min lg:gap-10'>
						{menu.name}
					</Link>
				))}
			</nav>
			<div className='w-[150px] lg:hidden justify-around items-center flex'>
				<Image
					src={"/Header/login.svg"}
					alt='image de connection'
					width={50}
					height={50}
					className='aspect-square'
				/>
				<Image
					src={"/Header/menu-burger.svg"}
					alt='menu burger'
					width={50}
					height={50}
					className='aspect-square z-[1]'
					onClick={() => setIsOpen(!isOPen)}
				/>
			</div>
			<div className='w-[250px] lg:flex justify-center items-center hidden'>
				<Button>Connexion</Button>
			</div>
		</header>
	);
}

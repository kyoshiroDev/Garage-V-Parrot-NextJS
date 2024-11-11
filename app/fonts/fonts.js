import { Barlow, Rajdhani } from "next/font/google";

const barlow = Barlow({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	preload: true,
});

const radjhani = Rajdhani({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	preload: true,
});

export { barlow, radjhani };

import { Roboto, Comfortaa } from "next/font/google";

export const roboto = Roboto({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-roboto",
	display: "swap",
});

export const comfortaa = Comfortaa({
	weight: ["400", "500"],
	subsets: ["latin"],
	variable: "--font-comfortaa",
	display: "swap",
});

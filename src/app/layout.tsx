import type { Metadata } from "next";
import "./globals.css";
import { roboto, comfortaa } from "./fonts";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Kai Koide - Portfolio",
	description: "A Portfolio of Kai Koide",
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: ReactNode;
	modal: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} ${comfortaa.variable}`}>
				{children}
				{modal}
				<div id="modal-root" />
			</body>
		</html>
	);
}

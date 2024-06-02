import Image from "next/image";
import { Rationale } from "next/font/google";

import Header from "./header";
import Button from "./ui/button";
import Logo from "../../public/logo.svg";

const rationale = Rationale({ subsets: ["latin"], weight: "400" });

export default function Hero() {
	return (
		<>
			<Header />
			<div className="h-screen flex flex-col justify-center items-center">
				<Image src={Logo} alt="logo image" />
				<h2 className="rationale.className">Kai Koide</h2>
				<h3>Front-end Developer</h3>
				<Button message={"GET STARTED"} />
			</div>
		</>
	);
}

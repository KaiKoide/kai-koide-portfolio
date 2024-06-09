import Image from "next/image";
import { Link as Scroll } from "react-scroll";

import Header from "../ui/header";
import Button from "../ui/button";
import Logo from "../../../public/logo.svg";
import { HeroHighlightText } from "../heroHighlight";
import { Boxes } from "../ui/background-boxes";
import Link from "next/link";

export default function Hero() {
	return (
		<div className="home flex flex-col items-center">
			<Header />
			<div className="h-screen relative w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg">
				<div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
				<Boxes />
				<Image
					src={Logo}
					alt="logo image"
					width={300}
					height={300}
					className="z-40"
				/>
				<HeroHighlightText />
				<Button message={"RESUME"} />
			</div>
		</div>
	);
}

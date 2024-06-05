import Image from "next/image";

import Header from "./header";
import Button from "./ui/button";
import Logo from "../../public/logo.svg";
import { HeroHighlightText } from "./heroHighlight";
import { Boxes } from "./ui/background-boxes";

export default function Hero() {
	return (
		<>
			<Header />
			<div className="h-screen relative w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg">
				<div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

				<Boxes />
				<Image
					src={Logo}
					alt="logo image"
					width={300}
					height={300}
					className="z-50"
				/>
				<HeroHighlightText />
				<Button message={"GET STARTED"} />
			</div>
		</>
	);
}

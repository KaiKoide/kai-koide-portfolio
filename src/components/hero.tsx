import Image from "next/image";

import Header from "./header";
import Button from "./ui/button";
import Logo from "../../public/logo.svg";
import { HeroHighlightText } from "./heroHighlight";

export default function Hero() {
	return (
		<>
			<Header />
			<div className="h-screen flex flex-col justify-center items-center">
				<Image src={Logo} alt="logo image" width={300} height={300} />
				<HeroHighlightText />
				<Button message={"GET STARTED"} />
			</div>
		</>
	);
}

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
				<div>
					<div>
						<h3 className="rationale.className text-6xl capitalize">hello,</h3>
						<h2 className="rationale.className text-8xl ">
							I am
							<span className="text-indigo-500 capitalize"> kai koide</span>
						</h2>
					</div>
					<div>
						<h3 className="rationale.className text-6xl capitalize">
							front-end Developer
						</h3>
					</div>
				</div>
				<Button message={"GET STARTED"} />
			</div>
		</>
	);
}

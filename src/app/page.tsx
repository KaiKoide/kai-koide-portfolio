import Image from "next/image";
import Hero from "@/components/hero";
import Card from "@/components/ui/card";
import About from "@/components/about";

export default function Home() {
	return (
		<div className="text-[#333333]">
			<Hero />
			<About />
			{/* <Card /> */}
		</div>
	);
}

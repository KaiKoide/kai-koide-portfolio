import Image from "next/image";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

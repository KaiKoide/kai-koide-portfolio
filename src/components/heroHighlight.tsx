"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightText() {
	return (
		<div className="flex flex-col justify-start items-start">
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 0.5,
					ease: [0.4, 0.0, 0.2, 1],
				}}
				className="text-2xl px-4 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
			>
				Hello,
				<div className="flex gap-10">
					<h2 className="text-8xl">I am </h2>
					<Highlight className="text-black dark:text-white capitalize text-8xl">
						kai koide
					</Highlight>
				</div>
				<br />
				Front-end Developer
			</motion.h1>
		</div>
	);
}

export default HeroHighlight;

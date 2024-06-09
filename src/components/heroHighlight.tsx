"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { FlipWords } from "./flip-words";

export function HeroHighlightText() {
	const words = ["kai", "front-end-developer"];
	return (
		<div className="flex flex-col justify-start items-start w-screen z-40">
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
				className="text-2xl px-4 mt-8 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug text-center mx-auto effect-text"
			>
				Hello,
				<div className="flex gap-10 items-center mb-8">
					<h2 className="text-6xl">I&apos;m </h2>
					<Highlight className="text-black dark:text-white capitalize text-6xl">
						<FlipWords words={words} />
					</Highlight>
					<br />
				</div>
				{/* Front-end Developer */}
			</motion.h1>
		</div>
	);
}

export default HeroHighlight;

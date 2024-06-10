import type React from "react";
import Image from "next/image";
import Badge from "./badge";
import Button from "./button";

interface CardProps {
	title: string;
	overview: string;
	images: string[];
	tech: string[];
	github: string;
	website?: string;
}

const Card: React.FC<CardProps> = ({
	title,
	overview,
	images,
	tech,
	github,
	website,
}) => {
	return (
		<div className="group relative block shadow-xl">
			{/* <div className="relative block"> */}
			<div className="relative h-[350px] sm:h-[450px]">
				<Image
					src={images[0]}
					width={1920}
					height={1080}
					alt={title}
					className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-500"
				/>
				{images[1] && (
					<Image
						src={images[1]}
						width={1920}
						height={1080}
						alt={title}
						className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					/>
				)}
			</div>
			{/* </div> */}

			<div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-black/30">
				<h3 className="text-xl font-medium text-white">{title}</h3>
				<p className="mt-1.5 text-sm text-white">{overview}</p>
				<div className="flex flex-wrap gap-3 w-full my-5">
					{tech.map((item, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Badge message={item} key={index} />
					))}
				</div>
				{/* <a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="w-full"
				> */}
				<Button message="Github" />
				{/* </a> */}
			</div>
		</div>
	);
};

export default Card;

"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

import type { ProjectType } from "@/util/types/projectType";

interface CarouselProps {
	project: ProjectType;
}

export function EmblaCarousel({ project }: CarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<>
			<div className="h-full overflow-hidden shadow-lg" ref={emblaRef}>
				<div className="flex ">
					{project.images.map((image, index) => (
						<Image
							key={index}
							className="flex-shrink-0 flex-grow-0 basis-full min-w-0"
							src={image}
							alt="slide"
							width={1920}
							height={1080}
						/>
					))}
				</div>
			</div>
			<div className="flex gap-3 my-5 justify-center">
				<button type="button" onClick={scrollPrev}>
					<CircleChevronLeft className="text-3xl" />
				</button>
				<button type="button" onClick={scrollNext}>
					<CircleChevronRight className="text-3xl" />
				</button>
			</div>
		</>
	);
}

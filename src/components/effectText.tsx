"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

interface WordsProp {
	words: string;
}

export default function EffectedText({ words }: WordsProp) {
	return <TextGenerateEffect words={words} />;
}

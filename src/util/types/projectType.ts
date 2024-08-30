export type ProjectType = {
	id: number;
	title: string;
	images: string[];
	overview: string;
	description: string;
	tech: string[];
	website?: string | null;
	github: string;
};

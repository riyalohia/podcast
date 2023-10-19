/* eslint-disable no-unused-vars */

import { Dispatch, SetStateAction } from "react";

import { Id } from "@/convex/_generated/dataModel";

export interface EmptyStateProps {
  title: string;
  search?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

export interface PodcastCardProps {
	imgUrl: string;
	title: string;
	description: string;
	podcastId: Id<"podcasts">;
}

export interface GeneratePodcastProps {
	voiceType: string;
	setAudio: Dispatch<SetStateAction<string>>;
	audio: string;
	setAudioStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
	voicePrompt: string;
	setVoicePrompt: Dispatch<SetStateAction<string>>;
	setAudioDuration: Dispatch<SetStateAction<number>>;
}

export interface GenerateThumbnailProps {
	setImage: Dispatch<SetStateAction<string>>;
	setImageStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
	image: string;
	imagePrompt: string;
	setImagePrompt: Dispatch<SetStateAction<string>>;
}
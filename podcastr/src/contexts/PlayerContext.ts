import { createContext, useContext, useState } from "react";

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  duration: number;
  members: string;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[],
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  setPlayingState: (state: boolean) => void;
  togglePlay: () => void;
};

export const PlayerContext = createContext({} as PlayerContextData);

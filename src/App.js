import { Box, Typography } from "@mui/material";
import "./App.css";

import React, { useState } from "react";
import track1 from "./tracks/track_1.mp3";
import track2 from "./tracks/track_2.mp3";
import track3 from "./tracks/track_3.mp3";
import MusicPlayer from "./components/MusicPlayer";
export const MusicPlayerContext = React.createContext();
const defaultState = {
  audioPlayer: new Audio(),
  songs: [
    { id: 0, title: "Ghe moi", artist: "B ray", file: track1 },
    { id: 1, title: "Anh van luon nhu vay", artist: "B ray", file: track2 },
    { id: 2, title: "Calling me", artist: "B ray", file: track3 },
  ],
  currentSongIndex: -1,
  isPlaying: false,
};
function App() {
  const [state, setState] = useState(defaultState);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      <Box>
        <MusicPlayer />
        <Box sx={{ marginTop: "50px" }}>
          <Typography className="legal-text">
            Copyright © CoderSchool | 2025
          </Typography>
        </Box>
      </Box>
    </MusicPlayerContext.Provider>
  );
}

export default App;

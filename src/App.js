import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import "./App.css";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { useRef } from "react";
let songs = [{ id: 1, title: "Dance Monkey", artist: "Tones and I" }];

function App() {
  const audioRef = useRef(null);
  return (
    <Box>
      <Box className="music-player">
        <Box className="header-bar" />
        <Box className="track-list">
          {songs.map((song) => (
            <Card
              key={song.id}
              className="track-card"
              onClick={() => {
                console.log(audioRef);
                audioRef.current.play();
              }}
            >
              <audio ref={audioRef} src="/happy-birthday-254480.mp3"></audio>
              <CardContent className="control-button">
                <IconButton color="default">
                  <PauseCircleIcon />
                </IconButton>
                <Typography variant="body1">
                  {song.title} - {song.artist}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box className="player-controls">
          <IconButton>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton color="primary">
            <PlayCircleIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <SkipNextIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <Typography className="legal-text">
          Copyright © CoderSchool | 2025
        </Typography>
      </Box>
    </Box>
  );
}

export default App;

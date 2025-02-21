import React from "react";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import usePlayerProvider from "../hooks/usePlayerProvider";
function MusicPlayer() {
  const { state, playSong, togglePlay, playNext, playPrevious } =
    usePlayerProvider();
  const currentSong = () => {
    if (state.currentSongIndex === -1) return "Select a song to play";
    const song = state.songs[state.currentSongIndex];
    return `${song.title} - ${song.artist}`;
  };
  const songIsPlaying = currentSong();
  return (
    <Box className="music-player">
      <Box className="header-bar">
        <Typography variant="h4" className="marquee">
          {songIsPlaying}
        </Typography>
      </Box>
      <Box className="track-list">
        {state.songs.map((song) => (
          <Card
            key={song.id}
            className="track-card"
            onClick={() => playSong(song.id)}
          >
            <CardContent className="control-button">
              <IconButton color="default">
                {state.currentSongIndex === song.id && state.isPlaying ? (
                  <PauseCircleIcon />
                ) : (
                  <PlayCircleIcon />
                )}
              </IconButton>
              <Typography variant="body1">
                {song.title} - {song.artist}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box className="player-controls">
        <IconButton onClick={playPrevious}>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton color="primary" onClick={togglePlay}>
          {state.isPlaying ? (
            <PauseCircleIcon fontSize="large" />
          ) : (
            <PlayCircleIcon fontSize="large" />
          )}
        </IconButton>
        <IconButton onClick={playNext}>
          <SkipNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default MusicPlayer;

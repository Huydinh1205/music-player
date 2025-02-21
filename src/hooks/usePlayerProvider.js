import { useContext } from "react";
import { MusicPlayerContext } from "../App";
function usePlayerProvider() {
  const { state, setState } = useContext(MusicPlayerContext);
  const playSong = (index) => {
    if (index === state.currentSongIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.songs[index].file);
      state.audioPlayer.play();
      setState({ ...state, currentSongIndex: index, isPlaying: true });
    }
  };

  const togglePlay = () => {
    state.isPlaying ? state.audioPlayer.pause() : state.audioPlayer.play();
    setState({ ...state, isPlaying: !state.isPlaying });
  };

  const playNext = () => {
    const nextIndex = (state.currentSongIndex + 1) % state.songs.length;
    playSong(nextIndex);
  };

  const playPrevious = () => {
    if (!state.currentSongIndex) {
      playSong(state.songs.length - 1);
    } else {
      let prevIndex = state.currentSongIndex - 1;
      if (prevIndex < 0) prevIndex = state.songs.length - 1;
      playSong(prevIndex);
    }
  };
  return { state, playSong, togglePlay, playNext, playPrevious };
}

export default usePlayerProvider;

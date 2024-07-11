import React from 'react';
import { Button } from 'react-native';
import * as Speech from 'expo-speech';

const PlaybackComponent = ({ text, selectedTone }) => {
  const handlePlayText = () => {
    if (text && selectedTone) {
      const options = { pitch: 1, rate: 1 }; // Adjust based on tone
      Speech.speak(text, options);
    }
  };

  return (
    <Button title="Play Message" onPress={handlePlayText} />
  );
};

export default PlaybackComponent;

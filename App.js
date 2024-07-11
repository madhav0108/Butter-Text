import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import TextInputComponent from './components/TextInputComponent';
import ToneSelectionComponent from './components/ToneSelectionComponent';
import PlaybackComponent from './components/PlaybackComponent';

const App = () => {
  const [text, setText] = useState('');
  const [selectedTone, setSelectedTone] = useState(null);
  const [tones, setTones] = useState([]);

  const handleToneSelection = (tone) => {
    setSelectedTone(tone);
  };

  return (
    <View style={styles.container}>
      <TextInputComponent text={text} setText={setText} />
      <Button title="Speech to Text (Coming Soon)" onPress={() => alert('Speech to Text functionality will be available soon!')} />
      <ToneSelectionComponent tones={['Genuine', 'Sarcastic', 'Angry']} selectedTone={selectedTone} handleToneSelection={handleToneSelection} />
      <PlaybackComponent text={text} selectedTone={selectedTone} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;

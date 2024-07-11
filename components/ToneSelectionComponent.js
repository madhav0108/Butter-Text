import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToneSelectionComponent = ({ tones, selectedTone, handleToneSelection }) => {
  return (
    <View>
      <Text>Select a Tone:</Text>
      {tones.map((tone, index) => (
        <TouchableOpacity key={index} onPress={() => handleToneSelection(tone)}>
          <Text style={[styles.tone, selectedTone === tone && styles.selectedTone]}>
            {tone}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tone: {
    padding: 10,
    backgroundColor: 'gray',
    color: 'white',
    margin: 5,
  },
  selectedTone: {
    backgroundColor: 'blue',
  },
});

export default ToneSelectionComponent;

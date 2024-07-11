import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextInputComponent = ({ text, setText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type or speak your message"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputComponent;

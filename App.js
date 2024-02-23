import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledButton from './components/StyledButton';
import { useState } from 'react';
import styles from './styles';

export default function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  async function handle_get_quote_press() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    setQuote(data.content)
    setAuthor(data.author)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.quote}>"{quote}"</Text>
      <Text style={styles.author}>-{author}</Text>
      <View style={styles.buttonsContainer}>
      <StyledButton
        type="primary"
        content={"Get new quote"}
        onPress={handle_get_quote_press}
      />
      </View>
    </View>
  );
}

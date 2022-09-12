import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hellow world</Text>
      <Button title="Click me" />
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(50,50,50)',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});

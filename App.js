import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EnterTodos from './EnterTodos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to Your Todo Application</Text>
      <StatusBar style="auto" />
      <EnterTodos/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '20%'
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

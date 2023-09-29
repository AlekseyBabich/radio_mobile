import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {HeaderLogo} from "./components/HeaderLogo";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

export default function App() {
  return (
    <View style={styles.container}>
        <HeaderLogo/>
      <StatusBar style="auto" />
    </View>
  );
}


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import style from './src/components/header/style';
import Header from './src/components/header';
import Search from './src/components/searchBar';

export default function App() {
  return (
    <View style={style.container}>
      
      <Header></Header>
      <Search></Search>

    </View>
  );
}

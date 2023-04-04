import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import style from './src/components/header/style';
import Header from './src/components/header/index';
import Search from './src/components/searchBar/index';
import BannerFilmes from './src/components/bannerFilmes/index';

export default function App() {
  return (
    <View style={style.container}>
      
      <Header></Header>
      <Search></Search>
      <BannerFilmes></BannerFilmes>

    </View>
  );
}

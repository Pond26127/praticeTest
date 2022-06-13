import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View , SafeAreaView, ScrollView } from 'react-native';
import React , {useEffect , useState} from 'react'
import Home from './screens/Home';
import HeaderTab from './components/HeaderTab';
import SearchBar from './components/SearchBar';
import Catagories from './components/Catagories';
import RestaurantItem from './components/RestaurantItem';


export default function App() {

  return (
    <SafeAreaView style={{ backgroundColor: '#eee' , flex: 1}}>
      <View style={{ backgroundColor: 'white' , padding: 15}}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Catagories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

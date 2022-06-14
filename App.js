import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View , SafeAreaView, ScrollView } from 'react-native';
import React , {useEffect , useState} from 'react'
import Home from './screens/Home';
import HeaderTab from './components/HeaderTab';
import SearchBar from './components/SearchBar';
import Catagories from './components/Catagories';
import RestaurantItems, { localRestaurants } from './components/RestaurantItems';
import { Divider } from 'react-native-elements';
import BottomTabs from './components/BottomTabs';


export default function App() {
    const [restaurantData , setRestaurantData] = React.useState(localRestaurants);
  return (
    <SafeAreaView style={{ backgroundColor: '#eee' , flex: 1}}>
      <View style={{ backgroundColor: 'white' , padding: 15}}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Catagories />
        <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs />
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

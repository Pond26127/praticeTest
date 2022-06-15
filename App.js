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

const YELP_API_KEY = 'EW_UMnYyT6QxIRHVNWIMFn3STDLsf-_jLytWfzpSzCgTPn93AnwB_SkySQEVeKNgnHp8iFo7VzVXeHxMKBd_NYIdwyD1icW7kZUonwTzD2jkpO-swBPReXm0aUqpYnYx';


export default function App() {
    const [restaurantData , setRestaurantData] = React.useState(localRestaurants);

    const getRestaurantsFromYelp = () => {
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Sandiego`;
  
      const apiOptions = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      };
  
      return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
          setRestaurantData(
            json.businesses
          )
        );
    };

    useEffect(() => {
      getRestaurantsFromYelp();
    }, []);

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

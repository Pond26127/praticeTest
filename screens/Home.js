import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View , SafeAreaView, ScrollView } from 'react-native';
import React , {useEffect , useState} from 'react'
import HeaderTab from '../components/Page.Home/HeaderTab';
import SearchBar from '../components/Page.Home/SearchBar';
import Catagories from '../components/Page.Home/Catagories';
import RestaurantItems, { localRestaurants } from '../components/Page.Home/RestaurantItems';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/Page.Home/BottomTabs';

const YELP_API_KEY = 'EW_UMnYyT6QxIRHVNWIMFn3STDLsf-_jLytWfzpSzCgTPn93AnwB_SkySQEVeKNgnHp8iFo7VzVXeHxMKBd_NYIdwyD1icW7kZUonwTzD2jkpO-swBPReXm0aUqpYnYx';


export default function Home({navigation}) {
    const [restaurantData , setRestaurantData] = React.useState(localRestaurants);
    const [city , setCity] = React.useState('San Francisco');
    const [activeTab , setActiveTab] = React.useState("Delivery");

    const getRestaurantsFromYelp = () => {
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  
      const apiOptions = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      };
  
      return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
          setRestaurantData(
            json.businesses.filter((business) => 
              business.transactions.includes(activeTab.toLowerCase()))
          )
        );
    };

    useEffect(() => {
      getRestaurantsFromYelp();
    }, [city , activeTab]);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={{ backgroundColor: 'white' , padding: 15}}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Catagories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
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
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#eee' ,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },

});

import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TweetCard from '../components/TweetCard';
import DummyData from '../mock/DummyData';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerLeft: () => (
        <Image
          style={{ height: 30, width: 30, borderRadius:30, marginLeft:15 }}
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg' }}
        />
      ),
      headerTitle: ()=>(
        <FontAwesome5 name='twitter' size={25} color={'#00acee'} />
      )
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
});
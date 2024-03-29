import { StyleSheet, Text,Image, View, ScrollView } from 'react-native'
import React,{useEffect} from 'react'
import NotificationCard from '../components/NotificationCard'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NotificationData } from '../mock/DummyData';

const NotificationScreen = ({navigation}) => {
  useEffect(()=>(
    navigation.setOptions({
      headerTitle:"Notifications",
      headerLeft: () => (
        <Image
            style={{height:30,width:30,borderRadius:30,marginLeft:15}}
            source={{uri:"https://i33.ntcdntempv26.com/data/images/9169/1073723/001-801faf1.jpg?data=nht"}}
        />
    ),headerRight:() =>(
      <MaterialIcons name='settings' color={"white"} size={25} style={{marginRight:15}} />
    ),
    headerStyle:{
      backgroundColor:"black",
      color:"white",
      borderBottomWidth:0,
    },
    headerTitleStyle:{
      color:"white"
    }
    })
  ))


  return (
    <View style={styles.container}>
      <ScrollView>
      {NotificationData.map(dat=>
        <NotificationCard id={dat.id} type={dat.type}
          pic={dat.pic}
          title={dat.title}
          desc={dat.desc}
          color={dat.color}
        />
        )}
      </ScrollView>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  }
})
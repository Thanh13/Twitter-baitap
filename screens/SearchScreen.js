import { StyleSheet, Text, TextInput,Image, View,Dimensions, ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TrendingCard from "../components/TrendingCard"
import { TrendingData } from '../mock/DummyData';
import { DummyData } from '../mock/DummyData';
import SearchProfCard from '../components/searchProfCard';

const ScreenWidth = Dimensions.get('window').width;

const SearchScreen = ({navigation}) => {
  const[user,setUser] = useState([])
  const data = DummyData

  useEffect(()=>(
    navigation.setOptions({
      headerTitle: ()=> (
      <TextInput 
      placeholder='Search Twitter' 
      placeholderTextColor={"#807c7c"}
      style={styles.searchText}
      onChangeText={searchUser}
      />),
      headerLeft: () => (
        <Image
            style={{height:30,width:30,borderRadius:30,marginLeft:15}}
            source={{uri:"https://i33.ntcdntempv26.com/data/images/9169/1073723/001-801faf1.jpg?data=nht"}}
        />
    ),headerRight:() =>(
      <MaterialIcons name='settings' color={"white"} size={25} style={styles.settingIcon} />
    ),
    headerStyle:{
      backgroundColor:"black",
    }
    })
  ))
  
  const searchUser = (e) => {
    if(e){
      setUser(data.filter(dat => dat.id.includes(e))),
      console.log(user)
    }else{
      setUser([])
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      {user?.map(dat =>
        <SearchProfCard 
        key ={dat.id} prof={dat.prof} id={dat.id} name={dat.name} 
        verified={dat.verified} 
        />
        )}
      {TrendingData.map(dat => 
        
          <TrendingCard key={dat.id} topic={dat.topic} hashtag={dat.hashtag} count={dat.count} />
        )}
      </ScrollView>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  },
  searchText:{
    flex:2,
    backgroundColor:"#262626",
    paddingLeft:15,
    textAlignVertical:"center",
    height:"100%",
    width:ScreenWidth-115,
    marginTop:15,
    marginBottom:15,
    borderRadius:50,
    color:"white",
    borderWidth:0,
    fontWeight:400,
    
  },
  settingIcon:{
    marginRight:15
  }
})
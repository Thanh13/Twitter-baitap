import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const TweetCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCont}>
          <Image 
            style={{height:30, width:30 , borderRadius:30}}
            source={{uri:'https://i33.ntcdntempv26.com/data/images/9169/1073723/001-801faf1.jpg?data=nht'}}
          />
      </View>
      <View style={styles.rightCont}>
        <View style={styles.topCont}>
          <View style={styles.nameCont}>
            <Text style={styles.nameText}>Thanh</Text>
            <MaterialIcon name='verified' color='white' size={25}/>
            <Text style={styles.idText}>@ThanhLe21</Text>
            <Text style={styles.idText}>- 2h</Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name='dots-vertical'
              color='gray'
              size={20}
            />
          </View>
        </View>
        <View style={styles.tweetCont}>
          <Text style={styles.tweetText}>
            ABCDEFG
          </Text>
          <Image 
            style={{
              height:300,
              width:'100%',
              borderRadius:10,
              marginTop:10
            }}
            source={{uri:'https://i33.ntcdntempv26.com/data/images/9169/1073723/001-801faf1.jpg?data=nht'}}
          />
        </View>
        <View style={styles.actionCont}> 
            <View style={styles.iconCont}>
              <MaterialCommunityIcons 
                name='message-reply-outline' color='gray' size={20}
              />
              <Text style={styles.idText}>25</Text>
            </View>
            <View style={styles.iconCont}>
              <AntDesign 
                name='retweet' color='gray' size={20}
              />
              <Text style={styles.idText}>5</Text>
            </View>
            <View style={styles.iconCont}>
              <MaterialCommunityIcons 
                name='heart-outline' color='gray' size={20}
              />
              <Text style={styles.idText}>215</Text>
            </View>
            <View style={styles.iconCont}>
              <MaterialCommunityIcons 
                name='share-variant-outline' color='gray' size={20}
              />
            </View>        
        </View>
      </View>
    </View>
  )
}

export default TweetCard

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    paddingBottom:5,
    borderBottomColor:'#2A2E30',
    borderBottomWidth:1
  },
  rightCont:{
    flex:1,
    paddingTop:6,
    paddingBottom:5,
    marginLeft:5,
    flexDirection:'column'
  },
  topCont:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  nameText:{
    color:'#e7e9ea',
    fontWeight:'bold',
    marginRight:5
  },
  idText:{
    marginLeft:5,
    color:'gray'
  },
  nameCont:{
    flexDirection:'row'
  },
  tweetText:{
    color:'#DDDFDF'
  },
  tweetCont:{
    padding:15
  },
  actionCont:{
    marginTop:10,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    margin:15
  },
  iconCont:{
    flexDirection:'row'
  }
})
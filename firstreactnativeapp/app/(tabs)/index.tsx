import {View,Text,StyleSheet} from 'react-native'

const index = ()=>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  )

}

const styles  = StyleSheet.create({
  container : {
    flex:1,
    flexDirection : "column",
    justifyContent:'center'
  },
  text:{
    color:"white",
    fontSize:42,
    fontWeight:"bold",
    textAlign:"center"
  }
})




export default index
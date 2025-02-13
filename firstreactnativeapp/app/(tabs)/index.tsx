import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import randomBg from '../../assets/images/landscape.jpg'

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={randomBg}
        style={styles.image}
      >
        <Text style={styles.text}>Hello</Text>
      </ImageBackground>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center'
  },
  image: {
    width: "100%",
    height:"100%",
    flex:1,
    justifyContent:"center"
  },


  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor:"rgba(0,0,0,0.5)"
  }
})




export default index
import { StyleSheet, View, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>
        Joel B Koshy
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  titleContainer: {
    color: "white",
    fontSize: 42,
    fontWeight:"bold",
    textAlign: "center"
  },
});

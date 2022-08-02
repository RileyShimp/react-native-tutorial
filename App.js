import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, SafeAreaView } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <TouchableWithoutFeedback onPress={()=> console.log('image tapped')}>
      <Image source={{
        width: 200,
        height: 300,
        uri:"https://picsum.photos/200/300"}} />
      </TouchableWithoutFeedback>
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

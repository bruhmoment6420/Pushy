import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

export default function SuccessScreen({ navigation, route }) {
  const { amount } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Congratulations !!!</Text>
      <Text style={styles.otherText}>You did {amount} pushups</Text>
      <Button style={{ marginTop: 12 }} onPress={() => navigation.navigate('Pushup Helper')}>Go To Home</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    color: 'green',
    fontSize: 30
  },
  otherText: {
    color: 'white',
    marginTop: 12
  }
})
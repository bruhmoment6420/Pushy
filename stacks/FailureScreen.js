import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

export default function FailureScreen({ navigation, route }) {
  const { amount, amountCompleted } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Try Harder</Text>
      <Text style={styles.otherText}>You failed to do {amount} pushups</Text>
      <Text style={styles.otherText}>You only did {amountCompleted} pushups</Text>
      <Button style={{ marginTop: 12 }}onPress={() => navigation.navigate('Pushup Helper')}>Go To Home</Button>
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
    color: 'red',
    fontSize: 30
  },
  otherText: {
    color: 'white',
    marginTop: 12
  }
})
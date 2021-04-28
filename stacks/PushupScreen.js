import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableRipple, Button } from 'react-native-paper'

export default function PushupScreen({ navigation, route }) {
  const [pushups, setPushups] = useState(0)

  const { amount } = route.params

  const handlePress = () => {
    if (pushups < amount - 1) {
      setPushups((prev) => prev + 1)
    } else {
      navigation.navigate('Success', { amount: amount })
    }
  }

  const giveUp = () => {
    navigation.navigate('Failed', { amount: amount, amountCompleted: amount - pushups })
  }

  return (
    <TouchableRipple style={styles.container} onPress={handlePress}>
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>
          Pushups Left: <Text style={{ color: 'red', marginLeft: 5 }}>{amount - pushups}</Text>
        </Text>
        <Text style={styles.pushupCounter}>{pushups}</Text>
        <Text style={styles.pushupSubtext}>DONE</Text>
        <Button onPress={giveUp} style={{ marginTop: 100 }}>Give Up</Button>
      </View>
    </TouchableRipple>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pushupCounter: {
    fontSize: 100,
    color: '#BB86FC'
  },
  pushupSubtext: {
    color: 'white',
    fontSize: 25
  }
})
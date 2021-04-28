import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, TextInput, Dialog, Paragraph, Portal } from 'react-native-paper'

export default function PrepScreen({ navigation }) {
  const [amount, setAmount] = useState('')
  const [dialogVisible, setDialogVisible] = useState(false)

  const handlePress = () => {
    if (amount === '') {
      setDialogVisible(true)
    } else {
      navigation.navigate('Perform Pushups', { amount: parseInt(amount) })
    }
  }

  return (
    <View style={styles.container}>
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)}>
          <Dialog.Title>Enter a Proper Number</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Are you seriously gonna do 0 pushups ?</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setDialogVisible(false)}>Sorry</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Text style={styles.questionStyle}>How many pushups do you want to do ?</Text>
      <View>
        <TextInput
          label='Enter Amount'
          mode='outlined'
          value={amount}
          keyboardType='numeric'
          onChangeText={(val) => setAmount(val)}
        />
        <Button style={{ marginTop: 12 }} onPress={handlePress}>
          Start
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 21,
    marginTop: 160
  },
  questionStyle: {
    color: 'white',
    marginBottom: 8
  }
})
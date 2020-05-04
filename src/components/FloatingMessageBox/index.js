import React from 'react'
import {
  View,
  Text,
  Modal,
  ActivityIndicator
} from 'react-native'
import style from './style'

export default function FloatingMessageBox ({ msg, loading, show }) {
  const PersonalActivityIndicator = () => (
    <ActivityIndicator
      color='#bd93f9'
      size={50}
    />
  )

  return (
    <Modal
      animationType='fade'
      visible={show}
      transparent
    >
      <View style={style.mainView}>
        <View style={style.boxView}>
          <View>
            {loading && <PersonalActivityIndicator />}
            <Text style={style.msg}> {msg} </Text>
          </View>
        </View>
      </View>
    </Modal>
  )
}

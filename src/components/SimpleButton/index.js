import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

function SimpleButton ({ title, action, style }) {
  return (
    <TouchableOpacity>
      <Text
        style={style}
        onPress={action}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default SimpleButton

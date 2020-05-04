import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native'
import styles from './style.js'

export default function Home ({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/homeBackground.gif')}
      style={styles.bgImage}
    >
      <View style={styles.mainView}>
        <Text style={styles.mainTitleText}> Flylife </Text>
        <Text style={styles.introText}> Transforme ideias em palavras </Text>
        <Text style={styles.introText}> Sonhos em poesia </Text>
        <Text style={styles.introText}> Passado em filosofia </Text>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          activeOpacity={0.5}
        >
          <Text style={styles.startButton}> Start </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

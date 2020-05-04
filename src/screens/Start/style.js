import { StyleSheet } from 'react-native'
import androidSafeAreaView from '../../styles/androidSafeAreaView'

export default StyleSheet.create({
  bgImage: {
    flex: 1
  },
  mainView: {
    ...androidSafeAreaView,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080'
  },

  mainTitleText: {
    fontSize: 50,
    color: '#f8f8f2',
    textAlign: 'center',
    letterSpacing: 5,
    fontFamily: 'sans-serif-thin',
    textShadowColor: '#6272a4', 
    textShadowOffset: { width: -1, height: 0},
    textShadowRadius: 10
  },
  introText: {
    fontSize: 30,
    color: '#f8f8f2',
    textAlign: 'center',
    lineHeight: 45,
    letterSpacing: 1,
    fontFamily: 'sans-serif-thin',
    textShadowColor: '#6272a4', 
    textShadowOffset: { width: -1, height: 0},
    textShadowRadius: 10 
  },
  startButton: {
    margin: 50,
    width: 200,
    height: 80,
    paddingTop: 8,
    backgroundColor: '#282a36',
    color: '#f8f8f2',
    fontSize: 40,
    borderWidth: 1,
    borderColor: '#f8f8f2',
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: 'sans-serif-thin'
  }
})

import { StyleSheet } from 'react-native'
import androidSafeAreaView from '../../styles/androidSafeAreaView'

export default StyleSheet.create({
  mainView: {
    ...androidSafeAreaView,
    backgroundColor: '#282a36',
    alignItems: 'center',
    justifyContent: 'center'
  },
  simpleButton: {
    width: 300,
    height: 50,
    paddingTop: 8,
    margin: 30,
    backgroundColor: '#44475a',
    color: '#8be9fd',
    fontSize: 25,
    borderWidth: 1,
    borderColor: '#8be9fd',
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: 'sans-serif-thin'
  }
})

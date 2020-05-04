import { StyleSheet } from 'react-native'
import androidSafeAreaView from '../../styles/androidSafeAreaView'

export default StyleSheet.create({
  mainView: {
    ...androidSafeAreaView,
    backgroundColor: '#282A36',
    padding: 15
  },
  titleInput: {
    borderBottomWidth: 2,
    borderColor: '#8be9fd',
    fontFamily: 'sans-serif-thin',
    fontSize: 25,
    color: '#f8f8f2',
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  },
  TextArea: {
    borderBottomWidth: 2,
    borderColor: '#8be9fd',
    fontFamily: 'sans-serif-thin',
    fontSize: 20,
    color: '#f8f8f2',
    textAlignVertical: 'top',
    padding: 5,
    height: 270
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 30
  },
  simpleButton: {
    width: 110,
    height: 50,
    paddingTop: 8,
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

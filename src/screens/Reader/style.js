import { StyleSheet } from 'react-native'

import androidSafeAreaView from '../../styles/androidSafeAreaView'

export default StyleSheet.create({
  mainView: {
    ...androidSafeAreaView,
    backgroundColor: '#282a36',
    padding: 10,
  }, 
  contentBox: {
    backgroundColor: '#44475a',
    flex: 1,
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bd93f9'
  },
  title: {
    fontFamily: 'sans-serif-light',
    fontSize: 20,
    textAlign: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#bd93f9',
    width: 300,
    paddingBottom: 10,
    color: '#8be9fd'
  },
  article: {
    fontFamily: 'sans-serif-light',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'left',
    color: '#f8f8f2'
  },
  date: {
    fontSize: 15,
    flexWrap: 'wrap',
    marginTop: 10,
    fontFamily: 'sans-serif-light',
    color: '#8be9fd'
  },
  simpleButton: {
    width: 320,
    height: 50,
    paddingTop: 8,
    backgroundColor: '#44475a',
    color: '#bd93f9',
    margin: 10,
    fontSize: 25,
    borderWidth: 1,
    borderColor: '#bd93f9',
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
    alignSelf: 'center'
  }
})

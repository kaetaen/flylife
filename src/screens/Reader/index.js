import React, { useState, useEffect } from 'react'
import { View, FlatList, Text } from 'react-native'
import SimpleButton from '../../components/SimpleButton'
import FloatingMessageBox from '../../components/FloatingMessageBox'
import store from '../../services/localStorage'
import styles from './style'

const ItemList = React.memo((props) => (
  <View style={styles.contentBox}>
    <Text style={styles.title}> {props.data.title} </Text>
    <Text style={styles.article}> {props.data.article} </Text>
    <Text style={styles.date}> {props.data.date} </Text>
  </View>
))

export default function Reader () {
  const [content, setContent] = useState([])
  const [render, setRender] = useState(0)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    getDataFromDataBase()
  }, [render])

  const getDataFromDataBase = async () => {
    const databaseArticles = await store.get()
    setContent(databaseArticles)
    setLoader(false)
  }

  return (
    <>
      <FloatingMessageBox msg='Carregando...' loading show={loader} />
      <View style={styles.mainView}>
        <FlatList
          data={content}
          renderItem={({ item }) => {
            const data = JSON.parse(item[1])
            return (
              <ItemList data={data} />
            )
          }}
          extraData={content}
          keyExtractor={item => item[0]}
        />
        <SimpleButton
          style={styles.simpleButton}
          title='Atualizar'
          action={() => {
            setRender(render + 1)
            setLoader(true)
          }}
        />
      </View>
    </>
  )
}


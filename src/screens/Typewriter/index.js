import React, { useState, useEffect } from 'react'
import {
  View,
  TextInput,
} from 'react-native'
import FloatingMessageBox from '../../components/FloatingMessageBox'
import SimpleButton from '../../components/SimpleButton'
import store from '../../services/localStorage'
import styles from './style'

export default function Typewriter ({ navigation }) {
  const [title, setTitle] = useState('')
  const [article, setArticle] = useState('')
  const [alert, setAlert] = useState(false)
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const handleClickButton = async (title, article, callback, { msg, loading }) => {
    setAlert(true)
    setMsg(msg)
    setLoading(loading)
    await callback(title, article)
    setAlert(false)
  }

  useEffect(() => {
    /* return () => {
      setTitle('')
      setArticle('')
    } */
  }, [0])

  const clearInput = () => {
    setArticle('')
    setTitle('')
  }

  return (
    <>
      <FloatingMessageBox msg={msg} loading={loading} show={alert} />
      <View style={styles.mainView}>
        <TextInput
          style={styles.titleInput}
          placeholder='Título'
          value={title}
          onChangeText={title => setTitle(title)}
        />
        <TextInput
          placeholder='Querido diário...'
          style={styles.TextArea}
          multiline
          value={article}
          onChangeText={text => setArticle(text)}
        />

        <View style={styles.buttonContainer}>
          <SimpleButton
            title='Salvar'
            action={async () => {
              await handleClickButton(title, article, store.save, {
                msg: 'Salvando...',
                loading: true
              })
              clearInput()
            }}
            style={styles.simpleButton}
          />

          <SimpleButton
            title='Ler'
            style={styles.simpleButton}
            action={() => {
              navigation.navigate('Leitor')
              clearInput()
            }}
          />
        </View> 
      </View> 
    </>
  )
}


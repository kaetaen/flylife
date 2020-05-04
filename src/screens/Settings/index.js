import React, { useState } from 'react'
import { View } from 'react-native'
import * as Print from 'expo-print'
import SimpleButton from './../../components/SimpleButton'
import FloatingMessageBox from '../../components/FloatingMessageBox'
import styles from './style'
import store from '../../services/localStorage'
import HTMLTemplate from './utils/htmlTemplate'

export default function Settings () {
  const [alert, setAlert] = useState(false)
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const handleClickButton = async (callback, { msg, loading }) => {
    setAlert(true)
    setMsg(msg)
    setLoading(loading)
    await callback()
    setAlert(false)
  }

  const exportToPDF = async () => {
    const content = await store.get()
    let document = ''
    content.map((values, key) => {
      const data = JSON.parse(values[1])
      const { title, article, date } = data
      document += HTMLTemplate(title, article, date)
    })

    await Print.printAsync({ html: document, width: 595, height: 842 })
  }

  return (
    <>
      <FloatingMessageBox msg={msg} loading={loading} show={alert} />
      <View style={styles.mainView}>
        <SimpleButton
          title='Deletar todos os dados'
          style={styles.simpleButton}
          action={() => handleClickButton(store.delete, {
            msg: 'Deletando...',
            loading: true
          })}
        />
        <SimpleButton
          title='Exportar em pdf'
          style={styles.simpleButton}
          action={() => handleClickButton(exportToPDF, {
            msg: 'Carregando...',
            loading: true
          })}
        />
      </View>
    </>
  )
}

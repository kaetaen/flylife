import { AsyncStorage } from 'react-native'

class Store {
  async get () {
    const keys = await AsyncStorage.getAllKeys()
    const values = await AsyncStorage.multiGet(keys)

    return values
  }

  async save (title, article) {
    const date = new Date().toLocaleDateString()
    const id = Date.now().toString()
    const data = JSON.stringify({
      id, title, article, date
    })

    await AsyncStorage.setItem(id, data)
  }

  async delete () {
    await AsyncStorage.clear()
  }
}

export default new Store()

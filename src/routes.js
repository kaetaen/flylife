import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import Start from './screens/Start'
import Typewriter from './screens/Typewriter'
import Reader from './screens/Reader'
import Settings from './screens/Settings'

const Drawer = createDrawerNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        drawerStyle={styles.drawer}
        drawerContentOptions={styles.content}
      >
        <Drawer.Screen
          name='Início'
          component={Start}

          options={{ drawerIcon: () => <Ionicons name='md-star-outline' size={32} color='#8be9fd' /> }}
        />
        <Drawer.Screen
          name='Escrivania'
          component={Typewriter}
          options={{ drawerIcon: () => <Ionicons name='md-create' size={32} color='#8be9fd' /> }}
        />
        <Drawer.Screen
          name='Leitor'
          component={Reader}
          options={{ drawerIcon: () => <Ionicons name='md-book' size={32} color='#8be9fd' /> }}
        />
        <Drawer.Screen
          name='Configurações'
          component={Settings}
          options={{ drawerIcon: () => <Ionicons name='md-settings' size={32} color='#8be9fd' /> }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = {
  drawer: {
    backgroundColor: '#282a36',
    width: 200
  },
  content: {
    activeTintColor: '#bd93f9',
    inactiveTintColor: '#8be9fd'
  }
}

import React from 'react'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import Home from './Home'
import configureStore from '../store'
import { firebase as fbConfig, rrfConfig } from './config'
import {useAuth} from '../hooks/useAuth'
import {UserContext} from '../contexts/UserContext'

const initialState = window && window.__INITIAL_STATE__
const store = configureStore(initialState)
firebase.initializeApp(fbConfig)

export default function App() {
  const { user } = useAuth()

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rrfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
          <UserContext.Provider value={user}>
            <Home />
          </UserContext.Provider>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

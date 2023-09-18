/* eslint-disable comma-dangle */
import React from 'react'
import Router from './Utils/Router'
import Header from './Components/Header'
import { createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import ThemeHandler from './Utils/Theming/ThemeProvider'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/index.js'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

/**
 * Configuration de redux persist
 */
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeHandler>
            <CssBaseline />
            <Header />
            <Router />
          </ThemeHandler>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App

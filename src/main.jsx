import React from 'react'
import { Provider } from 'react-redux'
import { store } from './global/redux.js'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)

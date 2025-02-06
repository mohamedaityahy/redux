import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { legacy_createStore } from 'redux'
import reducer from './config/reducer.js'

const store = legacy_createStore(reducer)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

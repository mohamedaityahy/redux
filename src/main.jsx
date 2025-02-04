import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore } from 'redux'
import reducer from './config/reducer'

const store = legacy_createStore(reducer)


const root = createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import firebaseConfig from './firebaseConfig/firebaseConfig.js';
import { ToastContainer, toast } from 'react-toastify';
import {store} from './store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
  <Provider store={store}>
  <App />
</Provider>,
  </>
  
)

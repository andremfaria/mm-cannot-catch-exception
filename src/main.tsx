import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MetaMaskProvider } from '@metamask/sdk-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MetaMaskProvider debug={true}
    sdkOptions={{
        dappMetadata: {
          name: "Demo React App",
          url: window.location.protocol + '//' + window.location.host,
        }
    }}>
    <App />
    </MetaMaskProvider>
  </React.StrictMode>,
)

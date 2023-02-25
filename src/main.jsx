import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 1 -Install Chakra UI (npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion)
// 2 - Import ChakraProvider
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot( document.getElementById( 'MG95Developer' ) ).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* 3 - Wrap App inside ChakraProvider */}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// import custom css file to the root
import './App.css'

// 1 -Install Chakra UI (npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion)
// 2 - Import ChakraProvider
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


// extending the theme
const colors = {
  yamaha: {
    red: '#c80226',
    darkGrey: '#222b33',
    lightGrey: '#67717a'
  }
}

const theme = extendTheme( { colors } )

ReactDOM.createRoot( document.getElementById( 'MG95Developer' ) ).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* 3 - Wrap App inside ChakraProvider */}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

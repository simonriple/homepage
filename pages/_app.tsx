import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

const brand = {
  colors: {
    beige: '#edede2',
    grey: '#a8a8a6',
    white: '#f5f5f5',
    orange: {
      500: '#db936a',
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'beige',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
}

const theme = extendTheme(brand)

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

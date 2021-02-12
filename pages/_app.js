import Layout from "../components/Layout"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp

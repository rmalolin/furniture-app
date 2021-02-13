import Layout from "../components/Layout"
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "../components/theme"



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp

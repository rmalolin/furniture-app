import Layout from "../components/Layout"
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "../styles/theme"
import Meta from "../components/Meta"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Meta
        title="Сборка мебели"
        keywords="Сборка мебели, мебель, Верея, Обнинск"
        desc="Собираем мебель быстро"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp

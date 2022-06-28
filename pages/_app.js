import Layout from "../components/Layout"
import '../styles/globals.css'

// Components = All the pages
function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        <Component {...pageProps} /> 
        
      </Layout>
    )
}

export default MyApp

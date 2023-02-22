import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../globals.css'

import { client } from '../service/client'

import CartProvider from '@store/Cart'
import Context from '@store/Auth'


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Context.Provider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </Context.Provider>
    </ApolloProvider>
  )
}

export default MyApp

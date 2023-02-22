import { ApolloProvider,
         ApolloClient,
         InMemoryCache,
         ApolloLink,
         from,
         HttpLink } from '@apollo/client'



const baseUrl = process.env.NEXT_PUBLIC_SERVICE_URL || 'http.//localhost:4000'

import { onError } from '@apollo/client/link/error'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = typeof window !== 'undefined' ? window.sessionStorage.getItem('token') : '';

  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
    return forward(operation)
})  

const errorMiddleware = onError(
  ({ networkError }) => {
    if (networkError && networkError.message === 'invalid_token') {
      if (typeof window !== 'undefined') {
        window.sessionStorage.remmoveItem('token')
        window.location.replace('/')
      }
    }
  }
)

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: `${baseUrl}/graphql`,
    })
  ])
})
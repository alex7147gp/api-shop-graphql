import { useMutation } from '@apollo/client'
import { LoginDocument } from 'src/gql/graphql'


export function useLoginMutation() {
   const [login, {data, loading, error} ] = useMutation(LoginDocument)
   
   return { login, loginData: data, loginLoading: loading, loginError: error }
}

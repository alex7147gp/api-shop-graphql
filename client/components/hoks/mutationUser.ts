import { useMutation } from '@apollo/client'
import { SignupDocument } from 'src/gql/graphql'


export function useRegisterMutation() {
   const [singUp, {data, loading, error} ] = useMutation(SignupDocument)
   
   return { singUp, data, loading, error }
}
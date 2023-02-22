import React, { useContext, useState } from 'react'
import { UserForm, RegisterForm } from '../UserForm'
import Context from '../../store/Auth'
import { useRegisterMutation } from '../hoks/mutationUser'
import { useLoginMutation } from '../hoks/mutationLogin'

export const Login = () => {

  const [estado, setEstado] = useState(true)

  const { singUp, data, loading, error } = useRegisterMutation()
  const { login, loginData, loginLoading, loginError } = useLoginMutation()
  
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmit = ({ email, password }: {email: any, password: any}) => {
            const input = {
              "email": email.value,
              "password": password.value 
            }
            const variables = { input }
            singUp({ variables })
            .then(({ data }) => {
              const { signup }: any = data && data.signup
              activateAuth(signup)
            })
          }
            
          const errorMsg = error && 'El usuario ya existe o hay algun problema.'
 
          const onSubmitL = ({ email, password }: { email: any, password: any }) => {
            const input = {
              "email": email.value,
              "password": password.value
            }
            const variables = { input }
            login({ variables })
            .then(({ data }) => {
              const { login }: any = data && data.login
              activateAuth(login)
            })
          }
          
          const errorMsgL = loginError && 'email o contraseña incorecta'
          
          return (
            <> 
              {
                estado ? <RegisterForm onSubmit={onSubmit} error={errorMsg} disabled={loading} title={estado} setEstado={setEstado} />
                : <UserForm onSubmitL={onSubmitL} error={errorMsgL} disabled={loginLoading} title={estado} setEstado={setEstado} />
              }
            </>
            
          )
        }
      }
    </Context.Consumer>
  )
}


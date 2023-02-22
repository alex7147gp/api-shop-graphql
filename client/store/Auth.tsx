import { createContext, useContext, useState, useEffect } from 'react'


import { useApolloClient } from '@apollo/client'


const browser = typeof window !== undefined

const Context = createContext({
  isAuth: false,
  activateAuth: (token: string) => {},
  removeAuth: () => {} })

const Provider = ({ children }: { children: React.ReactNode }) => {
  
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = window.sessionStorage.getItem('token');
      setIsAuth(!!token);
    }
  }, []);

  const client = useApolloClient()

    const value = {
    isAuth,
    activateAuth: (token: string) => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
      client.resetStore()
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )  
}

export default {
  Provider,
  Consumer: Context.Consumer
}

export const useCurrentUser = () => useContext(Context)
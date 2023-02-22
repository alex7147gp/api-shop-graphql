import { useState, useEffect } from 'react'


import { Login } from '@components/Profile/Login'
import Profile from '@components/Profile/Profile'

import { useCurrentUser } from '@store/Auth'

import { useQuery } from '@apollo/client'


import { GetFavoryDocument } from '../src/gql/graphql'


import { LoadingEffect } from '../components/effect/loading'
import  ProductList from '../components/ProductList/ProductList'

import { Photo } from '../src/gql/graphql'

import Layout from '@components/Layout/Layout'
import { Segment, Header, Button } from 'semantic-ui-react'


import Link from 'next/link'

const CurrentUser = () => {


  const { isAuth } = useCurrentUser()

  const { data, loading, error } = useQuery<Photo[]>(GetFavoryDocument)

  if (isAuth) {
      

    if (loading) {
        return (<LoadingEffect/>)
    }

    else if (data) {
        if (data.length > 0) {
          return (<ProductList products={data}/>)
        }
        else {
          return (
                 <Layout title="Hola">
        <div className="mt-14" />
        <Segment>
          <p>
             Por el momento no tienes favoritos 
          </p>
            <Button type="button" positive>
              <Link href="/" passHref>
                <a>Inicio</a>
              </Link>
            </Button>{' '}
        </Segment>
        <div className="mb-20" />
      </Layout>     
        )
        }
    }
  }

  return(
    <Login /> 
  )

}

export default CurrentUser
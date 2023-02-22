import { Segment, Header, Button } from 'semantic-ui-react'
import { useMutation, useQuery } from '@apollo/client'

import { useCurrentUser } from '@store/Auth'

import Layout from '@components/Layout/Layout'
import { type } from 'os'

import { GetFavoryDocument}  from '../../src/gql/graphql'


import Link from 'next/link'


type User = {
  username: string,
  avatar: string,
}


function Profile({ user }: { user: User }) {
  
  const { removeAuth } = useCurrentUser()

  return (
      <Layout title="Hola">
        <div className="mt-14" />
        <Header as="h2" size="huge" className="">
          Hola, {user.username}
        </Header>
        <Segment>
          <p>
            Si estás viendo esto es porque has iniciado sesión de forma correcta.
          </p>
            <Button type="button" positive>
              <Link href="/favory" passHref>
                <a>Ver Fotos Favoritas</a>
              </Link>
            </Button>{' '}
          <Button type="button" basic color="red" onClick={() => {removeAuth()}}>
            Logout
          </Button>
        </Segment>
        <div className="mb-20" />
      </Layout>
  )
}

export default Profile
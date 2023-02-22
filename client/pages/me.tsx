import { useState, useEffect } from 'react'


import { Login } from '@components/Profile/Login'
import Profile from '@components/Profile/Profile'

import { useCurrentUser } from '@store/Auth'

const CurrentUser = () => {


  const { isAuth } = useCurrentUser()


  const user = {
    username: 'Name',
    avatar: 'Avatar',
  }

  if (isAuth) {
    return(
      <Profile user={user} />
    )
  }

  return(
    <Login /> 
  )

}

export default CurrentUser
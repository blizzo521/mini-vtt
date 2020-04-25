import {React, useContext} from 'react'
import { Router } from '@reach/router'
// import { UserContext } from '../providers/UserProvider';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Table from './Table';
import PasswordReset from './PasswordReset';

function Home() {
  // const user = useContext(UserContext);
  const user = null
  console.log('user', user)

  if (user) {
    return <Table />
  }

  return (
    <Router>
      <SignUp path='signUp' />
      <SignIn path='/' />
      <PasswordReset path='passwordReset' />
    </Router>
  )
}

export default Home

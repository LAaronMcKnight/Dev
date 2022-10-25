import React from 'react'
import SignUpForm from '../components/SignUpForm'

function AuthPage({ setUser }) {
  return (
    <div>
      <h1>Authentication Page</h1>
      <SignUpForm setUser={setUser} />
    </div>
  )
}

export default AuthPage
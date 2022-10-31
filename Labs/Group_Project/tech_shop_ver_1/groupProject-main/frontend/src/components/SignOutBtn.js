import React from 'react'

function SignOutBtn({ setUser }) {

  const signOut = () => {
    localStorage.getItem('data') ? localStorage.removeItem('data') && setUser(null)
    :
    console.log('no user')
  }

  return (
    <div>
      <button id='signOut' onClick={signOut}>Log Out</button>
    </div>
  )
}

export default SignOutBtn
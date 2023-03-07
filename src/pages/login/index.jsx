import React, { useState } from 'react'
import { Magic } from 'magic-sdk'
import { Button, TextField } from '@mui/material'

const LoginPage = () => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const magic = new Magic('pk_live_7F761CDE8A8DE1FE')

  const loginUser = async (email) => {
    try {
      const token = await magic.auth.loginWithMagicLink({ email });
      setUser(email)
      // setToken(token)
    } catch (error) {
      setUser(null)
    }
  }

  const getToken = async () => {
    try {
      return await magic.user.getIdToken();
    } catch (err) {
      throw new Error("Authenticate current session failed");
    }
  };

  const checkUserLoggedIn = async () => {
    try {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        const { email } = await magic.user.getMetadata();
        setUser(email);
        getToken();
      }
    } catch (err) {
      throw new Error("User is not logged in");
    }
  };



  return (
    <div>
      <TextField label='Email'
        onChange={(e) => setUser(e.target.value)}
      />
      <Button
        variant='contained'
        onClick={() => loginUser(user)}>
        Login
      </Button>
      {
        checkUserLoggedIn &&
        <h1> Usuário está logado</h1>
      }
    </div>
  )
}

export default LoginPage
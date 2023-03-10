import React, { useState } from 'react'
import { Magic, RPCError, RPCErrorCode } from 'magic-sdk'
import { Button, TextField } from '@mui/material'
import AuthMagicLink from './container'

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [email, setEmail] = useState(null)
  const [token, setToken] = useState(null)

  const magic = new Magic('pk_live_7F761CDE8A8DE1FE')


  const handleLogin = async () => {
    try {
      if (phoneNumber === null) {
        const token = await magic.auth.loginWithMagicLink({ email });
        localStorage.setItem('Bearer', token)
      } else {
        await magic.auth.loginWithSMS({ phoneNumber })
      }
    } catch (error) {
      console.log(error)
      if (error instanceof RPCError) {
        switch (error.code) {
          case RPCErrorCode.MagicLinkFailedVerification:
          case RPCErrorCode.MagicLinkExpired:
          case RPCErrorCode.MagicLinkRateLimited:
          case RPCErrorCode.UserAlreadyLoggedIn:

            break;
        }
      }
    }
  }

  // const getToken = async () => {
  //   try {
  //     return await magic.user.getIdToken();
  //   } catch (err) {
  //     throw new Error("Authenticate current session failed");
  //   }
  // };



  // const checkUserLoggedIn = async () => {
  //   try {
  //     const isLoggedIn = await magic.user.isLoggedIn();
  //     if (isLoggedIn) {
  //       const { email } = await magic.user.getMetadata();
  //       setUser(email);
  //       getToken();
  //     }
  //   } catch (err) {
  //     throw new Error("User is not logged in");
  //   }
  // };

  return (
    <AuthMagicLink handleLogin={() => handleLogin()}
      onChangeEmail={(e) => setEmail(e.target.value)}
    />
  )
}

export default LoginPage
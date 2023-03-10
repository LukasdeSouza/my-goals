import { Link, Stack } from '@mui/material'
import React from 'react'

const NavBar = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'}>
      <Stack>
        <img src="" alt="Logo" />
      </Stack>
      <Stack direction={'row'} >
        <Link href="#" mr={4} underline='none' color={'#e3e3e3'} >
          Home
        </Link>
        <Link href="#" underline='none' color={'#e3e3e3'}>
          AboutUs
        </Link>
      </Stack>
      <Stack>
        <Link href='/auth/login' underline='none' color={'#e3e3e3'}>
          Login
        </Link>
      </Stack>
    </Stack>
  )
}

export default NavBar
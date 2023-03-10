import { Box } from '@mui/material'
import React from 'react'
import NavBar from '../../components/navbar/index.jsx'
import FeaturesSmallColumn from './components/hero/features/index.jsx'
import HeroCenter from './components/hero/index.jsx'

const HomePage = () => {
  return (
    <Box>
      <NavBar />
      <HeroCenter />
      <FeaturesSmallColumn />
    </Box>
  )
}

export default HomePage
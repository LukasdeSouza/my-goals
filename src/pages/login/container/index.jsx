import * as React from "react"
import {
  Box,
  Stack,
  Button,
  FilledInput,
  Link,
  Typography,
  FormLabel,
  TextField,
} from "@mui/material"
import { visuallyHidden } from "@mui/utils"
import { TbArrowRight } from "react-icons/tb"
const Logo = () => (
  <Box
    sx={{
      fontSize: "2xl",
      fontWeight: 800,
      color: "gray.700",
    }}
  >
    ❍
  </Box>
)
export default function AuthMagicLink({ onChangeEmail, handleLogin }) {


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 1,
        }}
      >
        <Logo />
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "2xl", sm: "3xl" },
          }}>
          Bem Vindo de Volta
        </Typography>
        <Typography>
          Acesse com seu e-mail
        </Typography>
      </Box>
      <Stack width={'400px'}>
        <TextField label='Email'
          onChange={onChangeEmail}
        />
        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{ mt: 4 }}>
          Enviar Link para Email
        </Button>
      </Stack>
      <Typography variant="caption"
        sx={{ cursor: 'pointer' }}>Esqueceu seu acesso?</Typography>

    </Box>
  )
}
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
} from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import * as React from 'react'
import { lyraApi } from '../../../services/api'
import PasswordField from './PasswordField'

type LoginInput = {
  email: string
  password: string
}

const LoginForm = (props: HTMLChakraProps<'form'>) => {
  const [user, setUer] = React.useState({ email: '', password: '' })
  const router = useRouter()

  async function login({ email, password }: LoginInput) {
    try {
      const { data } = await lyraApi({
        method: 'post',
        url: '/auth',
        data: { email, password }
      })

      localStorage.setItem('token', (data as any).token)
      localStorage.setItem('user', JSON.stringify((data as any).user))

      router.push('/home')
    } catch (error) {
      return error
    }
  }

  return (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault()
        login(user)
      }}
      {...props}
    >
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input onChange={(e) => {
            setUer({ ...user, email: e.target.value })
          }} name="email" type="email" autoComplete="email" required />
        </FormControl>
        <PasswordField onChange={(e) => {
          setUer({ ...user, password: e.target.value })
        }} />
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Entrar
        </Button>
      </Stack>
    </chakra.form>
  )
}

export default LoginForm
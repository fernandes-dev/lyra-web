import {
  Box,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import * as React from 'react'
import { Card } from './components/Card'
import { Link } from './components/Link'
import { LoginForm } from './components/LoginForm'

const Login: NextPage = () => {
  return (<Box
    bg={useColorModeValue('gray.50', 'inherit')}
    minH="100vh"
    py="12"
    px={{ base: '4', lg: '8' }}
  >
    <Box maxW="md" mx="auto">
      <Heading textAlign="center" size="xl" fontWeight="extrabold">
        Entrar
      </Heading>
      <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
        <Text as="span">Não possui uma conta?</Text>
        <Link href="#">Cadastre-se gratuitamente</Link>
      </Text>
      <Card>
        <LoginForm />
      </Card>
    </Box>
  </Box>)
}

export default Login
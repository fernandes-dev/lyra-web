import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

type User = {
  name: string
  email: string
}

const Home: NextPage = () => {
  const route = useRouter()
  const [user, setUser] = useState<User | undefined>()

  function logout() {
    localStorage.clear()
    setUser(undefined)

    route.push('/login')
  }

  useEffect(() => {
    const userString = localStorage.getItem('user')
    if (userString) {
      const user = JSON.parse(userString)
      setUser(user)
    }
  }, [])

  return (
    <Heading >
      Olá, {user?.name}
      <Button onClick={logout}>Sair</Button>
    </Heading>
  )
}

export default Home
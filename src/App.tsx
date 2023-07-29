import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Spinner,
  Stack,
} from "@chakra-ui/react"
import React, { ChangeEvent } from "react"

import { Movies } from "./components/Movies"
import { useMovie } from "./hooks/useMovie"
import { useSearch } from "./hooks/useSearch"

const App: React.FC = () => {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovie({ search })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === " ") return
    setSearch(e.target.value)
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    getMovies()
  }
  const handleKeyUpCapture = (e: React.KeyboardEvent) => {
    e.preventDefault()
    if (e.key === "Enter") {
      getMovies()
    }
  }

  return (
    <>
      <Box bg={"teal.500"}>
        <Container maxW={"container.xl"}>
          <Stack
            as="header"
            justifyContent={"center"}
            alignItems={"center"}
            p={2}
            spacing={4}
          >
            <Heading as="h1" textAlign={"center"} color={"white"}>
              Movie Search Engine
            </Heading>
            <Stack
              direction={{ base: "column", md: "row" }}
              align={"center"}
              as="form"
              onSubmit={handleSubmit}
              w="100%"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Input
                w={{ base: "100%", md: "auto" }}
                name="search"
                value={search}
                onChange={handleChange}
                onKeyUpCapture={handleKeyUpCapture}
              />
              <Button type="submit" w={{ base: "100%", md: "auto" }}>
                Search
              </Button>
            </Stack>
            <Box as="p" color={"white"} textAlign={"center"} fontSize={20}>
              {error ? error : null}
            </Box>
          </Stack>
        </Container>
      </Box>
      <Container w="100%" maxW={"container.xl"} py={6}>
        {loading ? (
          <Stack justifyContent={"center"} align={"center"}>
            <Spinner size={"xl"} />
          </Stack>
        ) : (
          <Movies movies={movies} />
        )}
      </Container>
    </>
  )
}

export default App

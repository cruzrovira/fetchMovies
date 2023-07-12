import { Box, Button, Container, Heading, Input, Stack } from "@chakra-ui/react"
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

  return (
    <Container w="100%" maxW={"800px"}>
      <Box as="header" w={{ base: "100%", md: "400px" }} mx={"auto"}>
        <Heading as="h1" textAlign={"center"}>
          Movie Search Engine
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          align={"center"}
          as="form"
          onSubmit={handleSubmit}
        >
          <Input
            w={{ base: "100%", md: "70%" }}
            name="search"
            value={search}
            onChange={handleChange}
          />
          <Button type="submit" w={{ base: "100%", md: "30%" }}>
            Search
          </Button>
        </Stack>
        <Box
          as="p"
          color={"red.500"}
          fontSize={"sm"}
          textAlign={"center"}
          mt={2}
          h={"21px"}
        >
          {error ? error : null}
        </Box>
      </Box>
      {loading ? (
        <Box as="p" textAlign={"center"}>
          Loading...
        </Box>
      ) : (
        <Movies movies={movies} />
      )}
    </Container>
  )
}

export default App

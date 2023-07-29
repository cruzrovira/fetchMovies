import { Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react"
import { movieType } from "../types/movie"

function ListOfMovie({ movies }: { movies: movieType[] }) {
  return (
    <Grid
      as="main"
      templateColumns={"repeat(auto-fit ,minmax(200px ,1fr))"}
      gap={4}
    >
      {movies.map(movie => (
        <GridItem
          key={movie.id}
          textAlign={"center"}
          bg={"white"}
          boxShadow={"sm"}
          p={4}
          _hover={{
            filter: "brightness(0.8)",
          }}
        >
          <Image
            src={movie.poster}
            title={movie.title}
            aspectRatio={"3/4"}
            objectFit={"cover"}
          />
          <Text as="h3" fontWeight={"bold"} isTruncated>
            {movie.title}
          </Text>
          <Text as="p">{movie.year}</Text>
        </GridItem>
      ))}
    </Grid>
  )
}

function NoMovieResult() {
  return (
    <Stack as="p" justifyContent={"center"} alignItems={"center"}>
      <Text fontSize={20}> No se encontraron películas para esta búsqueda</Text>
    </Stack>
  )
}

export function Movies({ movies }: { movies: movieType[] }) {
  const hasMovies = movies?.length > 0
  return hasMovies ? <ListOfMovie movies={movies} /> : <NoMovieResult />
}

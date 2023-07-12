import { Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { movieType } from "../types/movie"

function ListOfMobie({ movies }: { movies: movieType[] }) {
  return (
    <Grid
      as="main"
      templateColumns={"repeat(auto-fit ,minmax(200px ,1fr))"}
      gap={"10px"}
      justifyContent={"center"}
    >
      {movies.map(movie => (
        <GridItem key={movie.id} textAlign={"center"}>
          <Text as="h3">{movie.title}</Text>
          <Text as="p">{movie.year}</Text>
          <Image
            src={movie.poster}
            title={movie.title}
            borderRadius={4}
            w="100%"
          />
        </GridItem>
      ))}
    </Grid>
  )
}

function NoMovieResult() {
  return <Text as="p">No se encontraron peliculas para esta búsqueda</Text>
}

export function Movies({ movies }: { movies: movieType[] }) {
  const hasMovies = movies?.length > 0
  return hasMovies ? <ListOfMobie movies={movies} /> : <NoMovieResult />
}

import { movieType } from "../types/movie"

const API_KEY = "fae2eff0"

export async function searchMovies({ search }: { search: string }) {
  if (search === "") return null
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    )
    const json = await response.json()
    const moviesResult = json?.Search
    const movies: movieType[] = moviesResult?.map(movie => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        type: movie.Type,
        poster: movie.Poster,
      }
    })
    return movies
  } catch (e) {
    throw new Error(" Error searchMovies")
  }
}

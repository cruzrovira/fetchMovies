import { useRef, useState } from "react"
import { searchMovies } from "../services/movies"

export function useMovie({ search }: { search: string }) {
  const [movies, setMovies] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>()
  const previusSearch = useRef(search)

  const getMovies = async () => {
    if (previusSearch.current === search) return

    previusSearch.current = search
    try {
      setLoading(true)
      setError(null)
      setMovies(await searchMovies({ search }))
    } catch (error) {
      setError("Error al buscar películas")
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading, error }
}

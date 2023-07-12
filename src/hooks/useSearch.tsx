import { useEffect, useRef, useState } from "react"

export function useSearch() {
  const [search, setSearch] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ""
      return
    }
    // no se puede buscar una pelicula basia
    if (search === "") {
      setError("No se puede buscar una pelicula basia")
      return
    }
    // no se puede buscar una pelicual con menos de 3 caracteres
    if (search.length < 3) {
      setError("No se puede buscar una pelicula con menos de 3 caracteres")
      return
    }
    // no se puede buscar una pelicula con solo numero
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con solo numero")
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}

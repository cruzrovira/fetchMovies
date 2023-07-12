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
    // no se puede buscar una película vacía
    if (search === "") {
      setError("No se puede buscar una película vacía")
      return
    }
    // no se puede buscar una película con menos de 3 caracteres
    if (search.length < 3) {
      setError("No se puede buscar una película con menos de 3 caracteres")
      return
    }
    // no se puede buscar una película con solo numero
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una película con solo numero")
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}

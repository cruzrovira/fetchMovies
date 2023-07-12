// type withResulType = {
//   Response: string
//   Search: []
//   totalResults: string
// }
// type noResultType = {
//   Response: string
//   Error: string
// }

// type responseMoviesType = withResulType | noResultType

type movieType = {
  id: string
  title: string
  year: string
  type: string
  poster: string
}

export type { movieType }

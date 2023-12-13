import { FC } from 'react'
import { Box } from '@mui/material'
import MovieDetails from '@components/MovieDetails'

interface Movie {
  id: number
  title: string
  overview: string
  release_date: string
  vote_average: number
  vote_count: number
  poster_path: string
  backdrop_path: string
  genre_ids: number[]
  original_language: string
  original_title: string
  popularity: number
  video: boolean
  adult: boolean
}

interface Props {
  movies: Movie[]
}

const MovieList: FC<Props> = ({ movies }) => {
  return (
    <Box>
      {movies.map((movie) => (
        <MovieDetails
          key={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          poster_path={movie.poster_path}
          overview={movie.overview}
          vote_average={movie.vote_average}
        />
      ))}
    </Box>
  )
}

export default MovieList

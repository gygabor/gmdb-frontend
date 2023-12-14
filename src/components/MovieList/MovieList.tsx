import { FC } from 'react'
import { Container, Skeleton } from '@mui/material'
import MovieDetails from '@components/MovieDetails'
import { Movie } from '@src/types'

interface Props {
  movies: Movie[]
  isLoading: boolean
}

const MovieList: FC<Props> = ({ movies, isLoading }) => {
  return (
    <Container>
      {movies.map((movie) =>
        isLoading ? (
          <Skeleton variant="rounded" />
        ) : (
          <MovieDetails
            key={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
            overview={movie.overview}
            vote_average={movie.vote_average}
          />
        ),
      )}
    </Container>
  )
}

export default MovieList

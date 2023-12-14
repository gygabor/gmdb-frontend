import { FC } from 'react'
import { Grid, Skeleton } from '@mui/material'
import MovieDetails from '@components/MovieDetails'
import { Movie } from '@src/types'
import { GridBox } from './styles'

interface Props {
  movies: Movie[]
  isLoading: boolean
}

const MovieList: FC<Props> = ({ movies, isLoading }) => {
  return (
    <GridBox>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            {isLoading ? (
              <Skeleton variant="rounded" height={250} animation="wave" />
            ) : (
              <MovieDetails
                title={movie.title}
                release_date={movie.release_date}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </GridBox>
  )
}

export default MovieList

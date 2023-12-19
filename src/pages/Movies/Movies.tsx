import { FC } from 'react'
import { Container } from '@mui/material'
import MovieList from '@components/MovieList'
import Paginatior from '@components/Paginator'
import useMovies from './useMovies'
import SearchBar from '@components/SearchBar'

const Movies: FC = () => {
  const {
    setSearchValue,
    submit,
    handlePaginatorChange,
    source,
    movies,
    totalPages,
    isLoading,
    error,
    isButtonDisabled,
  } = useMovies()

  return (
    <Container>
      <SearchBar
        setSearchValue={setSearchValue}
        submit={submit}
        source={source}
        isLoading={isLoading}
        error={error}
        isButtonDisabled={isButtonDisabled}
      />
      <MovieList movies={movies} isLoading={isLoading} />
      {totalPages > 1 && (
        <Paginatior onChange={handlePaginatorChange} totalPages={totalPages} />
      )}
    </Container>
  )
}

export default Movies

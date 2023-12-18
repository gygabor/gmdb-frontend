import { FC } from 'react'
import { Container } from '@mui/material'
import MovieList from '@components/MovieList'
import Paginatior from '@src/components/Paginator'
import useMovies from './useMovies'
import SearchBar from '@src/components/SearchBar'

const Movies: FC = () => {
  const {
    setSearchValue,
    submit,
    handlePaginatorChange,
    isInputError,
    source,
    movies,
    totalPages,
    isPaginatorVisible,
    isLoading,
    error,
  } = useMovies()

  return (
    <Container>
      <SearchBar
        setSearchValue={setSearchValue}
        submit={submit}
        isInputError={isInputError}
        source={source}
        isLoading={isLoading}
        error={error}
      />
      <MovieList movies={movies} isLoading={isLoading} />
      {isPaginatorVisible && (
        <Paginatior onChange={handlePaginatorChange} totalPages={totalPages} />
      )}
    </Container>
  )
}

export default Movies

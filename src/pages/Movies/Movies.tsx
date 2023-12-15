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
    inputError,
    source,
    movies,
    totalPages,
    isPaginatorVisible,
    isLoading,
  } = useMovies()

  return (
    <Container>
      <SearchBar
        setSearchValue={setSearchValue}
        submit={submit}
        error={inputError}
        source={source}
        isLoading={isLoading}
      />
      <MovieList movies={movies} isLoading={isLoading} />
      {isPaginatorVisible && (
        <Paginatior onChange={handlePaginatorChange} totalPages={totalPages} />
      )}
    </Container>
  )
}

export default Movies

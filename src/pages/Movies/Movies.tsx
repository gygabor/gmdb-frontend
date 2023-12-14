import { FC, Suspense } from 'react'
import { Container } from '@mui/material'
import MovieList from '@components/MovieList'
import Search from '@src/components/Search'
import Paginatior from '@src/components/Paginator'
import useMovies from './useMovies'

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
      <Search
        setSearchValue={setSearchValue}
        onClick={submit}
        error={inputError}
      />
      <MovieList movies={movies} isLoading={isLoading} />
      {isPaginatorVisible && (
        <Paginatior onChange={handlePaginatorChange} totalPages={totalPages} />
      )}
    </Container>
  )
}

export default Movies

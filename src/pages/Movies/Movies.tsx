import { FC } from 'react'
import { Container } from '@mui/material'
import MovieList from '@components/MovieList'
import { mockedList } from './mockedList'
import Search from '@src/components/Search'
import Paginatior from '@src/components/Paginator'
import useMovies from './useMovies'

const Movies: FC = () => {
  const { setSearchValue, submit, handlePaginatorChange, inputError } =
    useMovies()

  return (
    <Container>
      <Search
        setSearchValue={setSearchValue}
        onClick={submit}
        error={inputError}
      />
      <MovieList movies={mockedList} />
      <Paginatior onChange={handlePaginatorChange} />
    </Container>
  )
}

export default Movies

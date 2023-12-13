import { FC } from 'react'
import { Container } from '@mui/material'
import MovieList from '@components/MovieList'
import { mockedList } from './mockedList'
import Search from '@src/components/Search'
import Paginatior from '@src/components/Paginator'
import useMovies from './useMovies'

const Movies: FC = () => {
  const { handleChange, handleSearch, handlePaginatorChange } = useMovies()

  return (
    <Container>
      <Search handleChange={handleChange} onClick={handleSearch} />
      <MovieList movies={mockedList} />
      <Paginatior onChange={handlePaginatorChange} />
    </Container>
  )
}

export default Movies

import { FC } from 'react'
import { Container } from '@mui/material'
import MovieList from '@components/MovieList'
import { mockedList } from './mockedList'
import Search from '@src/components/Search'
import Paginatior from '@src/components/Paginator'

const Movies: FC = () => {
  const handleChange = (value: string) => {
    console.log(value)
  }

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target)
  }

  const handlePaginatorChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    console.log(page)
  }

  return (
    <Container>
      <Search handleChange={handleChange} onClick={handleSearch} />
      <MovieList movies={mockedList} />
      <Paginatior onChange={handlePaginatorChange} />
    </Container>
  )
}

export default Movies

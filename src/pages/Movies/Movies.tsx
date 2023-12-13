import { FC } from 'react'
import { Container, Box } from '@mui/material'
import SearchInput from '@components/SearchInput'
import MovieList from '@components/MovieList'
import { mockedList } from './mockedList'

const Movies: FC = () => {
  const handleChange = (value: string) => {
    console.log(value)
  }

  return (
    <Container>
      <Box>
        <SearchInput handleChange={handleChange} />
      </Box>
      <Container>
        <MovieList movies={mockedList} />
      </Container>
    </Container>
  )
}

export default Movies

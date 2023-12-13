import { FC } from 'react'
import { Container } from '@mui/material'
import SearchInput from '@src/components/SearchInput'

const Movies: FC = () => {
  const handleChange = (value: string) => {
    console.log(value)
  }

  return (
    <Container>
      <SearchInput handleChange={handleChange} />
    </Container>
  )
}

export default Movies

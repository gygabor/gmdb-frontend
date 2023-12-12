import { FC } from 'react'
import { Container } from '@mui/material'
import SearchInput from '@src/components/SearchInput'

const Movies: FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <Container>
      <SearchInput handleChange={handleChange} />
    </Container>
  )
}

export default Movies

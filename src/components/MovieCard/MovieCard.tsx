import { FC } from 'react'
import { Box } from '@mui/material'

interface Props {
  title: string
  release_date: string
  poster_path: string
  overview: string
  vote_average: number
}

const MovieCard: FC<Props> = ({
  title,
  release_date,
  poster_path,
  overview,
  vote_average,
}) => {
  return (
    <Box>
      <Box>{title}</Box>
      <Box>{release_date}</Box>
      <Box>{poster_path}</Box>
      <Box>{overview}</Box>
      <Box>{vote_average}</Box>
    </Box>
  )
}

export default MovieCard

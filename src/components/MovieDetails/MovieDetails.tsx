import { FC } from 'react'
import {
  Box,
  Card,
  CardMedia,
  CardHeader,
  Rating,
  CardContent,
  Typography,
} from '@mui/material'
import { TMDB_POSTER_BASE_URL } from '@src/constants/links'
import { ContentBox } from './styles'

interface Props {
  title: string
  release_date: string
  poster_path: string
  vote_average: number
}

const MovieDetails: FC<Props> = ({
  title,
  release_date,
  poster_path,
  vote_average,
}) => {
  return (
    <Card variant="outlined">
      <CardHeader
        title={title}
        titleTypographyProps={{
          variant: 'subtitle1',
          sx: { fontWeight: '500' },
        }}
      />

      <CardMedia
        component="img"
        height="250"
        image={`${TMDB_POSTER_BASE_URL}${poster_path}`}
        src="image"
        alt={title}
      />
      <CardContent>
        <ContentBox>
          <Typography variant="subtitle2" gutterBottom>
            Release Year: {new Date(release_date).getFullYear()}
          </Typography>
          <Rating name="read-only" value={vote_average} readOnly size="small" />
        </ContentBox>
      </CardContent>
    </Card>
  )
}

export default MovieDetails

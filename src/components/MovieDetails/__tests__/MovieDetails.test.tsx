import { render } from '@testing-library/react'
import MovieDetails from '../MovieDetails'

const mockedProps = {
  title: 'Movie Title',
  release_date: '2021-01-01',
  poster_path: 'https://image.tmdb.org/t/p/w500/abc.jpg',
  vote_average: 7.5,
}

describe('MovieDetails', () => {
  it('renders  movie details', () => {
    const { getByRole, getByText } = render(<MovieDetails {...mockedProps} />)

    expect(getByRole('img', { name: 'Movie Title' })).toBeInTheDocument()
    expect(getByRole('img', { name: '8 Stars' })).toBeInTheDocument()
    expect(
      getByRole('heading', { name: 'Release Year: 2021' }),
    ).toBeInTheDocument()
    expect(getByText('Movie Title')).toBeInTheDocument()
  })
})

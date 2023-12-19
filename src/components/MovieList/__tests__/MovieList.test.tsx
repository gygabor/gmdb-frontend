import { render } from '@testing-library/react'
import MovieList from '../MovieList'

const mockedProps = {
  movies: [
    {
      id: 1,
      title: 'test',
      poster_path: '/path',
      overview: 'overview',
      release_date: '2021-01-01',
      vote_average: 3.5,
      vote_count: 100,
      backdrop_path: '/path/backdrop',
      genre_ids: [1, 2, 3],
      original_language: 'en',
      original_title: 'test',
      popularity: 100,
      video: false,
      adult: false,
    },
    {
      id: 2,
      title: 'test2',
      poster_path: '/path',
      overview: 'overview',
      release_date: '2002-01-01',
      vote_average: 3.5,
      vote_count: 100,
      backdrop_path: '/path/backdrop',
      genre_ids: [1, 2, 3],
      original_language: 'en',
      original_title: 'test',
      popularity: 100,
      video: false,
      adult: false,
    },
  ],
  isLoading: false,
}

describe('MovieList', () => {
  it('renders list of movie details', () => {
    const { getAllByRole, getByRole } = render(<MovieList {...mockedProps} />)

    expect(getAllByRole('heading')).toHaveLength(2)
    expect(
      getByRole('heading', { name: 'Release Year: 2021' }),
    ).toBeInTheDocument()
  })
})

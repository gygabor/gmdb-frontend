import { render } from '@testing-library/react'
import Movies from '../Movies'
import useMovies from '../useMovies'

const mockeduseMovies = useMovies as jest.MockedFunction<typeof useMovies>

const mockedHookValues = {
  setSearchValue: jest.fn(),
  submit: jest.fn(),
  handlePaginatorChange: jest.fn(),
  source: null,
  movies: [],
  totalPages: 0,
  isLoading: false,
  error: null,
  isButtonDisabled: true,
}

const mockedMovies = [
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
]

jest.mock('../useMovies', () => jest.fn(() => mockedHookValues))

describe('Movies', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the a disabled Button', () => {
    const { getByText } = render(<Movies />)

    expect(getByText('Search')).toBeInTheDocument()
    expect(getByText('Search')).toBeDisabled()
  })

  it('renders the a enabled Button', () => {
    mockeduseMovies.mockReturnValue({
      ...mockedHookValues,
      isButtonDisabled: false,
    })

    mockeduseMovies

    const { getByText } = render(<Movies />)

    expect(getByText('Search')).not.toBeDisabled()
  })

  it('renders the textbox', () => {
    const { getByRole, getByPlaceholderText } = render(<Movies />)

    expect(getByRole('textbox')).toBeInTheDocument()
    expect(
      getByPlaceholderText('Search for a movie by title...'),
    ).toBeInTheDocument()
  })

  it('renders progressbar during loading', () => {
    mockeduseMovies.mockReturnValue({
      ...mockedHookValues,
      isLoading: true,
    })

    const { getByRole } = render(<Movies />)
    expect(getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders pagination', () => {
    mockeduseMovies.mockReturnValue({
      ...mockedHookValues,
      totalPages: 2,
    })

    const { getByRole } = render(<Movies />)
    expect(
      getByRole('navigation', { name: 'pagination navigation' }),
    ).toBeInTheDocument()
  })

  it('renders MovieDetails', () => {
    mockeduseMovies.mockReturnValue({
      ...mockedHookValues,
      movies: mockedMovies,
    })

    const { getByRole } = render(<Movies />)
    expect(getByRole('img', { name: 'test' })).toBeInTheDocument()
  })

  it('renders SourceIndicator', () => {
    mockeduseMovies.mockReturnValue({
      ...mockedHookValues,
      source: 'tmdb',
    })

    const { getByText } = render(<Movies />)
    expect(getByText('T')).toBeInTheDocument()
  })

  it('renders error', () => {
    const errorMessage = 'test error'

    mockeduseMovies.mockReturnValue({
      ...mockedHookValues,
      error: new Error(errorMessage),
    })

    const { getByText } = render(<Movies />)
    expect(getByText(errorMessage)).toBeInTheDocument()
    expect(getByText('E')).toBeInTheDocument()
  })
})

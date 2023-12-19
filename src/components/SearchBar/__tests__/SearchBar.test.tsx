import { render, fireEvent, screen } from '@testing-library/react'
import SearchBar from '../SearchBar'

const mockedProps = {
  setSearchValue: jest.fn(),
  submit: jest.fn(),
  source: null,
  isLoading: false,
  error: null,
  isButtonDisabled: true,
}

describe('SearchBar', () => {
  it('renders the a disabled Button', () => {
    const { getByText } = render(<SearchBar {...mockedProps} />)

    expect(getByText('Search')).toBeInTheDocument()
    expect(getByText('Search')).toBeDisabled()
    fireEvent.click(screen.getByText('Search'))
    expect(mockedProps.submit).not.toHaveBeenCalled()
  })

  it('renders testbox', () => {
    const { getByRole, getByPlaceholderText } = render(
      <SearchBar {...mockedProps} />,
    )

    expect(getByRole('textbox')).toBeInTheDocument()
    expect(
      getByPlaceholderText('Search for a movie by title...'),
    ).toBeInTheDocument()
  })

  it('renders enabled Button', () => {
    const { getByText } = render(
      <SearchBar {...mockedProps} isButtonDisabled={false} />,
    )

    expect(getByText('Search')).not.toBeDisabled()
    fireEvent.click(screen.getByText('Search'))
    expect(mockedProps.submit).toHaveBeenCalledTimes(1)
  })

  it('renders SourceIndicator', () => {
    const { getByText } = render(<SearchBar {...mockedProps} source="tmdb" />)

    expect(getByText('T')).toBeInTheDocument()
  })

  it('renders error', () => {
    const errorMessage = 'test error'

    const { getByText } = render(
      <SearchBar {...mockedProps} error={new Error(errorMessage)} />,
    )

    expect(getByText(errorMessage)).toBeInTheDocument()
    expect(getByText('E')).toBeInTheDocument()
  })
})

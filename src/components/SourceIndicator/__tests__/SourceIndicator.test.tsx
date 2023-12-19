import { render } from '@testing-library/react'
import SourceIndicator from '../SourceIndicator'

const mockedProps = {
  isLoading: false,
  error: null,
  source: null,
}

describe('SourceIndicator', () => {
  it('renders the indicator', () => {
    const { getByText } = render(
      <SourceIndicator {...mockedProps} source="tmdb" />,
    )

    expect(getByText('T')).toBeInTheDocument()
  })

  it('renders error', () => {
    const errorMessage = 'test error'

    const { getByText } = render(
      <SourceIndicator {...mockedProps} error={new Error(errorMessage)} />,
    )

    expect(getByText(errorMessage)).toBeInTheDocument()
    expect(getByText('E')).toBeInTheDocument()
  })

  it('renders progressbar', () => {
    const { getByRole } = render(
      <SourceIndicator {...mockedProps} isLoading={true} />,
    )

    expect(getByRole('progressbar')).toBeInTheDocument()
  })
})

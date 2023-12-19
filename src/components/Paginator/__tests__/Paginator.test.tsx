import { render, fireEvent } from '@testing-library/react'
import Paginator from '../Paginator'

const mockedProps = {
  onChange: jest.fn(),
  totalPages: 10,
}

describe('Paginator', () => {
  it('renders pagination', () => {
    const { getByRole } = render(<Paginator {...mockedProps} />)

    expect(
      getByRole('navigation', { name: 'pagination navigation' }),
    ).toBeInTheDocument()
  })

  it('handles clicks', () => {
    const { getByRole } = render(<Paginator {...mockedProps} />)

    fireEvent.click(getByRole('button', { name: 'Go to next page' }))
    expect(mockedProps.onChange).toHaveBeenCalled()
  })
})

import { render, fireEvent } from '@testing-library/react'
import SearchInput from '../SearchInput'

const mockedProps = {
  setSearchValue: jest.fn(),
  submit: jest.fn(),
}

describe('SearchInput', () => {
  it('renders the textbox', () => {
    const { getByRole, getByPlaceholderText } = render(
      <SearchInput {...mockedProps} />,
    )

    expect(getByRole('textbox')).toBeInTheDocument()
    expect(
      getByPlaceholderText('Search for a movie by title...'),
    ).toBeInTheDocument()
  })

  it('handle input changes', () => {
    const value = 'godfather'

    const { getByRole } = render(<SearchInput {...mockedProps} />)

    fireEvent.change(getByRole('textbox'), { target: { value } })
    expect(mockedProps.setSearchValue).toHaveBeenCalledWith(value)
  })

  it('handle keyup, calls submit', () => {
    const value = 'godfather'

    const { getByRole } = render(<SearchInput {...mockedProps} />)

    fireEvent.change(getByRole('textbox'), { target: { value } })
    fireEvent.keyUp(getByRole('textbox'), { key: 'Enter', code: 'Enter' })
    expect(mockedProps.submit).toHaveBeenCalled()
  })

  it('clears input', () => {
    const value = 'godfather'

    const { getByRole, getByTestId } = render(<SearchInput {...mockedProps} />)

    fireEvent.change(getByRole('textbox'), { target: { value } })
    fireEvent.click(getByTestId('ClearIcon'))
    expect(mockedProps.setSearchValue).toHaveBeenCalledWith('')
  })
})

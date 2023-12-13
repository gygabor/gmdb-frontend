import { useEffect, useState } from 'react'

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  submit: () => void
  handlePaginatorChange: (event: React.ChangeEvent<unknown>, p: number) => void
  inputError: boolean
}

const useMovies = (): Props => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [page, setPage] = useState<string>('1')
  const [inputError, setInputError] = useState<boolean>(false)

  useEffect(() => {
    console.log('searchValue', searchValue)
  }, [searchValue])

  const submit = () => {
    console.log('submit', searchValue.length, inputError)
    if (searchValue.length <= 3) {
      setInputError(true)
      console.log('error', inputError)
    } else {
      setInputError(false)
    }
  }

  const handlePaginatorChange = (
    event: React.ChangeEvent<unknown>,
    p: number,
  ) => {
    setPage(p.toString())
    console.log(page)
  }

  return {
    setSearchValue,
    submit,
    handlePaginatorChange,
    inputError,
  }
}

export default useMovies

import { GMDB_MOVIES_SEARCH } from '@src/constants/links'
import axiosClient from '@src/services/axiosClient'
import { useCallback, useEffect, useState } from 'react'

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  submit: () => void
  handlePaginatorChange: (event: React.ChangeEvent<unknown>, p: number) => void
  inputError: boolean
}

const useMovies = (): Props => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [inputError, setInputError] = useState<boolean>(false)
  const [isFetch, setIsFetch] = useState<boolean>(false)
  const [response, setResponse] = useState<JSON | null>(null)

  const fetchMovies = useCallback(async () => {
    try {
      const res = await axiosClient.get(
        `${GMDB_MOVIES_SEARCH}?query=${searchValue}&page=${page}`,
      )
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }, [searchValue, page])

  useEffect(() => {
    console.log('isFetch', isFetch)
    if (isFetch) {
      fetchMovies()
      setIsFetch(false)
    }
  }, [isFetch])

  const submit = () => {
    if (searchValue.length <= 3) {
      setIsFetch(false)
      setInputError(true)
    } else {
      setInputError(false)
      setIsFetch(true)
    }
  }

  const handlePaginatorChange = (
    event: React.ChangeEvent<unknown>,
    p: number,
  ) => {
    setPage(p)
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

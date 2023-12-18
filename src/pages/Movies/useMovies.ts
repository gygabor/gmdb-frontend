import { GMDB_MOVIES_SEARCH } from '@src/constants/links'
import axiosClient from '@src/services/axiosClient'
import { Movie } from '@src/types'
import { useCallback, useEffect, useState } from 'react'

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  submit: () => void
  handlePaginatorChange: (event: React.ChangeEvent<unknown>, p: number) => void
  isInputError: boolean
  source: 'tmdb' | 'cache' | null
  movies: Movie[]
  totalPages: number
  isPaginatorVisible: boolean
  isLoading: boolean
  error: Error | null
}

const useMovies = (): Props => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [isInputError, setIsInputError] = useState<boolean>(false)
  const [movies, setMovies] = useState<Movie[]>([])
  const [totalPages, setTotalPages] = useState<number>(1)
  const [source, setSource] = useState<'tmdb' | 'cache' | null>(null)
  const [isPaginatorVisible, setIsPaginatorVisible] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true)
      const res = await axiosClient.get(
        `${GMDB_MOVIES_SEARCH}?query=${searchValue}&page=${page}`,
      )

      setMovies(res.data.results)
      setTotalPages(res.data.total_pages)
      setSource(res.data.source)
      setIsLoading(false)
    } catch (err) {
      if (err instanceof Error) {
        setIsLoading(false)
        setError(err)
      } else {
        setError(new Error('An unknown error occurred'))
      }
    }
  }, [searchValue, page])

  useEffect(() => {
    if (totalPages === 1) {
      setIsPaginatorVisible(false)
    } else {
      setIsPaginatorVisible(true)
    }
  }, [totalPages])

  useEffect(() => {
    if (searchValue) {
      fetchMovies()
    }
  }, [page])

  useEffect(() => {
    if (!searchValue) {
      setMovies([])
      setTotalPages(1)
      setSource(null)
      setError(null)
    }
  }, [searchValue])

  const submit = async () => {
    setError(null)
    if (searchValue.length <= 3) {
      setIsInputError(true)
    } else {
      await fetchMovies()
      setIsInputError(false)
    }
  }

  const handlePaginatorChange = async (
    _: React.ChangeEvent<unknown>,
    p: number,
  ) => {
    setPage(p)
  }

  return {
    setSearchValue,
    submit,
    handlePaginatorChange,
    isInputError,
    source,
    movies,
    totalPages,
    isPaginatorVisible,
    isLoading,
    error,
  }
}

export default useMovies

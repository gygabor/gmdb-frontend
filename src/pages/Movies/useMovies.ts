import { GMDB_MOVIES_SEARCH } from '@src/constants/links'
import axiosClient from '@src/services/axiosClient'
import { Movie } from '@src/types'
import { useCallback, useEffect, useState } from 'react'

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  submit: () => void
  handlePaginatorChange: (event: React.ChangeEvent<unknown>, p: number) => void
  source: 'tmdb' | 'cache' | null
  movies: Movie[]
  totalPages: number
  isLoading: boolean
  error: Error | null
  isButtonDisabled: boolean
}

const useMovies = (): Props => {
  const textLength = 3
  const [searchValue, setSearchValue] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [movies, setMovies] = useState<Movie[]>([])
  const [totalPages, setTotalPages] = useState<number>(1)
  const [source, setSource] = useState<'tmdb' | 'cache' | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)

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

    if (searchValue.length >= textLength) {
      setIsButtonDisabled(false)
    } else {
      setIsButtonDisabled(true)
    }
  }, [searchValue])

  const submit = async () => {
    setError(null)
    await fetchMovies()
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
    source,
    movies,
    totalPages,
    isLoading,
    error,
    isButtonDisabled,
  }
}

export default useMovies

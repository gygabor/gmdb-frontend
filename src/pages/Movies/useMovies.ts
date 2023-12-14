import { GMDB_MOVIES_SEARCH } from '@src/constants/links'
import axiosClient from '@src/services/axiosClient'
import { Movie } from '@src/types'
import { useCallback, useEffect, useState } from 'react'

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  submit: () => void
  handlePaginatorChange: (event: React.ChangeEvent<unknown>, p: number) => void
  inputError: boolean
  source: 'TMDB' | 'Cache' | null
  movies: Movie[]
  totalPages: number
  isPaginatorVisible: boolean
  isLoading: boolean
}

const useMovies = (): Props => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [inputError, setInputError] = useState<boolean>(false)
  const [movies, setMovies] = useState<Movie[]>([])
  const [totalPages, setTotalPages] = useState<number>(1)
  const [source, setSource] = useState<'TMDB' | 'Cache' | null>(null)
  const [isPaginatorVisible, setIsPaginatorVisible] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
      console.log(err)
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
    fetchMovies()
  }, [page])

  useEffect(() => {
    if (!searchValue) {
      setMovies([])
      setTotalPages(1)
    }
  }, [searchValue])

  const submit = async () => {
    if (searchValue.length <= 3) {
      setInputError(true)
    } else {
      await fetchMovies()
      setInputError(false)
    }
  }

  const handlePaginatorChange = async (
    event: React.ChangeEvent<unknown>,
    p: number,
  ) => {
    setPage(p)
  }

  return {
    setSearchValue,
    submit,
    handlePaginatorChange,
    inputError,
    source,
    movies,
    totalPages,
    isPaginatorVisible,
    isLoading,
  }
}

export default useMovies

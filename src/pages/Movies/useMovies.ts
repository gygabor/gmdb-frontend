import { useEffect } from 'react'

type Props = {
  handleChange: (value: string) => void
  handleSearch: (event: React.MouseEvent<HTMLButtonElement>) => void
  handlePaginatorChange: (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => void
}

const useMovies = (): Props => {
  const handleChange = (value: string) => {
    console.log(value)
  }

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target)
  }

  const handlePaginatorChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    console.log(page)
  }

  return {
    handleChange,
    handleSearch,
    handlePaginatorChange,
  }
}

export default useMovies

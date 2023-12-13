import { useEffect, useState } from 'react'
import axios from 'axios'

interface Response {
  response: JSON | null
  isLoading: boolean
  error: Error | null
}

const useFetch = (url: string): Response => {
  const [response, setResponse] = useState<JSON | null>(null)
  const [isLoading, setLoadingState] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoadingState(true)
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => setResponse(response.data))
      .catch((err) => {
        setError(err)
      })
      .finally(() => setLoadingState(false))
  }, [url])

  return { response, isLoading, error }
}

export default useFetch

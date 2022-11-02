import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const useAxios = (url, parameter) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      setIsPending(false)
      try {
        const result = await axios.get(url, parameter)
        setData(result.data)
        setIsPending(true)
        setError(null)
      } catch (err) {
        setIsPending(true)
        setError(err.message)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, isPending, error }
}

export default useAxios

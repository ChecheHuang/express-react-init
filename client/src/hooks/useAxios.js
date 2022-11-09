import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const useAxios = (url, parameter) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      const cancelToken = axios.CancelToken.source()
      setIsPending(false)
      try {
        const result = await axios.post(url, parameter, {
          cancelToken: cancelToken.token,
        })
        setData(result.data)
        setIsPending(true)
        setError(null)
      } catch (err) {
        if (axios.isCanncel(err)) {
          console.log('canceled!')
        } else {
          setIsPending(true)
          setError(err.message)
        }
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, isPending, error }
}

export default useAxios

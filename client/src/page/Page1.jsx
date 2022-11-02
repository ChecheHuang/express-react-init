import React from 'react'
import { useEffect } from 'react'
//todo 使用redux
import { useDispatch, useSelector } from 'react-redux'
import { updateTitle } from '../redux/apiCalls'
import { fakePostApi, fakeGetApi } from '../utils/APIRoutes'
//todo 使用custom hook
import useAxios from '../hooks/useAxios'

function Page1() {
  //todo 使用custom hook
  const { data, isPending, Error } = useAxios(fakeGetApi)
  useEffect(() => {
    console.log('data', data)
    console.log('isPending', isPending)
    console.log('Error', Error)
    console.count('custom hook console end')
  }, [data, isPending, Error])

  const { titleName, pending, error } = useSelector((state) => state.title)
  const dispatch = useDispatch()

  //todo 顯示redux
  useEffect(() => {
    console.log('titleName', titleName)
    console.log('pending', pending)
    console.log('error', error)
    console.count('redux console end')
  }, [titleName, pending, error])
  return (
    <button
      //todo 使用redux改變狀態
      onClick={() => {
        updateTitle(fakePostApi, { title: 'foo' }, dispatch)
      }}
    >
      Page1
    </button>
  )
}

export default Page1

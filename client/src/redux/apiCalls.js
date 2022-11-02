import { updateStart, updateSuccess, updateError } from './titleSlice'
import axios from 'axios'
export const updateTitle = async (url, data, dispatch) => {
  dispatch(updateStart())
  try {
    const res = await axios.post(url, data)
    dispatch(updateSuccess(res.data.title))
  } catch (err) {
    dispatch(updateError())
  }
}

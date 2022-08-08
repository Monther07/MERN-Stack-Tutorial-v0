import { feelingContext } from '../context/feelingContext'
import { useContext } from 'react'

export const useFeelingContext = () => {
  const context = useContext(feelingContext)

  if (!context) {
    throw Error(
      'useFeelingContext must be used inside an FeelingContextProvider',
    )
  }

  return context
}

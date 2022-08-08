import { React, useEffect } from 'react'
import { useFeelingContext } from '../hooks/useFeelingContext'
import FeelingDetiles from '../components/FeelingDetiles'
import FeelingFourm from '../components/FeelingFourm'

const Home = () => {
  const { feelings, dispatch } = useFeelingContext()

  useEffect(() => {
    const fetchFeelings = async () => {
      const response = await fetch('/api/feelings')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_FEELINGS', payload: json })
      }
    }

    fetchFeelings()
  }, [dispatch])

  return (
    <div className="home">
      <div className="feeling">
        {feelings &&
          feelings.map((feeling) => (
            <FeelingDetiles feeling={feeling} key={feeling._id} />
          ))}
      </div>
      <FeelingFourm />
    </div>
  )
}

export default Home

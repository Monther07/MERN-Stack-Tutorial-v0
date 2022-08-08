import { React, useEffect, useState } from 'react'
import FeelingDetiles from '../components/FeelingDetiles'
import FeelingFourm from '../components/FeelingFourm'

const Home = () => {
  const [feelings, setFeelings] = useState(null)

  useEffect(() => {
    const fetchFeelings = async () => {
      const response = await fetch('/api/feelings')
      const json = await response.json()

      if (response.ok) {
        setFeelings(json)
      }
    }

    fetchFeelings()
  }, [])

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

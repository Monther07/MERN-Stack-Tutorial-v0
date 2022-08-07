import { React, useEffect, useState } from 'react'
import FeelingDetiles from '../components/FeelingDetiles'

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
      <div className="feelings">
        {feelings &&
          feelings.map((feeling) => (
            <FeelingDetails feeling={feeling} key={feeling._id} />
          ))}
      </div>
    </div>
  )
}

export default Home

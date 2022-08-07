import { useState, useEffect } from 'react'

const Home = () => {
  const { feelings, setFeelings } = useState(null)

  useEffect(() => {
    const fetchFeelings = async () => {
      const response = await fetch('/api/feelings')
      const json = await response.json()

      if (response.ok) {
        setFeelings(json)
      }

      fetchFeelings()
    }
  }, [])

  return (
    <div className="home">
      <div className="feelings">
        {feelings &&
          feelings.map((feelings) => <p key={feelings._id}>{feelings.feel}</p>)}
      </div>
    </div>
  )
}

export default Home

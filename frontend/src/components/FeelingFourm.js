import { React, useState } from 'react'
import { useFeelingContext } from '../hooks/useFeelingContext'

const FeelingFourm = () => {
  const [dispatch] = useFeelingContext()
  const [feel, setFeel] = useState('')
  const [period, setPeriod] = useState('')
  const [rank, setRank] = useState('')
  const [error, setError] = useState('')

  const handulSubmit = async (e) => {
    e.preventDefault()
    const feeling = { feel, period, rank }

    const response = await fetch('/api/feelings', {
      method: 'POST',
      body: JSON.stringify(feeling),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setFeel('')
      setPeriod('')
      setRank('')
      setError(null)
      console.log('new feelings added', json)
      dispatch({ type: 'CREATE_FEELING', payload: json })
    }
  }

  return (
    <form className="create" onSubmit={handulSubmit}>
      <h3> Add a New Feeling</h3>
      <label> Feeling Name </label>
      <input
        type="text"
        onChange={(e) => setFeel(e.target.value)}
        value={feel}
      />

      <label> Period Name </label>
      <input
        type="text"
        onChange={(e) => setPeriod(e.target.value)}
        value={period}
      />

      <label> Rank number </label>
      <input
        type="number"
        onChange={(e) => setRank(e.target.value)}
        value={rank}
      />
      <button> Add</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default FeelingFourm

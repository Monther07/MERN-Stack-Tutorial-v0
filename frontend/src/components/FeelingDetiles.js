import React from 'react'
const FeelingDetiles = ({ feeling }) => {
  return (
    <div className="feelings-details">
      <h4>{feeling.feel}</h4>
      <p>
        <strong>period: </strong>
        {feeling.period}
      </p>
      <p>
        <strong>Number of Rank: </strong>
        {feeling.rank}
      </p>
      <p>{feeling.createdAt}</p>
    </div>
  )
}

export default FeelingDetiles

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>

)

const Header = () => {
  return (
    <div>
      <p>
        <font size="5">
          <b>
            Give feedback
          </b>
        </font>
      </p>
    </div>
  )

}

const Statistic = ({ text, value }) => {
  if (text === "positive") {
    return ( // I feel that there is a better way to do this but I could not find it
      <thead>
        <tr>
          <td>{text}</td>
          <td>{value}%</td>
        </tr>
      </thead>
    )
  }
  return (
    <thead>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </thead>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const allFeedback = good + neutral + bad
  const averageFeedback = (good - bad) / allFeedback
  const positiveFeedback = good / allFeedback
  if (allFeedback === 0) {
    return (
      <div><font size="5"><p><b>Statistics</b></p></font>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div><font size="5"><p><b>Statistics</b></p></font>
      <table>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={allFeedback} allFeedback />
        <Statistic text="average" value={averageFeedback} />
        <Statistic text="positive" value={positiveFeedback} />
      </table>
    </div>
  )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutal" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
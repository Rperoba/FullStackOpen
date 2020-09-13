import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => (
  <div><p>
    <b>
      <font size="6">
        {text}
      </font>
    </b>
  </p>
  </div>
)

const Button = ({ onClick, text }) => (

  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  //console.log(points)

  const copy = [...points]

  const generateRandomNumber = (min, max) => (
    Math.floor(Math.random() * (max - min) + min)
  )

  const addVote = (position) => {
    copy[position] += 1
    setPoints(copy)
  }

  const selectMostVoted = () => {
    let mostVotedPosition = 0
    let mostPoints = 0
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] > mostPoints) {
        mostVotedPosition = i
        mostPoints = copy[i]
      }
    }
    return (
      mostVotedPosition
    )
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      {props.anecdotes[selected]}<br></br>
      has {points[selected]} votes<br></br>
      <Button onClick={() => addVote(selected)} text="vote" />
      <Button onClick={() => setSelected(generateRandomNumber(1, copy.length))} text="next anecdote" />
      <Header text="Anecdote with most votes" />
      {props.anecdotes[selectMostVoted()]}<br></br>
      has {points[selectMostVoted()]} votes<br></br>
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
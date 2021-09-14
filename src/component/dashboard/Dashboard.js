import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

const Dashboard = () => {
  const [error, setError] = useState()
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  const handelLogout = async () => {
    setError('')
    try {
      await logout()
      history.push('/')
    } catch {
      setError('Failed to log out')
    }
  }

  const xScore = localStorage.getItem('xScores')
  const oScore = localStorage.getItem('oScore')
  const draws = localStorage.getItem('draw')
  const resetHandler = () => {
    localStorage.clear()
  }

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">DashBoard</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Welcome: </strong>
        {currentUser.email}
        <br />
        <Link to="/update-profile" className="btn btn-primary w-50 mt-3">
          Update Profile
        </Link>
        <br />
        <Link to="/game" className="btn btn-primary w-50 mt-3">
          Play Tic Tac Toe
        </Link>
        <br />
        <div className="btn btn-success w-20 mt-3">X wins: {xScore}</div>
        <br />
        <div className="btn btn-warning w-20 mt-3">Draws: {draws}</div>
        <br />
        <div className="btn btn-danger w-20 mt-3">O Wins: {oScore}</div>
        <br />
        <Link
          to="/game"
          className="btn btn-primary w-20 mt-3"
          onClick={resetHandler}
        >
          Reset Scores
        </Link>
        <br />
        <Button variant="link" onClick={handelLogout}>
          Log Out
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Dashboard

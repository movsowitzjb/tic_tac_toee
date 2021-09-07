import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
const Dashboard = () => {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handelLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  };
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">DashBoard</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Welcome: </strong>
        {currentUser.email}
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link>
        <Link to="/game" className="btn btn-primary w-100 mt-3">
          Play Tic Tac Toe
        </Link>
        <Button variant="link" onClick={handelLogout}>
          Log Out
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Dashboard;

import React from "react";
import { Form } from "react-bootstrap";

export const UpdateProfile = () => {
  return (
    <div>
      <Form>
        <Form.Group id="email">
          <Form.Control type="email" />
          <Form.Label>Email</Form.Label>
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default UpdateProfile;

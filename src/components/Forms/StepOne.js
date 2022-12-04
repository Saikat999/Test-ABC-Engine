import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";


const StepOne = ({ nextStep, handleFormData, values }) => {

  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.projectName) ||
      validator.isEmpty(values.projectDescription) ||
      validator.isEmpty(values.client) ||
      validator.isEmpty(values.contractor) 
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
        <h1 className="text-center mt-5">ABC Engine</h1>
      <Card style={{ marginTop: 50 }}>
        <Card.Body>
            
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="projectName"
                defaultValue={values.projectName}
                type="text"
                placeholder="Project Name"
                onChange={handleFormData("projectName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="projectDescription"
                defaultValue={values.projectDescription}
                type="text"
                placeholder="Project Description"
                onChange={handleFormData("projectDescription")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Client</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="client"
                defaultValue={values.client}
                type="text"
                placeholder="Client"
                onChange={handleFormData("client")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-bold">Contractor</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="contractor"
                defaultValue={values.contractor}
                type="text"
                placeholder="Contractor"
                onChange={handleFormData("contractor")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";


const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);
  const [array, setArray] = useState([]);
//   console.log("💡array", array);

  const fileReader = new FileReader();

  const submitFormData = (e) => {
    e.preventDefault();
    if (
        validator.isEmpty(values.maxX) || 
        validator.isEmpty(values.minX) || 
        validator.isEmpty(values.maxY) || 
        validator.isEmpty(values.minY) || 
        validator.isEmpty(values.maxZ) || 
        validator.isEmpty(values.minZ)
        )  {
      setError(true);
    }else{
        nextStep();
    }
  };

  const handleCsvFile = (e) => {
    if (window.FileReader) {
      fileReader.readAsText(e.target.files[0]);
      fileReader.onload = (e) => {
        const csvOutput = e.target.result;
        processCSV(csvOutput);
      };
    }
  };

  const processCSV = (data) => {
    const csvHeader = data.slice(0, data.indexOf("\n")).split(",");
    const csvRows = data.slice(data.indexOf("\n") + 1).split("\n");

    const arrayValues = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {

        object[header] = values[index];

        return object;
      }, {});

      return obj;
    });
    setArray(arrayValues);
  };

  let x = [];
  let y = [];
  let z = [];

array.map((item) => {
    if (item?.X) {
      x.push(parseInt(item.X))
    }
    if(item?.Y){
        y.push(parseInt(item.Y))
    }
    if(item?.Z){
        z.push(parseInt(item.Z))
    }
  });
  const xMax = Math.max(...x);
  const xMin = Math.min(...x);

  const yMax = Math.max(...y);
  const yMin = Math.min(...y);

  const zMax = Math.max(...z);
  const zMin = Math.min(...z);

  console.log("💡 Max of X::", xMax);
  console.log("💡 Min of X::", xMin);

  console.log("💡 Max of Y::", yMax);
  console.log("💡 Min of Y::", yMin);

  console.log("💡 Max of Z::", zMax);
  console.log("💡 Min of Z::", zMin);


  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          {/* csv input field */}
          {/* <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload CSV file</Form.Label>
            <Form.Control
              type="file"
              onChange={handleCsvFile}
              accept=".csv"
              multiple
              style={{ border: error ? "2px solid red" : "" }}
            />
         
          </Form.Group> */}

          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                style={{ background: "#DEF5E5" }}
                type="text"
                value={values?.projectName}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                style={{ background: "#DEF5E5" }}
                type="text"
                value={values?.projectDescription}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Client</Form.Label>
              <Form.Control
                style={{ background: "#DEF5E5" }}
                type="text"
                value={values?.client}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contractor</Form.Label>
              <Form.Control
                style={{ background: "#DEF5E5" }}
                type="text"
                value={values?.contractor}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>max-X</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="number"
                placeholder="max-X"
                onChange={handleFormData("maxX")}
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
              <Form.Label>min-X</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="number"
                placeholder="min-X"
                onChange={handleFormData("minX")}
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
              <Form.Label>max-Y</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="number"
                placeholder="max-Y"
                onChange={handleFormData("maxY")}
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
              <Form.Label>min-Y</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="number"
                placeholder="min-Y"
                onChange={handleFormData("minY")}
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
              <Form.Label>max-Z</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="number"
                placeholder="max-Z"
                onChange={handleFormData("maxZ")}
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
              <Form.Label>min-Z</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="number"
                placeholder="min-Z"
                onChange={handleFormData("minZ")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

    </>
  );
};

export default StepTwo;

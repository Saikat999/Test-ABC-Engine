import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import StepOne from "./components/Forms/StepOne";
import StepTwo from "./components/Forms/StepTwo";
import Final from "./components/Forms/Final";

function App() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    client: "",
    contractor: "",
    maxX: "",
    minX: "",
    maxY: "",
    minY: "",
    maxZ: "",
    minZ: ""
  })

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = input => e => {

    const {value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }


  switch (step) {

    case 1:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 12 }} className="custom-margin">
                <Final values={formData}  />
              </Col>
            </Row>
          </Container>
        </div>
      );

    default:
      return (
        <div className="App">
        </div>
      );
  }
}

export default App;
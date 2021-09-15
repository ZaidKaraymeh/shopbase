import HomeScreen from "./screens/HomeScreen";
import LeftScreen from "./screens/LeftScreen";
import RightScreen from "./screens/RightScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Row, Col, Container } from 'react-bootstrap'
function App() {
  return (
    <Router>
      <Container fluid className="text-center text-white">
        <Row>
          <Col xxl={3} xl={2} lg={3} md={3} sm={3} xs={3}>
            <Route path="/" component={LeftScreen} />
          </Col>
          <Col xxl={6} xl={8} lg={6} md={6} sm={6} xs={6}>
            <Route path="/" component={HomeScreen} />
          </Col>
          <Col xxl={3} xl={2} lg={3} md={3} sm={3} xs={3}>
            <Route path="/" component={RightScreen} />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;

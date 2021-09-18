import HomeScreen from "./screens/HomeScreen";
import LeftScreen from "./screens/LeftScreen";
import RightScreen from "./screens/RightScreen";
import PostScreen from "./screens/PostScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import {HashRouter as Router, Route, Switch, Link} from "react-router-dom"
import { Row, Col, Container } from 'react-bootstrap'
function App() {

  return (
    <Router>
      <Container fluid className="text-center text-white bg-dark fs-3">
        <Row>
          <Col className="mh-100" xxl={3} xl={2} lg={3} md={3} sm={3} xs={3}>
            <Navigation />
          </Col>
          <Col
            className="middle-screen mh-100"
            xxl={6}
            xl={8}
            lg={6}
            md={6}
            sm={6}
            xs={6}
          >
            <Switch>
              <Route path="/post/:id" component={PostScreen} />
              <Route path="/" component={HomeScreen} />
            </Switch>
          </Col>
          <Col className="mh-100" xxl={3} xl={2} lg={3} md={3} sm={3} xs={3}>
            <Switch>
              <Route path="/" component={RightScreen} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;

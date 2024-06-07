import './App.css';
import { RecoilRoot } from 'recoil';
import FreeWritingTextField from './FreeWritingTextField';
import CharacterCounter from './CharacterCounter';
import TodayCard from './TodayCard';
import NavigationBar from './NavigationBar';
import { Row, Col, Container } from 'react-bootstrap';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <NavigationBar />
        <Container>
          <Row>
            <Col>
              <h1>Free-writing App</h1>
            </Col>
          </Row>
          <Row>
            <TodayCard />
          </Row>
        </Container>
      </div>
    </RecoilRoot>
  );
}

export default App;

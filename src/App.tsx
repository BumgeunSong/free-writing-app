import './App.css';
import { RecoilRoot } from 'recoil';
import TodayCard from './TodayCard';
import NavigationBar from './NavigationBar';
import { Row, Col, Container } from 'react-bootstrap';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <NavigationBar />
        <Container className='my-4'>
          <Row>
            <Col>
              <TodayCard />
            </Col>
          </Row>
        </Container>
      </div>
    </RecoilRoot>
  );
}

export default App;

import './App.css';
import { RecoilRoot } from 'recoil';
import TodayCard from './TodayCard';
import NavigationBar from './NavigationBar';
import { Row, Col, Container } from 'react-bootstrap';
import Editor from './Editor';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <NavigationBar />
        <Outlet />
        <Footer timePast='2:30' timeTotal='10:00'/>
      </div>
    </RecoilRoot>
  );
}

export default App;

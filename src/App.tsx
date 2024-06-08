import './App.css';
import { RecoilRoot } from 'recoil';
import TodayCard from './TodayCard';
import NavigationBar from './NavigationBar';
import { Row, Col, Container } from 'react-bootstrap';
import Editor from './Editor';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <NavigationBar />    
        <Outlet />
      </div>
    </RecoilRoot>
  );
}

export default App;

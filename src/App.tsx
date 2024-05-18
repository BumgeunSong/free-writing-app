import './App.css';
import { RecoilRoot } from 'recoil';
import FreeWritingTextField from './FreeWritingTextField';


function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Free-writing App</h1>
        <FreeWritingTextField />
      </div>
    </RecoilRoot>
  );
}

export default App;

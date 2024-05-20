import './App.css';
import { RecoilRoot } from 'recoil';
import FreeWritingTextField from './FreeWritingTextField';
import CharacterCounter from './CharacterCounter';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Free-writing App</h1>
        <FreeWritingTextField />
        <CharacterCounter />
      </div>
    </RecoilRoot>
  );
}

export default App;

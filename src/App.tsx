import './App.css';
import { RecoilRoot } from 'recoil';
import FreeWritingTextField from './FreeWritingTextField';
import CharacterCounter from './CharacterCounter';
import TodayCard from './TodayCard';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Free-writing App</h1>
        <TodayCard />
      </div>
    </RecoilRoot>
  );
}

export default App;

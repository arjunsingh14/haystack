import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Scoreboard from './components/Scoreboard';
import Setup from './components/Setup';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/setup" element={<Setup />}></Route>
        <Route path="/scoreboard" element={<Scoreboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Aqidata from './components/Aqidata';

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Aqidata />} />
      </Routes>
    </Router>

  </div>
);

export default App;

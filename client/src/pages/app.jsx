import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user-dashboard" element={<UserDashboard />} />
        {/* other routes... */}
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import StorePage from './components/pages/StorePage';
import UserPage from './components/pages/UserPage';
import CouponsPage from './components/pages/CouponsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/store/:id" element={<StorePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/coupons" element={<CouponsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
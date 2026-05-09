import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import HajjUmrah from './pages/HajjUmrah';
import AirTicket from './pages/AirTicket';
import Tours from './pages/Tours';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hajj-umrah" element={<HajjUmrah />} />
          <Route path="/air-ticket" element={<AirTicket />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero/Hero';
import Event from './components/Events/Event';
import MembersPage from './components/MembersPages';
import Team from './components/Developer/Team';
import EventRegister from './components/Events/EventRegister/EventRegister';
import Login from './Login/Login'; 
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events/:eventName" element={<EventRegister />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/devTeam" element={<Team />} />
        <Route path="/Login" element={<Login />} /> 
  <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
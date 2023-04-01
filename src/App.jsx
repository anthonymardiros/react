import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Users from './pages/Users.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users/:id" element={<Users />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import DashboardContainer from './routes/Dashboard/DashboardContainer'
import About from './routes/About/About'
import Terms from './routes/Terms/Terms'
import Mobile from './routes/Mobile/Mobile'

// import Cookies from "js-cookie";
// const redirectCookies = Cookies.get("redirect");

function App() {
  return document.documentElement.clientWidth <= 798 ? (
    <Mobile />
  ) : (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route exact path='/hub' element={<DashboardContainer />} />
          <Route exact path='/legal' element={<Terms />} />
          <Route element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App

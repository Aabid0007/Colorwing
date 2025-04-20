import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes'
import './Styles/Global.css'
import './Styles/HomeMediaQuery.css';
import './Styles/ServicesMediaQuery.css'
import './Styles/ContactMediaQuery.css'
import './App.css'
function App() {

  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  )
}

export default App

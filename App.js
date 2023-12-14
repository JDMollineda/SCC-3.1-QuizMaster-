import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Main from './pages/Main';
import Survey from './pages/Survey'
import Coding from './pages/Coding';
import Hvac from './pages/Hvac';
import Ckitchen from './pages/Ckitchen';
import Microsoft from './pages/Microsoft';
import Cdl from './pages/Cdl';
import DashBoard from './pages/DashBoard';
import ContactUs from './pages/ContactUs';
import Typing from './pages/Typing';


function App() {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/survey' element={<Survey />} />
          <Route path='/coding' element={<Coding />} />
          <Route path='/hvac' element={<Hvac />} />
          <Route path='/kitchen' element={<Ckitchen />} />
          <Route path='/microsoft' element={<Microsoft />} />
          <Route path='/cdl' element={<Cdl />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/typing' element={<Typing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

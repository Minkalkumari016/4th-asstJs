import './App.css';
import './components/Style.css'; 
import { StudentProvider } from './components/StudentContext';
import Header from './components/Header';
import Home from './components/Home';
import Student from './components/Student';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <StudentProvider>
          <Router>
            <Header/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path='/student' element={<Student/>}/>
                <Route path="/contact" element={<Contact/>}/>
              </Routes>
          </Router>
    </StudentProvider>
    </div>
  );
}

export default App;
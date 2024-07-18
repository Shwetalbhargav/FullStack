
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import BusinessForm from './components/BusinessForm';
import BusinessList from './components/BusinessList';
import CreatorForm from './components/CreatorForm';
import CreatorList from './components/CreatorList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';


function App() {
  return (
    
    <Router>
      <Home/>
      <div >
          <Routes>
             <Route path="/add-business" element={<BusinessForm />} />
             <Route path="/add-creator" element={<CreatorForm />} />
             <Route path="/business-List" element={<BusinessList/>} />
             <Route path="/creator-list" element={<CreatorList/>} />
             </Routes>
      </div>
            
      
    </Router>
  );
}

export default App;

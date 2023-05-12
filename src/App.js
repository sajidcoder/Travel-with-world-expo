import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './componenets/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';
import SignUpPage from './routes/SignUpPage';
import Travel from './routes/Travel';
function App() {

  
  return (
    <div className="App">
           <Navbar/>  
<Routes>
  <Route path='/' Component={Home} />
  <Route path='/about' Component={About} />
  <Route path='/service' Component={Service} />
  <Route path='/contact' Component={Contact} />
  <Route path='/singup' Component={SignUpPage} />
  <Route path='/travel' Component={Travel} />

</Routes>

   
 
      
        
    </div>
  );
}

export default App;

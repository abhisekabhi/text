
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alerts from './Components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMOde] = useState("light");//Whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMOde('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert('dark mode has been enabled', 'success');
      document.title = 'TextUtils-Dark mode';
    }
    else {
      setMOde('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled', 'success');
      document.title = 'TextUtils-Light mode';
    }
  }
  return (
    
    <Router>
        <Navbar title="Textutils" About="AboutTest" mode={mode} toggleMode={toggleMode} />
        <Alerts alerts={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              
            
              {/* <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} /> */}
            </Route>
          </Switch>
        </div>
    </Router>
    






    
  );
}

export default App;

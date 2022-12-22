import { useState } from 'react';     // imrs shortcut
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  // Alert state
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
    
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  // light/dark mode state
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Super Text - Dark Mode"


      // blibking title
      // setInterval(() => {
      //   document.title = "Super Text is amazing"
      // }, 1500);

      // setInterval(() => {
      //   document.title = "Install Super Text now"
      // }, 2000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
      // document.title = "Super Text - Light Mode"
    }
  }
  return (
    <>
    <Router>
      {/* <Navbar title="SuperText" aboutText = "About us" /> */}
      <Navbar title="SuperText" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}

      <Alert alert={alert}/>

      <div className='container my-3'>
      <Routes>
        {/* exact is used to match exact match otherwise react sometime match partially and we get error 404 not found   */}
            <Route exact path="/home" element={<TextForm showAlert = {showAlert} heading="SuperText - Word Counter, Character Counter, Remove extra Spaces" mode = {mode}/>}/>
            <Route exact path="/" element={<About mode={mode}/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

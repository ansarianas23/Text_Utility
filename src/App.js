import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

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

  // Function to toggle dark and light mode
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
        <Navbar title="SuperText" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert}/>

        <div className='container my-3'>
            <Routes>
                <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="SuperText - Word Counter, Character Counter, Remove extra Spaces" mode = {mode}/>}/>
                <Route exact path="/about" element={<About mode={mode}/>}/>
            </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;

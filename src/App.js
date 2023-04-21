import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#151642";
      showAlert("dark mode is enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enable", "success");
    }
  };
  return (
    <Router>
      
        <Navbar
          title="TextUtils"
          aboutText="AboutText"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/" element =
            {
              <TextForm
                showAlert={showAlert}
                heading="Enter The Text To Analyze Below"
                mode={mode}
              />
            }/>
            
          <Route exact path="/about" element =
            {
              <About/>
            }/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;

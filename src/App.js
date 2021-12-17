import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FeedbackList from "./components/FeedbackList.jsx";
import Average from "./components/Average.jsx";
import Feedbackadd from "./components/Feedbackadd.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import { FaQuestion } from "react-icons/fa";
import {FeedbackProvider} from './Context/FeedbackContext';



function App() {

    
    
    

    return (
        <FeedbackProvider>
          <Router>
            <div className="container">
            <Routes>
              <Route exact path='/' element={
                <>
                  <Feedbackadd/>
                  <Average/>
                  <FeedbackList/>
                  <Link to="/about"><FaQuestion className="about-icon" size="30"/></Link>
                </>
              } />
              <Route path="/about" element={<AboutPage/>} />
              </Routes>
                <div className="footer-links">
                  <NavLink to="/" activeClassName="active">Home</NavLink>
                  <NavLink to="/about" activeClassName="active">About</NavLink>
                </div>
              </div>
          </Router>
        </FeedbackProvider>
                
            
        
        



    )
}


        


export default App
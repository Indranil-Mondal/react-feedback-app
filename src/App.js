import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FeedbackList from "./components/FeedbackList.jsx";
import data from './data/data.js'
import Average from "./components/Average.jsx";
import Feedbackadd from "./components/Feedbackadd.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import { FaQuestion } from "react-icons/fa";


function App() {

    const [feedback, setFeedback] = useState(data);
    
    const deleteFeeback = (id) => {
      setFeedback(feedback.filter((item) => item.id!== id))
    }

  const handleAdd = (newData) => {
    setFeedback( [newData, ...feedback])
  }

    return (

          <Router>
            <div className="container">
            <Routes>
              <Route exact path='/' element={
                <>
                  <Feedbackadd addFeedback={handleAdd}/>
                  <Average feedback={feedback} />
                  <FeedbackList listData={feedback} handleDelete={deleteFeeback}/>
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
                
            
        
        



    )
}


        


export default App
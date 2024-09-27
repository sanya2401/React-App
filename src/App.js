import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Banner from './Components/Banner';
import FeaturedArticles from './Components/FeaturedArticles';
import Tutorials from './Components/Tutorials';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import FindQuestion from './Components/FindQuestion';
import NavLinks from './Components/NavLinks';  // Import NavLinks component
import LoginForm from './Components/LoginForm';  // Import LoginForm component

function App() {
  return (
    <Router>
      <Header />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/find-questions">Find Questions</Link></li>
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />  {/* Route to LoginForm */}
        </Routes>
      
      <Routes>
        <Route exact path="/" element={<>
          <Banner />
          <FeaturedArticles />
          <Tutorials />
          <Newsletter />
          <Footer />
        </>} />
        
        <Route path="/find-questions" element={<FindQuestion />} /> {/* Separate Find Question page */}
      </Routes>
    </Router>
  );
}

export default App;

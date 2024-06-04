import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import GlobalStyle from './styles/GlobalStyle.jsx';
import { ThemeContext } from './contexts/ThemeContext.jsx';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <GlobalStyle theme={theme} />
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

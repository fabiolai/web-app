import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Modal from './Modal';
import './App.css';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => setIsModalOpen(true)}> Modal</button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2> Title </h2>
          <p> content </p>
        </Modal>

      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </div>
  </Router>
          );
}

export default App;

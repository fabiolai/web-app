import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
//import Home from './components/Home';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            </ul>
            </nav>
            </div>
            </Router>
          );
}

export default App;

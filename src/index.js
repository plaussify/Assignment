// App.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Container from './components/Container';
import SideBar from './components/SideBar';
import Boxes from './components/Boxes';
import Schedule from './components/Schedule';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <React.StrictMode>
      <Container>
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="flex flex-row mt-3">
          <SideBar isOpen={isSidebarOpen} />
          <div className="flex flex-col w-full h-full">
            <Boxes />
            <Schedule />
          </div>
        </div>
      </Container>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

reportWebVitals();

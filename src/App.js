import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [views] = useState([{name: 'about'}, {name: 'portfolio'}, {name: 'contact'}, {name: 'resume'}]);

  const [currentView, setCurrentView] = useState(views[0]);

  return (
    <div className="bg-light text-dark">
      <Header views={views} currentView={currentView} setCurrentView={setCurrentView} />
      <Content currentView={currentView} />
      <Footer />
    </div>
  );
}

export default App;

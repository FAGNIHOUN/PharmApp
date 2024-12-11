import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './HomePage.jsx';
import Mission from "./OurMissionPage.jsx";
import Marche from "./HowItWorksPage.jsx";
import { AiFillHome, AiOutlineInfoCircle, AiFillFlag } from 'react-icons/ai';

const NavigationBottom = ({ activeTab, onTabChange }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around p-4 bg-white shadow-md">
      <button
        onClick={() => onTabChange('home')}
        className={`flex flex-col items-center ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'}`}
      >
        <AiFillHome size={24} />
        <span className="text-xs">Accueil</span>
      </button>
      <button
        onClick={() => onTabChange('how-it-works')}
        className={`flex flex-col items-center ${activeTab === 'how-it-works' ? 'text-blue-600' : 'text-gray-500'}`}
      >
        <AiOutlineInfoCircle size={24} />
        <span className="text-xs">Comment ça marche</span>
      </button>
      <button
        onClick={() => onTabChange('our-mission')}
        className={`flex flex-col items-center ${activeTab === 'our-mission' ? 'text-blue-600' : 'text-gray-500'}`}
      >
        <AiFillFlag size={24} />
        <span className="text-xs">Notre mission</span>
      </button>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route 
            path="/" 
            element={
              activeTab === 'home' ? <HomePage /> :
              activeTab === 'our-mission' ? <Mission /> : // Correction ici
              activeTab === 'how-it-works' ? <Marche /> : // Correction ici
              <HomePage /> // Par défaut, rediriger vers la page d'accueil
            }
          />
        </Routes>
        <NavigationBottom activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </Router>
  );
}
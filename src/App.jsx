<<<<<<< Updated upstream
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importation pour la validation des props
import { useState } from 'react'; // Importation pour gérer l'état local
import PharmacyFinder from './components/pharmacyFinder.jsx';
import AddMedicament from './AddMedicamentPage.jsx';
import AddPharmacy from './AddPharmacyPage.jsx';

// Composant pour la barre de navigation
function NavigationBar({ isAdmin, onAdminClick }) {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex justify-center gap-8">
        <li>
          <Link to="/" className="hover:underline">
            Search Medicine
          </Link>
        </li>
        {isAdmin && (
          <>
            <li>
              <Link to="/add-medication" className="hover:underline">
                Add Medication
              </Link>
            </li>
            <li>
              <Link to="/add-pharmacy" className="hover:underline">
                Add Pharmacy
              </Link>
            </li>
          </>
        )}
        {!isAdmin && (
          <li>
            <button
              onClick={onAdminClick}
              className="hover:underline focus:outline-none text-white"
            >
              Admin Login
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

// Composant personnalisé pour la page d'accueil avec des boutons
function RoutePage({ content, routeButtons }) {
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './HomePage.jsx';
import Mission from "./OurMissionPage.jsx";
import Marche from "./HowItWorksPage.jsx";
import { AiFillHome, AiOutlineInfoCircle, AiFillFlag } from 'react-icons/ai';

const NavigationBottom = ({ activeTab, onTabChange }) => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
}

// Validation des props avec prop-types
RoutePage.propTypes = {
  content: PropTypes.string.isRequired,
  routeButtons: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPrompt, setShowAdminPrompt] = useState(false);
  const [inputCode, setInputCode] = useState('');

  const handleAdminClick = () => {
    setShowAdminPrompt(true);
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (inputCode === 'Obed67') {
      setIsAdmin(true);
      setShowAdminPrompt(false);
      alert('Admin access granted!');
    } else {
      alert('Invalid code!');
    }
=======
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
>>>>>>> Stashed changes
  };

  return (
    <Router>
<<<<<<< Updated upstream
      <div>
        {/* Barre de navigation persistante */}
        <NavigationBar isAdmin={isAdmin} onAdminClick={handleAdminClick} />

        {/* Message pour entrer le code secret */}
        {showAdminPrompt && (
          <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Si vous êtes un admin, entrez le code secret</h2>
            <form onSubmit={handleCodeSubmit} className="flex flex-col items-center gap-4">
              <input
                type="password"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Code secret"
                className="px-4 py-2 border rounded"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Routes définies */}
        <Routes>
          <Route
            path="*"
            element={
              <RoutePage
                content="PharmaLink"
                routeButtons={[
                  { route: '/', label: 'Search Medicine' },
                  isAdmin && { route: '/add-medication', label: 'Add Medication' },
                  isAdmin && { route: '/add-pharmacy', label: 'Add Pharmacy' },
                ].filter(Boolean)} // Filtre pour supprimer les éléments inutiles
              />
            }
          />
          <Route path="/" element={<PharmacyFinder />} />

          {/* Routes protégées accessibles uniquement pour les admins */}
          {isAdmin && (
            <>
              <Route path="/add-medication" element={<AddMedicament />} />
              <Route path="/add-pharmacy" element={<AddPharmacy />} />
            </>
          )}
        </Routes>
=======
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
>>>>>>> Stashed changes
      </div>
    </Router>
  );
}
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
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">{content}</h1>
      <div className="flex gap-4">
        {routeButtons.map((button, index) => (
          <Link
            key={index}
            to={button.route}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {button.label}
          </Link>
        ))}
      </div>
    </div>
  );
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
  };

  return (
    <Router>
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
      </div>
    </Router>
  );
}

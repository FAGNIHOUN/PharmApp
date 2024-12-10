import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importation pour la validation des props
import PharmacyFinder from './components/pharmacyFinder.jsx';
import AddMedicament from './AddMedicamentPage.jsx';
import AddPharmacy from './AddPharmacyPage.jsx';

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
  content: PropTypes.string.isRequired, // 'content' doit être une chaîne de caractères et est obligatoire
  routeButtons: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired, // 'route' doit être une chaîne et est obligatoire
      label: PropTypes.string.isRequired, // 'label' doit être une chaîne et est obligatoire
    })
  ).isRequired, // 'routeButtons' doit être un tableau et est obligatoire
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route par défaut avec boutons dynamiques */}
        <Route
          path="*"
          element={
            <RoutePage
              content="PharmaLink"
              routeButtons={[
                { route: '/', label: 'Search medicine' },
                { route: '/add-medication', label: 'Go to Add Medication' },
                { route: '/add-pharmacy', label: 'Go to Add Pharmacy' },
              ]}
            />
          }
        />

        {/* Autres routes */}
        <Route path="/" element={<PharmacyFinder />} />
        <Route path="/add-medication" element={<AddMedicament />} />
        <Route path="/add-pharmacy" element={<AddPharmacy />} />
      </Routes>
    </Router>
  );
}

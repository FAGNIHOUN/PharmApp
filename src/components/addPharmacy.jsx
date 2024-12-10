import { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

function AddPharmacy() {
  const [pharmacyName, setPharmacyName] = useState('');
  const [pharmacyLocation, setPharmacyLocation] = useState('');
  const [pharmacyContact, setPharmacyContact] = useState('');
  const [pharmacyOpeningHours, setPharmacyOpeningHours] = useState('');
  const [error, setError] = useState(null); // État pour gérer les erreurs
  const [success, setSuccess] = useState(false); // État pour gérer le succès

  const handleAddPharmacy = () => {
    // Validation des champs
    if (
      pharmacyName.trim() === '' ||
      pharmacyLocation.trim() === '' ||
      pharmacyContact.trim() === '' ||
      pharmacyOpeningHours.trim() === ''
    ) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // Réinitialiser les états de succès et d'erreur
    setError(null);
    setSuccess(false);

    // Simuler un ajout réussi
    setSuccess(true);
    setPharmacyName('');
    setPharmacyLocation('');
    setPharmacyContact('');
    setPharmacyOpeningHours('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Ajouter une Pharmacie</h1>

        {/* Messages d'erreur et de succès */}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">Pharmacie ajoutée avec succès !</p>}

        {/* Formulaire d'ajout de pharmacie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Champ Nom de la Pharmacie */}
          <div className="flex flex-col">
            <label htmlFor="pharmacyName" className="text-gray-700 font-semibold mb-2">
              Nom de la Pharmacie
            </label>
            <input
              type="text"
              id="pharmacyName"
              placeholder="Ex: Pharmacie Centrale"
              className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={pharmacyName}
              onChange={(e) => setPharmacyName(e.target.value)}
            />
          </div>

          {/* Champ Localisation */}
          <div className="flex flex-col">
            <label htmlFor="pharmacyLocation" className="text-gray-700 font-semibold mb-2">
              Localisation
            </label>
            <div className="flex items-center bg-white rounded-lg border border-gray-200">
              <MapPin className="text-blue-500 ml-4 mr-2" size={20} />
              <input
                type="text"
                id="pharmacyLocation"
                placeholder="Ex: 12 Rue principale, Ville"
                className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={pharmacyLocation}
                onChange={(e) => setPharmacyLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Champ Contact */}
          <div className="flex flex-col">
            <label htmlFor="pharmacyContact" className="text-gray-700 font-semibold mb-2">
              Contact
            </label>
            <div className="flex items-center bg-white rounded-lg border border-gray-200">
              <Phone className="text-blue-500 ml-4 mr-2" size={20} />
              <input
                type="text"
                id="pharmacyContact"
                placeholder="Ex: 01 23 45 67 89"
                className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={pharmacyContact}
                onChange={(e) => setPharmacyContact(e.target.value)}
              />
            </div>
          </div>

          {/* Champ Horaires d'Ouverture */}
          <div className="flex flex-col">
            <label htmlFor="pharmacyOpeningHours" className="text-gray-700 font-semibold mb-2">
              Horaires d'Ouverture
            </label>
            <div className="flex items-center bg-white rounded-lg border border-gray-200">
              <Clock className="text-blue-500 ml-4 mr-2" size={20} />
              <input
                type="text"
                id="pharmacyOpeningHours"
                placeholder="Ex: 8h-22h"
                className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={pharmacyOpeningHours}
                onChange={(e) => setPharmacyOpeningHours(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Bouton Ajouter */}
        <div className="text-right">
          <button
            onClick={handleAddPharmacy}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
          >
            Ajouter la Pharmacie
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPharmacy;

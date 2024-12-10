import { useState, useEffect } from 'react';
import { Plus, X, MapPin } from 'lucide-react';

function AddMedication() {
  const [pharmacies, setPharmacies] = useState([]);
  const [medicationName, setMedicationName] = useState('');
  const [medicationQuantity, setMedicationQuantity] = useState('');
  const [medicationAvailable, setMedicationAvailable] = useState(true);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [medicationsList, setMedicationsList] = useState([]);

  // Charger les pharmacies et médicaments depuis le localStorage au montage
  useEffect(() => {
    const savedPharmacies = JSON.parse(localStorage.getItem('pharmacies')) || [];
    const savedMedications = JSON.parse(localStorage.getItem('medications')) || [];
    setPharmacies(savedPharmacies);
    setMedicationsList(savedMedications);
  }, []);

  const handleAddMedication = () => {
    if (medicationName.trim() !== '' && selectedPharmacy && medicationQuantity.trim() !== '') {
      const newMedication = {
        name: medicationName,
        quantity: parseInt(medicationQuantity),
        available: medicationAvailable,
        pharmacy: selectedPharmacy,
      };
      const newMedicationsList = [...medicationsList, newMedication];
      setMedicationsList(newMedicationsList);
      setMedicationName('');
      setMedicationQuantity('');
      setMedicationAvailable(true);
      setSelectedPharmacy(null);
      // Sauvegarder la liste dans le localStorage
      localStorage.setItem('medications', JSON.stringify(newMedicationsList));
    }
  };

  const handleRemoveMedication = (index) => {
    const newList = medicationsList.filter((_, i) => i !== index);
    setMedicationsList(newList);
    // Mettre à jour le localStorage après suppression
    localStorage.setItem('medications', JSON.stringify(newList));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Ajouter des Médicaments</h1>

        {/* Formulaire d'ajout de médicament */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Champ Nom du Médicament */}
          <div className="flex flex-col">
            <label htmlFor="medicationName" className="text-gray-700 font-semibold mb-2">
              Nom du Médicament
            </label>
            <input
              type="text"
              id="medicationName"
              placeholder="Ex: Paracétamol"
              className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={medicationName}
              onChange={(e) => setMedicationName(e.target.value)}
            />
          </div>

          {/* Champ Quantité */}
          <div className="flex flex-col">
            <label htmlFor="medicationQuantity" className="text-gray-700 font-semibold mb-2">
              Quantité
            </label>
            <input
              type="number"
              id="medicationQuantity"
              placeholder="Ex: 50"
              className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={medicationQuantity}
              onChange={(e) => setMedicationQuantity(e.target.value)}
            />
          </div>

          {/* Champ Disponibilité */}
          <div className="flex flex-col">
            <label htmlFor="medicationAvailable" className="text-gray-700 font-semibold mb-2">
              Disponibilité
            </label>
            <select
              id="medicationAvailable"
              className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={medicationAvailable}
              onChange={(e) => setMedicationAvailable(e.target.value === 'true')}
            >
              <option value="true">Disponible</option>
            </select>
          </div>

          {/* Champ Pharmacie */}
          <div className="flex flex-col">
            <label htmlFor="pharmacy" className="text-gray-700 font-semibold mb-2">
              Pharmacie
            </label>
            <select
              id="pharmacy"
              className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={selectedPharmacy ? selectedPharmacy.id : ''}
              onChange={(e) => {
                const pharmacy = pharmacies.find((p) => p.id === parseInt(e.target.value));
                setSelectedPharmacy(pharmacy);
              }}
            >
              <option value="">Sélectionnez une pharmacie</option>
              {pharmacies.map((pharmacy) => (
                <option key={pharmacy.id} value={pharmacy.id}>
                  {pharmacy.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Bouton Ajouter */}
        <div className="text-right">
          <button
            onClick={handleAddMedication}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
          >
            <Plus className="mr-2" size={20} />
            Ajouter
          </button>
        </div>

        {/* Liste des médicaments ajoutés */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Médicaments Ajoutés</h2>
          <div className="space-y-4">
            {medicationsList.length > 0 ? (
              medicationsList.map((med, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
                >
                  <div>
                    <span className="font-bold text-blue-800">{med.name}</span>
                    <p className="text-sm text-gray-600">
                      <MapPin className="inline-block mr-1" size={16} />
                      {med.pharmacy.name} - {med.pharmacy.address}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantité: {med.quantity} | Disponibilité: {med.available ? 'Disponible' : 'Indisponible'}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveMedication(index)}
                    className="text-red-500 hover:text-red-600 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Aucun médicament ajouté</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMedication;

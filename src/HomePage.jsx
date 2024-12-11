import { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Bell, 
  Clock, 
  ShieldCheck,
  Home,  // Ajout de l'icône Home
  Info,  // Ajout de l'icône Info
  Flag,  // Ajout de l'icône Mission
  Navigation, // Ajout de l'icône Navigation
  Map as MapIcon // Ajout de l'icône Map
} from 'lucide-react';

// Données des pharmacies
const pharmaciesData = [
  {
    id: 1,
    name: "Pharmacie Centrale",
    address: "Rue des Palmiers, Cotonou",
    distance: 1.2,
    isOnCall: true,
    medicines: ["Paracétamol", "Ibuprofène", "Amoxicilline"],
    coordinates: [6.370292, 2.391236], // Simulée
    phone: "+229 123 456 789",
    price: 1080,
  },
  {
    id: 2,
    name: "Pharmacie de l'Étoile",
    address: "Avenue Steinmetz, Porto-Novo",
    distance: 2.5,
    isOnCall: false,
    medicines: ["Amoxicilline", "Paracétamol", "Ceftriaxone"],
    coordinates: [6.496857, 2.628852], // Simulée
    phone: "+229 987 654 321",
    price: 180,
  },
  {
    id: 3,
    name: "Pharmacie Soleil",
    address: "Quartier Mènontin, Abomey-Calavi",
    distance: 3.8,
    isOnCall: true,
    medicines: ["Paracétamol", "Ceftriaxone", "Ibuprofène", "Pipi"],
    coordinates: [6.453788, 2.353213], // Simulée
    phone: "+229 654 321 987",
    price: 1080,
  },
  {
    id: 4,
    name: "Pharmacie La Vie",
    address: "Rue de la Liberté, Cotonou",
    distance: 1.9,
    isOnCall: false,
    medicines: ["Aspirine", "Oméprazole", "Loratadine"],
    coordinates: [6.369546, 2.396541], // Simulée
    phone: "+229 987 654 381",
    price: 1080,
  },
  {
    id: 5,
    name: "Pharmacie Soleil Levant",
    address: "Avenue des Nations Unies, Porto-Novo",
    distance: 2.2,
    isOnCall: true,
    medicines: ["Paracétamol", "Amoxicilline", "Ceftriaxone", "Métronidazole"],
    coordinates: [6.489174, 2.628302], // Simulée
    phone: "+229 123 456 789",
    price: 1280,
  },
  {
    id: 6,
    name: "Pharmacie Sainte-Marie",
    address: "Quartier Akpakpa, Cotonou",
    distance: 0.8,
    isOnCall: false,
    medicines: ["Ibuprofène", "Fluoxétine", "Loratadine"],
    coordinates: [6.368507, 2.410234], // Simulée
    phone: "+229 987 654 321",
    price: 280,
  },
  {
    id: 7,
    name: "Pharmacie Nouvelle Génération",
    address: "Rue de la Paix, Ouidah",
    distance: 4.5,
    isOnCall: true,
    medicines: ["Paracétamol", "Oméprazole", "Doxycycline"],
    coordinates: [6.358771, 2.281133], // Simulée
    phone: "+229 654 321 987",
    price: 100,
  },
  {
    id: 8,
    name: "Pharmacie La Providence",
    address: "Quartier Tokpa, Abomey",
    distance: 6.0,
    isOnCall: true,
    medicines: ["Ceftriaxone", "Ibuprofène", "Amoxicilline"],
    coordinates: [7.197315, 2.292865], // Simulée
    phone: "+229 987 654 381",
    price: 3080,
  },
];

const HomePage = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [pharmacies, setPharmacies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");  // Nouvel état pour le terme de recherche
  const [selectedPharmacy, setSelectedPharmacy] = useState(null); // État pour la pharmacie sélectionnée

  useEffect(() => {
    // Ce hook est appelé quand `selectedCategory` ou `searchTerm` change
    let filteredPharmacies = pharmaciesData;

    // Si une catégorie est sélectionnée, filtrer les pharmacies selon cette catégorie
    if (selectedCategory === 'on-call') {
      filteredPharmacies = filteredPharmacies.filter(pharmacy => pharmacy.isOnCall);
    }

    // Filtrer les pharmacies qui contiennent le médicament recherché
    if (searchTerm) {
      filteredPharmacies = filteredPharmacies.filter(pharmacy => 
        pharmacy.medicines.some(medicine => medicine.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setPharmacies(filteredPharmacies);
  }, [selectedCategory, searchTerm]);

  // Filtrer les pharmacies de garde ou proches
  const filterPharmacies = (category) => {
    setSelectedCategory(category);
  };

  // Fonction pour revenir à la liste des pharmacies
  const handleBackToList = () => {
    setSelectedPharmacy(null);
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-blue-500 to-blue-700 mb-14">
      {/* En-tête */}
      <header className="p-6 pb-0">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">PharmaCare</h1>
          <Bell className="text-white" size={28} />
        </div>
        <p className="mt-2 text-white/80">Votre assistant santé numérique</p>
      </header>

      {/* Barre de recherche */}
      <div className="p-6">
        <div className="flex items-center p-3 rounded-full bg-white/20">
          <Search className="mr-3 text-white" />
          <input 
            type="text" 
            placeholder="Rechercher un médicament"
            className="w-full text-white bg-transparent outline-none placeholder-white/70"
            value={searchTerm} // Lier à l'état searchTerm
            onChange={(e) => setSearchTerm(e.target.value)} // Mettre à jour searchTerm
          />
        </div>
      </div>

      {/* Services rapides */}
      <div className="p-6 mt-4 bg-white rounded-t-3xl">
        <div className="grid grid-cols-3 gap-4 text-center">
          <button 
            onClick={() => filterPharmacies('pharmacy-finder')}
            className="flex flex-col items-center justify-center"
          >
            <div className="p-4 mb-2 bg-blue-100 rounded-full">
              <MapPin className="text-blue-600" size={32} />
            </div>
            <span className="text-sm text-gray-700">Pharmacies</span>
          </button>

          <button 
            onClick={() => filterPharmacies('on-call')}
            className="flex flex-col items-center justify-center"
          >
            <div className="p-4 mb-2 bg-purple-100 rounded-full">
              <Clock className="text-purple-600" size={32} />
            </div>
            <span className="text-sm text-gray-700">Gardes</span>
          </button>
        </div>

        {/* Sections informatives */}
        <div className="mt-6 mb-14">
          {selectedPharmacy ? (
            // Détails de la pharmacie sélectionnée
            <div className="text-center mb-60">
              <Navigation size={80} className="mx-auto mb-6 text-blue-500" />
              <h2 className="mb-2 text-2xl font-bold text-blue-900">
                {selectedPharmacy.name}
              </h2>
              <p className="mb-4 text-gray-600">{selectedPharmacy.address}</p>

              <div className="grid grid-cols-2 gap-4 p-4 mb-4 rounded-lg bg-blue-50">
                <div>
                  <p className="font-semibold text-blue-800">Distance</p>
                  <p className='text-gray-600'>{selectedPharmacy.distance} km</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-800">Téléphone</p>
                  <p className='text-gray-600'>{selectedPharmacy.phone}</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-800">Prix</p>
                  <p className='text-gray-600'>{selectedPharmacy.price} FCFA</p>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleBackToList}
                  className="px-4 py-2 text-gray-700 transition-colors bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Retour à la liste
                </button>
                <button
                  className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
                  onClick={() => alert("Réservation effectuée !")}
                >
                  Réserver
                </button>
                <button
                  className="px-4 py-2 text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600"
                  onClick={() => alert("Paiement en ligne initié !")}
                >
                  Payer en ligne
                </button>
              </div>
            </div>
          ) : (
            // Liste des pharmacies
            <div>
              {pharmacies.length > 0 ? (
                <ul className="space-y-4">
                  {pharmacies.map((pharmacy) => (
                    <li 
                      key={pharmacy.id}
                      className="flex items-center justify-between p-4 bg-gray-100 rounded-lg cursor-pointer hover:shadow-md"
                      onClick={() => setSelectedPharmacy(pharmacy)}
                    >
                      <div>
                        <h3 className="font-bold text-blue-600">
                          {pharmacy.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {pharmacy.address} • {pharmacy.distance} km
                        </p>
                      </div>
                      <MapPin className="text-green-500" />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-center text-gray-500">
                  Aucune pharmacie de garde ne possède ce médicament pour le moment.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
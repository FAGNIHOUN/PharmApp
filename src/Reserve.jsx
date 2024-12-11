import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ReservationPage = () => {
  const navigate = useNavigate(); // Utilisation de useNavigate pour la navigation
  const [selectedMedicine, setSelectedMedicine] = useState("");

  useEffect(() => {
    // Récupérer le médicament recherché depuis le localStorage
    const storedMedicine = localStorage.getItem("searchedMedicine");
    if (storedMedicine) {
      setSelectedMedicine(storedMedicine);
    }
  }, []); // Utilisation de [] pour que l'effet ne soit exécuté qu'une seule fois au montage du composant

  const [quantity, setQuantity] = useState(1);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
  });
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const handleReservation = (e) => {
    e.preventDefault();

    if (!selectedMedicine || !userInfo.name || !userInfo.phone) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    setReservationConfirmed(true);
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-blue-500 to-blue-700">
      <header className="p-6 pb-0">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">PharmaCare</h1>
        </div>
        <p className="mt-2 text-white/80">Réservation de Médicament</p>
      </header>

      <div className="p-6 mt-4 bg-white rounded-t-3xl">
        <main className="p-6">
          

          {!reservationConfirmed ? (
            <form
              onSubmit={handleReservation}
              className="max-w-lg p-6 mx-auto bg-white rounded-lg shadow-md"
            >
              <h2 className="mb-4 text-lg font-bold text-blue-600">Détails de la réservation</h2>

              {/* Affichage du médicament sélectionné */}
              <div className="mb-4">
                <div className="w-full px-3 py-2 border rounded-lg text-black">
                  {/* Afficher le médicament récupéré depuis localStorage */}
                  <span>{selectedMedicine || "-- Aucune sélection --"}</span>
                </div>
              </div>

              {/* Quantité */}
              <div className="mb-4 text-black">
                <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-700">
                  Quantité :
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              {/* Informations utilisateur */}
              <h3 className="mb-4 text-lg font-bold text-blue-600">Vos informations</h3>
              <div className="mb-4 text-black">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Nom complet :
                </label>
                <input
                  type="text"
                  id="name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo((prev) => ({ ...prev, name: e.target.value }))} 
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="mb-4 text-black">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                  Téléphone :
                </label>
                <input
                  type="text"
                  id="phone"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo((prev) => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="mb-4 text-black">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  type="text"
                  id="name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo((prev) => ({ ...prev, name: e.target.value }))} 
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder='Mettez toutes informations possibles (dosage...)'
                />
              </div>

              <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Confirmer la réservation
              </button>
            </form>
          ) : (
            <div className="max-w-lg p-6 mx-auto bg-white rounded-lg shadow-md text-center">
              <h2 className="mb-4 text-lg font-bold text-green-600">Réservation confirmée !</h2>
              <p>
                Vous avez réservé <strong>{quantity}</strong> unité(s) de <strong>{selectedMedicine}</strong>.
              </p>
              <p className="mt-4 text-gray-600">
                Merci, {userInfo.name}. Nous vous contacterons au <strong>{userInfo.phone}</strong> pour confirmer la collecte.
              </p>
              <button className="px-4 py-2 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600" onClick={() => window.location.reload()}>
                Nouvelle réservation
              </button>
            </div>
          )}
          {/* Bouton "Retour" */}
          <button
            onClick={() => navigate(-1)} // Retour à la page précédente
            className="w-full md:w-auto px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 mt-4 md:mt-0"
            >
            Retour
            </button>

        </main>
      </div>

      <footer className="p-6 text-center text-white bg-blue-700">
        <p>© 2024 PharmaCare - Votre assistant santé numérique</p>
      </footer>
    </div>
  );
};

export default ReservationPage;

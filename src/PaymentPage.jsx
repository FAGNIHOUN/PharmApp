import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Ajout de useNavigate

const PaymentPage = () => {
  const navigate = useNavigate(); // Initialisation de useNavigate
  const [userInfo, setUserInfo] = useState({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const [reservationData, setReservationData] = useState({
    searchedMedicine: '',
    quantity: 0,
    pharmacy: {
      name: '',
      price: 0
    }
  });

  useEffect(() => {
    // Récupérer les données de réservation depuis le localStorage
    const data = JSON.parse(localStorage.getItem('reservationData'));
    if (data) {
      setReservationData(data);
    }
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();
    // Processus de paiement (ici simulé)
    alert("Paiement effectué avec succès !");
    // Optionnellement, vider les données de réservation après le paiement
    localStorage.removeItem('reservationData');
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-blue-500 to-blue-700">
      <header className="p-6 pb-0">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">PharmaCare</h1>
        </div>
        <p className="mt-2 text-white/80">Page de Paiement</p>
      </header>

      <div className="p-6 mt-4 bg-white rounded-t-3xl">
        <div className="max-w-lg p-6 mx-auto text-black rounded-lg shadow-md mb-24">
          <h2 className="mb-4 text-xl font-bold text-blue-600">Détails de la réservation</h2>
          <p><strong>Médicament :</strong> {reservationData.searchedMedicine}</p>
          <p><strong>Pharmacie :</strong> {reservationData.pharmacy.name}</p>
          <p><strong>Quantité :</strong> {reservationData.quantity}</p>
          <p><strong>Prix :</strong> {reservationData.pharmacy.price * reservationData.quantity} FCFA</p>

          <form onSubmit={handlePayment} className="mt-6">
            <h3 className="mb-4 text-lg font-semibold text-blue-600">Informations de paiement</h3>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
              <input
                type="text"
                id="name"
                value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Numéro de carte</label>
              <input
                type="text"
                id="cardNumber"
                value={userInfo.cardNumber}
                onChange={(e) => setUserInfo({ ...userInfo, cardNumber: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">Date d'expiration</label>
                <input
                  type="month"
                  id="expirationDate"
                  value={userInfo.expirationDate}
                  onChange={(e) => setUserInfo({ ...userInfo, expirationDate: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  value={userInfo.cvv}
                  onChange={(e) => setUserInfo({ ...userInfo, cvv: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Confirmer le paiement
            </button>
          </form>

          {/* Bouton Retour */}
          <button
            onClick={() => navigate(-1)} // Retour à la page précédente
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 mt-4"
          >
            Retour
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

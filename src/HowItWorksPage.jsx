import { Search, MapPin, Clock, ShieldCheck, Users } from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen mb-32 text-white bg-gradient-to-b from-blue-500 to-blue-700">
      {/* En-tête */}
      <header className="p-6 pb-0">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">PharmaCare</h1>
        </div>
        <p className="mt-2 text-white/80">Votre assistant santé numérique</p>
      </header>

      {/* Contenu principal */}
      <div className="p-6">
        <h2 className="mb-6 text-3xl font-bold text-center">Comment ça marche ?</h2>
        <div className="max-w-4xl p-6 mx-auto text-gray-800 bg-white rounded-lg shadow-lg">
          <p className="mb-6 text-lg leading-relaxed">
            PharmaCare est une application conçue pour simplifier votre accès aux médicaments et aux pharmacies de garde. Voici comment utiliser notre application :
          </p>

          {/* Étape 1 : Rechercher un médicament */}
          <div className="flex items-center mb-6">
            <Search className="w-12 h-12 mr-4 text-blue-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">1. Rechercher un médicament</h3>
              <p className="text-gray-600">
                Utilisez la barre de recherche pour trouver le médicament dont vous avez besoin.
              </p>
            </div>
          </div>

          {/* Étape 2 : Trouver une pharmacie */}
          <div className="flex items-center mb-6">
            <MapPin className="w-12 h-12 mr-4 text-green-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">2. Trouver une pharmacie</h3>
              <p className="text-gray-600">
                Consultez la liste des pharmacies proches ou de garde qui ont le médicament en stock.
              </p>
            </div>
          </div>

          {/* Étape 3 : Réserver ou payer en ligne */}
          <div className="flex items-center mb-6">
            <Clock className="w-12 h-12 mr-4 text-purple-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">3. Réserver ou payer en ligne</h3>
              <p className="text-gray-600">
                Réservez votre médicament ou effectuez un paiement en ligne pour un accès rapide.
              </p>
            </div>
          </div>

          {/* Étape 4 : Confiance et sécurité */}
          <div className="flex items-center mb-6">
            <ShieldCheck className="w-12 h-12 mr-4 text-red-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">4. Confiance et sécurité</h3>
              <p className="text-gray-600">
                Nous garantissons la sécurité de vos données et de vos transactions.
              </p>
            </div>
          </div>

          {/* Étape 5 : Communauté */}
          <div className="flex items-center">
            <Users className="w-12 h-12 mr-4 text-yellow-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">5. Communauté</h3>
              <p className="text-gray-600">
                Rejoignez notre communauté pour rester informé et bénéficier des dernières mises à jour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
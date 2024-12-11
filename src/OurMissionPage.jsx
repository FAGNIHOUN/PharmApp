import { ShieldCheck, Heart, Users } from 'lucide-react';

const OurMissionPage = () => {
  return (
    <div className="min-h-screen mb-24 text-white bg-gradient-to-b from-blue-500 to-blue-700">
      {/* En-tête */}
      <header className="p-6 pb-0">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">PharmaCare</h1>
        </div>
        <p className="mt-2 text-white/80">Votre assistant santé numérique</p>
      </header>

      {/* Contenu principal */}
      <div className="p-6">
        <h2 className="mb-6 text-3xl font-bold text-center">Notre Mission</h2>
        <div className="max-w-4xl p-6 mx-auto text-gray-800 bg-white rounded-lg shadow-lg">
          <p className="mb-6 text-lg leading-relaxed">
            Chez PharmaCare, notre mission est de simplifier l'accès aux soins de santé en vous offrant un service de recherche de médicaments et de pharmacies de garde en temps réel. Nous croyons que tout le monde mérite un accès rapide et fiable aux médicaments dont il a besoin.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            Notre application est conçue pour vous aider à trouver les pharmacies les plus proches, à vérifier la disponibilité des médicaments et à réserver vos commandes en quelques clics. Nous nous engageons à rendre la gestion de votre santé plus simple et plus accessible.
          </p>
          <p className="text-lg leading-relaxed">
            Ensemble, nous pouvons améliorer la qualité de vie de millions de personnes en leur offrant un accès rapide et fiable aux soins de santé.
          </p>
        </div>

        {/* Sections visuelles */}
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
          {/* Section 1 : Sécurité */}
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <ShieldCheck className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="mb-2 text-xl font-bold text-gray-800">Sécurité</h3>
            <p className="text-gray-600">
              Nous garantissons la sécurité de vos données et de vos transactions.
            </p>
          </div>

          {/* Section 2 : Bien-être */}
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <Heart className="w-16 h-16 mx-auto mb-4 text-red-600" />
            <h3 className="mb-2 text-xl font-bold text-gray-800">Bien-être</h3>
            <p className="text-gray-600">
              Nous nous engageons à promouvoir votre bien-être en vous offrant un accès facile aux médicaments.
            </p>
          </div>

          {/* Section 3 : Communauté */}
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <Users className="w-16 h-16 mx-auto mb-4 text-green-600" />
            <h3 className="mb-2 text-xl font-bold text-gray-800">Communauté</h3>
            <p className="text-gray-600">
              Nous croyons en la force d'une communauté solidaire et bien informée.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMissionPage;
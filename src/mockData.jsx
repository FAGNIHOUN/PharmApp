// mockData.js
export const mockPharmacies = [

  {
    id: 9,
    name: "Pharmacie du Soleil",
    address: "Rue du Général, Parakou",
    distance: 5.5,
    isOnCall: false,
    medicines: ["Ibuprofène", "Ceftriaxone", "Amoxicilline", "Fluoxétine"],
    coordinates: [9.348788, 2.635102], // Simulée
  },
  {
    id: 10,
    name: "Pharmacie Anjou",
    address: "Quartier des Eaux-Vives, Cotonou",
    distance: 3.0,
    isOnCall: true,
    medicines: ["Paracétamol", "Ranitidine", "Oméprazole"],
    coordinates: [6.358115, 2.429265], // Simulée
  },
  {
    id: 11,
    name: "Pharmacie Belle-Vue",
    address: "Avenue Patrice Lumumba, Porto-Novo",
    distance: 1.6,
    isOnCall: false,
    medicines: ["Paracétamol", "Ibuprofène", "Amoxicilline"],
    coordinates: [6.486398, 2.615309], // Simulée
  },
  {
    id: 12,
    name: "Pharmacie de l'Océan",
    address: "Quartier Cotonou-Port, Cotonou",
    distance: 2.8,
    isOnCall: true,
    medicines: ["Ibuprofène", "Métronidazole", "Paracétamol"],
    coordinates: [6.359441, 2.388235], // Simulée
  },
  {
    id: 13,
    name: "Pharmacie Kossi",
    address: "Avenue de la République, Djougou",
    distance: 7.3,
    isOnCall: false,
    medicines: ["Fluoxétine", "Amoxicilline", "Paracétamol", "Métronidazole"],
    coordinates: [10.264577, 2.618301], // Simulée
  },
  {
    id: 14,
    name: "Pharmacie Christ-Roi",
    address: "Quartier Cadjèhoun, Cotonou",
    distance: 1.1,
    isOnCall: false,
    medicines: ["Ibuprofène", "Paracétamol", "Amoxicilline"],
    coordinates: [6.378865, 2.402178], // Simulée
  },
  {
    id: 15,
    name: "Pharmacie Cotonou-Santé",
    address: "Avenue de la Santé, Cotonou",
    distance: 2.3,
    isOnCall: true,
    medicines: ["Métronidazole", "Ceftriaxone", "Amoxicilline"],
    coordinates: [6.379299, 2.381099], // Simulée
  },
  {
    id: 16,
    name: "Pharmacie Le Bonheur",
    address: "Rue des Noyers, Cotonou",
    distance: 4.1,
    isOnCall: true,
    medicines: ["Paracétamol", "Ibuprofène", "Oméprazole"],
    coordinates: [6.377003, 2.388417], // Simulée
  },
  {
    id: 17,
    name: "Pharmacie de la Grâce",
    address: "Rue des Orangers, Porto-Novo",
    distance: 3.2,
    isOnCall: true,
    medicines: ["Paracétamol", "Métronidazole", "Oméprazole"],
    coordinates: [6.490310, 2.634309], // Simulée
  },
  {
    id: 18,
    name: "Pharmacie Kpédokpo",
    address: "Quartier Agontikon, Abomey-Calavi",
    distance: 2.7,
    isOnCall: false,
    medicines: ["Paracétamol", "Fluoxétine", "Ceftriaxone"],
    coordinates: [6.469339, 2.353000], // Simulée
  },
  {
    id: 19,
    name: "Pharmacie Tokpa",
    address: "Quartier Tokpa, Cotonou",
    distance: 3.9,
    isOnCall: true,
    medicines: ["Ibuprofène", "Métronidazole", "Paracétamol"],
    coordinates: [6.367127, 2.389599], // Simulée
  },
  {
    id: 20,
    name: "Pharmacie de la Santé",
    address: "Avenue des Eaux-Vives, Cotonou",
    distance: 5.2,
    isOnCall: false,
    medicines: ["Amoxicilline", "Métronidazole", "Ibuprofène", "Paracétamol"],
    coordinates: [6.364713, 2.384602], // Simulée
  },
  // Continuez à ajouter jusqu'à 30 pharmacies en suivant la même structure...
];

export const mockMedicines = [
  "Paracétamol",
  "Ibuprofène",
  "Amoxicilline",
  "Ceftriaxone",
  "Métronidazole",
  "Fluoxétine",
  "Oméprazole",
  "Ranitidine",
  "Lorazépam",
  "Alprazolam",
  "Doxycycline",
  "Azithromycine",
  "Loratadine",
  "Aspirine",
  "Tétracycline",
  "Ciprofloxacine",
  "Levodopa",
  "Antibiotique",
  "Benzodiazépines",
  "Metformine",
  "Insuline",
  "Sulfaméthoxazole",
  "Diphenhydramine",
  "Lisdexamfetamine",
  "Calcium",
  "Vitamine D",
  "Lévothyroxine",
  "Oméprazole",
  "Diclofénac",
  "Betaméthasone",
  "Amoxicilline + Acide clavulanique",
  "Paracétamol + Codéine",
  "Bupropion",
  "Hydrochlorothiazide",
  "Tramadol",
  "Buspirone",
  "Prazosin",
  "Antihistaminique",
  "Acide folique",
  "Carbamazépine",
  "Médicament contre le paludisme",
  "Sulfate de magnésium",
  "Ferroprénom",
  "Fluconazole",
  "Imipramine",
  "Médicaments cardiovasculaires",
  "Anticorps monoclonaux",
  "Propranolol",
  "Losartan",
  "Metronidazole + Tinidazole",
  "Nimesulide",
  "Piroxicam",
  "Sertraline",
  "Héparine",
  "Sildenafil",
  "Tamoxifène",
  "Hydroxychloroquine",
  "Médicament contre la tuberculose",
  "Ondansétron",
  "Baclofène",
  "Fluoxétine + Amitriptyline",
  "Amiloride",
  "Dexaméthasone",
  "Sodium bicarbonate",
  "Calcipotriol",
  "Corticoïdes",
  "Rifampicine",
  "Médicaments anti-inflammatoires non stéroïdiens (AINS)",
  "Calmeurs de toux",
  "Antipyrétiques",
  "Médicament contre l'eczéma",
  "Benzocaïne",
  "Méthadone",
  "Halopéridol",
  "Clindamycine",
  "Paroxétine",
  "Hydrocortisone",
  "Améthystine",
  "Benzéthine",
  "Gaba",
  "Lamotrigine",
  "Isoprénaline",
  "Doxazosine",
  "Kétoprofène",
  "Pantoprazole",
  "Ciprofloxacine + Doxycycline",
  "Prophénazone",
  "Métoclopramide",
  "Doxylamine",
  "Médicaments pour le diabète",
  "Insuline humaine",
  "Oméprazole + Almagate",
  "Levocetirizine",
  "Bromocriptine",
  "Atorvastatine",
  "Acétonide",
  "Disulfirame",
  "Clorazépate",
  "Oxybutynine",
  "Fluorométholone",
  "Médicaments antidiabétiques",
  "Chlorpromazine",
  "Procaïnamide",
  "Tamsulosine",
  "Chlorhydrate de doxycycline",
  "Xylocaine",
  "Sulfate de quinine",
  "Cefalexine",
  "Chlorhydraté de métoclopramide",
  "Clorhydrate de codéine",
  "Médicaments contre les infections urinaires",
  "Ciclosporine",
  "Kétamine",
  "Médicaments contre la dépression",
  "Lévamisole",
  "Immunosuppresseurs",
  "Indométacine",
  "Diazépam",
  "Doxycycline",
];

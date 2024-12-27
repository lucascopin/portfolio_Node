import datas from './projets'; // Importer la fonction `datas`

export default function Projets() {
    const projets = datas(); // Récupérer les projets

    return (
        <div className="p-6 min-h-screen text-center">
            <h1 className="text-2xl font-bold mb-6 text-blue-500">Projets</h1>
            <div className="space-y-6">
                {projets.map((projet, index) => (
                    <div
                        key={index}
                        className="bg-blue-950 rounded-lg p-6"
                    >
                        <h2 className="text-2xl font-semibold text-blue-500">{projet.nom}</h2>
                        <p className="mt-2 text-white text-xl">{projet.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
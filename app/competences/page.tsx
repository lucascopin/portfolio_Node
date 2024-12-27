import datas from './competences'; // Importer la fonction `datas`

export default function Competences() {
    const competences = datas(); // Récupérer les compétences

    return (
        <div className="flex flex-col items-center p-6 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-blue-500">Compétences</h1>
            <p className={"text-center text-xl mb-4"}>J'ai pu avec ma formation améliorer mes compétences en Front-end, mais aussi en Back-end. Nous apprenons à être polyvalent et le plus coopératif possible.</p>
            <ul className="w-3/4">
                {competences.map((competence, index) => (
                    <li key={index} className={"mb-10"}>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-blue-500 font-medium">{competence.nom}</span>
                            <span className="text-blue-500 text-sm">{competence.pourcentage}%</span>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-6">
                            <div
                                className="bg-blue-500 h-6 rounded-full transition-all duration-500 ease-in-out"
                                style={{ width: `${competence.pourcentage}%` }}
                            ></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
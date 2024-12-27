export default function Competences() {

    return (
        <div className="p-6 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-blue-500 mb-6">Mes coordonnées</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <span className="font-medium text-gray-700 w-24">Téléphone:</span>
                        <a
                            href="tel:+33612345678"
                            className="text-blue-500 hover:underline"
                        >
                            +33 6 68 92 18 52
                        </a>
                    </li>
                    <li className="flex items-center">
                        <span className="font-medium text-gray-700 w-24">E-mail:</span>
                        <a
                            href="mailto:lucascopin0@gmail.com"
                            className="text-blue-500 hover:underline"
                        >
                            lucascopin0@gmail.com
                        </a>
                    </li>
                    <li className="flex items-center">
                        <span className="font-medium text-gray-700 w-24">LinkedIn:</span>
                        <a
                            href="https://www.linkedin.com/in/lucas-copin-888141264/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Mon profil
                        </a>
                    </li>
                </ul>
                <div className="mt-6 flex justify-center">
                    <a
                        href="/CV_Lucas_Copin.pdf"
                        download
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
                    >
                        Télécharger mon CV
                    </a>
                </div>
            </div>
        </div>
    );
}

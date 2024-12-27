interface Competences {
    nom:string;
    pourcentage:number;
}

export default function datas(): Competences[]{
    return [
        {nom:"Front-end : HTML/CSS/Javascript",pourcentage: 91},
        {nom:"Back-end : Python/Java/PHP",pourcentage: 86},
        {nom:"Base de données : SQL/MongoDB/Neo4j",pourcentage: 74},
        {nom:"Système d'exploitation : bash/Linux/MacOS",pourcentage: 60},
        {nom:"Outils : Git/JetBrain/Visual Studio Code",pourcentage: 90},
    ]
}
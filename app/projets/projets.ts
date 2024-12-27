interface Projets {
    nom:string;
    description:string;
}

export default function datas(): Projets[]{
    return [
        {nom:"Site de l'Association des Naturalistes de la Gohelle",description: "Refonte complète du site web de l’Association des Naturalistes de la Gohelle en Laravel durant mon stage de deuxième année de BUT Informatique."},
        {nom:"Watif",description: "Watif est un projet d'étude que nous avons conçu de A à Z. Dans une équipe de 5 développeurs, nous avons imaginé les fondements de l'application jusqu'à l'imagination d'une entreprise fictive. C'est un réseau social qui permet aux utilisateurs d'imaginer et de discuter à propos de différents scénarios des évenements fictifs ou réels. L'application tourne grâce à une API Spring et une API python pour la recommendation des posts ou de profils et une application React qui occupe le côté client"},
        {nom:"JO 2024",description: "Ce projet a été codé en PHP avec le framework Laravel, c'est un site qui stocke des informations sur différents sports des Jeux Olympiques de Paris, les utilisateurs peuvent modifier, effacer ou créer des données."},
        {nom:"Ray Tracing en Java",description: "C'est un lanceur de rayon fait en Java qui calcule une scène avec des instructions via un fichier .txt et la transverse sur un fichier photo. Nous avons énormément utilisé Git."},
        {nom:"Leaderbord en Python/HTLM/CSS",description: "Je dirige un club de poker et j'ai réfléchi à un moyen de mettre tous les membres en compétition. C'est comme ça que le leaderboard a été créé ! Grâce à un algorithme de tri python qui édite également un fichier HTML, les membres peuvent voir leur place dans le classement mais aussi leurs performances."},
        {nom:"Flatcraft",description: "Ce jeu inspiré d'un mélange de Minecraft et Terraria est un jeu en 2D où le but est de survivre, détruire et (re)construire. Il a été programmé en Java avec une forte utilisation de Git."},
        {nom:"Bookshelf",description: "Bookshelf est un site d'histoires interactif qui a été codé en PHP avec le framework Laravel. Git a énormément été utilisé car c'est le plus gros projet de groupe que nous avons eu à faire: il y avait en tous 9 membres, tous avec un rôle précis."},
        {nom:"Pokédex",description: "Ce Pokedex est directement tiré de l'API Anglaise de Pokémon. Ce site est un programme Python/Flask, il y a aussi du HTML/CSS."},
        {nom:"Space Invader",description: "J'ai pu concevoir un remake du pionnier des jeux vidéos : Space Invaders. Programmée avec Java Fx, cette application défie les joueurs. Il n'y a qu'un objectif : protéger la planète d'une invasion alien imminente."},
    ]
}
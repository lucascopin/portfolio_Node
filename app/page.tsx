import Image from "next/image";

export default function Home() {
    const imageStyle = {
        borderRadius: "100%",
        marginTop: "3em"
    };

    const iutStyle = {
        borderRadius: "25px",
    }
  return (
      <div className="flex flex-col justify-center items-center text-center">
          <Image src={"/photo.jpg"} alt={"Photo Lucas"} width={200} height={200} style={imageStyle}></Image>
        <p className={"m-3"}>Je suis un étudiant en 3ème année de BUT Informatique à l&apos;IUT de Lens.</p>
          <Image src={"/iutLens.jpeg"} alt={"Photo Lucas"} width={300} height={200} style={iutStyle}></Image>
          <p className={"m-3"}>On dit de moi que je suis quelqu&apos;un de très vivant et très souriant. Je m&apos;applique énormément dans mes passions pour l&apos;informatique, le football, les jeux vidéo et le badminton.</p>
        <p className={"m-3"}>Je suis actuellement à la recherche d&apos;un stage, étant disponible dans les secteurs de Lens, Lille, Béthune, Arras et Bruay-la-Buissière.</p>
      </div>
  );
}

import Link from "next/link";

export default function Nav() {
    return(
    <div className={"w-full h-14"}>
        <div className={"flex items-center rounded-xl bg-blue-950 w-full h-full p-1"}>
            <Link key={"a_propos"} href={"/"} className={"flex items-center justify-center w-1/4 h-full transition hover:text-blue-500 hover:border-b-2 border-blue-500"}>A propos</Link>
            <Link key={"competences"} href={"/competences"}className={"flex items-center justify-center w-1/4 h-full transition hover:text-blue-500 hover:border-b-2 border-blue-500"}>Compétences</Link>
            <Link key={"projets"} href={"/projets"}className={"flex items-center justify-center w-1/4 h-full transition hover:text-blue-500 hover:border-b-2 border-blue-500"}>Projets</Link>
            <Link key={"contact"} href={"/contact"}className={"flex items-center justify-center w-1/4 h-full transition hover:text-blue-500 hover:border-b-2 border-blue-500"}>Contacts</Link>
        </div>
    </div>
    )
}
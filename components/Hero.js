"use client"
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router=useRouter();
  const handleNavigateClick = () => {
    router.push("/shop"); // Ziel für den Button-Klick
  };

  return (
    <div className="
    bg-[#85193C]  {/* KORREKTUR: Beliebiger Wert braucht [] */}
    bg-gradient-to-r from-black via-red-600 to-yellow-500
    text-white
    py-5
    px-4
    /* text-center wurde entfernt, da die Nav links sein soll */
    ">

      {/* --- Anpassungen hier in <nav> --- */}
      <nav className="container
        mx-auto         {/* Zentriert die Navigationsleiste */}
        flex             {/* Aktiviert Flexbox */}
        items-center     {/* Zentriert Elemente vertikal */}
        justify-start    {/* Startet Elemente links (Korrekt) */}
        gap-x-8          {/* NEU: Fügt Abstand zwischen Titel und Link-Liste hinzu */}
        /* mb-16 entfernt oder reduziert, falls zu viel Abstand nach unten */
        /* ml-10 entfernt, container mx-auto sollte reichen */
        px-4 md:px-0    {/* Evtl. Padding für kleinere Screens */}
      ">
        {/* Titel */}
        <div className="
          text-2xl
          font-bold
          whitespace-nowrap /* Verhindert Umbruch des Titels */
        ">
            DEIN FREIER MUSIK STREAMINGDIENST
        </div>

        {/* Link-Liste direkt als Kind von nav */}
        {/* Der unnötige div-Wrapper wurde entfernt */}
        <ul className="flex space-x-6 text-2xl"> {/* space-x-6 für Abstand ZWISCHEN den Links */}
          <li>
             {/* EMPFEHLUNG: Auch hier Link verwenden, wenn es eine interne Seite ist */}
            <Link href="/shop" legacyBehavior>
              <a className="
                hover:text-blue-500
                transition-colors
                duration-150"
              >
                SHOP
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ueber-uns" legacyBehavior>
              <a className="
                hover:text-blue-500
                transition-colors
                duration-150
              ">
                ÜBER UNS
              </a>
            </Link>
          </li>
          <li>
            <Link href="/kontakt" legacyBehavior>
              <a className="
                hover:text-blue-500
                transition-colors
                duration-150
              ">
                KONTAKT
              </a>
            </Link>
          </li>
        </ul>
        {/* Ende der Link-Liste */}
      </nav>
      {/* --- Ende der <nav> Anpassungen --- */}


      {/* Hero Content */}
      <div className="text-center pt-16"> {/* Etwas Abstand nach oben für den Inhalt */}
        <h1 className="
          text-8xl
          md:text-5xl /* md:text-5xl ist kleiner als 8xl, vielleicht umgekehrt? */
          font-bold
          mb-4
          text-yellow-500
          rounded-full
          px-7
          py-12
          mx-auto /* Zentriert die H1, wenn sie eine feste Breite hätte, oder nutze text-center auf parent */
          max-w-3xl /* Beispiel: Begrenze Breite und zentriere mit mx-auto */
          /* ml-170, mr-170 sind ungültig -> nutze mx-auto oder Padding/Margin */
          bg-gradient-to-r from-black to-red-600
        ">
          AEQUITAS VERITAS
        </h1>
        <p className="text-lg
          md:text-4xl
          mb-8
          max-w-2xl
          mx-auto
          text-white /* KORREKTUR: text-white statt text-white-500 */
          font-bold">
          KUNST, IST DIE FREIHEIT ALLES ZU SAGEN
        </p>
        <Button
          buttonText="JETZT STREAMEN4FREE"
          onClickHandler={handleNavigateClick}
        />
      </div>
    </div>
  );
}

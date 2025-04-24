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

      <nav className="container
        mx-auto         {/* Zentriert die Navigationsleiste */}
        flex             {/* Aktiviert Flexbox */}
        items-center     {/* Zentriert Elemente vertikal */}
        /* justify-between oder justify-start entfernt */
        px-4 md:px-0    {/* Padding für kleinere Screens */}
        h-16             {/* Beispiel: Feste Höhe für die Navigationsleiste */}
      ">
        {/* Titel (bleibt links) */}
        <div className="
          text-2xl
          font-bold
          whitespace-nowrap
        ">
            DEIN FREIER MUSIK STREAMINGDIENST
        </div>

        {/* Link-Liste: ml-auto hinzugefügt */}
        <ul className="flex space-x-6 text-2xl ml-auto"> {/* NEU: ml-auto hinzugefügt */}
          <li>
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

      {/* Hero Content (zentriert) */}
      <div className="text-center pt-16"> {/* Abstand nach oben */}
         {/* ... Rest des Hero-Inhalts ... */}
         <h1 className="
          text-8xl
          md:text-5xl
          font-bold
          mb-4
          text-yellow-500
          rounded-full
          px-7
          py-12
          mx-auto
          max-w-3xl
          bg-gradient-to-r from-black to-red-600
        ">
          AEQUITAS VERITAS
        </h1>
        <p className="text-lg
          md:text-4xl
          mb-8
          max-w-2xl
          mx-auto
          text-white
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

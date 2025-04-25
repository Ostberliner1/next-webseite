"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="
      
   mx-auto px-4 relative z-10
        bg-white
                             /* Vertikales Padding beibehalten */
           /* --- Hintergrundbild-Klassen für DIESE Sektion --- */
           bg-[url('/aequitas.jpeg')] /* Pfad zu deinem spezifischen Bild */
           
           bg-center                 /* Bild zentrieren */
           bg-repeat              /* Nicht kacheln */
    
    
    text-center
    
    
    
    "
    >
      <div
        className="
      text-4xl
      text-red-400
        grid
        grid-cols-1
        md:grid-cols-5
          gap-8
          py-20
          px-3
      "
      >
        <iframe
          className="
        "
          width="300"
          height="300"
          src="https://www.youtube.com/embed/effqopL8SnM"
          title="K.I.Z. - Spasst (Official Video)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="
        "
          width="300"
          height="300"
          src="https://www.youtube.com/embed/mWczgMuqCEU"
          title="Keine Amnestie für MTV"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/XKHSfwZOdDk"
          title="Sido - Arschficksong [Aggro Berlin Ansage Nr.1] ORIGINAL"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/ciSgpukRTp8"
          title="Bass Sultan Hengzt Berliner Schnauze (Officail Video!!)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/LtQBFy3u0BE"
          title="BASS SULTAN HENGZT HALT DIE FRESSE 01 NR. 08 (OFFICIAL VERSION AGGROTV)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="
        
        "
          width="300"
          height="300"
          src="https://www.youtube.com/embed/g9-zUnmmYHw"
          title="Kool Savas, AZAD - All 4 One (Videoclip)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <br />
        <iframe className="
        
        
        
        
        "
          width="300"
          height="300"
          src="https://www.youtube.com/embed/J2CbalASVH8"
          title="Sleipnir   Wunderbare Jahre"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <Link
        className="
        text-blue-600
        text-xl
        py-12
        "
        href="/"
        prefetch={false}
      >
        {" "}
        Zurück zur Startseite
      </Link>

      <div
        className="
      
      
      "
      >
        <Footer />
      </div>
    </div>
  );
}

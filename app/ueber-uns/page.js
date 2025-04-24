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
      "
      >
        <Image
          className="
        mx-auto
        py-12
        "
          src="/grenze.jpg"
          width={500}
          height={500}
        />
        <div className="
        bg-gradient-to-r from-black to-red-600
        rounded-full
        text-yellow-500
        py-20
        px-20
        ml-200
        mr-200">
        <h1
          className="
        "
        >
          Streaming ohne deutsche Grenzen
        </h1>
        <p>Bist du Älter als 18?</p>
        <p>Dann bist du hier genau richtig</p>
        <br />
        </div>
      </div>

      <Link
        className="
        text-blue-600
        text-xl
        
        "
        href="/"
        prefetch={false}
      >
        {" "}
        Zurück zur Startseite
      </Link>

      <Footer />
    </div>
  );
}

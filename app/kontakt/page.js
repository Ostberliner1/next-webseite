"use client";

import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="
    mx-auto px-4 relative z-10
        bg-white
                             /* Vertikales Padding beibehalten */
           /* --- Hintergrundbild-Klassen für DIESE Sektion --- */
           bg-[url('/aequitas.jpeg')] /* Pfad zu deinem spezifischen Bild */
           
           bg-center                 /* Bild zentrieren */
           bg-repeat              /* Nicht kacheln */
    
    
    text-center
    pt-20
    
    
    
    
    ">
      <div className="
      text-3xl
      py-20
      mr-130
      ml-130
      bg-red-500
      rounded-full">
        <h1 className="
        text-black">Kontakt: karl-friedrich@asshole.com</h1>
        <br />
        

        <form className="
        
       ">
          <lable className="
          text-yellow-500
          " 
          for="fname">Vorname:</lable>
          <br />
          
          <input type="text" id="fname name="fname placeholder="Dein Name" className="
            bg-white          // <-- HIER: Setzt den Hintergrund auf Weiß
            p-2               // Padding innen
            border            // Fügt einen Standard-Rand hinzu
            border-gray-400   // Setzt die Farbe des Randes auf Grau
            rounded           // Macht die Ecken leicht rund
            text-black        // <-- WICHTIG: Stelle sicher, dass die Textfarbe dunkel ist!
            text-center
          ">
          </input>
          <br />
          <br />
          <label for="text" className="
          text-yellow-500
          ">Schreib uns eine Mail:</label>
          <br />
          <input type="text" placeholder="Schreibe uns hier" className="
          bg-white          
            p-2               
            border            
            border-gray-400   
            rounded           
            text-black
            px-12
            py-20
            text-l
            text-center
            ">
            </input>
            <br />
            <br />
            <button className="
            bg-gradient-to-r from-green-800 to red-500
            hover:to-yellow-500
            border-black-1000
            shadow-2xl
            animate-bounce
            
            " type="submit">Senden</button>
            <br />
            <br />
          <Link className="
                  text-blue-600
                  text-4xl
                  py-1
                  " 
                  href="/"> Zurück zur Startseite</Link>
        </form>
      </div>
      <div className="
      pb-0
      py-20
      
      ">
      <Footer />
      </div>
    </div>
  );
}


            


     
    
      




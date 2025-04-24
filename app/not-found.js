import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
      <div className="
      text-center
      text-6xl
      bg-white
      text-black
      py-10
      px-10
      font-black

      ">
        <h1> 404 Seite nicht gefunden</h1>
        <p className="
        mt-4">Geh weg Kackvogel</p>
        <br />

        <img className="mx-auto" src="https://images.seeklogo.com/logo-png/53/1/scarface-logo-png_seeklogo-535589.png"
        width={800}
        ></img>

        <Link className="
        text-blue-600
        text-xl
        " 
        href="/"> Zurück zur Startseite</Link>

        
  
  
      </div>
    );
  }
  
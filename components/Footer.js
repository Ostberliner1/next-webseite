function Footer() {
  const currentYear = new Date().getFullYear();  //Aktuelles Jahr ermitteln
  return (
    <footer
      className="
    bg-black
    text-gray-300
    py-6
    px-5
    
    "
    >
      <div
        className="container
    mx-auto
    text-center
    "
      >
        <p>{currentYear} Schnellern App. Alle Rechte vorbehalten </p>
        
      </div>
      
    </footer>
  );
}

export default Footer;

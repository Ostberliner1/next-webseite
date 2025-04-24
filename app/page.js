// "use client";

import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <Hero />
      <section width={7}
          height={7}
        className="
       mx-auto px-4 relative z-10
        bg-white
        py-16                     /* Vertikales Padding beibehalten */
           /* --- Hintergrundbild-Klassen für DIESE Sektion --- */
           bg-[url('/aequitas.jpeg')] /* Pfad zu deinem spezifischen Bild */
           
           bg-center                 /* Bild zentrieren */
           bg-repeat              /* Nicht kacheln */
    

      
      "
      >

        <div
          className="container
        mx-auto
        px-4
        "
        >
          <h2
            className="
          text-6xl
          font-bold
          text-center
          mb-12
          text-yellow-900
          hover:text-red-800
          bg-white
          "
          >
            Unsere Top Features
          </h2>
          <div
            className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          
          "
          >
            <FeatureCard
              title="ROCK, METAL"
              description="FÜR DIE ROCK'N ROLLER UNTER EUCH."
            />
            <FeatureCard title="HIP HOP, RAP" description="MUSIK VON DER STRASSE." />
            <FeatureCard title="R&B, REGGAE, SOUL" description="R&B." />
          
          </div>
          <div></div>
          <Search />
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client"
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router=useRouter();
  const handleNavigateClick = () => {
    router.push("/shop");
  };

  return (
    <div className="
    bg-#85193C
    bg-gradient-to-r from-black via-red-600 to-yellow-500
    text-white
    py-5
    px-4 
    text-center
    ">
      
      

      <nav className="container
      mx-auto flex
      justify-start
      items-center
      mb-16
      ml-10
      
      
      ">
        <div className="
        text-2xl
        font-bold
        
        ">
            DEIN FREIER MUSIK STREAMINGDIENST
        </div>

        <div className="mr-100">
          <ul className="flex space-x-6 text-2xl">
          <li>
            <a
              href="/shop"
              className="
              hover:text-blue-500
              transition-colors
              duration-150"
            >
              SHOP
            </a>
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
        </div>
      </nav>

      <div className="text-center">
        <h1 className="
        text-8xl
        md:text-5xl
        font-bold
        mb-4
        text-yellow-500
        
        rounded-full
        px-7
        py-12
        ml-170
        mr-170
        bg-gradient-to-r from-black to-red-600
        ">
          AEQUITAS VERITAS
        </h1>
        <p className="text-lg
        md:text-4xl
        mb-8
        max-w-2xl
        mx-auto
        text-white-500
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



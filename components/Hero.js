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
      justify-between
      items-center
      mb-16
      ">
        <div className="
        text-2xl()
        font-bold
        ">
            DEIN MUSIK STREAMINGDIENST
        </div>

        <ul className="flex space-x-6">
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
      </nav>

      <div className="text-center">
        <h1 className="
        text-4xl
        md:text-5xl
        font-bold
        mb-4
        text-yellow-500
        ">
          KOSTENLOSE MUSIK
        </h1>
        <p className="text-lg
        md:text-xl
        mb-8
        max-w-2xl
        mx-auto
        text-red-500">
          MUSIK-REVOLUTION
        </p>
        <Button
          buttonText="JETZT STREAMEN4FREE"
          onClickHandler={handleNavigateClick}
        />
      </div>
    </div>
  );
}



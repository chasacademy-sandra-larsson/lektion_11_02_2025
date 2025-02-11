import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

         <h1>Landing page</h1>

          {/* Länka mellan sidor - <LINK> optimerar sidladdning*/}
         <Link href="/signin">Logga in</Link>

      </div>
   
    </main>
  );
}

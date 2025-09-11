import Image from "next/image";
import { Cairo_Play } from "next/font/google";
import AnimatedName from "./components/nameCycle";
import Link from "next/link";

  const cairo = Cairo_Play({
  subsets: ["latin"],
  variable: "--font-cario", // allows Tailwind integration
  weight: ["700"], // pick weights you want
  //display: "swap",
});

export default function Home() {

  return (
    <main >
      <header>

      </header>
      <div className="flex-row text-center w-2 h-24 bg-yellow-600 mb-14">
      <h1 className={`${cairo.className} text-3xl p-4 `}>Lorrell Winfield.</h1>
     </div>
      < AnimatedName/>

        <div className="grid grid-cols-5 gap-4 col-start-3 place-items-center p-10">
        <Link className="col-span-1 col-start-3" href={""}>about Me</Link>
        <Link className="col-span-1 col-start-3" href={""}>projects</Link>
        <Link className="col-span-1 col-start-3" href={""}>Contact</Link>
        </div>

    </main>
  );
}

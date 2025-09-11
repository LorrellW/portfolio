import Image from "next/image";
import AnimatedName from "./components/nameCycle";


export default function Home() {



  return (
    <div >
      <h1 className="text-2xl font-sans p-6 pb-20">Lorrell Winfield.</h1>
      <AnimatedName/>
    </div>
  );
}

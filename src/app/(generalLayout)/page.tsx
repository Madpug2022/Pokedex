import logo from "@/assets/logos/POKEMON01.webp";
import PokeDisplay from "@/components/PokeDisplay";
import Image from "next/image";

export default function HomePage() {

  return (
    <div className="h-full w-full flex flex-col items-center justify-start p-10">
      <Image src={logo} alt="Pokemon logo" />
      <PokeDisplay />
    </div>
  );
}

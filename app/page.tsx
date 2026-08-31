import Image from "next/image";
import Maintainance from "./assets/images/maintainance.png";
export default function Home() {
  return (
    <div>
      <main>
        <Image
          src={Maintainance}
          alt="Maintainance"
          layout="responsive"
        />
        
      </main>
    </div>
  );
}

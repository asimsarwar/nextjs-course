import Image from "next/image";
import vercelLogo from "../public/vercel.svg";

export default function Home() {
  console.log(vercelLogo);

  return (
    <main>
      <h1>Image optimization in Next.js</h1>
      <Image src={vercelLogo} alt="Vercel Logo" />

      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-iR1g2lKXA5_lctyFSO2V3ZbgE4Ovr4oYbE3JXZqZw&s"
        alt="nature image"
        width={1800}
        height={1800}
      />
    </main>
  );
}

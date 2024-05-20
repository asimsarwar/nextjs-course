import "./style.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "900" });

export default function Home() {
  return (
    <main>
      <h1>Using Google Fonts</h1>
      <main className={roboto.className}>Hello Google Font</main>
    </main>
  );
}

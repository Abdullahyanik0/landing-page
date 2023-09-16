import Landing1 from "components/landing/Landing1";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Landing1 />
    </div>
  );
}

import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import { Footer } from "react-day-picker";

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Featured />
      <Footer />
    </div>
  );
}

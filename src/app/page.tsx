import Featured from "@/components/featured";
import Header from "@/components/header";
import Landing from "@/components/landing";
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

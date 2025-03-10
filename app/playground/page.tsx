import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import HeaderSection from "@/app/components/sections/Header";
import CommiteeSection from "../components/sections/Commitee";
import Commitee from "../components/sections/Commitee";

export default function Playground() {
  return (
    <main className="flex flex-col items-center">
      <Nav />
      <div className="max-w-[1200px]">
        <HeaderSection></HeaderSection>
        <Commitee></Commitee>
      </div>
      <Footer />
    </main>
  );
}

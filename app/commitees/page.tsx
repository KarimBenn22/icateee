import ChairsSection from "@/app/components/sections/Chairs";
import CommitteeSection from "@/app/components/sections/Commitee";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function CommiteesPage() {
  return (
    <main className="flex flex-col items-center">
      <Nav />
      <ChairsSection></ChairsSection>
      <CommitteeSection></CommitteeSection>
      <Footer />
    </main>
  );
}

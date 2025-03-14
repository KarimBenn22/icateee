import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import HeaderSection from "@/app/components/sections/Header";
import RegistrationSection from "../components/sections/Registration";
import ImportantDatesSection from "../components/sections/ImportantDates";
import OriginizingCommitee from "../components/sections/OrginizingCommittee";
import Topics from "../components/sections/topics";

export default function Playground() {
  return (
    <main className="flex flex-col items-center">
      <Nav />
      <HeaderSection />
      <div className="max-w-6xl">
        <Topics />
        <ImportantDatesSection />
        <RegistrationSection />
        <OriginizingCommitee />
      </div>
      <Footer />
    </main>
  );
}

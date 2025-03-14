import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import HeaderSection from "@/app/components/sections/Header";
import RegistrationSection from "../components/sections/Registration";
import ImportantDatesSection from "../components/sections/ImportantDates";
import ConferenceParticipants from "../components/sections/ConferenceParticipants";
import Topics from "../components/sections/topics";
import { SponsorsSection } from "../components/sections/sponsors";
import { SpeakersSection } from "../components/sections/speakers";

export default function Playground() {
  return (
    <main className="flex flex-col items-center">
      <Nav />
      <HeaderSection />
      <div className="max-w-6xl">
        <Topics />
        <ImportantDatesSection />
        <RegistrationSection />
        <SponsorsSection />
        <SpeakersSection></SpeakersSection>
      </div>
      <Footer />
    </main>
  );
}

import HeaderSection from "@/app/components/sections/Header";
import  Topics from "./components/sections/topics";
import ImportantDatesSection from "./components/sections/ImportantDates";
import RegistrationSection from "./components/sections/Registration";
import { SponsorsSection } from "./components/sections/sponsors";
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeaderSection />
      <div className="max-w-6xl">
        <Topics />
        <ImportantDatesSection />
        <RegistrationSection />
        <SponsorsSection />
      </div>
    </main>
  );
}

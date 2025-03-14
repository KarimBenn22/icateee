import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import HeaderSection from "@/app/components/sections/Header";
import RegistrationSection from "../components/sections/Registration";
import ImportantDatesSection from "../components/sections/ImportantDates";

export default function Playground() {
  return (
    <main className="flex flex-col items-center">
      <Nav />
        <HeaderSection/>
        <ImportantDatesSection/>
        <RegistrationSection/>
      <Footer />
    </main>
  );
}

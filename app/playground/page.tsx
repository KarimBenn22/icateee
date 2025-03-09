import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import HeaderSection from "@/app/components/sections/Header";
export default function Playground() {
  return (
    <main className="flex flex-col items-center">
      <Nav />
      <div className="max-w-[1200px]">
        <HeaderSection></HeaderSection>
      </div>
      <Footer />
    </main>
  );
}

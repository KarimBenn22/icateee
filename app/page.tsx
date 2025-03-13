import Nav from "@/app/components/Nav";
import HeaderSection from "@/app/components/sections/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
      <main className="flex flex-col items-center">
        <Nav />
        <div className="max-w-[1200px]">
        </div>
        <Footer />
      </main>
  );
}

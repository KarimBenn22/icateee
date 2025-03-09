import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
export default function Playground() {
  return (
    <main className="flex flex-col w-screen h-screen">
      <Nav/>
      <div className="h-96"></div>
      <Footer />
    </main>
  );
}

import Footer from "../components/Footer";
import Nav from "../components/Nav";
export default function RegistrationPage() {
  return (
    <main className="flex flex-col items-center">
      <Nav />

      <main className="h-[80vh] text-black">
        <div className="container mx-auto px-4 py-12 max-w-4xl mt-40">
          <h1 className="text-4xl font-bold mb-4">Speakers</h1>
          <p className="text-lg mb-4">
            The following speakers are confirmed for ICATEEE 2025.
          </p>
        </div>
      </main>
      <Footer />
    </main>
  );
}

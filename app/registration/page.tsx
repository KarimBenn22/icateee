import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Regestratin from "../components/sections/Registration";
export default function RegistrationPage() {
  return (
    <main className="flex flex-col items-center">
      <Nav />
      <Regestratin />
      <div className="mt-8 text-center text-gray-600">
        <p className="mt-2">
          ICATEEE2025 website:{" "}
          <a
            href="https://www.univ-msila.dz/icateee2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://www.univ-msila.dz/icateee2025/
          </a>
        </p>
      </div>
      <Footer />
    </main>
  );
}
